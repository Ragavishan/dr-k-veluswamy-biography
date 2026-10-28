export type Language = "en" | "ta" | "hi";

export type StoryTopic = {
  id: string;
  eyebrow: string;
  title: string;
  year: string;
  description: string;
  image: string;
  translations: Record<Language, {
    eyebrow: string;
    title: string;
    year: string;
    description: string;
  }>;
};

export const topics: Record<string, StoryTopic> = {
  village: {
    id: "village", eyebrow: "THE EARLY YEARS", title: "A Beginning in Rural Tamil Nadu", year: "Early life",
    description: "Dr. Veluswamy grew up in Kandamanur Valasai in a farming family. He studied in his village and helped his father with agricultural work while continuing his education.",
    image: "/images/village.jpg",
    translations: {
      en: { eyebrow: "THE EARLY YEARS", title: "A Beginning in Rural Tamil Nadu", year: "Early life", description: "Dr. Veluswamy grew up in Kandamanur Valasai in a farming family. He studied in his village and helped his father with agricultural work while continuing his education.",},
      ta: { eyebrow: "ஆரம்ப ஆண்டுகள்", title: "கிராமப்புறத் தமிழ்நாட்டில் தொடங்கிய வாழ்க்கை", year: "ஆரம்ப வாழ்க்கை", description: "வழங்கப்பட்ட வாழ்க்கை வரலாற்றின்படி, டாக்டர் வேலுச்சாமி கண்டமனூர் வலசையில் விவசாயக் குடும்பத்தில் வளர்ந்தார். கிராமத்திலேயே கல்வி கற்ற அவர், படிப்பைத் தொடர்ந்தபடியே தந்தைக்கு விவசாயப் பணிகளிலும் உதவினார்.",},
      hi: { eyebrow: "प्रारंभिक वर्ष", title: "ग्रामीण तमिलनाडु में जीवन की शुरुआत", year: "प्रारंभिक जीवन", description: "प्रदान की गई जीवनी के अनुसार, डॉ. वेलुस्वामी कंदमानूर वलसाई में एक किसान परिवार में पले-बढ़े। उन्होंने अपने गाँव में पढ़ाई की और शिक्षा जारी रखते हुए अपने पिता के कृषि कार्यों में मदद की।",}
    }
  },
  kakatiya: {
    id: "kakatiya", eyebrow: "MEDICAL EDUCATION", title: "Kakatiya Medical College", year: "1972 - 1978",
    description: "His education history lists medical studies at Kakatiya Medical College. Confirm the exact course dates and institutional details against official records before publication.",
    image: "/images/kakatiya-medical-college.jpg",
    translations: {
      en: { eyebrow: "MEDICAL EDUCATION", title: "Kakatiya Medical College", year: "1972 - 1978", description: "As the foundational step towards his medical dream, he began his undergraduate medical education (MBBS) in the year 1972. He secured a prestigious opportunity to pursue his MBBS at the historic Kakatiya Medical College, which was then affiliated with the renowned Osmania University in undivided Andhra Pradesh. He embarked on his medical journey at this elite institution, known for its exceptional healthcare infrastructure and highly experienced professors. Despite coming from a different linguistic background, he mastered his medical subjects with absolute precision through his sheer hard work and dedication. The comprehensive clinical training at Kakatiya Medical College and the invaluable experience of directly treating hundreds of patients laid a strong ethical and professional foundation for his medical career. The exceptional clinical knowledge he gained upon successfully completing his MBBS under Osmania University ultimately served as the key catalyst that earned him a coveted post-graduation seat in M.D. Internal Medicine at India's most premier medical institute, AIIMS, New Delhi.",},
      ta: { eyebrow: "மருத்துவக் கல்வி", title: "காகத்தியா மருத்துவக் கல்லூரி", year: "1972 - 1978", description: "மருத்துவக் கனவின் முதல் படியாக, 1972 ஆம் ஆண்டு தனது இளநிலை மருத்துவப் படிப்பைத் (MBBS) தொடங்கினார்.அக்காலகட்டத்தில் ஒருங்கிணைந்த ஆந்திரப் பிரதேசத்தின் புகழ்பெற்ற உஸ்மானியா பல்கலைக்கழகத்தின் (Osmania University) கீழ் இயங்கி வந்த, வரலாற்றுச் சிறப்புமிக்க காகத்தியா மருத்துவக் கல்லூரியில் (Kakatiya Medical College) இவருக்கு MBBS பயிலும் வரலாற்றுச் சிறப்புமிக்க வாய்ப்பு கிடைத்தது. இந்தியாவில் மிகச் சிறந்த மருத்துவக் கட்டமைப்பையும், அனுபவம் வாய்ந்த பேராசிரியர்களையும் கொண்ட இந்தத் தளத்தில் தனது மருத்துவப் பயணத்தை அவர் ஆரம்பித்தார்.வேறு மொழிப் பின்னணியில் இருந்து வந்தாலும், தனது அசாத்திய உழைப்பால் மருத்துவப் பாடங்களை மிகத் துல்லியமாகக் கற்றுத் தேர்ந்தார். காகத்தியா மருத்துவக் கல்லூரியின் விரிவான மருத்துவப் பயிற்சிகளும், நூற்றுக்கணக்கான நோயாளிகளுக்கு நேரடியாகச் சிகிச்சை அளித்த அனுபவமும் இவருக்குள் ஒரு சிறந்த மருத்துவ ஆளுமைக்கான தார்மீக அடித்தளத்தை அமைத்துக் கொடுத்தன.'உஸ்மானியா பல்கலைக்கழகத்தின்' கீழ் இந்த MBBS படிப்பை வெற்றிகரமாக நிறைவு செய்ததன் மூலம் கிடைத்த அசாத்திய கிளினிக்கல் அறிவே (Clinical Knowledge), பிற்காலத்தில் இந்தியாவின் மிக உயரிய நிறுவனமான 'புதுடெல்லி எய்ம்ஸ்' (AIIMS, New Delhi) கழகத்தில் உள்ள மருத்துவ பிரிவில் (M.D. Internal Medicine) முதுகலை இடம் கிடைப்பதற்குக் காரணியாக அமைந்தது.",},
      hi: { eyebrow: "चिकित्सा शिक्षा", title: "काकतीय मेडिकल कॉलेज", year: "1972 - 1978", description: "अपने चिकित्सा के सपने की ओर पहला कदम बढ़ाते हुए, उन्होंने वर्ष 1972 में अपनी स्नातक चिकित्सा शिक्षा (MBBS) की शुरुआत की। उन्हें ऐतिहासिक काकतीय मेडिकल कॉलेज में एमबीबीएस करने का एक प्रतिष्ठित अवसर मिला, जो उस समय अविभाजित आंध्र प्रदेश के प्रसिद्ध उस्मानिया विश्वविद्यालय (Osmania University) से संबद्ध था। उन्होंने इस उत्कृष्ट संस्थान में अपनी चिकित्सा यात्रा शुरू की, जो अपने असाधारण स्वास्थ्य सेवा बुनियादी ढांचे और अत्यधिक अनुभवी प्रोफेसरों के लिए जाना जाता था। एक अलग भाषाई पृष्ठभूमि से आने के बावजूद, उन्होंने अपनी कड़ी मेहनत और समर्पण के माध्यम से अपने चिकित्सा विषयों पर पूर्ण सटीकता के साथ महारत हासिल की। काकतीय मेडिकल कॉलेज में व्यापक क्लिनिकल प्रशिक्षण और सैकड़ों रोगियों का सीधे इलाज करने के अमूल्य अनुभव ने उनके चिकित्सा करियर के लिए एक मजबूत नैतिक और पेशेवर आधार तैयार किया। उस्मानिया विश्वविद्यालय के तहत अपने एमबीबीएस को सफलतापूर्वक पूरा करने पर जो असाधारण क्लिनिकल ज्ञान उन्होंने प्राप्त किया, उसी ने अंततः उन्हें भारत के सबसे प्रमुख चिकित्सा संस्थान, एम्स, नई दिल्ली (AIIMS, New Delhi) में एम.डी. इंटरनल मेडिसिन में स्नातकोत्तर की प्रतिष्ठित सीट दिलाने में एक महत्वपूर्ण उत्प्रेरक का कार्य किया।.",}
    }
  },
  aiims: {
    id: "aiims", eyebrow: "MEDICAL EDUCATION", title: "The AIIMS Chapter", year: "Postgraduate training",
    description: "His preparation during the house-surgeon period reportedly led to selection for postgraduate medical study at AIIMS, New Delhi. Confirm the exact qualification and dates before publication.",
    image: "/images/aiims.jpg",
    translations: {
      en: { eyebrow: "MEDICAL EDUCATION", title: "The AIIMS Chapter", year: "Postgraduate training", description: "Armed with the exceptional clinical knowledge gained during his MBBS, he secured a coveted postgraduate residency in M.D. Internal Medicine (1982) at the All India Institute of Medical Sciences (AIIMS), New Delhi—India’s most premier and prestigious medical institution. At AIIMS, he gained invaluable experience by diagnosing and treating complex and rare medical cases from across the nation. Under the direct mentorship of India's finest medical minds, he sharpened his expertise in critical care, advanced therapeutics, and complex diagnostics. It was during his tenure at AIIMS that he realized the profound impact of combining clinical practice with medical education and biotechnology research. The world-class scientific rigor and innovative mindset he developed at AIIMS later became the driving catalyst for him to pioneer advanced technologies in reproductive medicine and fertility treatments.",},
      ta: { eyebrow: "மருத்துவக் கல்வி", title: "AIIMS கல்விப் பயணம்", year: "முதுநிலைப் பயிற்சி", description: "காகத்தியா மருத்துவக் கல்லூரியில் பெற்ற அசாத்திய மருத்துவ அறிவின் துணையோடு, இந்தியாவின் மிக உயரிய மற்றும் மதிப்புமிக்க மருத்துவக் கழகமான 'புதுடெல்லி எய்ம்ஸ் (AIIMS, New Delhi) நிறுவனத்தில்' உள்ள மருத்துவ பிரிவில் (M.D. Internal Medicine - 1982) முதுகலை பயிலும் அரிய வாய்ப்பைப் பெற்றார்.நாட்டின் பல்வேறு பகுதிகளில் இருந்து வரும் மிகக் கடினமான மற்றும் அரிய வகை நோயாளிகளுக்குச் சிகிச்சை அளிக்கும் வாய்ப்பு எய்ம்ஸ் வளாகத்தில் இவருக்குக் கிடைத்தது. இந்தியாவின் மிகச் சிறந்த மருத்துவ வல்லுநர்களின் நேரடி வழிகாட்டுதலில், அவசர காலச் சிகிச்சை முறைகள் மற்றும் சிக்கலான உடலமைப்பியல் நோயறிதல் நுட்பங்களில் (Complex Diagnostics) தனித்துவமான ஆளுமையாக உருவெடுத்தார்.இங்கு பயின்ற காலகட்டத்தில்தான், வெறும் மருத்துவச் சேவையோடு நின்றுவிடாமல் மருத்துவக் கல்வி மற்றும் உயிரித் தொழில்நுட்ப ஆராய்ச்சி (Biotechnology Research) ஆகியவற்றின் முக்கியத்துவத்தை அவர் ஆழமாக உணர்ந்தார். எய்ம்ஸ் வழங்கிய உலகத்தரம் வாய்ந்த அறிவியல் பார்வையும், மருத்துவப் புதுமைகளுமே பிற்காலத்தில் மலட்டுத்தன்மை ஒழிப்பு மற்றும் மகப்பேறு மருத்துவத்தில் (Fertility Treatments) புதிய தொழில்நுட்பங்களைப் புகுத்துவதற்கு இவருக்குள் பெரும் உந்துதலாக அமைந்தது.", },
      hi: { eyebrow: "चिकित्सा शिक्षा", title: "AIIMS का अध्याय", year: "स्नातकोत्तर प्रशिक्षण", description: "एमबीबीएस के दौरान प्राप्त असाधारण क्लिनिकल ज्ञान के बल पर, उन्होंने भारत के सबसे अग्रणी और प्रतिष्ठित चिकित्सा संस्थान, अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स), नई दिल्ली में एम.डी. इंटरनल मेडिसिन (1982) में स्नातकोत्तर की प्रतिष्ठित सीट हासिल की।. एम्स में रहते हुए, उन्हें देश भर से आने वाले सबसे जटिल और दुर्लभ चिकित्सा मामलों के निदान और उपचार का अमूल्य अनुभव प्राप्त हुआ। भारत के सर्वश्रेष्ठ चिकित्सा विशेषज्ञों के प्रत्यक्ष मार्गदर्शन में, उन्होंने क्रिटिकल केयर, उन्नत चिकित्सा पद्धतियों और जटिल निदान तकनीकों में महारत हासिल की।. एम्स में अपने कार्यकाल के दौरान ही उन्होंने चिकित्सा अभ्यास के साथ-साथ चिकित्सा शिक्षा और जैव प्रौद्योगिकी अनुसंधान (Biotechnology Research) को जोड़ने के महत्व को गहराई से समझा। एम्स में विकसित वैज्ञानिक दृष्टिकोण और नवाचार की सोच ही बाद में उनके लिए प्रजनन चिकित्सा और फर्टिलिटी उपचारों में अत्याधुनिक तकनीकों की शुरुआत करने का मुख्य आधार बनी।.",}
    }
  },
  palani: {
    id: "palani", eyebrow: "A CAREER BEGINS", title: "Medical Practice in Palani", year: "1983",
    description: "Dr. Veluswamy returned to his hometown and began medical practice in Palani in 1983. K.V. Hospital later developed into a 100-bedded multispecialty hospital.",
    image: "/images/palani-hospital.jpg",
    translations: {
      en: { eyebrow: "A CAREER BEGINS", title: "Medical Practice in Palani", year: "1983", description: "Upon completing his advanced postgraduate medical education at India's premier institution, AIIMS, New Delhi, Dr. K. Veluswamy chose to forgo the lucrative opportunities of metropolitan cities to serve the rural communities of his homeland, marking the inception of his medical career in Palani. In the late 1980s, alongside the renowned gynecologist Dr. S. Chandralekha, he established 'K.V. Hospital' and the foundation of Iswarya Fertility Centre on Palani's Dindigul Road, breaking the prevailing social stigmas around infertility by introducing South India's pioneering IVF and IUI technologies at an affordable cost. Through his compassionate approach, gentle smile, and exceptional clinical expertise, he transformed Palani K.V. Hospital into a premier fertility landmark sought after across Tamil Nadu. This dedicated medical service, which began as a humble seed in the sacred soil of Palani, ultimately served as the cornerstone for the grand national healthcare legacy that lights up the lives of lakhs of families today.",},
      ta: { eyebrow: "மருத்துவப் பணி தொடக்கம்", title: "பழனியில் மருத்துவப் பணி", year: "1983", description: "டாக்டர் கே. வேலுச்சாமி அவர்கள் புதுடெல்லி எய்ம்ஸ் (AIIMS, New Delhi) போன்ற நாட்டின் மிக உயரிய கழகத்தில் தனது உயர்தர முதுகலை மருத்துவப் படிப்பை முடித்த கையோடு, பெருநகரங்களின் பகட்டுகளைத் தேர்ந்தெடுத்துச் செல்லாமல், தான் வளர்ந்த பழனி மண்ணின் கிராமப்புற மக்களுக்குச் சேவை செய்ய விரும்பி தனது ஆரம்பகால மருத்துவப் பணியைத் தொடங்கினார். 1980-களின் பிற்பகுதியில் பழனியின் திண்டுக்கல் சாலையில் புகழ்பெற்ற மகளிர் மருத்துவ நிபுணர் டாக்டர் எஸ். சந்திரலேகா அவர்களுடன் இணைந்து 'கே.வி. மருத்துவமனை' மற்றும் ஐஸ்வர்யா கருத்தரிப்பு மையத்தை (Iswarya Fertility Centre) மிக எளிய முறையில் தோற்றுவித்த அவர், அக்காலகட்டத்தில் கருவுறாமை குறித்து நிலவிய சமூக மூடநம்பிக்கைகளை உடைத்து, தென்னிந்தியாவின் மிக முன்னோடியான நவீன IVF மற்றும் IUI சிகிச்சை தொழில்நுட்பங்களை பழனி மக்களுக்கு மிகக் குறைந்த செலவில் அறிமுகப்படுத்தினார். தனது அன்பான அணுகுமுறையாலும், கனிவான புன்னகையாலும், அசாத்திய கைராசியாலும் பழனி கே.வி. மருத்துவமனையை ஒட்டுமொத்த தமிழகமே உற்றுநோக்கும் ஒரு முதன்மை மகப்பேறு தலமாக மாற்றியதோடு மட்டுமன்றி, பழனி என்ற புனித மண்ணில் ஒரு எளிய விதையாகத் தொடங்கப்பட்ட இவரது இந்த அர்ப்பணிப்புமிக்க மருத்துவப் பணிதான், இன்று லட்சக்கணக்கான குடும்பங்களின் வாழ்வில் தாய்மை ஒளியேற்றும் ஒரு பிரம்மாண்ட தேசிய மருத்துவச் சாம்ராஜ்யமாக வளர்ந்து நிற்பதற்குக் காரணியாக அமைந்தது."},
      hi: { eyebrow: "करियर की शुरुआत", title: "पलानी में चिकित्सा सेवा", year: "1983", description: "भारत के सर्वोच्च संस्थान एम्स, नई दिल्ली (AIIMS, New Delhi) से अपनी उच्च स्नातकोत्तर चिकित्सा शिक्षा पूरी करने के बाद, डॉ. के. वेलुस्वामी ने बड़े शहरों के आकर्षक अवसरों को छोड़कर अपनी मातृभूमि पलानी के ग्रामीण लोगों की सेवा करने का विकल्प चुना और अपने चिकित्सा करियर की शुरुआत की। 1980 के दशक के उत्तरार्ध में, उन्होंने प्रसिद्ध स्त्री रोग विशेषज्ञ डॉ. एस. चंद्रलेखा के साथ मिलकर पलानी के डिंडीगुल रोड पर 'के.वी. अस्पताल' और ऐश्वर्या फर्टिलिटी सेंटर की नींव रखी, और बहुत ही कम लागत पर दक्षिण भारत की अग्रणी आईवीएफ (IVF) और आईयूआई (IUI) तकनीकों की शुरुआत करके बांझपन से जुड़े सामाजिक अंधविश्वासों को तोड़ा। अपने दयालु दृष्टिकोण, सौम्य मुस्कान और उत्कृष्ट चिकित्सा अनुभव के माध्यम से उन्होंने पलानी के.वी. अस्पताल को पूरे तमिलनाडु में एक प्रमुख मातृत्व और प्रजनन केंद्र के रूप में बदल दिया। पलानी की पावन भूमि पर एक साधारण बीज के रूप में शुरू हुई उनकी यह समर्पित चिकित्सा सेवा ही आज लाखों परिवारों के जीवन में मातृत्व का प्रकाश फैलाने वाले एक विशाल राष्ट्रीय चिकित्सा साम्राज्य का आधार स्तंभ बनी है।.",}
    }
  },
  reproductive: {
    id: "reproductive", eyebrow: "RESEARCH & INNOVATION", title: "M.Sc- Reproductive Medicine", year: "1997–1998",
    description: "He undertook IVF training at the National University of Singapore during this period. Confirm the programme and dates before publication.",
    image: "/images/msc-reproductive-medicine.jpg",
    translations: {
      en: { eyebrow: "RESEARCH & INNOVATION", title: "IVF Training in Singapore", year: "1997–1998", description: "Dr. K. Veluswamy advanced M.Sc. qualification in Reproductive and Sexual Medicine stands as a testament to his profound expertise and authority in the fields of infertility eradication and maternal healthcare. This specialized academic foundation grants him deep insights into the most intricate biological changes and physiological mechanisms of human reproduction. This academic distinction provides him with a world-class scientific framework to diagnose and manage complex hormonal imbalances, reproductive tract challenges, and underlying cellular barriers to conception. His approach combines evidence-based science with advanced clinical logic. His deep understanding of reproductive science is the driving force behind his precision in executing advanced fertility solutions, including modern IVF, IUI, ICSI, and genetic screenings. He seamlessly bridges theoretical science with revolutionary clinical outcomes. Ultimately, this specialized knowledge equips him with the exceptional medical wisdom needed to resolve the profound worries of childless couples. By aligning clinical excellence with pure compassion, he consistently transforms the cherished dream of 'Your Child' into a beautiful, living reality.",},
      ta: { eyebrow: "பாலியல் மற்றும் இனப்பெருக்க மருத்துவம்", title: "மேற்படிப்பு மருத்துவக் கல்வி", year: "1997–1998", description: "டாக்டர் கே. வேலுச்சாமி அவர்கள் பாலியல் மற்றும் இனப்பெருக்க மருத்துவத்தில் (M.Sc. Reproductive and Sexual Medicine) பெற்றுள்ள முதுகலை அறிவியல் பட்டமானது, வெறும் தகுதி மட்டுமல்ல; அது மலட்டுத்தன்மை ஒழிப்பு மற்றும் மகப்பேறு மருத்துவத் துறையில் அவருக்கிருக்கும் அசாத்திய நம்பிக்கையின் சான்றாகும். இனப்பெருக்க மண்டலத்தின் மிக நுணுக்கமான உயிரியல் மாற்றங்கள் (Intricate Biological Changes) மற்றும் உடலியல் செயல்பாடுகளை ஆழமாகப் புரிந்துகொள்ள இக்கல்வி அவருக்கு உதவுகிறது. மரபணு மற்றும் ஹார்மோன் கருவுறாமைக்கு முக்கியக் காரணியாக விளங்கும் சிக்கலான ஹார்மோன் குறைபாடுகள் (Hormonal Imbalances), விந்தணு மற்றும் முட்டை உற்பத்தி சார்ந்த பிரச்சினைகள், மற்றும் மரபணு ரீதியான தடைகளை உலகத்தரம் வாய்ந்த அறிவியல் பின்னணியுடன் கையாள்வதற்கு இக்கல்வித் தகுதி இவருக்கு ஒரு பெரும் அடித்தளமாக அமைந்துள்ளது. நவீன IVF, IUI, ICSI மற்றும் மேம்பட்ட லேப்ராஸ்கோப்பி போன்ற மருத்துவப் புதுமைகளை வெறும் சிகிச்சை முறையாகப் பார்க்காமல், அதன் அறிவியல் நுட்பங்களை அறிந்து துல்லியமாகச் செயல்படுத்துவதில் இவர் சிறந்து விளங்கக் காரணம் இத்துறையில் அவர் பெற்றுள்ள இந்த உயரிய முதுகலைப் படிப்பே ஆகும். அறிவியலின் துணையோடு, பல்லாயிரக்கணக்கான தம்பதியரின் நீண்டகாலத் தவிப்பைத் தீர்ப்பதே இவரது நோக்கம். மகப்பேறின்மையால் கலங்கும் நெஞ்சங்களுக்கு மருத்துவப் பேரறிவின் மூலம் ஒளியூட்டி, 'உங்களுக்கும் ஒரு குழந்தை' என்ற தாய்மை வரத்தை உலகெங்கிலும் உள்ள குடும்பங்களுக்குச் சாத்தியமாக்கி வருகிறார்.",},
      hi: { eyebrow: "अनुसंधान और नवाचार", title: "सिंगापुर में IVF प्रशिक्षण", year: "1997–1998", description: "प्रजनन और यौन चिकित्सा (M.Sc. Reproductive and Sexual Medicine) में डॉ. के. वेलुस्वामी की उच्च स्नातकोत्तर विज्ञान डिग्री बांझपन निवारण और मातृत्व स्वास्थ्य के क्षेत्र में उनकी गहरी विशेषज्ञता और असाधारण अधिकार को दर्शाती है। यह उन्नत पाठ्यक्रम उन्हें मानव प्रजनन के सबसे जटिल जैविक परिवर्तनों और शारीरिक प्रक्रियाओं को समझने की गहरी अंतर्दृष्टि प्रदान करता है।. यह शैक्षणिक योग्यता उन्हें जटिल हार्मोनल असंतुलन, प्रजनन प्रणाली की समस्याओं और गर्भाधान में आने वाली अंतर्निहित बाधाओं का सटीक निदान और उपचार करने के लिए एक विश्व स्तरीय वैज्ञानिक आधार प्रदान करती है।. प्रजनन विज्ञान की उनकी गहरी समझ ही आधुनिक आईवीएफ (IVF), आईयूआई (IUI), आईसीएसआई (ICSI) और उन्नत लैप्रोस्कोपी जैसे फर्टिलिटी उपचारों को अत्यंत सटीकता के साथ लागू करने की उनकी क्षमता का मुख्य स्रोत है।. यह विशिष्ट चिकित्सा ज्ञान उन्हें निःसंतान दंपत्तियों की चिंताओं को दूर करने के लिए उत्कृष्ट क्लिनिकल बुद्धिमत्ता प्रदान करता है। विज्ञान और मानवीय संवेदनाओं को एक साथ लाकर, वे दुनिया भर के हजारों परिवारों के माता-पिता बनने के सपने को सफलतापूर्वक साकार कर रहे हैं।.",}
    }
  },
  singapore: {
    id: "singapore", eyebrow: "ADVANCED MEDICAL TRAINING", title: "National University of Singapore", year: "1997–1998",
    description: "He undertook IVF training at the National University of Singapore during this period. Confirm the programme and dates before publication.",
    image: "/images/national-university.jpeg",
    translations: {
      en: { eyebrow: "ADVANCED MEDICAL TRAINING", title: "National University of Singapore", year: "1997–1998", description: "Dr. K. Veluswamy's advanced IVF and Assisted Reproductive Techniques (ART) training from the globally renowned National University of Singapore (NUS) confirms his world-class clinical expertise in the field of infertility eradication. This premium international training equips him with the absolute clinical wisdom required to manage cutting-edge test-tube baby treatments (IVF), Intra-Cytoplasmic Sperm Injection (ICSI), and advanced cryopreservation with utmost precision. He brings global laboratory benchmarks and clinical excellence directly to patient care. His international exposure enables him to implement globally accepted fertility protocols and evidence-based solutions. This highly specialized knowledge allows him to successfully diagnose complex reproductive failures and tailor specialized treatments for recurrent IVF failures.",},
      ta: { eyebrow: "மேம்பட்ட மருத்துவப் பயிற்சி", title: "சிங்கப்பூர் தேசியப் பல்கலைக்கழகம்", year: "1997–1998", description: "டாக்டர் கே. வேலுச்சாமி அவர்கள், உலக அளவில் மருத்துவத் துறையில் மிக உயரிய தரவரிசையில் உள்ள சிங்கப்பூர் தேசியப் பல்கலைக்கழகத்தில் (NUS) பெற்ற மேம்பட்ட IVF மற்றும் உதவி இனப்பெருக்க தொழில்நுட்ப (ART) பயிற்சிகள், மலட்டுத்தன்மை ஒழிப்புத் துறையில் அவரது உலகத்தரம் வாய்ந்த மருத்துவத் திறனை உறுதிப்படுத்துகின்றன. சர்வதேசத் தரம் வாய்ந்த இந்த மருத்துவப் பயிற்சியின் மூலம், நவீன சோதனைக்குழாய் குழந்தை (IVF) சிகிச்சை முறைகள், ஐசிஎஸ்ஐ (ICSI), கருமுட்டை மற்றும் விந்தணு உறைநிலை பாதுகாப்பு (Cryopreservation), மற்றும் அதிநவீன எம்பிரியாலஜி ஆய்வகக் கட்டமைப்புகள் (Advanced Embryology Labs) ஆகியவற்றை மிகத் துல்லியமாக கையாள்வதற்கான கிளினிக்கல் பேரறிவை இவர் பெற்றுள்ளார். உலகளாவிய மருத்துவப் புதுமைகள் மற்றும் சர்வதேசச் சிகிச்சை நெறிமுறைகளை (International Protocols) உள்நாட்டிலேயே புகுத்துவதற்கு இ சர்வதேசத் தகுதி இவருக்கு ஒரு பெரும் அடித்தளமாக அமைந்துள்ளது. இதன் மூலம், பலமுறை IVF சிகிச்சை தோல்வியடைந்த தம்பதியருக்கும் துல்லியமான காரணங்களைக் கண்டறிந்து வெற்றிகரமான சிகிச்சைகளை வழங்க முடிகிறது.",},
      hi: { eyebrow: "उन्नत चिकित्सा प्रशिक्षण", title: "नेशनल यूनिवर्सिटी ऑफ सिंगापुर", year: "1997–1998", description: "प्विश्व प्रसिद्ध नेशनल यूनिवर्सिटी ऑफ सिंगापुर (NUS) से डॉ. के. वेलुस्वामी का उन्नत आईवीएफ (IVF) और असिस्टेड रिप्रोडक्टिव टेक्नोलॉजी (ART) प्रशिक्षण, बांझपन निवारण के क्षेत्र में उनकी विश्व स्तरीय चिकित्सा विशेषज्ञता को प्रमाणित करता है।. यह अंतर्राष्ट्रीय योग्यता उन्हें अत्याधुनिक टेस्ट-ट्यूब बेबी उपचार पद्धतियों (IVF), आईसीएसआई (ICSI), और उन्नत क्रायोप्रिजर्वेशन (Cryopreservation) को अत्यंत सटीकता के साथ संभालने के लिए आवश्यक क्लिनिकल अंतर्दृष्टि प्रदान करती है। वह वैश्विक प्रयोगशाला मानकों को सीधे रोगी देखभाल में लाते हैं।. उनका अंतर्राष्ट्रीय शैक्षणिक अनुभव उन्हें विश्व स्तर पर स्वीकृत फर्टिलिटी प्रोटोकॉल और वैज्ञानिक समाधानों को लागू करने में सक्षम बनाता है। यह विशिष्ट ज्ञान उन्हें बार-बार विफल हुए आईवीएफ मामलों का सटीक निदान और विशेष उपचार करने की असाधारण क्षमता देता है।.",}
    }
  },
  
"iswarya-coimbatore": {
  id: "iswarya-coimbatore",
  eyebrow: "HEALTHCARE LEADERSHIP",
  title: "Iswarya Fertility Centre — Coimbatore",
  year: "2006",
  description: "Coimbatore centre.",
  image: "/images/iswarya-coimbatore.jpg",
  translations: {
    en: {
      eyebrow: "HEALTHCARE LEADERSHIP",
      title: "Iswarya Fertility Centre — Coimbatore",
      year: "2006",
      description: "Established to bring advanced reproductive solutions close to home for couples across Coimbatore and nearby districts, this center eliminates the need to travel to distant metros for high-end treatments, delivering global standards affordably. The facility features international-standard cleanroom laboratories, sophisticated setups for Intracytoplasmic Sperm Injection (ICSI), Laser-Assisted Hatching, and advanced Preimplantation Genetic Screening (PGS/PGD). Under the strategic insights of Dr. K. Veluswamy, a highly skilled team of specialists designs personalized diagnostic pathways, achieving remarkable success rates even for complex cases and recurrent IVF failures. Beyond clinical excellence, the center prioritizes psychological counseling and transparent patient updates, ensuring a stress-free and supportive journey for every couple striving to experience the ultimate joy of a child.",
    },
    ta: {
      eyebrow: "சுகாதாரத் தலைமைத்துவம்",
      title: "ஐஸ்வர்யா கருத்தரிப்பு மையம் — கோயம்புத்தூர்",
      year: "2006",
      description: "கோயம்புத்தூர் மற்றும் அதனைச் சுற்றியுள்ள மாவட்ட மக்களின் நீண்டகாலக் குழந்தைப்பேறு ஏக்கத்தைத் தீர்ப்பதற்காக அதிநவீன வசதிகளுடன் இம்மையம் தொடங்கப்பட்டது. உயர்தர மருத்துவ வசதிகள் பெருநகரங்களுக்குச் செல்லாமலேயே கொங்கு பகுதி மக்களுக்கு மிகக் குறைந்த செலவில் கிடைக்க இம்மையம் வழிவகை செய்துள்ளது. இங்கு சர்வதேசத் தரத்திற்கு நிகரான தூய்மையான காற்றுப் பரிமாற்ற வசதி கொண்ட ஆய்வகங்கள் (Cleanroom Labs), ஐசிஎஸ்ஐ (ICSI), லேசர் ஹாட்சிங் (Laser Hatching) மற்றும் மேம்பட்ட மரபணுப் பரிசோதனைக்கூடங்கள் (Genetic Screening) போன்ற வசதிகள் அமைக்கப்பட்டுள்ளன. டாக்டர் கே. வேலுச்சாமி அவர்களின் வழிகாட்டுதலின்படி, பலமுறை IVF தோல்வியடைந்த தம்பதியருக்கும் (Recurrent IVF Failure) துல்லியமான காரணங்களைக் கண்டறிந்து, தனிப்பயனாக்கப்பட்ட சிகிச்சை முறைகள் (Personalized Protocols) மூலம் மிக உயர்ந்த மருத்துவ வெற்றி விகிதத்தை (High Success Rates) இம்மையம் தொடர்ந்து வழங்கி வருகிறது.வெறும் சிகிச்சை மையமாக மட்டுமில்லாமல், தம்பதியரின் மன அழுத்தத்தைப் போக்கும் கனிவான ஆலோசனைகள் மற்றும் வெளிப்படையான மருத்துவ அணுகுமுறையின் மூலம் பல்லாயிரக்கணக்கான மகிழ்ச்சியான குடும்பங்களை உருவாக்கி, கோவையின் முதன்மை மருத்துவ அடையாளமாகத் திகழ்கிறது.",
    },
    hi: {
      eyebrow: "स्वास्थ्य सेवा नेतृत्व",
      title: "ऐश्वर्या फर्टिलिटी सेंटर — कोयंबटूर",
      year: "2006",
      description: "कोयंबटूर और आस-पास के जिलों के दंपत्तियों को उच्च स्तरीय चिकित्सा के लिए बड़े महानगरों की यात्रा करने की आवश्यकता को समाप्त करते हुए, यह केंद्र विश्व स्तरीय उपचार बहुत ही किफायती दरों पर स्थानीय स्तर पर प्रदान करता है।. इस संस्थान में अंतर्राष्ट्रीय मानक की क्लीनरूम प्रयोगशालाएं, आईसीएसआई (ICSI), लेजर-असिस्टेड हैचिंग और उन्नत आनुवंशिक परीक्षण (Genetic Screening) जैसी उन्नत सुविधाएं एक ही छत के नीचे उपलब्ध हैं।. डॉ. के. वेलुस्वामी के दूरदर्शी दृष्टिकोण के अनुसार, यहाँ के विशेषज्ञ डॉक्टरों की टीम बार-बार विफल हुए आईवीएफ मामलों का भी सटीक निदान करती है और व्यक्तिगत उपचार योजनाओं (Personalized Protocols) के माध्यम से उच्चतम सफलता दर सुनिश्चित करती है।. केवल चिकित्सा उपचार से परे, यह केंद्र दंपत्तियों के मानसिक तनाव को दूर करने के लिए परामर्श और पारदर्शी दृष्टिकोण को प्राथमिकता देता है, जिससे माता-पिता बनने की यह यात्रा अत्यंत सुखद और सफल हो सके।",
    },
  },
},
"iswarya-chennai": {
  id: "iswarya-chennai",
  eyebrow: "HEALTHCARE LEADERSHIP",
  title: "Iswarya Fertility Centre — Chennai",
  year: "2008",
  description: "Chennai centre.",
  image: "/images/iswarya-hospital.png",
  translations: {
    en: {
      eyebrow: "HEALTHCARE LEADERSHIP",
      title: "Iswarya Fertility Centre — Chennai",
      year: "2008",
      description: "Backed by over 39 years of clinical excellence, Iswarya Fertility Centre has been recognized and ranked as the 'No.1 IVF Centre in India' by prestigious national rankings like the 'Times of India and The Hindu'. The institution holds the distinct medical legacy of delivering India's first frozen egg and frozen sperm baby. Breaking scientific boundaries, it is also the first hospital in India to achieve successful IVF pregnancies for both a post-renal transplant patient and a breast cancer survivor. The state-of-the-art Iswarya Hospital OMR is a NABH-certified tertiary care facility featuring 400+ beds, 100+ specialists, and 20+ departments. It drives high-end interventions including robotic-assisted surgeries, multi-organ transplantations (Kidney, Liver, and Heart), and advanced oncology systems backed by PET-CT and LINAC radiation therapy.",
    },
    ta: {
      eyebrow: "சுகாதாரத் தலைமைத்துவம்",
      title: "ஐஸ்வர்யா கருத்தரிப்பு மையம் — சென்னை",
      year: "2008",
      description: "ஐஸ்வர்யா கருத்தரிப்பு மையம் (Iswarya Fertility Centre) தனது 39 ஆண்டுகளுக்கும் மேலான அசாத்திய மருத்துவச் சேவையின் மூலம் 'Times of India & The Hindu' நாளிதழ்களின் சுகாதாரத் தரவரிசையில் 'இந்தியாவின் நம்பர் 1 IVF மையமாக (No.1 IVF Centre) அங்கீகரிக்கப்பட்டுள்ளது'. இந்தியாவிலேயே முதன்முறையாக உறைவிக்கப்பட்ட முட்டை மற்றும் உறைவிக்கப்பட்ட விந்தணு மூலம் (India's first frozen egg + sperm baby) ஆரோக்கியமான குழந்தையைப் பெற்றெடுத்த பெருமை இம்மையத்தையே சாரும். மேலும், சிறுநீரக மாற்று அறுவை சிகிச்சை செய்துகொண்ட பெண்ணுக்கும் (Renal Transplant Patient) மற்றும் மார்பகப் புற்றுநோயிலிருந்து மீண்ட பெண்ணுக்கும் (Breast Cancer Survivor) வெற்றிகரமாக IVF சிகிச்சை அளித்து இந்தியாவில் புதிய சாதனை படைத்துள்ளது. ஐஸ்வர்யா மருத்துவமனை (Iswarya Hospital OMR) தற்போது NABH சான்றிதழ் பெற்ற ஒரு முதன்மை மையமாகத் திகழ்கிறது. இங்கு அதிநவீன ரோபோடிக் அறுவை சிகிச்சைகள் (Robotic-Assisted Surgery), சிறுநீரகம், கல்லீரல் மற்றும் இருதய மாற்று அறுவை சிகிச்சைகள் (Multi-Organ Transplantation), மற்றும் PET-CT & LINAC கதிர்வீச்சு வசதிகளுடன் கூடிய பிரத்யேக புற்றுநோய் சிகிச்சை மையம் (Cancer Centre) போன்ற உலகத்தரம் வாய்ந்த உள்கட்டமைப்புகள் செயல்பட்டு வருகின்றன.",
    },
    hi: {
      eyebrow: "स्वास्थ्य सेवा नेतृत्व",
      title: "ऐश्वर्या फर्टिलिटी सेंटर — चेन्नई",
      year: "2008",
      description: "पिछले 39 से अधिक वर्षों की उत्कृष्ट चिकित्सा सेवा के दम पर, ऐश्वर्या फर्टिलिटी सेंटर (Iswarya Fertility Centre) को प्रतिष्ठित 'Times of India और The Hindu' द्वारा भारत के नंबर 1 आईवीएफ सेंटर (No.1 IVF Centre) के रूप में रैंक और सम्मानित किया गया है।. यह संस्थान भारत में पहली बार फ्रोजन एग और फ्रोजन स्पर्म तकनीक (India's first frozen egg + sperm baby) के माध्यम से एक स्वस्थ बच्चे को जन्म देने का गौरव रखता है। इसके अलावा, इसने गुर्दा प्रत्यारोपण (Renal Transplant) कराने वाली महिला और स्तन कैंसर (Breast Cancer) से उबरने वाली महिला के लिए सफल आईवीएफ (IVF) उपचार करके चिकित्सा विज्ञान की सीमाओं को पार किया है।. चेन्नई में स्थित ऐश्वर्या अस्पताल (Iswarya Hospital OMR) एक NABH-प्रमाणित अस्पताल है, जो 400+ बेड, 100+ विशेषज्ञों और 20+ विभागों से लैस है। यहाँ रोबोटिक-असिस्टेड सर्जरी, मल्टी-ऑर्गन ट्रांसप्लांटेशन (किडनी, लिवर और हार्ट), और PET-CT व LINAC रेडिएशन थेरेपी जैसी अत्याधुनिक कैंसर उपचार प्रणालियाँ एक ही छत के नीचे उपलब्ध हैं।. वैश्विक मानकों को आम जनता की पहुंच में लाने के लिए, बुनियादी आईवीएफ (IVF) उपचार ₹99,000 से शुरू होता है, जिसे ₹9,999/माह से शुरू होने वाली आसान ईएमआई (EMI) योजनाओं के माध्यम से बेहद किफायती बनाया गया है।.",
    },
  },
},
"iswarya-madurai": {
  id: "iswarya-madurai",
  eyebrow: "HEALTHCARE LEADERSHIP",
  title: "Iswarya Fertility Centre — Madurai",
  year: "2010",
  description: "Madurai centre.",
  image: "/images/iswarya-madurai.jpg",
  translations: {
    en: {
      eyebrow: "HEALTHCARE LEADERSHIP",
      title: "Iswarya Fertility Centre — Madurai",
      year: "2010",
      description: "Founded in 2010 to eliminate the geographical barrier for couples in South TN who previously had to travel to distant metropolitan cities for high-end reproductive treatments. The Madurai facility houses an ultra-modern Class 10,000 embryology laboratory, meticulously regulating air purity, temperature, and humidity—factors absolutely critical for optimal embryo survival and success rates. Delivers direct local access to revolutionary reproductive methodologies including Laser-Assisted Hatching, fast-freezing vitrification, advanced PCOD micro-management, and targeted male factor infertility tracks. Serving as a primary clinical hub for families spanning Madurai, Sivakasi, and surrounding southern belts, the branch consistently turns complex biological challenges into affordable parenthood miracles..",
    },
    ta: {
      eyebrow: "சுகாதாரத் தலைமைத்துவம்",
      title: "ஐஸ்வர்யா கருத்தரிப்பு மையம் — மதுரை",
      year: "2010",
      description: "தென் மாவட்டங்களைச் சேர்ந்த தம்பதியினர் உயர்தர மலட்டுத்தன்மை சிகிச்சைகளுக்காக சென்னை போன்ற தூரத்து நகரங்களுக்கு அலைவதைத் தவிர்க்கும் நோக்கில், கடந்த 2010 ஆம் ஆண்டு மதுரையில் இந்த பிரம்மாண்ட கிளை முறைப்படி தொடங்கப்பட்டது. சர்வதேசத் தரத்திற்கு நிகராக, காற்றில் உள்ள தூசிகள் மற்றும் வெப்பநிலையைக் கட்டுப்படுத்தும் 'கிளாஸ் 10,000' (Class 10,000 Embryology Lab) தூய்மையான ஆய்வக உள்கட்டமைப்புடன் இம்மையம் மதுரையில் செயல்படுகிறது. மதுரையில் உள்ள தம்பதியருக்கு லேசர் அசிஸ்டெட் ஹாட்சிங் (Laser-Assisted Hatching), அதிவேகக் குளிர்விப்பு முறை (Vitrification), மற்றும் பிசிஓடி (PCOD) மற்றும் ஆண் மலட்டுத்தன்மைக்கான பிரத்யேகத் தீர்வுகள் உள்ளூரிலேயே துல்லியமாக வழங்கப்படுகின்றன. வெறும் மதுரை மட்டுமன்றி சிவகாசி, திருநெல்வேலி, கன்னியாகுமரி உள்ளிட்ட தென் மாவட்டங்களைச் சேர்ந்த ஆயிரக்கணக்கான குடும்பங்களுக்குக் குறைந்த செலவில் நம்பிக்கையான தாய்மை வரத்தை வழங்கி இம்மையம் சாதனை படைத்து வருகிறது.",
    },
    hi: {
      eyebrow: "स्वास्थ्य सेवा नेतृत्व",
      title: "ऐश्वर्या फर्टिलिटी सेंटर — मदुरै",
      year: "2010",
      description: "दक्षिण तमिलनाडु के दंपत्तियों को उच्च स्तरीय फर्टिलिटी उपचारों के लिए दूर के महानगरों की यात्रा करने की बाध्यता को समाप्त करने के लिए, वर्ष 2010 में मदुरै में इस विशाल केंद्र की नींव रखी गई थी।. यह केंद्र अंतर्राष्ट्रीय मानक की 'क्लास 10,000' भ्रूणविज्ञान प्रयोगशाला (Class 10,000 Embryology Lab) से लैस है, जो भ्रूण की सुरक्षा और उच्चतम सफलता दर के लिए हवा की गुणवत्ता और तापमान को पूरी तरह नियंत्रित रखती है।. मदुरै केंद्र स्थानीय स्तर पर लेजर-असिस्टेड हैचिंग (Laser-Assisted Hatching), विट्रिफिकेशन (तेजी से फ्रीजिंग तकनीक), और पीसीओडी (PCOD) व पुरुष बांझपन के लिए सटीक वैज्ञानिक समाधान प्रदान करता है।.  मदुरै, शिवकाशी और आस-पास के सभी दक्षिणी क्षेत्रों के हजारों निःसंतान दंपत्तियों के जीवन में बहुत ही किफायती दरों पर खुशियां लाकर यह केंद्र दक्षिण तमिलनाडु में विश्वास का एक अद्वितीय प्रतीक बन चुका है।.",
    },
  },
},

  
"bharath-vidya-bhavan": {
  id: "bharath-vidya-bhavan",
  eyebrow: "EDUCATION & COMMUNITY",
  title: "Baarath Vidhya Bavan Matriculation School",
  year: "1996 onwards",
  description: "Educational initiatives in Palani include B.V.B. Matriculation School, BPS Chat Public School and nursing education institutions. Their official names, founding dates and current figures should be confirmed before publishing.",
  image: "/images/education-school.jpg",
  translations: {
    en: {
      eyebrow: "EDUCATION & COMMUNITY",
      title: "Baarath Vidhya Bavan Matriculation School",
      year: "1996 onwards",
      description: "Driven by the belief that quality education is the bedrock of societal empowerment, Dr. K. Veluswamy expanded his philanthropy into primary education. The school aims to blend academic rigor with ethical leadership to nurture responsible global citizens. The institution boasts well-ventilated classrooms, advanced scientific and computer laboratories, and a comprehensive digital library curated to inspire young learners. Beyond standard textbooks, the school prioritizes co-curricular activities, including sports, arts, and physical wellness programs, ensuring the balanced growth of every student. A team of highly qualified mentors provides individualized attention, deploying innovative teaching methodologies to bring out the best analytical and creative potential in children.",
    },
    ta: {
      eyebrow: "கல்வி மற்றும் சமூகம்",
      title: "பாரத் வித்யா பவன் மெட்ரிகுலேஷன் பள்ளி",
      year: "1996 முதல்",
      description: "டாக்டர் கே. வேலுச்சாமி அவர்கள் சுகாதாரத் துறையோடு நின்றுவிடாமல், சமுதாயத்தின் அடித்தளமாக விளங்கும் கல்வித் துறையிலும் புரட்சியை ஏற்படுத்த விரும்பினார். அதன் விளைவாகத் தொடங்கப்பட்ட இப்பள்ளி, மாணவர்களின் அறிவுத்திறனை மேம்படுத்துவதோடு மட்டுமல்லாமல், அவர்களைச் சிறந்த குடிமக்களாக உருவாக்குவதையும் நோக்கமாகக் கொண்டுள்ளது. இப்பள்ளி விசாலமான காற்றோட்டமுள்ள வகுப்பறைகள், நவீன அறிவியல் ஆய்வகங்கள் (Science Labs), கணினிப் பயிற்சி கூடங்கள் மற்றும் மாணவர்களின் வாசிப்புத் திறனை ஊக்குவிக்கும் விரிவான நூலக வசதி ஆகியவற்றைக் கொண்டுள்ளது. பாடப் புத்தகக் கல்விக்கு அப்பால் விளையாட்டு, யோகா, கலை மற்றும் கலாச்சார நிகழ்வுகளுக்கு முக்கியத்துவம் அளிக்கப்படுகிறது. மாணவர்களின் தனித்திறமைகளைக் கண்டறிந்து வளர்ப்பதில் இப்பள்ளி பிரத்யேக கவனம் செலுத்துகிறது. அனுபவமிக்க மற்றும் அர்ப்பணிப்புள்ள ஆசிரியர்கள் மூலம், ஒவ்வொரு மாணவரின் மீதும் தனிப்பட்ட கவனம் செலுத்தப்பட்டு, அவர்களின் கற்றல் திறன் மற்றும் ஒழுக்க நெறிகள் சிறந்த முறையில் மெருகேற்றப்படுகின்றன.",
    },
    hi: {
      eyebrow: "शिक्षा और समुदाय",
      title: "भारथ विद्या भवन मैट्रिकुलेशन स्कूल",
      year: "1996 से",
      description: "गुणवत्तापूर्ण शिक्षा को सामाजिक सशक्तिकरण का आधार मानते हुए, डॉ. के. वेलुस्वामी ने प्राथमिक शिक्षा के क्षेत्र में कदम रखा। इस स्कूल का उद्देश्य जिम्मेदार वैश्विक नागरिकों को तैयार करने के लिए नैतिक मूल्यों के साथ आधुनिक शिक्षा प्रदान करना है।. संस्थान में हवादार कक्षाएं, उन्नत विज्ञान और कंप्यूटर प्रयोगशालाएं और युवा शिक्षार्थियों को प्रेरित करने के लिए एक व्यापक पुस्तकालय की सुविधा उपलब्ध है।. किताबी ज्ञान से परे, स्कूल खेल, कला और योग जैसी गतिविधियों को प्राथमिकता देता है, जिससे प्रत्येक छात्र का मानसिक और शारीरिक रूप से संतुलित विकास सुनिश्चित हो सके।. अनुभवी और योग्यता प्राप्त शिक्षकों की एक टीम बच्चों में विश्लेषणात्मक और रचनात्मक क्षमता विकसित करने के लिए नवीन शिक्षण पद्धतियों का उपयोग करती है।.",
    },
  },
},
"bharath-public-school": {
  id: "bharath-public-school",
  eyebrow: "EDUCATION & COMMUNITY",
  title: "Baarath Public School",
  year: "Verify year",
  description: "Baarath Public School.",
  image: "/images/bharath-public-school.jpg",
  translations: {
    en: {
      eyebrow: "EDUCATION & COMMUNITY",
      title: "Baarath Public School",
      year: "2017 - onwards",
      description: "To prepare young learners for the evolving demands of the 21st century, Dr. K. Veluswamy conceptualized this ultra-modern institution in 2017, introducing a balanced, inquiry-based learning framework. The institution features fully immersive smart classrooms, advanced robotics and language labs, and highly resourced interactive centers tailored to promote scientific curiosity. Moving away from rote memorization, the academic model emphasizes experiential learning, analytical reasoning, and public speaking to cultivate self-confident and empathetic future leaders. Equipped with expansive sports layouts, the school provides professional mentorship in athletics, martial arts, and yoga, ensuring the physical and mental well-being of every child.",
    },
    ta: {
      eyebrow: "கல்வி மற்றும் சமூகம்",
      title: "பாரத் பப்ளிக் பள்ளி",
      year: "2017 -  முதல் ",
      description: "21-ஆம் நூற்றாண்டின் சவால்களை எதிர்கொள்ளும் வகையில், மாணவர்களுக்குத் தொழில்நுட்பம் சார்ந்த பகுப்பாய்வுக் கல்வியை ஆரம்பத்திலிருந்தே வழங்க வேண்டும் என்ற நோக்கில், டாக்டர் கே. வேலுச்சாமி அவர்கள் கடந்த 2017 ஆம் ஆண்டில் இப்பள்ளியைத் தோற்றுவித்தார். இப்பள்ளி அதிநவீன ஸ்மார்ட் வகுப்பறைகள், கணினி மற்றும் மொழியியல் ஆய்வகங்கள், மற்றும் அறிவியல் கண்டுபிடிப்புகளை ஊக்குவிக்கும் பிரத்யேகச் செயல்முறைக்கூடங்களைக் கொண்டு திகழ்கிறது. மனப்பாடம் செய்யும் கல்வி முறைக்கு மாற்றாக, மாணவர்களின் சுயசிந்தனை, தலைமைப் பண்பு, மற்றும் பேச்சாற்றல் ஆகியவற்றை வளர்க்கும் வகையில் நவீனப் பயிற்றுவிப்பு முறைகள் இங்கு பின்பற்றப்படுகின்றன. விசாலமான விளையாட்டு மைதானத்துடன், தடகளம், யோகா, மற்றும் உள்விளையாட்டுப் போட்டிகளுக்கான சர்வதேசத் தரத்திலான சிறப்புப் பயிற்சியாளர்கள் மூலம் மாணவர்களின் உடல் மற்றும் மன ஆரோக்கியம் சமச்சீராகப் மேம்படுத்தப்படுகிறது.",
    },
    hi: {
      eyebrow: "शिक्षा और समुदाय",
      title: "भारथ पब्लिक स्कूल",
      year: "2017 - से",
      description: "21वीं सदी की बदलती मांगों के लिए युवा शिक्षार्थियों को तैयार करने के उद्देश्य से, डॉ. के. वेलुस्वामी ने वर्ष 2017 में इस आधुनिक संस्थान की स्थापना की, जो छात्रों में खोजी दृष्टिकोण और व्यावहारिक समझ विकसित करता है।. संस्थान में पूरी तरह से तकनीकी-युक्त स्मार्ट कक्षाएं, उन्नत रोबोटिक्स और भाषा प्रयोगशालाएं (Language Labs) और वैज्ञानिक जिज्ञासा को बढ़ावा देने के लिए इंटरैक्टिव संसाधन केंद्र शामिल हैं।. रटने की प्रणाली से परे, यहाँ का शैक्षणिक मॉडल व्यावहारिक सीखने, विश्लेषणात्मक तर्क और सार्वजनिक भाषण (Public Speaking) पर जोर देता है ताकि आत्मनिर्भर भविष्य के नेताओं का निर्माण किया जा सके।. विशाल खेल परिसरों से सुसज्जित, यह स्कूल एथलेटिक्स, योग और शारीरिक कल्याण कार्यक्रमों में पेशेवर मार्गदर्शन प्रदान करता है, जिससे प्रत्येक बच्चे का संतुलित मानसिक और शारीरिक विकास सुनिश्चित हो सके।.",
    },
  },
},
"bharath-college-nursing": {
  id: "bharath-college-nursing",
  eyebrow: "EDUCATION & COMMUNITY",
  title: "Baarath College of Nursing",
  year: "Verify year",
  description: "Baarath College of Nursing.",
  image: "/images/baarath-nursing-college.jpg",
  translations: {
    en: {
      eyebrow: "EDUCATION & COMMUNITY",
      title: "Baarath College of Nursing",
      year: "2010 onwards",
      description: "Recognizing that skilled nursing care is the backbone of successful medical interventions, Dr. K. Veluswamy founded this institution in 2010 under the V C Educational Trust to uplift rural and urban students through professional healthcare education.The curriculum goes beyond classroom bounds, offering students exclusive clinical training within the highly advanced setups of the Iswarya Group of Hospitals, ensuring exceptional bedside diagnostic and care competencies.The campus is equipped with highly sophisticated nursing arts laboratories, advanced anatomy centers, and a deeply resourceful medical library designed to foster real-world clinical acumen.By embedding international standards of healthcare ethics and intensive professional training, the college successfully drives a stellar track record of global placements in elite medical organizations.",
    },
    ta: {
      eyebrow: "கல்வி மற்றும் சமூகம்",
      title: "பாரத் செவிலியர் கல்லூரி",
      year: "2010 முதல்",
      description: "ஆரோக்கியமான சமுதாயத்தை உருவாக்கத் தகுதியான மருத்துவப் பணியாளர்கள் அவசியம் என்பதை உணர்ந்து, டாக்டர் கே. வேலுச்சாமி அவர்கள் கடந்த 2010 ஆம் ஆண்டில் வி.சி. கல்வி அறக்கட்டளையின் கீழ் இக்கல்லூரியை முறைப்படி தோற்றுவித்தார். இக்கல்லூரி வெறும் தியரி பாடங்களோடு நின்றுவிடாமல், மாணவிகளுக்கு ஐஸ்வர்யா குழும மருத்துவமனைகளின் அதிநவீன உள்கட்டமைப்பில் நேரடியாகக் கிளினிக்கல் பயிற்சிகளைப் (Practical Training) பெறும் அரிய வாய்ப்பை வழங்குகிறது. மாணவிகளின் மருத்துவத் திறனை மேம்படுத்த பிரத்யேக அனாடமி லேப்கள், மேம்பட்ட செவிலியர் செய்முறைக்கூடங்கள், மற்றும் பல்லாயிரக்கணக்கான மருத்துவப் புத்தகங்களைக் கொண்ட விரிவான நூலக வசதிகளை இந்த வளாகம் கொண்டுள்ளது. தொழில்முறை ஒழுக்கத்துடன் கூடிய உலகத்தரப் பயிற்றுவிப்பு முறைகளால், இங்கு பயின்று வெளிவரும் மாணவிகள் இந்திய அளவில் மட்டுமின்றி, உலகளாவிய முன்னணி மருத்துவமனைகளிலும் 100% சிறந்த வேலைவாய்ப்புகளைப் பெற்றுத் திகழ்கிறார்கள்.",
    },
    hi: {
      eyebrow: "शिक्षा और समुदाय",
      title: "भारथ नर्सिंग कॉलेज",
      year: "2010 onwards",
      description: "यह मानते हुए कि कुशल नर्सिंग देखभाल ही सफल चिकित्सा का मुख्य आधार है, डॉ. के. वेलुस्वामी ने वी.सी. एजुकेशनल ट्रस्ट के तहत वर्ष 2010 में इस प्रतिष्ठित कॉलेज की स्थापना की, ताकि स्वास्थ्य सेवा क्षेत्र में एक नया शैक्षणिक बदलाव लाया जा सके।. यह संस्थान केवल किताबी ज्ञान तक सीमित नहीं है, बल्कि छात्राओं को ऐश्वर्या ग्रुप ऑफ हॉस्पिटल्स के अत्याधुनिक चिकित्सा बुनियादी ढांचे के भीतर सीधे व्यावहारिक क्लिनिकल प्रशिक्षण (Practical Training) प्राप्त करने का अमूल्य अवसर प्रदान करता है।. परिसर में अत्याधुनिक नर्सिंग आर्ट्स प्रयोगशालाएं, उन्नत शरीर रचना विज्ञान (Anatomy) केंद्र और चिकित्सा अनुसंधान को बढ़ावा देने के लिए एक व्यापक डिजिटल और भौतिक पुस्तकालय की सुविधा उपलब्ध है।. अंतर्राष्ट्रीय स्तर के शिक्षण मानकों और व्यावसायिक नैतिकता को समाहित करके, यह कॉलेज छात्राओं को न केवल भारत में बल्कि दुनिया भर के अग्रणी अस्पतालों में 100% उत्कृष्ट प्लेसमेंट दिलाने में निरंतर सफल रहा है।",
    },
  },
},

  research: {
    id: "research", eyebrow: "RESEARCH & INNOVATION", title: "A Focus on Medical Research", year: "Research initiative",
    description: "The document mentions Chengene Private Limited and a cancer-drug research centre at MEPZ, Tambaram. The institution's official name, current status and Dr. Veluswamy's specific role require confirmation.",
    image: "/images/chengene-research-lab.jpg",
    translations: {
      en: { eyebrow: "RESEARCH & INNOVATION", title: "A Focus on Medical Research", year: "Chengene Private Limited", description: "Established in 2023 to bridge the gap in affordable biopharmaceuticals, the institution focuses on developing high-quality biosimilar therapeutics that mirror reference biologics for safety, structural molecular complexity, and clinical efficacy. The advanced R&D segment is actively driving high-end projects, including Recombinant FSH and Recombinant HCG for fertility management, alongside breakthrough monoclonal antibodies such as Pembrolizumab, Ramucirumab, and Omalizumab for critical illnesses. The specialized biosimilar plant located in Chennai accommodates full self-reliance across cell-line development, gene cloning, pilot-scale upstream, downstream processing, and fill-finish workflows under strict quality control. Fostering future innovations, the center actively hosts academic tours, providing elite hands-on clinical and instrumentation insights to biotechnology students under the direct mentorship of Dr. K. Veluswamy.",},
      ta: { eyebrow: "ஆராய்ச்சி மற்றும் புதுமை", title: "உயிரித் தொழில்நுட்பப் பயணம்", year: "சென்ஜீன் பிரைவேட் லிமிடெட்", description: "இறக்குமதி செய்யப்படும் விலையுயர்ந்த உயிரியல் மருந்துகளுக்கு மாற்றாக, இந்தியாவிலேயே உலகத்தரம் வாய்ந்த பாதுகாப்பான மற்றும் திறனுள்ள பயோசிமிலர் (Biosimilar) மருந்துகளை உருவாக்க வேண்டும் என்ற நோக்கில் டாக்டர் கே. வேலுச்சாமி அவர்களால் 2023 ஆம் ஆண்டில் இந்த நிறுவனம் தோற்றுவிக்கப்பட்டது. இம்மையம் தற்போது இனப்பெருக்க அறிவியலை மேம்படுத்தும் ரீகாம்பினன்ட் FSH (Recombinant FSH) மற்றும் HCG  (Recombinant HCG) உள்ளிட்ட ஹார்மோன் மருந்துகளையும், புற்றுநோய் மற்றும் மரபணு சார்ந்த தீவிர நோய்களைக் குணப்படுத்தும் பெம்ப்ரோலிசுமாப் (Pembrolizumab) போன்ற அதிநவீன மோனோக்ளோனல் ஆன்டிபாடிகளையும் (Monoclonal Antibodies) தீவிரமாக ஆராய்ச்சி செய்து வருகிறது. சென்னையில் உள்ள இதன் அதிநவீன பயோசிமிலர் ஆலையானது (Biosimilar Plant), மரபணு குளோனிங் (Gene Cloning), அப்ஸ்ட்ரீம், டவுன்ஸ்ட்ரீம் செயலாக்கம் மற்றும் இறுதி வடிவ மருந்து (Fill-Finish) தயாரிப்பு வரை அனைத்தையும் ஒரே நிறுவனத்தின்  கீழ் மேற்கொள்ளும் முழுமையான தன்னாதிக்க வசதிகளைக் கொண்டுள்ளது. வெறும் ஆராய்ச்சிப் பணிகளோடு நின்றுவிடாமல், முன்னணிப் பல்கலைக்கழகங்களின் பயோடெக்னாலஜி மாணவர்களை நேரடியாகத் தங்களது ஆய்வகங்களுக்கு வரவழைத்து, அவர்களுக்குப் பயோபார்மா செயல்பாடுகள் குறித்த நேரடிப் பயிற்சிகளை வழங்கி கல்வித் துறையிலும் டாக்டர் கே. வேலுச்சாமியின் வழிகாட்டுதலில் இம்மையம் முத்திரை பதித்து வருகிறது.",},
      hi: { eyebrow: "अनुसंधान और नवाचार", title: "चिकित्सा अनुसंधान पर ध्यान", year: "अनुसंधान पहल", description: "महंगी आयातित जैविक दवाओं पर निर्भरता समाप्त करने के लिए, डॉ. के. वेलुस्वामी द्वारा वर्ष 2023 में इस संस्थान की स्थापना की गई थी, जिसका मुख्य उद्देश्य सुरक्षा और प्रभावकारिता के उच्चतम मानकों के साथ उच्च गुणवत्ता वाले बायोसिमिलर उपचार विकसित करना है।. यह उन्नत केंद्र वर्तमान में प्रजनन विज्ञान के लिए रिकॉम्बिनेंट एफएसएच (Recombinant FSH) और एचसीजी (Recombinant HCG) के साथ-साथ कैंसर और गंभीर बीमारियों के इलाज में उपयोग होने वाली पेम्ब्रोलिज़ुमैब (Pembrolizumab) जैसी अत्याधुनिक मोनोक्लोनल एंटीबॉडी दवाओं पर गहन शोध कर रहा है।. चेन्नई में स्थित इसका अत्याधुनिक बायोसिमिलर प्लांट (Biosimilar Plant) जीन क्लोनिंग, अपस्ट्रीम, डाउनस्ट्रीम प्रोसेसिंग और अंतिम उत्पाद (Fill-Finish) विकास तक की सभी प्रक्रियाओं को पूरी तरह स्वदेशी और इन-हाउस संचालित करने की क्षमता रखता है।. वैज्ञानिक नवाचारों को बढ़ावा देने के लिए, डॉ. के. वेलुस्वामी के मार्गदर्शन में यह संस्थान विश्वविद्यालय के बायोटेक छात्रों के लिए व्यावहारिक कार्यशालाएं आयोजित करता है, ताकि देश में अनुसंधान और विकास को मजबूती दी जा सके।",}
    }
  }
};

export const familyProfiles = {
  chandralekha: {
    name: {
      en: "Dr. S. Chandralekha",
      ta: "டாக்டர் எஸ். சந்திரலேகா",
      hi: "डॉ. एस. चंद्रलेखा",
    },
    role: {
      en: "Wife and Co-founder of Iswarya Fertility Centre",
      ta: "மனைவி மற்றும் ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டரின் இணை நிறுவனர்",
      hi: "पत्नी और इस्वर्या फर्टिलिटी सेंटर की सह-संस्थापक",
    },
    description: {
      en: "Dr. S. Chandralekha is the wife of Dr. K. Veluswamy and co-founder of Iswarya Fertility Centre. She has received seven gold medals in medical education. She works in obstetrics, gynaecology and laparoscopic surgery. Having performed more than 60,000 surgeries, she has brought light into many families and left an enduring impact on many lives.",
      ta: "டாக்டர் எஸ். சந்திரலேகா டாக்டர் கே. வேலுச்சாமியின் மனைவியும் ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டரின் இணை நிறுவனர் ஆவார். இவர் மருத்துவக் கல்வியில் ஏழு தங்கப் பதக்கங்கள் பெற்றுள்ளார். மகப்பேறு மருத்துவம் மகளிர் மருத்துவம் மற்றும் லேப்ராஸ்கோபிக் அறுவை சிகிச்சையில் பணியாற்றி வருகிறார். 60,000 மேற்பட்ட அறுவை சிகிச்சைகள் செய்து பல்வேறு குடும்பங்களின் வீடுகளில் ஒளிச்சுடராய் இன்றும் பல உயிர்களின் வாழ்வில் அழியாப் புகழ் படைத்துள்ளார்.",
      hi: "डॉ. एस. चंद्रलेखा, डॉ. के. वेलुस्वामी की पत्नी और इस्वर्या फर्टिलिटी सेंटर की सह-संस्थापक हैं। उन्होंने चिकित्सा शिक्षा में सात स्वर्ण पदक प्राप्त किए हैं। वह प्रसूति, स्त्री रोग और लैप्रोस्कोपिक सर्जरी के क्षेत्र में कार्यरत हैं। 60,000 से अधिक सर्जरी करके उन्होंने अनेक परिवारों के जीवन में आशा की रोशनी जगाई है और कई लोगों के जीवन पर अमिट प्रभाव छोड़ा है।",
    },
    quote: {
      en: "Though time may pass, there is no need to lose hope; the address of the belief, “You too will have a child!”",
      ta: "காலம் தாழ்ந்தாலும் கலங்கத் தேவையில்லை;\n\"உங்களுக்கும் ஒரு குழந்தை\" உண்டு என்ற நம்பிக்கையின் முகவரி!",
      hi: "भले ही देर हो जाए, निराश होने की आवश्यकता नहीं; “आपको भी एक संतान होगी” — इसी विश्वास का पता!",
    },
  },
  aravind: {
    name: {
      en: "Dr. Aravind Chandar",
      ta: "டாக்டர் அரவிந்த் சந்தர்",
      hi: "डॉ. अरविंद चंदर",
    },
    role: {
      en: "Elder son",
      ta: "மூத்த மகன்",
      hi: "बड़े पुत्र",
    },
    description: {
      en: "Dr. Aravind Chandar is described as the elder son of the family. He received postgraduate training in general surgery and specialised training related to in vitro fertilisation (IVF), including in London. Dr. Aravind's IVF is reported to have more than 30 branches and to have achieved a Guinness World Records-related distinction in 2019.",
      ta: "டாக்டர் அரவிந்த் சந்தர் குடும்பத்தின் மூத்த மகனாகக் குறிப்பிடப்படுகிறார். இவர் பொது அறுவை சிகிச்சையில் முதுகலைப் பயிற்சி பெற்றதுடன் லண்டன் உள்ளிட்ட இடங்களில் செயற்கைக் கருத்தரிப்பு (IVF) தொடர்பான சிறப்புப் பயிற்சிகளையும் பெற்றுள்ளார். டாக்டர் அரவிந்த்ஸ் IVF நிறுவனம் 3௦-க்கும் மேற்பட்ட கிளைகளைக் கொண்டுள்ளதாகவும் 2019 - ஆம் ஆண்டில் கின்னஸ் உலகச் சாதனையுடன் தொடர்புடைய சாதனையைப் படைத்த்துள்ளார்.&#x20;",
      hi: "डॉ. अरविंद चंदर को परिवार का बड़ा बेटा बताया गया है। उन्होंने जनरल सर्जरी में स्नातकोत्तर प्रशिक्षण के साथ लंदन सहित विभिन्न स्थानों पर इन-विट्रो फर्टिलाइजेशन (IVF) से संबंधित विशेष प्रशिक्षण प्राप्त किया है। बताया गया है कि डॉ. अरविंद्स IVF की 30 से अधिक शाखाएँ हैं और 2019 में इसका गिनीज़ वर्ल्ड रिकॉर्ड्स से संबंधित एक उल्लेखनीय उपलब्धि से जुड़ाव रहा।",
    },
    quote: {
      en: "The wondrous point where science and spiritual wisdom meet, the walking deity who makes it bloom on earth — the doctor.",
      ta: "விஞ்ஞானமும் மெய்ஞானமும் இணையும் அற்புதப் புள்ளி,\nஅதை மண்ணில் மலரவைக்கும் நடமாடும் தெய்வம் மருத்துவர்",
      hi: "वह अद्भुत बिंदु जहाँ विज्ञान और आध्यात्मिक ज्ञान मिलते हैं; वह चलते-फिरते देवतुल्य चिकित्सक जो इसे धरती पर साकार करते हैं।",
    },
  },
  arun: {
    name: {
      en: "Dr. Arun Muthuvel",
      ta: "டாக்டர் அருண் முத்துவேல்",
      hi: "डॉ. अरुण मुथुवेल",
    },
    role: {
      en: "Younger son",
      ta: "இளைய மகன்",
      hi: "छोटे पुत्र",
    },
    description: {
      en: "Dr. Arun Muthuvel is described as the younger son. He has postgraduate qualifications in obstetrics and gynaecology and a master's qualification in reproductive medicine and surgery. He is the Managing Director of Iswarya Fertility Centre and is also involved in AI-based embryology monitoring.",
      ta: "டாக்டர் அருண் முத்துவேல் இளைய மகனாகக் குறிப்பிடப்படுகிறார். மகப்பேறு மற்றும் மகளிர் மருத்துவத்தில் முதுகலைப் படிப்பும் இனப்பெருக்க மருத்துவம் மற்றும் அறுவை சிகிச்சையில் மச் பட்டமும் பெற்றுள்ளார். ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டரின் Managing Director மற்றும் AI கருவியல் கண்காணிப்பிலும் சிறந்து விளங்குகின்றார்.",
      hi: "डॉ. अरुण मुथुवेल को परिवार का छोटा बेटा बताया गया है। उन्होंने प्रसूति एवं स्त्री रोग में स्नातकोत्तर शिक्षा तथा प्रजनन चिकित्सा और सर्जरी में मास्टर की योग्यता प्राप्त की है। वह इस्वर्या फर्टिलिटी सेंटर के प्रबंध निदेशक हैं और AI-आधारित भ्रूण-विज्ञान निगरानी में भी कार्यरत हैं।",
    },
    quote: {
      en: "The longing in the hearts waiting for motherhood is a darkness; the doctor is the shining lamp that dispels it and brings the light of conception!",
      ta: "தாய்மைக்காகக் காத்திருக்கும் நெஞ்சங்களின் ஏக்கம் ஒரு இருள்;\nஅதை நீக்கி கருத்தரிப்பைத் தரும் ஒளிரும் விளக்கு மருத்துவர்!",
      hi: "मातृत्व की प्रतीक्षा कर रहे दिलों की तड़प एक अंधकार है; उसे दूर कर गर्भधारण की आशा जगाने वाले प्रकाशमान दीप हैं डॉक्टर!",
    },
  },
} satisfies Record<string, {
  name: Record<Language, string>;
  role: Record<Language, string>;
  description: Record<Language, string>;
  quote: Record<Language, string>;
}>;