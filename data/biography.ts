export type Language = "en" | "ta" | "hi";

// EDIT ALL BIOGRAPHY WORDING IN THIS FILE ONLY.
// Each section has English (en), Tamil (ta), and Hindi (hi) text.
// Tamil text below is based on the supplied Tamil biography document.
export const languageNames: Record<Language, string> = { en: "English", ta: "தமிழ்", hi: "हिन्दी" };

export const biography = [
  {
    id: "early-life",
    title: {
      en: "1. Childhood and Early Life",
      ta: "1. பிறப்பு மற்றும் ஆரம்பகால வாழ்க்கை",
      hi: "1. बचपन और प्रारंभिक जीवन",
    },
    paragraphs: {
      en: [
        "Dr. K. Veluswamy Kuppanagounder was born into a modest farming family in a rural area near Madurai district, Tamil Nadu. His parents came from a simple agricultural background, and everyday life presented many challenges.",
        "He began his early education in Tamil at a village government school, at a time when local infrastructure and facilities were limited. Despite inadequate transport and electricity, his interest in education and persistent hard work helped him complete his schooling. His rural upbringing and farming background shaped his respect for hard work and compassion for ordinary people."
      ],
      ta: [
        "குடும்பப் பின்னணி மற்றும் பிறப்பு: டாக்டர் கே. வேலுச்சாமி அவர்கள் தமிழ்நாட்டில் உள்ள வரலாற்றுச் சிறப்புமிக்க madurai மாவட்டத்தில் உள்ள நகருக்கு அருகில் அமைந்துள்ள ஒரு மிகச் சாதாரண கிராமப்புற விவசாயக் குடும்பத்தில் பிறந்தார். அவரது பெற்றோர் எளிய விவசாயக் குடும்பப் பின்னணியைக் கொண்டவர்கள் என்பதால், அன்றாட வாழ்க்கையே பெரும் சவால்கள் நிறைந்ததாக இருந்தது.",
        "கல்விப் போராட்டமும் விடாமுயற்சியும்: வசதிகள் மற்றும் உள்கட்டமைப்புகள் மிகவும் பின்தங்கியிருந்த அந்த காலகட்டத்தில், தனது ஆரம்பக் கல்வியை கிராமத்தில் உள்ள ஒரு அரசுப் பள்ளியில் தமிழ் வழியில் தொடங்கினார். போக்குவரத்து வசதிகளோ, மின்சார வசதிகளோ போதிய அளவில் இல்லாத கிராமப்புறச் சூழலிலும், கல்வியின் மீது அவர் கொண்டிருந்த அலாதிப் பற்று மற்றும் ஆர்வம் காரணமாக, அவர் தனது ஆரம்ப மற்றும் மேல்நிலைப் பள்ளிப் படிப்பை மிகச் சிறந்த முறையில் உழைத்துப் படித்து முடித்தார். இந்த ஆரம்பகால கிராமப்புற வாழ்க்கையும், விவசாயப் பின்னணியும்தான் அவருக்கு உழைப்பின் மதிப்பையும், எளிய மக்களின் மீதான கருணையையும் கற்றுக்கொடுத்த அடித்தளமாக அமைந்தது."
      ],
      hi: [
        "डॉ. के. वेलुस्वामी कुप्पणगौंडर का जन्म तमिलनाडु के मदुरै जिले के पास एक ग्रामीण क्षेत्र में साधारण किसान परिवार में हुआ। उनके माता-पिता कृषि पृष्ठभूमि से थे और परिवार का दैनिक जीवन अनेक चुनौतियों से भरा था।",
        "उन्होंने सीमित सुविधाओं वाले समय में गाँव के सरकारी विद्यालय में तमिल माध्यम से प्रारंभिक शिक्षा शुरू की। परिवहन और बिजली जैसी सुविधाएँ पर्याप्त न होने के बावजूद शिक्षा के प्रति उनकी रुचि और निरंतर मेहनत ने उन्हें स्कूल की पढ़ाई पूरी करने में मदद की। ग्रामीण जीवन और कृषि परिवार ने उन्हें मेहनत का महत्व और आम लोगों के प्रति करुणा सिखाई।"
      ]
    }
  },
  {
    id: "education",
    title: { en: "2. Medical Education and AIIMS", ta: "2. கல்விப் பயணமும் எய்ம்ஸ் (AIIMS) சாதனையும்", hi: "2. चिकित्सा शिक्षा और AIIMS" },
    paragraphs: {
      en: [
        "Despite studying in Tamil at a village government school, Dr. Veluswamy performed strongly in the national medical entrance examination. This achievement became a major turning point in his life.",
        "He completed his MBBS under the University of Madras and later pursued an MD in Internal Medicine at the All India Institute of Medical Sciences (AIIMS), New Delhi. The supplied biography also lists further qualifications in Reproductive and Sexual Medicine, Dip USG and FCCP. He registered with the Tamil Nadu Medical Council in 1986 (registration number 40775) and began full-time medical practice."
      ],
      ta: [
        "மருத்துவ நுழைவுத்தேர்வு மைல்கல்: கிராமத்து அரசுப் பள்ளியில் தமிழ் வழியில் பயின்றபோதிலும், தனது அசாத்திய உழைப்பாலும் மதிநுட்பத்தாலும் அகில இந்திய அளவிலான மருத்துவ நுழைவுத் தேர்வில் (Medical Entrance Examination) தோன்றி மிகச் சிறந்த டாப் ரேங்க் பெற்றுச் சாதனை படைத்தார். இது அவரது வாழ்வின் மிகப்பெரிய திருப்புமுனையாக அமைந்தது.",
        "அடிப்படை மருத்துவக் கல்வி (MBBS): அவரது நுழைவுத்தேர்வு மதிப்பெண்களின் அடிப்படையில் சென்னை பல்கலைக்கழகத்தின் (University of Madras) கீழ் தனது மருத்துவப் படிப்பை (MBBS) வெற்றிகரமாக முடித்து மருத்துவ உலகிற்குள் நுழைந்தார்.",
        "முதுகலை மருத்துவக் கல்வி (MD - AIIMS): எம்பிபிஎஸ் முடித்த பின், இந்தியாவின் மிக உயரிய, முதன்மையான மருத்துவக் கல்வி நிறுவனமாகத் திகழும் புது தில்லி எய்ம்ஸ் (AIIMS - All India Institute of Medical Sciences) மருத்துவமனையில் பொது மருத்துவம் பிரிவில் முதுகலைப் பட்டம் (MD - Internal Medicine) பயிலும் அரிய வாய்ப்பைப் பெற்றார். எய்ம்ஸ் போன்ற தேசிய முக்கியத்துவம் வாய்ந்த நிறுவனத்தில் பயின்ற அனுபவம், அவருக்கு உலகத்தரம் வாய்ந்த மருத்துவ உத்திகளையும், மருத்துவ ஆராய்ச்சிகளின் முக்கியத்துவத்தையும் கற்றுக்கொடுத்தது.",
        "கூடுதல் சிறப்புப் பட்டங்கள்: பொது மருத்துவப் படிப்பிற்குப் பிறகு, மலட்டுத்தன்மை மற்றும் பாலியல் ஆரோக்கியக் குறைபாடுகளால் அவதியுறும் தம்பதியருக்கு உதவ வேண்டும் என்ற நோக்கில், இனப்பெருக்க மற்றும் பாலியல் மருத்துவத் துறையில் (M.Sc. in Reproductive and Sexual Medicine) கூடுதல் முதுகலைப் பட்ட தகுதிகளையும், அல்ட்ராசோனோகிராஃபி (Dip USG) மற்றும் FCCP போன்ற சிறப்புப் பயிற்சிகளையும் பெற்றார். பின்னர், 1986 ஆம் ஆண்டு தமிழ்நாடு மருத்துவக் கவுன்சிலில் (Tamil Nadu Medical Council - பதிவு எண்: 40775) அதிகாரப்பூர்வமாகத் தனது பெயரைப் பதிவு செய்து முழுநேர மருத்துவச் சேவையைத் தொடங்கினார்."
      ],
      hi: [
        "गाँव के सरकारी विद्यालय में तमिल माध्यम से पढ़ने के बावजूद, डॉ. वेलुस्वामी ने राष्ट्रीय चिकित्सा प्रवेश परीक्षा में उत्कृष्ट प्रदर्शन किया। यह उपलब्धि उनके जीवन का एक महत्वपूर्ण मोड़ बनी।",
        "उन्होंने मद्रास विश्वविद्यालय के अंतर्गत MBBS पूरा किया और बाद में नई दिल्ली स्थित अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS) से Internal Medicine में MD किया। उपलब्ध कराई गई जीवनी में Reproductive and Sexual Medicine में अतिरिक्त योग्यता, Dip USG और FCCP प्रशिक्षण का भी उल्लेख है। उन्होंने 1986 में तमिलनाडु मेडिकल काउंसिल में पंजीकरण कराया (पंजीकरण संख्या 40775) और पूर्णकालिक चिकित्सा सेवा शुरू की।"
      ]
    }
  },
  {
    id: "iswarya",
    title: { en: "3. Establishment of Iswarya Fertility Centre", ta: "3. ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டர் தொடக்கம் (1986)", hi: "3. इस्वर्या फर्टिलिटी सेंटर की स्थापना" },
    paragraphs: {
      en: [
        "In 1986, after completing higher studies at AIIMS, Dr. K. Veluswamy and his wife, Dr. S. Chandralekha, established Iswarya Fertility Centre to support couples experiencing infertility.",
        "The stated aim was to make advanced fertility care, including IVF, more accessible to rural and middle-income families. The supplied biography describes Dr. Veluswamy as leading the medical group and guiding its development over several decades."
      ],
      ta: [
        "நிறுவனத்தின் தோற்றம்: புது தில்லி எய்ம்ஸ் நிறுவனத்தில் தனது உயர்கல்வியை முடித்துத் திரும்பிய டாக்டர் கே. வேலுச்சாமி, 1986 ஆம் ஆண்டில் குழந்தைப்பேறு இல்லாத தம்பதிகளுக்குச் சிகிச்சையளிக்க வேண்டும் என்ற உன்னத நோக்கத்துடன் தனது மனைவி டாக்டர் எஸ். சந்திரலேகா அவர்களுடன் இணைந்து 'ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டர்' (Iswarya Fertility Centre) என்ற பெயரில் ஒரு பிரத்யேக குழந்தைப்பேறு மையத்தைத் தொடங்கினார்.",
        "நோக்கமும் தலைமையும்: அந்த காலகட்டத்தில் மலட்டுத்தன்மை மற்றும் IVF (In-Vitro Fertilization) போன்ற அதிநவீன சிகிச்சைகள் பெருநகரங்களில் உள்ள பெரும் பணக்காரர்களுக்கு மட்டுமே எட்டக்கூடிய ஒன்றாக இருந்தது. அதனை மாற்றி, கிராமப்புற மற்றும் நடுத்தர மக்களுக்கும் சர்வதேசத் தரத்திலான சிகிச்சைகள் மிகக் குறைந்த செலவில் கிடைக்கச் செய்வதே இவரது முதன்மை நோக்கமாக இருந்தது. கடந்த 39 ஆண்டுகளுக்கும் மேலாக இந்த மருத்துவக் குழுமத்தின் தலைவராக (Chairman) இருந்து, தனது நேர்மையான நிர்வாகத்தின் மூலமும், துல்லியமான மருத்துவ அணுகுமுறையினாலும் பல்லாயிரக்கணக்கான தம்பதியரின் வாழ்வில் குழந்தைப்பேறு மகிழ்ச்சியை ஏற்றி வைத்துள்ளார். ஆரம்பத்தில் எளிய மருத்துவமையாகத் தொடங்கப்பட்ட இந்த மையம், இன்று இந்தியாவின் முன்னணி மருத்துவக் குழுமங்களில் ஒன்றாக அசுர வளர்ச்சி கண்டுள்ளது."
      ],
      hi: [
        "1986 में AIIMS से उच्च शिक्षा पूरी करने के बाद, डॉ. के. वेलुस्वामी ने अपनी पत्नी डॉ. एस. चंद्रलेखा के साथ मिलकर संतानहीनता से जूझ रहे दंपतियों की सहायता के उद्देश्य से Iswarya Fertility Centre की स्थापना की।",
        "बताया गया उद्देश्य IVF सहित उन्नत प्रजनन उपचार को ग्रामीण और मध्यम आय वाले परिवारों तक अधिक सुलभ बनाना था। उपलब्ध जीवनी के अनुसार, डॉ. वेलुस्वामी ने कई दशकों तक इस चिकित्सा समूह का नेतृत्व किया और इसके विकास का मार्गदर्शन किया।"
      ]
    }
  },
  {
    id: "education-service",
    title: { en: "4. Educational Institutions", ta: "4. கல்வி நிறுவனங்களின் நிர்வாகம்", hi: "4. शैक्षणिक संस्थानों का संचालन" },
    paragraphs: {
      en: [
        "Alongside medicine, Dr. Veluswamy is described as believing that quality education is essential for social development. The supplied material states that two schools and one college operate under his administration and guidance.",
        "These institutions are described as aiming to provide education, discipline and career guidance at accessible fees, particularly for students from rural and middle-income families."
      ],
      ta: [
        "சமூகப் பார்வை: டாக்டர் கே. வேலுச்சாமி அவர்கள் ஒரு சிறந்த மருத்துவராக மட்டுமின்றி, சமுதாய மேம்பாட்டிற்குத் தரமான கல்வியே மிக முக்கியக் காரணி என்பதை ஆழமாக நம்பியவர். இதன் காரணமாக, அவர் மருத்துவத் துறையோடு தனது பணியை நிறுத்திக் கொள்ளாமல் கல்விச் சேவையிலும் தீவிரமாகப் பங்கெடுத்து வருகிறார்.",
        "கல்வி நிறுவனங்களின் தற்போதைய நிலை: தற்போது அவரது நேரடி நிர்வாகம் மற்றும் வழிகாட்டுதலின் கீழ் 2 பள்ளிகள் (Schools) மற்றும் 1 கல்லூரி (College) வெற்றிகரமாகச் செயல்பட்டு வருகின்றன. இக்கல்வி நிறுவனங்கள் மூலம் குறிப்பாகக் கிராமப்புற மற்றும் ஏழை எளிய நடுத்தரக் குடும்பங்களைச் சேர்ந்த மாணவ, மாணவிகளுக்குக் குறைந்த கட்டணத்தில் உலகத்தரம் வாய்ந்த கல்வி, ஒழுக்கம் மற்றும் சிறந்த வேலைவாய்ப்பு வழிகாட்டுதல்கள் வழங்கப்பட்டு வருகின்றன. லாப நோக்கமின்றி, சமூக நலனை மட்டுமே குறிக்கோளாகக் கொண்டு இக்கல்வி நிறுவனங்களை அவர் கடந்த பல ஆண்டுகளாகத் திறம்பட நடத்தி வருகிறார்."
      ],
      hi: [
        "चिकित्सा के साथ-साथ डॉ. वेलुस्वामी गुणवत्तापूर्ण शिक्षा को सामाजिक विकास का महत्वपूर्ण आधार मानते हैं। उपलब्ध सामग्री के अनुसार, उनके प्रशासन और मार्गदर्शन में दो स्कूल और एक कॉलेज संचालित होते हैं।",
        "इन संस्थानों का उद्देश्य विशेष रूप से ग्रामीण और मध्यम आय वाले परिवारों के विद्यार्थियों को सुलभ शुल्क पर शिक्षा, अनुशासन और करियर मार्गदर्शन प्रदान करना बताया गया है।"
      ]
    }
  },
  {
    id: "chengene",
    title: { en: "5. Chengene Private Limited", ta: "5. சென்ஜீன் பிரைவேட் லிமிடெட்", hi: "5. चेनजीन प्राइवेट लिमिटेड" },
    paragraphs: {
      en: [
        "The supplied biography describes Dr. Veluswamy’s move into biotechnology and pharmaceutical research through Chengene Private Limited, launched in December 2023. The company is described as operating in the MEPZ Special Economic Zone in Tambaram, Chennai.",
        "Its stated focus includes biopharmaceuticals and biosimilar drug development research. The supplied document names Dr. K. Veluswamy as Managing Director and his younger son, Dr. Arun Muthuvel, as a Director."
      ],
      ta: [
        "ஆராய்ச்சித் துறையில் புதிய காலடி: மருத்துவம் மற்றும் கல்வித் துறையில் தடம் பதித்த டாக்டர் கே. வேலுச்சாமி, நவீன உயிரியல் தொழில்நுட்பம் (Biotechnology) மற்றும் மருந்து தயாரிப்பு ஆராய்ச்சியில் இந்தியா தற்சார்பு அடைய வேண்டும் என்ற நோக்கில் களமிறங்கினார். இதன் வெளிப்பாடாக, கடந்த 1.3 ஆண்டுகளாக (டிசம்பர் 2023 முதல்) 'சென்ஜீன் பிரைவேட் லிமிடெட்' (Chengene Private Limited) என்ற அதிநவீன பயோடெக்னாலஜி மற்றும் ஆராய்ச்சி நிறுவனத்தை வெற்றிகரமாகத் தொடங்கி நடத்தி வருகிறார்.",
        "நிறுவனத்தின் கட்டமைப்பு மற்றும் செயல்பாடுகள்: சென்னை தாம்பரம் MEPZ SEZ (Special Economic Zone) பிரத்யேக பொருளாதார வளாகத்தில் அமைந்துள்ள இந்த நிறுவனம், பயோ-பார்மாசூட்டிக்கல்ஸ் (Bio-pharmaceuticals) மற்றும் பயோசிமிலர் (Biosimilar) மருந்து மேம்பாட்டு ஆராய்ச்சியில் தீவிரமாக ஈடுபட்டுள்ளது. உலகத்தரம் வாய்ந்த ஆய்வக உள்கட்டமைப்புகளுடன் செயல்பட்டு வரும் இந்த நிறுவனத்தின் நிர்வாக இயக்குநராக (Managing Director) டாக்டர் கே. வேலுச்சாமி அவர்களும், இயக்குநராக அவரது இளைய மகன் டாக்டர் அருண் முத்துவேல் அவர்களும் பொறுப்பு வகித்து, சர்வதேசத் தரத்திலான மருத்துவ மூலக்கூறு ஆராய்ச்சிகளை மேற்கொண்டு வருகின்றனர்."
      ],
      hi: [
        "उपलब्ध जीवनी के अनुसार, डॉ. वेलुस्वामी ने Chengene Private Limited के माध्यम से जैव-प्रौद्योगिकी और औषधि अनुसंधान के क्षेत्र में कदम रखा। कंपनी दिसंबर 2023 में शुरू की गई बताई गई है और चेन्नई के तांबरम स्थित MEPZ विशेष आर्थिक क्षेत्र में कार्यरत है।",
        "इसके बताए गए शोध क्षेत्रों में बायोफार्मास्यूटिकल्स और बायोसिमिलर दवाओं का विकास शामिल है। दस्तावेज़ में डॉ. के. वेलुस्वामी को प्रबंध निदेशक और उनके छोटे बेटे डॉ. अरुण मुथुवेल को निदेशक बताया गया है।"
      ]
    }
  },
  {
    id: "family",
    title: { en: "6. Family and Next Generation", ta: "6. குடும்பப் பாரம்பரியம் மற்றும் அடுத்த தலைமுறை வாரிசுகள்", hi: "6. परिवार और अगली पीढ़ी" },
    paragraphs: {
      en: [
        "Dr. S. Chandralekha: Dr. Veluswamy’s wife and co-founder of Iswarya Fertility Centre. The supplied biography describes her as a gold-medal-winning medical graduate and a specialist in obstetrics, gynaecology and laparoscopic surgery, with more than 60,000 surgeries stated in the source.",
        "Dr. Aravind Chandar: The elder son, trained in general surgery and advanced IVF at institutions including those in London, according to the supplied material. The source states that Dr. Aravind’s IVF has more than 30 branches and records a 2019 Guinness World Records achievement related to male infertility awareness.",
        "Dr. Arun Muthuvel: The younger son, trained in obstetrics and gynaecology and reproductive medicine and surgery. The supplied material describes him as a director at Iswarya Fertility Centre and Chengene Private Limited, with work involving AI-based embryo monitoring."
      ],
      ta: [
        "மருத்துவக் குடும்பத்தின் பின்னணி: டாக்டர் கே. வேலுச்சாமியின் ஒட்டுமொத்த குடும்பமுமே தங்களை முழுமையாக மருத்துவப் பணி மற்றும் சமூகச் சேவையில் அர்ப்பணித்துக் கொண்டுள்ளது. அவரது குடும்ப உறுப்பினர்கள் ஒவ்வொருவரும் தத்தமது துறைகளில் மிகப்பெரிய சாதனையாளர்களாகத் திகழ்கின்றனர்:",
        "மனைவி - டாக்டர் எஸ். சந்திரலேகா: இவர் மருத்துவப் படிப்பில் மாநில அளவில் முதலிடம் பிடித்து, 7 தங்கப் பதக்கங்கள் (Gold Medalist) வென்ற சிறந்த மகப்பேறு மற்றும் லேப்ராஸ்கோபிக் அறுவை சிகிச்சை நிபுணர் ஆவார். ஐஸ்வர்யா மருத்துவக் குழுமத்தின் இணை நிறுவனராக இருந்து, கடந்த 30 வருடங்களுக்கும் மேலாக 60,000-க்கும் மேற்பட்ட லேப்ராஸ்கோபிக் அறுவை சிகிச்சைகளைச் செய்து சாதனை படைத்தவர்.",
        "மூத்த மகன் - டாக்டர் அரவிந்த் சந்தர்: இவர் டாக்டர் கே. வேலுச்சாமியின் மூத்த மகன் ஆவார். பொது அறுவை சிகிச்சையில் முதுகலைப் பட்டமும் (MS - General Surgery), லண்டன் மற்றும் சர்வதேச நிறுவனங்களில் அதிநவீன IVF உயர்பயிற்சிகளையும் பெற்றவர். தற்போது தனியாக 'டாக்டர் அரவிந்த்ஸ் IVF' (Dr. Aravind's IVF) என்ற மாபெரும் மருத்துவ பிராண்டைத் தொடங்கி, தென்னிந்தியா முழுவதும் 30-க்கும் மேற்பட்ட அதிநவீனக் கிளைகளுடன் நடத்தி வருகிறார். இவர் 2019 ஆம் ஆண்டில் ஆண்கள் மலட்டுத்தன்மை விழிப்புணர்வுக்காக 893 பேரைத் திரட்டி நடத்திய மாபெரும் வகுப்பு அதிகாரப்பூர்வ 'கின்னஸ் உலக சாதனை' (Guinness World Record) புத்தகத்தில் இடம் பெற்றுள்ளது. இவருக்குத் துணையாக இவரது மனைவியும் மருத்துவ மற்றும் நிர்வாகப் பணிகளைக் கவனித்து வருகிறார்.",
        "இளைய மகன் - டாக்டர் அருண் முத்துவேல்: இவர் டாக்டர் கே. வேலுச்சாமியின் இளைய மகன் ஆவார். மகப்பேறியல் மற்றும் பெண்ணோயியல் துறையில் முதுகலைப் பட்டமும், அதைத் தொடர்ந்து இந்தியாவின் மிக அரிதான இனப்பெருக்க மருத்துவ அறுவை சிகிச்சை பிரிவில் சூப்பர் ஸ்பெஷாலிட்டி (MCh - Reproductive Medicine and Surgery) பட்டமும் பெற்றவர். தற்போது ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டர் மற்றும் சென்ஜீன் பிரைவேட் லிமிடெட் ஆகிய நிறுவனங்களின் இயக்குநராக (Director) இருந்து, செயற்கை நுண்ணறிவு (AI Embryo Monitoring) போன்ற அதிநவீனத் தொழில்நுட்பங்களுடன் நிறுவனங்களை வெற்றிகரமாக வழிநடத்தி வருகிறார். இவருக்குத் துணையாக இவரது மனைவியும் தகுதிவாய்ந்த மருத்துவ நிபுணராகப் பணியாற்றி வருகிறார்."
      ],
      hi: [
        "डॉ. एस. चंद्रलेखा: डॉ. वेलुस्वामी की पत्नी और Iswarya Fertility Centre की सह-संस्थापक। उपलब्ध जीवनी उन्हें सात स्वर्ण पदक प्राप्त चिकित्सा स्नातक तथा प्रसूति एवं स्त्रीरोग और लैप्रोस्कोपिक सर्जरी की विशेषज्ञ बताती है। स्रोत में 60,000 से अधिक सर्जरी का उल्लेख है।",
        "डॉ. अरविंद चंदर: बड़े बेटे। उपलब्ध सामग्री के अनुसार, उन्होंने जनरल सर्जरी में स्नातकोत्तर प्रशिक्षण और लंदन सहित अंतरराष्ट्रीय संस्थानों में उन्नत IVF प्रशिक्षण प्राप्त किया। स्रोत में Dr. Aravind’s IVF की 30 से अधिक शाखाओं और पुरुष बांझपन जागरूकता से संबंधित 2019 Guinness World Records उपलब्धि का उल्लेख है।",
        "डॉ. अरुण मुथुवेल: छोटे बेटे। उन्होंने प्रसूति एवं स्त्रीरोग तथा प्रजनन चिकित्सा और सर्जरी में प्रशिक्षण प्राप्त किया। उपलब्ध सामग्री के अनुसार, वे Iswarya Fertility Centre और Chengene Private Limited में निदेशक हैं और AI-आधारित embryo monitoring से जुड़े कार्यों में योगदान देते हैं।"
      ]
    }
  },
  {
    id: "present",
    title: { en: "7. Current Work and Medical Services", ta: "7. தற்போதைய நிலையும் சென்னை மருத்துவச் சேவைகளும்", hi: "7. वर्तमान कार्य और चिकित्सा सेवाएँ" },
    paragraphs: {
      en: [
        "The supplied biography describes Dr. Veluswamy as continuing to guide the healthcare group, educational institutions and Chengene biotechnology research initiative. It also states that he meets patients and provides medical consultations at his principal Chennai hospitals on a weekly basis."
      ],
      ta: [
        "தற்போதைய நிலை: தற்போது டாக்டர் கே. வேலுச்சாமி அவர்கள் இந்த ஒட்டுமொத்த மருத்துவக் குழுமம், கல்வி நிறுவனங்கள் மற்றும் சென்ஜீன் பயோடெக் ஆராய்ச்சி நிறுவனத்தின் தலைவராக (Chairman & Managing Director) இருந்து கொண்டு, புதிய உத்திகள் மற்றும் வழிகாட்டுதல்களை வழங்கி வருகிறார். இத்தனை பொறுப்புகளுக்கு மத்தியிலும், அவர் சென்னையில் உள்ள தனது முதன்மை மருத்துவமனைகளில் வாராந்திர அடிப்படையில் நோயாளிகளை நேரடியாகச் சந்தித்து மருத்துவ ஆலோசனைகளையும் வழங்கி வருகிறார்."
      ],
      hi: [
        "उपलब्ध जीवनी के अनुसार, डॉ. वेलुस्वामी स्वास्थ्य सेवा समूह, शैक्षणिक संस्थानों और Chengene जैव-प्रौद्योगिकी अनुसंधान पहल का मार्गदर्शन जारी रखते हैं। इसमें यह भी कहा गया है कि वे चेन्नई के अपने प्रमुख अस्पतालों में साप्ताहिक रूप से मरीजों से मिलकर चिकित्सा परामर्श देते हैं।"
      ]
    }
  }
] as const;

export const pageText: Record<Language, { name: string; subtitle: string; intro: string; contents: string; footer: string }> = {
  en: { name: "Dr. K. Veluswamy", subtitle: "Biography", intro: "A professional journey through medicine, education, fertility care and research.", contents: "Contents", footer: "This page presents information from the supplied biography document. Please verify dates, qualifications and institutional claims against official records before publication." },
  ta: { name: "டாக்டர் கே. வேலுச்சாமி", subtitle: "வாழ்க்கை வரலாறு", intro: "மருத்துவம், கல்வி, குழந்தைப்பேறு சிகிச்சை மற்றும் ஆராய்ச்சியில் தொடரும் பயணம்.", contents: "உள்ளடக்கங்கள்", footer: "இந்தப் பக்கம் வழங்கப்பட்ட வாழ்க்கை வரலாற்று ஆவணத்தின் தகவல்களை அடிப்படையாகக் கொண்டது. வெளியிடுவதற்கு முன் தேதிகள், தகுதிகள் மற்றும் நிறுவனத் தகவல்களை அதிகாரப்பூர்வ பதிவுகளுடன் சரிபார்க்கவும்." },
  hi: { name: "डॉ. के. वेलुस्वामी", subtitle: "जीवनी", intro: "चिकित्सा, शिक्षा, प्रजनन उपचार और अनुसंधान की एक पेशेवर यात्रा।", contents: "विषय-सूची", footer: "यह पृष्ठ उपलब्ध कराए गए जीवनी दस्तावेज़ पर आधारित है। प्रकाशित करने से पहले तिथियों, योग्यताओं और संस्थागत दावों की आधिकारिक अभिलेखों से पुष्टि करें।" }
};
