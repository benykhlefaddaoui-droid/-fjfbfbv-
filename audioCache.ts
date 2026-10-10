// Offline Audio Cache Manager for Quran Recitations
import { Surah, Reciter } from '../types/quran';
import { getSurahAudioUrl } from '../data/reciters';

const AUDIO_CACHE_NAME = 'quran-audio-cache-v1';

// Check if a Surah is cached offline for a given reciter
export async function isSurahCachedOffline(surahNumber: number, reciter: Reciter): Promise<boolean> {
  if (!('caches' in window)) return false;
  try {
    const cache = await caches.open(AUDIO_CACHE_NAME);
    const audioUrl = getSurahAudioUrl(reciter, surahNumber);
    const match = await cache.match(audioUrl);
    return !!match;
  } catch (err) {
    console.warn('Error checking offline cache:', err);
    return false;
  }
}

// Download and cache a Surah for offline playback
export async function cacheSurahAudio(
  surahNumber: number,
  reciter: Reciter,
  onProgress?: (percent: number) => void
): Promise<boolean> {
  if (!('caches' in window)) return false;
  try {
    const audioUrl = getSurahAudioUrl(reciter, surahNumber);
    const cache = await caches.open(AUDIO_CACHE_NAME);

    // Fetch the audio stream
    const response = await fetch(audioUrl, { mode: 'cors' });
    if (!response.ok) throw new Error('Network response failed');

    // Clone and put into Cache Storage
    await cache.put(audioUrl, response.clone());
    if (onProgress) onProgress(100);
    return true;
  } catch (err) {
    console.error('Failed to cache audio offline:', err);
    return false;
  }
}

// Get an offline-ready URL (either from Cache or live URL)
export async function getPlayableAudioUrl(surahNumber: number, reciter: Reciter): Promise<string> {
  const directUrl = getSurahAudioUrl(reciter, surahNumber);
  if (!('caches' in window)) return directUrl;

  try {
    const cache = await caches.open(AUDIO_CACHE_NAME);
    const matched = await cache.match(directUrl);
    if (matched) {
      // Return a blob URL for guaranteed 100% offline playback
      const blob = await matched.blob();
      return URL.createObjectURL(blob);
    }
  } catch (err) {
    console.warn('Cache lookup failed, using direct URL:', err);
  }

  return directUrl;
}

// Pre-cache popular short Surahs for instant offline access
export async function preCacheEssentialSurahs(reciter: Reciter): Promise<number[]> {
  const essentialSurahNumbers = [1, 112, 113, 114, 108, 110, 67, 36]; // Al-Fatihah, Ikhlas, Falaq, Nas, Kawthar, Nasr, Mulk, Yaseen
  const cachedList: number[] = [];

  for (const num of essentialSurahNumbers) {
    try {
      const ok = await cacheSurahAudio(num, reciter);
      if (ok) cachedList.push(num);
    } catch {
      // ignore individual failures
    }
  }

  return cachedList;
}

// Delete a cached Surah from offline storage
export async function removeSurahAudioFromCache(surahNumber: number, reciter: Reciter): Promise<boolean> {
  if (!('caches' in window)) return false;
  try {
    const cache = await caches.open(AUDIO_CACHE_NAME);
    const audioUrl = getSurahAudioUrl(reciter, surahNumber);
    return await cache.delete(audioUrl);
  } catch (err) {
    console.error('Failed to remove from cache:', err);
    return false;
  }
}
