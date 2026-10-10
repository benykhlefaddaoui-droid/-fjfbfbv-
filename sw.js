// Service Worker for Quran Recitation App - Full Offline Support
const STATIC_CACHE = 'quran-static-v2';
const AUDIO_CACHE = 'quran-audio-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Non-fatal asset pre-cache warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== AUDIO_CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Handle Audio Requests (MP3 audio streams from mp3quran.net or local)
  if (url.endsWith('.mp3') || url.includes('mp3quran.net') || url.includes('/audio/')) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            // Serve directly from offline cache
            return cachedResponse;
          }

          // Otherwise fetch from network and cache for future offline play
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // If offline and not in cache, fallback
            return cache.match(event.request);
          });
        });
      })
    );
    return;
  }

  // Handle Static App Assets (Cache First with Network Fallback)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Cache dynamic assets on the fly
        if (response && response.status === 200 && event.request.method === 'GET' && url.startsWith('http')) {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => {
        // Fallback to cached index for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
