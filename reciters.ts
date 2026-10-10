import { Reciter } from '../types/quran';

// Curated high quality avatars and CDN audio streams for 40 renowned reciters
export const RECITERS_DATA: Reciter[] = [
  {
    id: "alafasy",
    nameArabic: "الشيخ مشاري راشد العفاسي",
    nameEnglish: "Sheikh Mishary Rashid Alafasy",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/afs/",
    bio: "إمام المسجد الكبير بدولة الكويت وأحد أشهر القرّاء في العالم الإسلامي"
  },
  {
    id: "sudais",
    nameArabic: "الشيخ عبد الرحمن السديس",
    nameEnglish: "Sheikh Abdul Rahman Al-Sudais",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server11.mp3quran.net/sds/",
    bio: "الرئيس العام لشؤون المسجد الحرام والمسجد النبوي وإمام الحرم المكي الشريف"
  },
  {
    id: "shuraim",
    nameArabic: "الشيخ سعود الشريم",
    nameEnglish: "Sheikh Saud Al-Shuraim",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server7.mp3quran.net/shur/",
    bio: "إمام وخطيب المسجد الحرام الأسبق وعميد كلية الشريعة بجامعة أم القرى"
  },
  {
    id: "hussary",
    nameArabic: "الشيخ محمود خليل الحصري",
    nameEnglish: "Sheikh Mahmoud Khalil Al-Hussary",
    style: "Hafs from Asim (Mujawwad)",
    styleAr: "حفص عن عاصم - مجود ومتقن",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server13.mp3quran.net/husr/",
    bio: "شيخ عموم المقارئ المصرية الأسبق وأحد أعمدة التلاوة الكلاسيكية المتقنة"
  },
  {
    id: "dosari",
    nameArabic: "الشيخ ياسر الدوسري",
    nameEnglish: "Sheikh Yasser Al-Dosari",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل خاشع",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server11.mp3quran.net/yasser/",
    bio: "إمام وخطيب المسجد الحرام وصاحب صوت شجي وتلاوة تخشع لها القلوب"
  },
  {
    id: "muaiqly",
    nameArabic: "الشيخ ماهر المعيقلي",
    nameEnglish: "Sheikh Maher Al-Muaiqly",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server12.mp3quran.net/maher/",
    bio: "إمام وخطيب المسجد الحرام يتميز بنبرة صوت عذبة ومؤثرة"
  },
  {
    id: "ghamdi",
    nameArabic: "الشيخ سعد الغامدي",
    nameEnglish: "Sheikh Saad Al-Ghamdi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server7.mp3quran.net/s_gmd/",
    bio: "قارئ وإمام سعودي معروف بتلاواته الهادئة والنقية"
  },
  {
    id: "abdulbasit",
    nameArabic: "الشيخ عبد الباسط عبد الصمد",
    nameEnglish: "Sheikh Abdul Basit Abdul Samad",
    style: "Hafs from Asim (Murattal)",
    styleAr: "حفص عن عاصم - صوت مكة الذهبي",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server7.mp3quran.net/basit/",
    bio: "صوت السماء وأحد أبرز قراء القرآن الكريم في القرن العشرين"
  },
  {
    id: "minshawi",
    nameArabic: "الشيخ محمد صديق المنشاوي",
    nameEnglish: "Sheikh Mohamed Siddiq El-Minshawi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - الصوت الباكي",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server10.mp3quran.net/minsh/",
    bio: "رائد مدرسة الخشوع في التلاوة وصاحب النبرة الحزينة المؤثرة"
  },
  {
    id: "shatri",
    nameArabic: "الشيخ أبو بكر الشاطري",
    nameEnglish: "Sheikh Abu Bakr Al-Shatri",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server11.mp3quran.net/shatri/",
    bio: "إمام ومقرئ يمني سعودي يتميز بصوته القوي وأدائه الخاشع"
  },
  {
    id: "qatami",
    nameArabic: "الشيخ ناصر القطامي",
    nameEnglish: "Sheikh Nasser Al-Qatami",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - تلاوة عذبة",
    avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/qtm/",
    bio: "إمام جامع الملك عبد الله بن عبد العزيز في الرياض"
  },
  {
    id: "alijaber",
    nameArabic: "الشيخ علي عبد الله جابر",
    nameEnglish: "Sheikh Ali Jaber",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل الحرم",
    avatarUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server11.mp3quran.net/a_jbr/",
    bio: "إمام المسجد الحرام في الثمانينيات ذو التلاوة التعبدية الفريدة"
  },
  {
    id: "abkar",
    nameArabic: "الشيخ إدريس أبكر",
    nameEnglish: "Sheikh Idris Abkar",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - نبرة بكاء خاشعة",
    avatarUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/abkr/",
    bio: "إمام جامع الشيخ زايد الكبير بأبوظبي وصاحب التلاوة الرقيقة"
  },
  {
    id: "balushi",
    nameArabic: "الشيخ هزاع البلوشي",
    nameEnglish: "Sheikh Hazza Al-Balushi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - صوت هادئ",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server11.mp3quran.net/balushi/",
    bio: "قارئ عماني حظي بشهرة واسعة لصوته العذب والهادئ"
  },
  {
    id: "kurdi",
    nameArabic: "الشيخ رعد محمد الكردي",
    nameEnglish: "Sheikh Raad Al-Kurdi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل هادئ",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/kurdi/",
    bio: "إمام جامع الإمام الشافعي بكركوك وقارئ متميز الصوت"
  },
  {
    id: "abbad",
    nameArabic: "الشيخ فارس عباد",
    nameEnglish: "Sheikh Fares Abbad",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - تلاوة رصينة",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/frs_a/",
    bio: "قارئ يمني مشهور بنبرته المميزة وتلاوته المتقنة"
  },
  {
    id: "baleela",
    nameArabic: "الشيخ بندر بليلة",
    nameEnglish: "Sheikh Bandar Baleela",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل الحرم",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/balilah/",
    bio: "إمام وخطيب المسجد الحرام وعضو هيئة كبار العلماء بالسعودية"
  },
  {
    id: "jalil",
    nameArabic: "الشيخ خالد الجليل",
    nameEnglish: "Sheikh Khalid Al-Jalil",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - خاشع وباكٍ",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server10.mp3quran.net/jleel/",
    bio: "إمام جامع الملك خالد بالرياض ومعروف بتلاواته المؤثرة جداً"
  },
  {
    id: "yamani",
    nameArabic: "الشيخ وديع اليمني",
    nameEnglish: "Sheikh Wadee Al-Yamani",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/wdee/",
    bio: "قارئ يمني تخرج في كلية الدراسات الإسلامية ومشهور بالترتيل العذب"
  },
  {
    id: "hudhaifi",
    nameArabic: "الشيخ علي بن عبد الرحمن الحذيفي",
    nameEnglish: "Sheikh Ali Al-Hudhaifi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - شيخ أئمة الحرم",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server9.mp3quran.net/hthfi/",
    bio: "إمام وخطيب المسجد النبوي الشريف وأحد أتقن القراء ضبطاً ومخارجاً"
  },
  {
    id: "ayyub",
    nameArabic: "الشيخ محمد أيوب",
    nameEnglish: "Sheikh Muhammad Ayyub",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل حجازي",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/ayyub/",
    bio: "إمام المسجد النبوي الشريف وصاحب الأداء الحجازي الرفيع"
  },
  {
    id: "juhany",
    nameArabic: "الشيخ عبد الله الجهني",
    nameEnglish: "Sheikh Abdullah Al-Juhany",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل الحرم",
    avatarUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server13.mp3quran.net/jhn/",
    bio: "إمام وخطيب المسجد الحرام وقارئ متميز الصوت والإتقان"
  },
  {
    id: "budair",
    nameArabic: "الشيخ صلاح البدير",
    nameEnglish: "Sheikh Salah Al-Budair",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/s_bdr/",
    bio: "إمام وخطيب المسجد النبوي الشريف وقاضي استئناف بالمدينة المنورة"
  },
  {
    id: "ajmy",
    nameArabic: "الشيخ أحمد بن علي العجمي",
    nameEnglish: "Sheikh Ahmad Al-Ajmy",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل مشهور",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server10.mp3quran.net/ajm/",
    bio: "قارئ سعودي من أوائل القراء الذين حظيت تلاواتهم بانتشار عالمي واسع"
  },
  {
    id: "basfar",
    nameArabic: "الشيخ عبد الله بصفر",
    nameEnglish: "Sheikh Abdullah Basfar",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل تعليمي",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/bsfr/",
    bio: "إمام جامع المنصور بجدة والأمين العام للهيئة العالمية لتحفيظ القرآن"
  },
  {
    id: "banna",
    nameArabic: "الشيخ محمود علي البنا",
    nameEnglish: "Sheikh Mahmoud Ali Al-Banna",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - المدرسة المصرية",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/bna/",
    bio: "أحد عمالقة دولة التلاوة المصرية وقارئ مسجد الإمام الحسين بالقاهرة"
  },
  {
    id: "ismail",
    nameArabic: "الشيخ مصطفى إسماعيل",
    nameEnglish: "Sheikh Mustafa Ismail",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - أستاذ المقامات",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/mustafa/",
    bio: "قارئ مصر الأول وأحد أعظم أعلام التلاوة والتجويد عبر التاريخ"
  },
  {
    id: "jibreel",
    nameArabic: "الشيخ محمد جبريل",
    nameEnglish: "Sheikh Muhammad Jibreel",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - دعاء وتلاوة",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/jbrl/",
    bio: "قارئ مسجد عمرو بن العاص الشهير بالقاهرة وإمام صلاة التراويح"
  },
  {
    id: "rifai_h",
    nameArabic: "الشيخ هاني الرفاعي",
    nameEnglish: "Sheikh Hani Al-Rifai",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - صوت شجي",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/rifai/",
    bio: "إمام مسجد العناني بجدة ويتميز بصوت باكٍ وقراءات مؤثرة"
  },
  {
    id: "bukhatir",
    nameArabic: "الشيخ صلاح بو خاطر",
    nameEnglish: "Sheikh Salah Bukhatir",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل مهدئ",
    avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/bu_khtr/",
    bio: "قارئ إماراتي يتميز بأسلوبه الشبيه بفضيلة الشيخ السديس"
  },
  {
    id: "rayan",
    nameArabic: "الشيخ عادل ريان",
    nameEnglish: "Sheikh Adel Rayan",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/ryan/",
    bio: "إمام جامع أم الخير بجدة وصاحب أسلوب تلاوة هادئ وخاشع"
  },
  {
    id: "qasim",
    nameArabic: "الشيخ عبد المحسن القاسم",
    nameEnglish: "Sheikh Abdulmohsen Al-Qasim",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل النبوي",
    avatarUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/qasm/",
    bio: "إمام وخطيب المسجد النبوي الشريف وقاضي بالمحكمة العامة بالمدينة"
  },
  {
    id: "rifai_n",
    nameArabic: "الشيخ نبيل الرفاعي",
    nameEnglish: "Sheikh Nabil Al-Rifai",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server8.mp3quran.net/nabil/",
    bio: "إمام مسجد التقوى بجدة وصاحب نبرة تلاوة شجية وحنونة"
  },
  {
    id: "daghistani",
    nameArabic: "الشيخ زكي داغستاني",
    nameEnglish: "Sheikh Zaki Daghistani",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مقام حجازي",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server9.mp3quran.net/zaki/",
    bio: "من رواد التلاوة بالحجاز في المسجد الحرام بمكة المكرمة"
  },
  {
    id: "haneef",
    nameArabic: "الشيخ عبد الودود حنيف",
    nameEnglish: "Sheikh Abdul Wadood Haneef",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - ترتيل هادئ",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server9.mp3quran.net/wdod/",
    bio: "أستاذ القراءات بجامعة أم القرى وإمام صلاة التراويح بالحرم المكي سابقاً"
  },
  {
    id: "qahtani",
    nameArabic: "الشيخ خالد القحطاني",
    nameEnglish: "Sheikh Khalid Al-Qahtani",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server10.mp3quran.net/qht/",
    bio: "قارئ سعودي معروف بوقاره وحسن أدائه لآيات الذكر الحكيم"
  },
  {
    id: "shirzad",
    nameArabic: "الشيخ شيرزاد عبد الرحمن",
    nameEnglish: "Sheikh Shirzad Abdul Rahman",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server12.mp3quran.net/shir/",
    bio: "قارئ كردي عراقي ذو صوت رنان وقراءة مجودة عذبة"
  },
  {
    id: "daob",
    nameArabic: "الشيخ طارق عبد الغني دعوب",
    nameEnglish: "Sheikh Tareq Abdulghani Daob",
    style: "Qalun from Nafi",
    styleAr: "قالون عن نافع",
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server10.mp3quran.net/tareq/",
    bio: "قارئ ليبي مشهور برواية قالون عن نافع وأداء سلس محكم"
  },
  {
    id: "alaqmi",
    nameArabic: "الشيخ أكرم العلاقمي",
    nameEnglish: "Sheikh Akram Al-Alaqmi",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - مرتل",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server9.mp3quran.net/akrm/",
    bio: "مقرئ فلسطيني معروف بإتقان التلاوة وضبط أحكام التجويد"
  },
  {
    id: "akhdar",
    nameArabic: "الشيخ إبراهيم الأخضر",
    nameEnglish: "Sheikh Ibrahim Al-Akhdar",
    style: "Hafs from Asim",
    styleAr: "حفص عن عاصم - شيخ قراء المدينة",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    serverUrl: "https://server6.mp3quran.net/akdr/",
    bio: "شيخ قراء المسجد النبوي الشريف وأحد أكبر أساطين الإتقان والتجويد"
  }
];

// Helper to format 3-digit Surah number for mp3quran server (e.g. 1 -> "001.mp3")
export function getSurahAudioUrl(reciter: Reciter, surahNumber: number): string {
  const padded = String(surahNumber).padStart(3, '0');
  return `${reciter.serverUrl}${padded}.mp3`;
}
