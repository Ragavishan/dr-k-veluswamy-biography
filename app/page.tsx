
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IntroScreen from "@/components/IntroScreen";
import ContentProtection from "@/components/ContentProtection";
import {
  Menu,
  X,
  GraduationCap,
  Stethoscope,
  HeartHandshake,
  FlaskConical,
  Landmark,
  BriefcaseBusiness,
  Wind,
} from "lucide-react";

import StoryModal from "@/components/StoryModal";
import { topics, type Language, type StoryTopic } from "@/data/topics";

const career = [
  {
    year: "1972–1978",
    title: "MBBS",
    place: "Kakatiya Medical College, Andhra Pradesh",
    description:
      "As the foundational step towards his medical dream, he successfully completed his MBBS medical degree in 1972 at the historic Kakatiya Medical College, affiliated with the prestigious Osmania University.",
    image: "/images/kakatiya-medical-college.jpg",
    icon: GraduationCap,
  },
  {
    year: "1978–1982",
    title: "MD — General Medicine",
    place: "All India Institute of Medical Sciences, New Delhi",
    description:
      "Driven by his medical dream, he completed his postgraduate medical education in 1982 in the department of Internal Medicine at AIIMS, New Delhi, India's most premier and prestigious medical institution.",
    image: "/images/aiims.jpg", 
    icon: Stethoscope,
  },
  {
    year: "1983–1994",
    title: "Clinical Practice in Palani",
    place: "General Medicine and Cardiology",
    description:
      "He began his medical practice as a small general medicine and maternity center under the name 'K.V. Hospital', located on Dindigul Road in Palani. It was from here that he, along with his wife, the renowned gold medalist gynecologist Dr. S. Chandralekha, embarked on their ethical medical journey.",
    image: "/images/palani-clinic.jpg",
    icon: HeartHandshake,
  },

  {
  id: "reproductive",
  year: "1995–1997",
  title: "M.Sc. — Sexual and Reproductive Medicine",
  place: "Further medical education",
  description:
    "Dr. K. Veluswamy's advanced qualification reflects his exceptional expertise in the field of infertility eradication. This academic distinction has equipped him with the profound clinical wisdom to manage complex hormonal imbalances and cutting-edge fertility solutions with a world-class scientific foundation.",
  image: "/images/msc-reproductive-medicine.jpg",
  icon: GraduationCap,
},
  {
    year: "1997–1998",
    title: "IVF Training - Singapore",
    place: "National University of Singapore",
    description:
      "Dr. K. Veluswamy's advanced IVF and Assisted Reproductive Techniques (ART) training from the globally renowned National University of Singapore (NUS) confirms his world-class clinical expertise in infertility eradication. This international qualification provides him with the clinical wisdom required to manage cutting-edge test-tube baby treatments with absolute precision.",
    image: "/images/national-university.jpeg",
    icon: Stethoscope,
  },
  {
    year: "1998–Present",
    title: "Hospital Leadership and Research",
    place: "Healthcare and scientific initiatives",
    description:
      "A revolutionary union of four decades of visionary healthcare leadership and cutting-edge biotechnology research. Under the guidance of Dr. K. Veluswamy, 'ChenGene' operates as a premier genetic and reproductive research hub, implementing advanced genomic insights to break new grounds in precision fertility care.",
    image: "/images/chengene-research-lab.jpg",
    icon: FlaskConical,
  },
];

const institutions = [
  {
    year: "1996",
    title: "Baarath Vidhya Bavan Matriculation School",
    place: "Palani",
    description:
      "Shaping the leaders of tomorrow with academic excellence and core values. Conceptualized under the visionary outlook of Dr. K. Veluswamy, Baarath Vidhya Bavan Matriculation School stands as a premier educational landmark, providing world-class holistic education to empower young minds.",
    image: "/images/education-school.jpg",
  },
  {
    year: "2006",
    title: "Iswarya Fertility Centre",
    place: "Coimbatore",
    description:
      "The premier destination for advanced reproductive care in the Kongu region. Guided by the world-class medical expertise of Dr. K. Veluswamy, Iswarya Fertility Centre in Coimbatore blends cutting-edge IVF technologies with deeply compassionate clinical care, standing as the most trusted landmark turning parenthood dreams into reality.",
    image: "/images/iswarya-coimbatore.jpg",
  },
  {
    year: "2008",
    title: "Iswarya Fertility Centre",
    place: "Chennai",
    description:
      "Where pioneering clinical science harmonizes with deep human empathy. Under the strategic steering of Dr. K. Veluswamy, Iswarya Fertility Centre and Iswarya Hospital stand as timeless sanctuaries of holistic healing. From setting global benchmarks in assisted reproductive technologies (ART) to deploying robust, full-spectrum multi-specialty clinical systems, the institution delivers seamless diagnostic accuracy and preventative interventions, fundamentally elevating the accessibility and quality of modern patient care.",
    image: "/images/iswarya-hospital.png",
  },
  {
    year: "2010",
    title: "Iswarya Fertility Centre",
    place: "Madurai",
    description:
      "The cornerstone of advanced reproductive excellence in the Temple City. Guided by the clinical wisdom of Dr. K. Veluswamy, Iswarya Fertility Centre in Madurai seamlessly integrates next-generation Assisted Reproductive Technologies (ART) with specialized Andrology diagnostics, serving as South Tamil Nadu’s premier sanctuary for fertility resolution",
    image: "/images/iswarya-madurai.jpg",
  },
  {
    year: "2010",
    title: "Baarath College of Nursing",
    place: "Palani",
    description:
      "Nurturing the compassionate pillars of global healthcare. Established in the year 2010 under the educational vision of Dr. K. Veluswamy in Palani, Bhaarath College of Nursing stands as a premier institution delivering rigorous medical education and hands-on clinical brilliance to empower the next generation of nursing professionals.",
    image: "/images/baarath-nursing-college.jpeg",
  },
  {
    year: "2017",
    title: "Baarath Public School",
    place: "Palani",
    description:
      "Igniting young minds with innovative learning and global benchmarks. Established in the year 2017 under the progressive vision of Dr. K. Veluswamy in Palani, Bhaarath Public School delivers a premier tech-driven curriculum designed to foster academic brilliance, critical thinking, and strong core values from the foundational years.",
    image: "/images/baarath-public-school.jpeg",
  },
  {
    year: "2023",
    title: "Chengene Private Limited",
    place: "Research and laboratory initiative, Chennai",
    description:
      "Advancing reproductive science and engineering the future of biopharma. Officially incorporated in the year 2023 under the visionary leadership of Dr. K. Veluswamy at MEPZ, Tambaram, SEZ, Chennai, ChenGene Private Limited is a premier biotechnology-driven life science enterprise dedicated to manufacturing world-class biosimilar therapeutics, complex monoclonal antibodies, and specialized IVF media with absolute precision.",
    image: "/images/chengene-research-lab.jpg",
  },
];

const ventures = [
  {
    year: "1992",
    title: "V.C. Medical Educational and Trust",
    description:
      "Established under the humanitarian vision of Dr. K. Veluswamy to uplift economically weaker and underprivileged sections of society, 'V.C. Medical and Educational Charitable Trust' operates as a premier non-profit philanthropic institution. Dedicated to easing the financial burdens of the poor, the trust provides critical monetary subsidies for life-saving surgeries, sponsors free rural diagnostic camps, and extends comprehensive educational scholarships to deserving students from marginalized backgrounds. By seamlessly anchoring grass-roots clinical care with accessible quality education, the foundation stands as a living testament to Dr. K. Veluswamy's commitment to social empowerment and community healing.",
    icon: HeartHandshake,
  },
  {
    year: "2009–Present",
    title: "Iswarya Wind Power and Energy",
    description:
      "Recognizing the urgent global need to combat climate change and reduce carbon dependency, Dr. K. Veluswamy expanded his philanthropy into the renewable energy sector in 2009, establishing a robust framework for clean power generation. The institution utilizes highly sophisticated, aerodynamically optimized wind turbines installed in strategic wind corridors. These systems are seamlessly integrated with modern power grids to maximize kinetic-to-electrical energy conversion. By generating clean, sustainable mega-watt capacity power, the enterprise successfully offsets thousands of tons of greenhouse gas emissions annually, making a tangible contribution to ecological preservation and resource conservation. This energy matrix highlights Dr. K. Veluswamy's multifaceted leadership, proving that corporate responsibility and advanced eco-technologies can co-exist to fuel the nation's infrastructural demands responsibly.",
    icon: Wind,
  },
  {
    year: "2010",
    title: "Iswarya Medical Trust",
    description:
      "Driven by the profound belief that financial constraints should never stand between a human life and quality medical care, Dr. K. Veluswamy incorporated this foundation in 2010 to systematically anchor his extensive charity projects. The institution actively deploys large-scale free healthcare camps, dynamic diagnostic screenings, and specialized maternal wellness awareness programs directly into underserved rural landscapes and marginalized urban sectors. Providing a robust safety net, the foundation extends significant financial subsidies and zero-cost medications for critical clinical pathways, including complex cardiovascular interventions, renal support, and high-end advanced fertility solutions for deserving families. This foundation stands as a living testament to Dr. K. Veluswamy's multifaceted leadership, showcasing that cutting-edge clinical infrastructure and grassroots social responsibility can seamlessly unify to heal communities responsibly.",
    icon: Landmark,
  },
];

const placeButton =
  "cursor-pointer text-[#2468b4] underline decoration-[#9abce2] decoration-1 underline-offset-4 transition-colors hover:text-[#0b3768] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]";

const uiText: Record<Language, Record<string, string>> = {
  en: {
    biography: "Biography", educationCareer: "Education & Career", institutions: "Institutions", service: "Service & Ventures",
    contents: "Contents", earlyLife: "Early life and education", medicalCareer: "Medical career", hospital: "Hospital development",
    fertility: "Fertility services", research: "Research", business: "Business, trusts and community initiatives", legacy: "Family and legacy",
    currentRole: "Current role", timeline: "Education and career timeline", milestones: "Educational institutions and milestones",
    familyTitle: "Family and legacy", familyIntro: "The family’s work spans medicine, fertility care and research. Select a name to explore each family member’s profile.",
    readProfile: "Read profile →", photoMissing: "Family photograph not provided", wifeRole: "Wife · Co-founder, Iswarya Fertility Centre", elderRole: "Elder son · General surgery and IVF", youngerRole: "Younger son · Reproductive medicine and research",
    close: "Close", familyProfile: "Family profile", education: "Education", practice: "Clinical practice", dob: "Date of birth", family: "Family", activity: "Areas of activity", listedInstitutions: "Institutions listed",
    doctorSummary: "Medical professional · Healthcare initiatives", 
    language: "Language",
    bioIntro: "Dr. K. Veluswamy is a leading medical expert and a multifaceted healthcare leader who has made outstanding contributions for over four decades in the fields of medicine, maternity and fertility treatment, biotechnology research, and medical education.",
    earlyText: "Dr. K. Veluswamy was born on 17 October 1954 into a farming family in rural Tamil Nadu. His parents are named as Kuppana Gounder and Palaniyammal, and he began his schooling in a Tamil-medium government school. His education history lists medical studies under the University of Osmania and postgraduate training in Internal Medicine at",
    exactSchool: "",
    careerText: "Having honed his medical expertise at India's premier institution, AIIMS, New Delhi, Dr. K. Veluswamy held a noble vision to ensure that world-class, modern fertility treatments were easily accessible to underprivileged couples. With this visionary outlook, he officially commenced his medical services in the town of Palani. What began as a small maternity and women's hospital in Palani eventually evolved into one of South India's largest healthcare networks. Crucially, from 1982 to 2000, Dr. K. Veluswamy primarily centered his intensive clinical practice on Internal Medicine, Diabetology, and Cardiology. During this era, his facility stood as the absolute only primary center in the entire town of Palani and its surrounding villages to provide such advanced medical treatments. To deliver cutting-edge medical care to the rural population, this center successfully provided highly advanced super-specialty interventions, including Coronary Angiograms (Angiogram), Complex Angioplasties, Pacemaker Implantations, as well as various complex Open Heart Surgeries and Bypass (BT) Heart Surgeries. Consequently, it served as the most vital destination for critical emergency cardiac care in South Tamil Nadu. This extraordinary foundation is what paved the way for the grand expansion into the modern 400-bed 'Iswarya Super Speciality Hospital' in Chennai, single-handedly driving a massive new revolution across maternity care, general medicine, and emergency cardiac care.",
    qualificationCheck: "What began as a small maternity and women's hospital in the town of Palani evolved into South India's largest fertility treatment network, driven by Dr. Veluswamy's tireless hard work, cutting-edge biotechnology research, and medical innovations.",
    hospitalText: "As a pioneer in South India, the foundation laid at",
    hospitalText2: "earned Iswarya Fertility Centre the prestigious reputation of introducing cutting-edge test-tube baby (IVF) and advanced infertility treatments at a very affordable cost across Tamil Nadu. Under the visionary guidance of Dr. K. Veluswamy (Chairman) and Dr. S. Chandralekha (Founder), next-generation medical experts like  Dr. Arun Muthuvel (Managing Director) and Dr. Aravind Chander(Aravind IVF Hospital) have joined the team to elevate this noble service to global standards. Recently, with the grand launch of the state-of-the-art 400-bed 'Iswarya Multi Speciality Hospital' in Chennai, this leadership is spearheading a new revolution not only in maternity care but across the entire general healthcare sector.",
    fertilityText: "In the year 1986, Dr. K. Veluswamy, along with the renowned gynecologist,",
    fertilityText2: " officially established the Iswarya Fertility Centre. Driven by exceptional medical outcomes and high success rates, they earned the trust of thousands of families by expanding with multiple new branches across key cities in Tamil Nadu, including ",
    fertilityText3: "Extending their dedicated healthcare services beyond Tamil Nadu to other states like Karnataka, Telangana, and Andhra Pradesh, they transformed Iswarya Fertility Centre into one of India’s leading IVF chains. Today, operating with over 110 state-of-the-art clinics, the team led by Dr. K. Veluswamy has successfully brought the ultimate joy of parenthood to more than 2 lakh happy couples, turning the beautiful dream of 'Your Child' into reality.",
    timelineIntro: "Transforming primary and nursing education for social empowerment; lighting up the dreams of millions through Iswarya Fertility Centres; and breaking new boundaries in biomanufacturing at ChenGene Private Limited. Dr. K. Veluswamy seamlessly integrates these three critical pillars with four decades of ethical dedication, single-handedly shaping the future landscape of Indian healthcare with a truly modern and visionary perspective.",
    researchText: "Under the visionary leadership of Dr. K. Veluswamy, ChenGene Private Limited is spearheading a biotechnology revolution to manufacture indigenous monoclonal antibodies, bi-specific antibodies, tri-specific antibodies, and Antibody-Drug Conjugates (Drug-ADC complexes) with chemical payloads. Advanced antibody-based therapeutics such as Trastuzumab (Deruxtecan), widely utilized in treating cancer and other severe diseases, currently cost lakhs of rupees per treatment, and due to the complete absence of Indian manufacturers for many of these critical antibodies, the nation remains heavily dependent on expensive imports. Dr. K. Veluswamy aims to develop these transformative drugs entirely from 'gene to fill-finish' to ensure affordable and easy accessibility for millions of patients while significantly reducing the economic burden of imported pharmaceuticals. Having successfully embarked on this journey, Dr. K. Veluswamy and his proficient team have achieved absolute self-reliance with comprehensive in-house capabilities spanning from gene cloning and pilot-scale upstream processing to downstream processing, fill-finished development, rigorous quality control, and advanced toxicity and in-vitro studies. Moving forward, Dr. K. Veluswamy is poised to imminently launch advanced therapeutic modalities at ChenGene, including CAR-T cell therapy, CAR-NK cell therapy, and related next-generation clinical tracks at an highly affordable cost, paving the way for cutting-edge cell and gene therapy solutions for some of the most challenging human diseases and making advanced healthcare technologies globally accessible.",
    currentText: "Dr. K. Veluswamy currently serves as the 'Chairman of Iswarya Healthcare Group', strategically steering its national medical expansion and clinical governance frameworks. Alongside this, he acts as the 'Chief Mentor at ChenGene Private Limited' in MEPZ, Tambaram, SEZ, Chennai, driving next-generation biopharmaceutical R&D and indigenous drug discovery pipelines. Seamlessly blending business brilliance with social impact, he simultaneously commands critical leadership roles as the 'Founder of Bhaarath Educational Institutions', 'Managing Trustee of Iswarya Medical Foundation', and 'Director of Iswarya Windmill and Energy', dynamically shaping the landscape of modern healthcare, global education, and sustainable matrices.",
    storyButton: "Select a blue underlined name or location to read more.",
    profileNote: "",
    familyChandra: "Dr. S. Chandralekha is a highly acclaimed medical pioneer with over four decades of unparalleled clinical expertise in gynecology, obstetrics, and advanced reproductive technologies.Demonstrating extraordinary academic excellence since her school days, she achieved a landmark milestone by securing the 'State 1st Rank in her 11th Standard Board Examinations'. Recognizing her exceptional academic brilliance during her early medical education, she was honored with a prestigious 'Gold Medal in Gynecology' during her postgraduate specialization. In the late 1980s, alongside Dr. K. Veluswamy, she co-founded the historic 'K.V. Hospital' and laid the absolute cornerstone for the 'Iswarya Fertility Centre' on Palani's Dindigul Road. Breaking formidable frontiers in human embryology, she led the historic medical breakthrough of delivering India's 'first frozen egg and frozen sperm baby'. Furthermore, she engineered scientific history by successfully achieving successful IVF pregnancies for both a 'post-renal transplant patient' and a 'breast cancer survivor' in India. Today, she strategically steers the clinical benchmarks across 110+ state-of-the-art clinics—including the flagship 'NABH-accredited' OMR facility in Chennai—perfecting revolutionary interventions like Laser-Assisted Hatching, ICSI, and Preimplantation Genetic Screening (PGS/PGD) to systematically transform the cherished dream of 'Your Child' into a living, healthy reality.",
    familyArun: "Dr. Arun Muthuvel Following his foundational 'MBBS' from Pondicherry University, he secured his 'MS (OBGYN)' from Sri Ramachandra Medical College (SRMC), Chennai, and subsequently completed his super-specialization, earning the prestigious 'MCh - Reproductive Medicine & Surgery' degree. He acquired advanced training components from leading global institutions, including 'Advanced IVF Training' at Boston IVF / Harvard Medical School; 'Natural Cycle IVF' at Michigan IVF; 'Andrology & Micro TESE' at the University of Miami; and 'PGD & Embryo Biopsy' protocols from the 'Cleveland Clinic, USA'. He holds the elite distinction of being the 'first doctor from India to deliver an oral presentation' at the prestigious American Society of Reproductive Medicine (ASRM) Conference in the USA. Furthermore, he is historically recognized as the first worldwide to successfully execute the aqueous route of Progesterone during Frozen Embryo Transfer (FET) cycles. Celebrating his administrative and clinical excellence, he is the recipient of the 'Young Achievers Award' at the Times Health Awards 2018 and the 'Radiocity Chennai City Icon Award 2018'.",
    familyAravind: "Dr. Aravind Chander is a globally renowned medical expert and the Managing Director in the fields of obstetrics, infertility eradication, and gynecological laparoscopic surgery. After completing his 'MBBS' at Annamalai University, he earned his 'MS (OG)' postgraduate degree in Obstetrics and Gynecology from Dr. M.G.R. Medical University, followed by a 'Postdoctoral Fellowship in Reproductive Medicine'. To advance his medical knowledge to international standards, he officially obtained his 'M.MAS' (Master in Minimal Access Surgery) and 'D.MAS' (Diploma in Minimal Access Surgery) degrees from the prestigious Kiel University in Germany, and successfully completed his 'Advanced ART Fertility Training' at the National University Hospital (NUH, Singapore). Through his exceptional clinical expertise, he has managed over '80,000 successful IVF cycles', achieving a landmark milestone by bringing more than 25,000 healthy babies into the world. In recognition of his world-class medical contributions, he has been honored with prestigious national and international accolades, including the 'Guinness World Records', the 'India Book of Records', and the National Fertility Award for 'Best IVF Specialist South'.",

  },
  ta: {
    biography: "வாழ்க்கை வரலாறு", educationCareer: "கல்வி மற்றும் பணி", institutions: "நிறுவனங்கள்", service: "சேவை மற்றும் தொழில் முயற்சிகள்",
    contents: "உள்ளடக்கம்", earlyLife: "ஆரம்ப வாழ்க்கையும் கல்வியும்", medicalCareer: "மருத்துவப் பணி", hospital: "மருத்துவமனை வளர்ச்சி",
    fertility: "கருவுறுதல் சிகிச்சை சேவைகள்", research: "ஆராய்ச்சி", business: "தொழில், அறக்கட்டளைகள் மற்றும் சமூக முயற்சிகள்", legacy: "குடும்பமும் பாரம்பரியமும்",
    currentRole: "தற்போதைய பொறுப்புகள்", timeline: "கல்வி மற்றும் பணிக் காலவரிசை", milestones: "கல்வி நிறுவனங்கள் மற்றும் முக்கிய நிகழ்வுகள்",
    familyTitle: "குடும்பமும் பாரம்பரியமும்", familyIntro: "இவரது குடும்பத்தினர் மருத்துவம், கருவுறுதல் சிகிச்சை மற்றும் ஆராய்ச்சித் துறைகளில் பங்களித்து வருகின்றனர். ஒவ்வொரு குடும்ப உறுப்பினரின் விவரங்களையும் அறிய பெயரைத் தேர்ந்தெடுக்கவும்.",
    readProfile: "விவரங்களைப் படிக்க →", photoMissing: "குடும்பப் புகைப்படம் வழங்கப்படவில்லை", wifeRole: "மனைவி · ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டர் இணை நிறுவனர்", elderRole: "மூத்த மகன் · பொது அறுவை சிகிச்சை மற்றும் IVF", youngerRole: "இளைய மகன் · இனப்பெருக்க மருத்துவம் மற்றும் ஆராய்ச்சி",
    close: "மூடு", familyProfile: "குடும்ப உறுப்பினர் விவரம்", education: "கல்வி", practice: "மருத்துவப் பணி", dob: "பிறந்த தேதி", family: "குடும்பம்", activity: "செயல்பாட்டுத் துறைகள்", listedInstitutions: "குறிப்பிடப்பட்ட நிறுவனங்கள்",
    doctorSummary: "மருத்துவ நிபுணர் · சுகாதார முயற்சிகள்", 
    language: "மொழி",
    bioIntro: "டாக்டர் கே. வேலுச்சாமி அவர்கள் மருத்துவம், மகப்பேறு மற்றும் கருவுறுதல் சிகிச்சை (Fertility Treatment), உயிரித் தொழில்நுட்ப ஆராய்ச்சி (Biotechnology Research), மருத்துவக் கல்வி மற்றும் கல்வி ஆகிய துறைகளில் நாற்பதாண்டுகளுக்கும் மேலாக மிகச் சிறந்த பங்களிப்பை வழங்கி வரும் ஒரு முன்னணி மருத்துவ வல்லுநரும், பன்முகத் திறமை கொண்ட சுகாதாரத் துறைத் தலைவரும் (Healthcare Leader) ஆவார்.",
    earlyText: "டாக்டர் கே. வேலுச்சாமி அவர்கள் 17 அக்டோபர் 1954 அன்று தமிழ்நாட்டின் ஒரு கிராமப்புற விவசாயக் குடும்பத்தில் பிறந்தார். இவரது பெற்றோர்கள் திரு. குப்பண கவுண்டர் மற்றும் திருமதி. பழனியம்மாள் ஆவர். மண்ணின் மீதும் உழைப்பின் மீதும் பற்றுக்கொண்ட ஒரு எளிய பின்னணியில் இருந்து வந்த இவர், தனது ஆரம்பக் கல்வியைத் தமிழ் வழிக் கல்வி வழங்கும் அரசுப் பள்ளியில் தொடங்கினார். அரசுப் பள்ளியில் பயின்றாலும், தனது அசாத்திய திறமையாலும் விடாமுயற்சியாலும் மருத்துவக் கல்வி பயிலும் வாய்ப்பைப் பெற்றார். தனது இளநிலை மருத்துவப் படிப்பைச் (Undergraduate Medical Education) சென்னைப் பல்கலைக்கழகத்தில் (University of Madras) 1972-ல் மிகச் சிறந்த முறையில் நிறைவு செய்தார். அதனைத் தொடர்ந்து இந்தியாவின் மிக உயரிய மருத்துவக் கழகமான புதுடெல்லியில் உள்ள எய்ம்ஸ்,",
    exactSchool: "நிறுவனத்தில் உள்ள மருத்துவ (M.D. Internal Medicine)  1982-ல் முதுகலை மருத்துவப் பயிற்சியைப் பெற்றுத் தேர்ந்தார்.",
    careerText: "AIIMS, New Delhi போன்ற இந்தியாவின் மிக உயரிய மருத்துவக் கழகத்தில் தனது மருத்துவ அறிவை மெருகேற்றிய டாக்டர் கே. வேலுச்சாமி அவர்கள், நலிவடைந்த தம்பதியருக்கு உலகத்தரம் வாய்ந்த நவீன சிகிச்சைகள் எளிய முறையில் கிடைக்க வேண்டும் என்ற உன்னத நோக்கத்தைக் கொண்டிருந்தார். இந்த தொலைநோக்குப் பார்வையுடன்,பழநி நகரில் அவர் முறைப்படி தனது மருத்துவச் சேவையைத் தொடங்கினார். பழநி நகரில் ஒரு சிறிய பிரசவ மற்றும் மகளிர் மருத்துவமனையாகத் தொடங்கப்பட்ட இந்த தளம், பின்னர் தென்னிந்தியாவின் மிகப் பெரிய மருத்துவ வலையமைப்பாக உருவெடுத்தது. முக்கியமாக, 1982 முதல் 2000 ஆம் ஆண்டு வரை டாக்டர் கே. வேலுச்சாமி அவர்கள் பொது உள் மருத்துவம் (Internal Medicine), நீரிழிவு நோய் மருத்துவம் (Diabetology), மற்றும் இதய நோய் மருத்துவம் (Cardiology) ஆகிய துறைகளில் தனது தீவிர மருத்துவப் பயிற்சியை முதன்மையாக மேற்கொண்டார். அக்காலகட்டத்தில் ஒட்டுமொத்த பழனி நகர் மற்றும் அதன் சுற்றுவட்டாரக் கிராமங்களிலேயே இந்த அதிநவீனச் சிகிச்சைகளை வழங்கிய ஒரே முதன்மை மையம் (Only Centre in Palani) இதுமட்டுமே ஆகும். கிராமப்புற மக்களுக்கு அதிநவீன மருத்துவச் சிகிச்சை முறைகளைக் கொண்டு சேர்க்கும் பொருட்டு, இந்த மையம் ஆன்ஜியோகிராம் (Angiogram), சிக்கலான ஆன்ஜியோபிளாஸ்டி சிகிச்சைகள் (Complex Angioplasties), பேஸ்மேக்கர் பொருத்துதல் (Pacemaker Implantation), மற்றும் பல்வேறு வகையான ஓபன் ஹார்ட் அறுவை சிகிச்சைகள் (Open Heart Surgery), பைபாஸ் இதய அறுவை சிகிச்சைகள் (BT / Bypass Heart Surgery) போன்ற மிக உயரிய சூப்பர் ஸ்பெஷாலிட்டி சிகிச்சைகளை வெற்றிகரமாக வழங்கியது. தென்தமிழகத்தில் மிகக் கடினமான அவசர கால இதயச் சிகிச்சைகளுக்கான மிக முக்கியமான முதன்மைத் தலமாக (Important Destination) இது விளங்கியது. இந்த அசாத்திய அடித்தளமே, இன்று சென்னையில் அதிநவீன வசதிகளுடன் கூடிய 400 படுக்கைகள் கொண்ட 'ஐஸ்வர்யா சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை' (Iswarya Super Speciality Hospital) பிரம்மாண்டமாக உருவெடுத்து, மகப்பேறு மட்டுமன்றி ஒட்டுமொத்த பொது மற்றும் அவசர கால இதய மருத்துவத் துறையிலும் ஒரு புதிய புரட்சியை ஏற்படுத்துவதற்குக் காரணியாக அமைந்துள்ளது.",
    qualificationCheck: "ஒரு சிறிய பிரசவ மற்றும் மகளிர் மருத்துவமனையாகத் தொடங்கப்பட்ட இந்த தளம், பின்னர் டாக்டர் வேலுச்சாமி அவர்களின் அயராத உழைப்பாலும், அதிநவீன உயிரித் தொழில்நுட்ப ஆராய்ச்சி (Biotechnology Research) மற்றும் மருத்துவப் புதுமைகளாலும் தென்னிந்தியாவின் மிகப் பெரிய கருத்தரிப்பு சிகிச்சை வலையமைப்பாக உருவெடுத்தது.",
    hospitalText: "தென்னிந்தியாவின் முன்னோடி (The IVF Pioneer)",
    hospitalText2: "தமிழ்நாட்டில் அதிநவீன சோதனைக்குழாய் குழந்தை (IVF) மற்றும் மலட்டுத்தன்மை ஒழிப்புச் சிகிச்சைகளை (Fertility Treatments) மிகக் குறைந்த செலவில் அறிமுகப்படுத்திய பெருமை ஐஸ்வர்யா மருத்துவமனையையே சாரும். டாக்டர் கே. வேலுச்சாமி (தலைவர்) மற்றும் டாக்டர் எஸ். சந்திரலேகா (நிறுவனர்) ஆகியோரின் வழிகாட்டுதலில், டாக்டர் அரவிந்த் சந்தர் மற்றும் டாக்டர் அருண் முத்துவேல் (மேலாண் இயக்குநர்) போன்ற அடுத்த தலைமுறை மருத்துவ வல்லுநர்கள் இக்குழுவில் இணைந்து இந்தத் தார்மீகச் சேவையை உலகத்தரத்திற்கு எடுத்துச் செல்கின்றனர். சமீபத்தில் சென்னையில் அதிநவீன வசதிகளுடன் கூடிய '400' படுக்கைகள் கொண்ட 'ஐஸ்வர்யா மல்டி ஸ்பெஷாலிட்டி மருத்துவமனை' (Iswarya Multi Speciality Hospital) தொடங்கப்பட்டதன் மூலம், மகப்பேறு மட்டுமின்றி ஒட்டுமொத்த பொது மருத்துவத் துறையிலும் ஒரு புதிய புரட்சியை இந்தத் தலைமை ஏற்படுத்தி வருகிறது.",
    fertilityText: "1986-ஆம் ஆண்டு டாக்டர் கே. வேலுச்சாமி மற்றும் புகழ்பெற்ற மருத்துவருமான",
    fertilityText2: "அவர்களும் இணைந்து ஐஸ்வர்யா கருத்தரிப்பு மையத்தை (Iswarya Fertility Centre) முறைப்படி தொடங்கினர்.  மிகச் சிறந்த மருத்துவ வெற்றிகளின் மூலம் (High Success Rates) தமிழ்நாட்டின் முதன்மை நகரங்கள் முழுவதும் பல புதிய கிளைகளைத் தொடங்கி, ஆயிரக்கணக்கான குடும்பங்களின் நம்பிக்கையைப் பெற்றனர்.",
    fertilityText3: "தமிழ்நாடு மட்டுமின்றி கர்நாடகா, தெலங்கானா, ஆந்திரா போன்ற பிற மாநிலங்களுக்கும் தங்களது மருத்துவச் சேவையை விரிவுபடுத்தி, இந்தியாவின் முன்னணி IVF சிகிச்சை சங்கிலித் தொடராக (IVF Chain) ஐஸ்வர்யா மையத்தை மாற்றினர். இன்று 110-க்கும் மேற்பட்ட அதிநவீன கிளைகளுடன், 2 லட்சத்திற்கும் அதிகமான மகிழ்ச்சியான தம்பதியரின் வாழ்வில் 'உங்களுக்கும் ஒரு குழந்தை' என்ற தாய்மைப் பேரானந்தத்தை டாக்டர் கே. வேலுச்சாமியின் தலைமையிலான குழு வெற்றிகரமாக வழங்கியுள்ளது.",
    timelineIntro: "சமூக மேம்பாட்டிற்கான பள்ளிகள் மற்றும் செவிலியர் கல்வி நிறுவனங்கள்; லட்சக்கணக்கானோரின் தாய்மை லட்சியத்தை நனவாக்கும் ஐஸ்வர்யா கருவுறுதல் மையங்கள்; இந்திய மருத்துவத்தின் இறக்குமதிச் சுமையைக் குறைக்கும் சென்ஜீன் உயிரித் தொழில்நுட்ப ஆராய்ச்சி! இந்த மூன்று பெரும் தூண்களையும் நாற்பதாண்டுகாலத் தார்மீக அர்ப்பணிப்புடன் வழிநடத்தி, ஒட்டுமொத்த இந்தியச் சுகாதாரத் துறையின் எதிர்காலத்தையே மாற்றி அமைத்து வரும் பன்முக ஆளுமை, தொலைநோக்குத் தலைவர் டாக்டர் கே. வேலுச்சாமி.",
    researchText: "இந்தியாவின் இறக்குமதிச் சுமையைக் குறைத்து, நடுத்தர மக்களுக்கும் அதிநவீன மருத்துவத்தைச் சாத்தியமாக்க டாக்டர் கே. வேலுச்சாமி அவர்களின் தொலைநோக்குத் தலைமையில் தொடங்கப்பட்ட சென்ஜீன் பிரைவேட் லிமிடெட் நிறுவனத்தின் புரட்சிகரமான உயிரித் தொழில்நுட்பப் பயணம்! புற்றுநோய் மற்றும் பல கொடிய நோய்களுக்கான 'Trastuzumab (Deruxtecan)' போன்ற லட்சக்கணக்கில் செலவாகும் மேம்பட்ட ஆன்டிபாடி மருந்துகள், பை-ஸ்பெசிஃபிக், ட்ரை-ஸ்பெசிஃபிக் ஆன்டிபாடிகள் மற்றும் வேதிப்பண்புகள் கொண்ட ஏடிசி (Drug-ADC Complexes) மருந்துகளை, மரபணுவிலிருந்து (Gene) இறுதி வடிவ மருந்து (Fill-Finished Product) வரை இந்தியாவிலேயே முற்றிலும் உள்நாட்டிலேயே தயாரிப்பதே டாக்டர் கே. வேலுச்சாமி அவர்களின் முதன்மை நோக்கமாகும். தற்போதைய நிலையில் இந்தியாவில் பல ஆன்டிபாடி மருந்துகளுக்கு உற்பத்தியாளர்கள் இல்லாததால் ஏற்படும் இறக்குமதிச் சுமையையும் பெரும் நிதிச் செலவையும் குறைத்து, கோடிக்கணக்கான மக்களுக்கு இம்மருந்துகளை எளிய விலையில் கொண்டு சேர்க்க அவர் முயல்கிறார். இந்த உன்னத லட்சியத்தை நோக்கித் தனது மருத்துவக் குழுவுடன் பயணத்தைத் தொடங்கியுள்ள டாக்டர் கே. வேலுச்சாமி அவர்கள், தற்போது மரபணு குளோனிங், பைலட்-ஸ்கேல் அப்ஸ்ட்ரீம் செயலாக்கம், டவுன்ஸ்ட்ரீம் செயலாக்கம், இறுதி வடிவ மருந்து தயாரிப்பு மேம்பாடு, உயர்தரக் கட்டுப்பாட்டுப் பரிசோதனைகள் மற்றும் நச்சுத்தன்மை-இன்விட்ரோ ஆய்வுகள் வரை அனைத்து உள்கட்டமைப்பு வசதிகளையும் (In-House Capabilities) முற்றிலும் சென்ஜீன் நிறுவனத்தின் உள்ளேயே அமைத்து தன்னாதிக்கம் பெற்றுள்ளார். மேலும், மிக விரைவில் டாக்டர் கே. வேலுச்சாமியின் வழிகாட்டுதலில் சென்ஜீன் நிறுவனம் கார்டி செல் சிகிச்சை (CAR-T Cell Therapy), கார்-என்கே செல் சிகிச்சை (CAR-NK Cell Therapy) மற்றும் அது சார்ந்த அதிநவீன மரபணு மற்றும் உயிரணு சிகிச்சை முறைகளையும் மிகக் குறைந்த செலவில் வழங்கி, மிகக் கடினமான நோய்களுக்கும் உலகத்தரம் வாய்ந்த மருத்துவத் தீர்வுகளை அனைவருக்கும் எளிதில் கிடைக்கச் செய்யவுள்ளது.",
    currentText: "டாக்டர் கே. வேலுச்சாமி அவர்கள் தற்போது 'ஐஸ்வர்யா ஹெல்த்கேர் குழுமத்தின் தலைவர்' (Chairman) என்ற முதன்மைப் பொறுப்பில் இருந்து, அதன் தேசிய அளவிலான மருத்துவ விரிவாக்கப் பணிகளைத் தொலைநோக்குப் பார்வையுடன் வழிநடத்துகிறார். இதனை தொடர்ந்து, சென்னை மெப்ஸ் ஏற்றுமதி வளாகத்தில் அமைந்துள்ள 'சென்ஜீன் பிரைவேட் லிமிடெட் நிறுவனத்தின் தலைமை வழிகாட்டியாக' (Chief Mentor) இருந்து அதிநவீன பயோபார்மா ஆராய்ச்சித் திட்டங்களைக் கண்காணித்து வருகிறார். மேலும், பழனியில் உள்ள 'பாரத் கல்வி அறக்கட்டளைகளின் நிறுவனர்', 'ஐஸ்வர்யா மருத்துவ அறக்கட்டளை' மற்றும் 'ஐஸ்வர்யா காற்றாலை மின்சாரப் பிரிவின் இயக்குநர்' (Director) ஆகிய பன்முகப் பொறுப்புகளைத் அர்ப்பணிப்புடன் வகித்து, சுகாதாரம், கல்வி மற்றும் பசுமை ஆற்றல் துறைகளின் எதிர்காலத்தை வெற்றிகரமாக வடிவமைத்து வருகிறார்.",
    storyButton: "மேலும் விவரங்களைப் படிக்க நீல நிறப் பெயர் அல்லது இடத்தைத் தேர்ந்தெடுக்கவும்.",
    profileNote: "",
    familyChandra: "டாக்டர் எஸ். சந்திரலேகா அவர்கள் மலட்டுத்தன்மை ஒழிப்பு மற்றும் மகளிர் மருத்துவத் துறையில் நாற்பதாண்டுகளுக்கும் மேலான அசாத்திய அனுபவம் கொண்ட ஒரு புகழ்பெற்ற மருத்துவ முன்னோடி ஆவார். பள்ளிப் பருவத்திலிருந்தே கல்வியில் மிகச்சிறந்த மாணவியாக விளங்கிய இவர், தனது '11-ஆம் வகுப்பு பொதுத்தேர்வில் மாநில அளவில் முதலிடம்' (State 1st in 11th Standard) பெற்று அசாத்திய சாதனை படைத்தார். தனது இளநிலை மருத்துவப் படிப்பில் சிறந்த தகுதி பெற்றுத் திகழ்ந்த இவர், மகப்பேறு மருத்துவத்தில் ஆழமான நிபுணத்துவத்தைப் பெறுவதற்காக உயரிய முதுகலை மருத்துவப் படிப்பை வெற்றிகரமாக நிறைவு செய்து,'தங்கம் வென்ற மகப்பேறு மருத்துவர்' என்ற வரலாற்றுச் சிறப்புமிக்க பெருமையைப் பெற்றார். 1980-களின் பிற்பகுதியில் டாக்டர் கே. வேலுச்சாமி அவர்களுடன் இணைந்து பழனி நகரின் திண்டுக்கல் சாலையில் 'கே.வி. மருத்துவமனை' மற்றும் 'ஐஸ்வர்யா கருத்தரிப்பு மையம்' ஆகியவற்றைத் தோற்றுவித்த பெருமை இவரையே சாரும். இந்தியாவில் மருத்துவப் புரட்சியாகக் கருதப்படும் 'முதன்முறையாக உறைவிக்கப்பட்ட முட்டை மற்றும் உறைவிக்கப்பட்ட விந்தணு மூலம் பிறந்த குழந்தை' (India's first frozen egg and frozen sperm baby) என்ற வரலாற்றுச் சாதனையைத் தனது அசாத்திய மருத்துவக் குழுவின் மூலம் நிகழ்த்திக் காட்டியவர் இவரே ஆவார். மேலும், 'சிறுநீரக மாற்று அறுவை சிகிச்சை ' மற்றும் 'மார்பகப் புற்றுநோய்' ஆகியோருக்கு வெற்றிகரமாக IVF சிகிச்சைகளை வழங்கி இந்தியாவின் மிக உயரிய மருத்துவ எல்லைகளைப் பன்னாட்டுக் கல்வித் தரத்திற்கு உயர்த்தியுள்ளார். இன்று 'NABH சான்றிதழ்' பெற்ற சென்னை OMR கிளை உட்பட தென்னிந்தியா முழுவதும் உள்ள 110-க்கும் மேற்பட்ட கிளைகளில் அதிநவீன லேசர் ஹாட்சிங்,  ICSI மற்றும் மேம்பட்ட மரபணுப் பரிசோதனைகளைத் (Genetic Screening) தனது நேரடிப் பார்வையில் வழிநடத்தி, பல்லாயிரக்கணக்கான குடும்பங்களில் 'உங்களுக்கும் ஒரு குழந்தை' என்ற உன்னதத் தாய்மைப் பேரானந்தத்தை வழங்கி, பெண்களின் ஆரோக்கியப் பாதுகாப்பில் ஒரு பேராற்றலாகத் திகழ்கிறார்.",
    familyArun: "டாக்டர் அருண் முத்துவேல் அவர்கள் பாண்டிச்சேரி பல்கலைக்கழகத்தில் தனது 'MBBS' படிப்பையும், ஸ்ரீ ராமச்சந்திரா மருத்துவக் கல்லூரியில் (SRMC) மகப்பேறு மருத்துவத்தில் 'MS (OBGYN)' முதுகலைப் பட்டத்தையும் முடித்து, அதனைத் தொடர்ந்து 'MCh - Reproductive Medicine & Surgery' தகுதியைப் பெற்ற ஒரு முன்னணி மருத்துவ வல்லுநராவார். இவர் தனது 'MCh' படிப்பின் போது அமெரிக்காவின் போஸ்டன் IVF, ஹார்வர்ட் பல்கலைக்கழகம் (Harvard University), மிச்சிகன் IVF மையம், மியாமி பல்கலைக்கழகம் மற்றும் கிளீவ்லேண்ட் கிளினிக் (Cleveland Clinic) ஆகிய புகழ்பெற்ற சர்வதேச நிறுவனங்களில் மேம்பட்ட IVF, ஆண்ட்ராலஜி, 'Micro TESE', 'PGD' மற்றும் எம்பிரியோ பயாப்சி பயிற்சிகளை முறையாகப் பெற்றுள்ளார்; அமெரிக்க இனப்பெருக்க மருத்துவக் கழக (ASRM) மாநாட்டில் வாய்மொழியாகத் தனது மருத்துவ ஆய்வறிக்கையைச் சமர்ப்பித்த (Oral Presenter) 'முதல் இந்திய மருத்துவர்' என்ற பெருமையையும், உறைவிக்கப்பட்ட கருமுட்டை மாற்றச் சுழற்சிகளில் (Frozen Embryo Transfer) புரோஜெஸ்ட்டிரோன் ஹார்மோனை நீர்மப் பாதையில் (Aqueous route) உலகிலேயே 'முதன்முறையாகப் பயன்படுத்திய' மருத்துவ மைல்கல்லையும் படைத்த இவருக்கு, டைம்ஸ் ஹெல்த் அவார்ட்ஸ் வழங்கிய 'Young Achievers Award 2018' மற்றும் ரேடியோ சிட்டி வழங்கிய 'Chennai City Icon Award 2018' அங்கீகாரங்கள் வழங்கப்பட்டுள்ளன. சென்னையில் உள்ள 400 படுக்கைகள் கொண்ட பிரம்மாண்ட 'ஐஸ்வர்யா சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை (OMR)' மையத்தை வழிநடத்தும் இவர், தங்களது மருத்துவச் சேவைகளைத் தென்னிந்தியா மட்டுமன்றி பஞ்சாப், ஹரியானா, உத்தரப் பிரதேசம், மத்தியப் பிரதேசம், அசாம் மற்றும் கொல்கத்தா ஆகிய பகுதிகளுக்கும் விரிவுபடுத்தி ஐவிஎஃப் (IVF) மையங்களை நிறுவியுள்ளதுடன், அண்டை நாடுகளான இலங்கை, நேபாளம் மற்றும் வங்களாதேசம் ஆகியவற்றிலும் ஐவிஎஃப் (IVF) மையங்களைத் தொடங்கிச் சேவையாற்றவுள்ளார்.",
    familyAravind: "டாக்டர் அரவிந்த் சந்தர் அவர்கள் மகப்பேறு, மலட்டுத்தன்மை ஒழிப்பு மற்றும் மகளிர் லேப்ராஸ்கோப்பி அறுவை சிகிச்சைத் துறைகளில் சர்வதேச அளவில் புகழ்பெற்ற ஒரு அசாத்திய மருத்துவ வல்லுநர் மற்றும் நிர்வாக இயக்குநர் (Managing Director) ஆவார். அண்ணாமலை பல்கலைக்கழகத்தில் தனது 'MBBS' படிப்பை முடித்த இவர், டாக்டர் எம்.ஜி.ஆர் மருத்துவப் பல்கலைக்கழகத்தில் மகளிர் மற்றும் மகப்பேறு மருத்துவத்தில் 'MS (OG)' முதுகலைப் பட்டத்தையும், அதனைத் தொடர்ந்து 'இனப்பெருக்க மருத்துவத்தில் முதுகலை ஃபெலோஷிப்' (Postdoctoral Fellowship in Reproductive Medicine) தகுதியையும் பெற்றார். சர்வதேசத் தரத்திலான மருத்துவ அறிவை வளர்ப்பதற்காக ஜெர்மனியின் புகழ்பெற்ற கீல் பல்கலைக்கழகத்தில் (Kiel University, Germany) 'M.MAS' (Master in Minimal Access Surgery) மற்றும் 'D.MAS' (Diploma in Minimal Access Surgery) பட்டங்களையும், சிங்கப்பூர் தேசியப் பல்கலைக்கழக மருத்துவமனையில் (NUH, Singapore) 'மேம்பட்ட ART மலட்டுத்தன்மை சிறப்புப் பயிற்சியையும்' முறையாகப் பெற்றுள்ளார். தனது அசாத்திய மருத்துவத் திறமையால் '80,000-க்கும் அதிகமான வெற்றிகரமான IVF சுழற்சிகளை' (IVF Cycles) கையாண்டு, 25,000-க்கும் மேற்பட்ட ஆரோக்கியமான குழந்தைகளின் பிறப்பிற்குக் காரணியாக விளங்கி சாதனை படைத்துள்ளார். இவரது உலகத்தரம் வாய்ந்த மருத்துவப் பங்களிப்பைப் பாராட்டி 'கின்னஸ் உலக சாதனை' (Guinness World Records), 'இந்தியா புக் ஆஃப் ரெக்கார்ட்ஸ்', மற்றும் 'நேஷனல் பெர்ட்டிலிட்டி அவார்ட்ஸ்' (Best IVF Specialist South) போன்ற மிக உயரிய சர்வதேச மற்றும் தேசிய அங்கீகாரங்கள் ஒற்றை மேற்கோள் குறியில் போற்றத்தக்க வகையில் இவருக்கு வழங்கப்பட்டுள்ளன.",

  },
  hi: {
    biography: "जीवनी", educationCareer: "शिक्षा और करियर", institutions: "संस्थान", service: "सेवा और उद्यम",
    contents: "विषय-सूची", earlyLife: "प्रारंभिक जीवन और शिक्षा", medicalCareer: "चिकित्सा करियर", hospital: "अस्पताल का विकास",
    fertility: "प्रजनन सेवाएँ", research: "अनुसंधान", business: "व्यवसाय, ट्रस्ट और सामुदायिक पहल", legacy: "परिवार और विरासत",
    currentRole: "वर्तमान भूमिका", timeline: "शिक्षा और करियर की समयरेखा", milestones: "शैक्षणिक संस्थान और प्रमुख पड़ाव",
    familyTitle: "परिवार और विरासत", familyIntro: "उनका परिवार चिकित्सा, प्रजनन उपचार और अनुसंधान के क्षेत्रों से जुड़ा है। प्रत्येक सदस्य की जानकारी देखने के लिए नाम चुनें।",
    readProfile: "प्रोफ़ाइल पढ़ें →", photoMissing: "परिवार की तस्वीर उपलब्ध नहीं", wifeRole: "पत्नी · इस्वर्या फर्टिलिटी सेंटर की सह-संस्थापक", elderRole: "बड़े बेटे · सामान्य शल्य चिकित्सा और IVF", youngerRole: "छोटे बेटे · प्रजनन चिकित्सा और अनुसंधान",
    close: "बंद करें", familyProfile: "परिवार की प्रोफ़ाइल", education: "शिक्षा", practice: "चिकित्सकीय अभ्यास", dob: "जन्म तिथि", family: "परिवार", activity: "कार्य क्षेत्र", listedInstitutions: "उल्लेखित संस्थान",
    doctorSummary: "चिकित्सा पेशेवर · स्वास्थ्य पहल",
    language: "भाषा",
    bioIntro: "डॉ. के. वेलुस्वामी एक अग्रणी चिकित्सा विशेषज्ञ और बहुमुखी स्वास्थ्य सेवा नेता (Healthcare Leader) हैं, जिन्होंने चिकित्सा, प्रसूति और प्रजनन उपचार (Fertility Treatment), जैव प्रौद्योगिकी अनुसंधान (Biotechnology Research) और चिकित्सा शिक्षा के क्षेत्रों में चार दशकों से अधिक समय से उत्कृष्ट योगदान दिया है।.",
    earlyText: "प्रदान की गई जीवनी के अनुसार, डॉ. के. वेलुस्वामी का जन्म 17 अक्टूबर 1954 को ग्रामीण तमिलनाडु के एक किसान परिवार में हुआ था। दस्तावेज़ में उनके माता-पिता के नाम कुप्पना गौंडर और पलनियम्मल दिए गए हैं। उन्होंने तमिल माध्यम के सरकारी स्कूल में पढ़ाई शुरू की। दस्तावेज़ में चिकित्सा शिक्षा मद्रास विश्वविद्यालय के अंतर्गत और आंतरिक चिकित्सा में स्नातकोत्तर प्रशिक्षण",
    exactSchool: "प्रकाशन से पहले स्कूल, गाँव और शिक्षा संबंधी अभिलेखों की पुष्टि करें।",
    careerText: "भारत के सर्वोच्च चिकित्सा संस्थान, एम्स, नई दिल्ली (AIIMS, New Delhi) से अपनी चिकित्सा विशेषज्ञता को निखारने के बाद, डॉ. के. वेलुस्वामी का एक नेक दृष्टिकोण था कि जरूरतमंद दंपत्तियों को विश्व स्तरीय, आधुनिक उपचार आसानी से उपलब्ध कराया जा सके। इसी दूरदर्शी दृष्टिकोण के साथ, उन्होंने आधिकारिक तौर पर पलनी शहर में अपनी चिकित्सा सेवाएं शुरू कीं। पलनी शहर में एक छोटे से मातृत्व और महिला अस्पताल के रूप में शुरू हुआ यह केंद्र आगे चलकर दक्षिण भारत के सबसे बड़े चिकित्सा नेटवर्कों में से एक बन गया। विशेष रूप से, वर्ष 1982 से 2000 तक, डॉ. के. वेलुस्वामी ने मुख्य रूप से जनरल इंटरनल मेडिसिन (Internal Medicine), डायबिटोलॉजी (Diabetology), और कार्डियोलॉजी (Cardiology) के क्षेत्रों में अपनी गहन चिकित्सा पद्धति का संचालन किया। उस दौर में, पूरे पलनी शहर और उसके आस-पास के गांवों में इन उन्नत उपचारों को प्रदान करने वाला यह एकमात्र प्राथमिक केंद्र (Only Centre in Palani) था। ग्रामीण आबादी तक अत्याधुनिक चिकित्सा सेवा पहुँचाने के उद्देश्य से, इस केंद्र ने उन्नत सुपर-स्पेशलिटी उपचारों को सफलतापूर्वक प्रदान किया, जिसमें कोरोनरी एंजियोग्राम (Angiogram), जटिल एंजियोप्लास्टी (Complex Angioplasties), पेसमेकर प्रत्यारोपण (Pacemaker Implantation), और विभिन्न प्रकार की ओपन हार्ट सर्जरी और बाईपास (BT) हार्ट सर्जरी शामिल थीं। यह दक्षिण तमिलनाडु में हृदय संबंधी आपातकालीन स्थितियों के लिए सबसे महत्वपूर्ण प्राथमिक चिकित्सा गंतव्य बन गया। यही ऐतिहासिक और मजबूत आधार था जिसने चेन्नई में अत्याधुनिक सुविधाओं से लैस 400 बिस्तरों वाले भव्य 'ऐश्वर्या सुपर स्पेशलिटी अस्पताल' (Iswarya Super Speciality Hospital) के विस्तार का मार्ग प्रशस्त किया, जो आज न केवल मातृत्व बल्कि पूरे जनरल मेडिसिन और क्रिटिकल कार्डियक केयर के क्षेत्र में एक नई क्रांति का नेतृत्व कर रहा है।.",
    qualificationCheck: "में आधिकारिक तौर पर अपनी चिकित्सा सेवाएं शुरू कीं। पलनी शहर में एक छोटे से मातृत्व और महिला अस्पताल के रूप में शुरू हुआ यह केंद्र, डॉ. वेलुस्वामी की अथक कड़ी मेहनत, अत्याधुनिक जैव प्रौद्योगिकी अनुसंधान (Biotechnology Research) और चिकित्सा नवाचारों के कारण दक्षिण भारत का सबसे बड़ा फर्टिलिटी उपचार नेटवर्क बन गया।.",
    hospitalText: "दक्षिण भारत में एक अग्रणी के रूप में",
    hospitalText2: " में रखी गई नींव ने ऐश्वर्या फर्टिलिटी सेंटर को पूरे तमिलनाडु में बहुत ही कम लागत पर अत्याधुनिक टेस्ट-ट्यूब बेबी (IVF) और उन्नत बांझपन उपचारों की शुरुआत करने का गौरव दिलाया। डॉ. के. वेलुस्वामी (अध्यक्ष) और डॉ. एस. चंद्रलेखा (संस्थापक) के दूरदर्शी मार्गदर्शन में, डॉ. अरविंद चंदर और डॉ. अरुण मुथुवेल (प्रबंध निदेशक) जैसे अगली पीढ़ी के चिकित्सा विशेषज्ञ इस नेक सेवा को वैश्विक मानकों तक ले जाने के लिए टीम में शामिल हुए हैं। हाल ही में, चेन्नई में अत्याधुनिक सुविधाओं से लैस 400 बिस्तरों वाले 'ऐश्वर्या मल्टी स्पेशलिटी अस्पताल' (Iswarya Multi Speciality Hospital) की भव्य शुरुआत के साथ, यह नेतृत्व न केवल प्रसूति और मातृत्व देखभाल में बल्कि पूरे सामान्य स्वास्थ्य सेवा क्षेत्र में एक नई क्रांति का नेतृत्व कर रहा है।.",
    fertilityText: "वर्ष 1986 में, डॉ. के. वेलुस्वामी ने प्रसिद्ध स्त्री रोग विशेषज्ञ",
    fertilityText2: " के साथ मिलकर आधिकारिक तौर पर ऐश्वर्या फर्टிலिटी सेंटर (Iswarya Fertility Centre) की स्थापना की। अपनी उत्कृष्ट चिकित्सा सफलताओं और उच्च सफलता दरों (High Success Rates) के बल पर, उन्होंने",
    fertilityText3: "जैसे तमिलनाडु के प्रमुख शहरों में कई नई शाखाएं शुरू करके हजारों परिवारों का विश्वास जीता। तमिलनाडु के अलावा कर्नाटक, तेलंगाना और आंध्र प्रदेश जैसे अन्य राज्यों में भी अपनी समर्पित स्वास्थ्य सेवाओं का विस्तार करते हुए, उन्होंने ऐश्वर्या फर्टிலिटी सेंटर को भारत की अग्रणी आईवीएफ (IVF) श्रृंखलाओं में से एक में बदल दिया। आज, 110 से अधिक अत्याधुनिक शाखाओं के साथ, डॉ. के. वेलुस्वामी के नेतृत्व में इस टीम ने 2 लाख से अधिक खुशहाल दंपत्तियों के जीवन में माता-पिता बनने के सपने को सफलतापूर्वक साकार किया है।.",
    timelineIntro: "सामाजिक सशक्तिकरण के लिए बुनियादी और नर्सिंग शिक्षा का विकास; ऐश्वर्या फर्टिलिटी सेंटर्स के माध्यम से लाखों परिवारों के सपनों को साकार करना; और चेनजीन प्राइवेट लिमिटेड में अत्याधुनिक जैव प्रौद्योगिकी अनुसंधान के नए आयाम स्थापित करना। डॉ. के. वेलुस्वामी चार दशकों के नैतिक समर्पण के साथ इन तीन महत्वपूर्ण स्तंभों का सफलतापूर्वक नेतृत्व कर रहे हैं, और एक आधुनिक दूरदर्शी दृष्टिकोण से भारतीय स्वास्थ्य सेवा के भविष्य को एक नया आकार दे रहे हैं।.",
    researchText: "डॉ. के. वेलुस्वामी के दूरदर्शी नेतृत्व में, चेनजीन प्राइवेट लिमिटेड (ChenGene Private Limited) भारत की आयात निर्भरता को समाप्त करने और लाखों लोगों के लिए अत्याधुनिक चिकित्सा को किफायती बनाने के लिए जैव प्रौद्योगिकी में एक क्रांतिकारी यात्रा का नेतृत्व कर रहा है। डॉ. के. |वेलुस्वामी का मुख्य उद्देश्य कैंसर और अन्य गंभीर बीमारियों के इलाज में उपयोग होने वाली 'Trastuzumab (Deruxtecan)' जैसी अत्यधिक महंगी मोनोक्लोनल एंटीबॉडी, बाई-विशिष्ट एंटीबॉडी, ट्राई-विशिष्ट एंटीबॉडी और रासायनिक पेलोड से युक्त एंटीबॉडी-ड्रग कंजुगेट्स (Drug-ADC complexes) को जीन से लेकर अंतिम उत्पाद (Fill-Finish) तक पूरी तरह स्वदेशी रूप से विकसित करना है। वर्तमान में इनमें से कई एंटीबॉडी के लिए कोई भारतीय निर्माता उपलब्ध नहीं है, जिसके कारण देश पूरी तरह से महंगे आयात पर निर्भर है, और इसी आयात पर होने वाले भारी खर्च को कम करने और देश के करोड़ों लोगों के लिए इसे आसानी से उपलब्ध कराने के लिए उन्होंने यह कदम उठाया है। इस पावन यात्रा की शुरुआत करते हुए डॉ. के. वेलुस्वामी और उनकी टीम ने जीन क्लोनिंग, पायलट-स्केल अपस्ट्रीम प्रोसेसिंग, डाउनस्ट्रीम प्रोसेसिंग, अंतिम उत्पाद विकास, सख्त गुणवत्ता नियंत्रण और विषाक्तता व इन-विट्रो अध्ययन जैसी सभी क्षमताओं को पूरी तरह इन-हाउस विकसित कर आत्मनिर्भरता प्राप्त की है। इसके अतिरिक्त, डॉ. के. वेलुस्वामी के मार्गदर्शन में चेनजीन जल्द ही सबसे जटिल बीमारियों के इलाज के लिए अत्यधिक किफायती दरों पर अगली पीढ़ी की कार-टी (CAR-T) सेल थेरेपी, कार-एनके (CAR-NK) सेल थेरेपी और संबंधित उन्नत आनुवंशिक चिकित्सा समाधान पेश करने जा रही है, जिससे दुनिया भर के लोगों के लिए उन्नत स्वास्थ्य तकनीकों तक पहुंच सुनिश्चित हो सके।.",
    currentText: "डॉ. के. वेलुस्वामी वर्तमान में 'ऐश्वर्या हेल्थकेयर ग्रुप के अध्यक्ष' (Chairman) के रूप में कार्यरत हैं, और इसके राष्ट्रीय स्तर पर चिकित्सा विस्तार कार्यों का रणनीतिक नेतृत्व कर रहे हैं। इसके साथ ही, वे मेप्स सेज, चेन्नई में स्थित 'चेनजीन प्राइवेट लिमिटेड के मुख्य संरक्षक' (Chief Mentor) के रूप में उन्नत बायोफार्मा अनुसंधान पाइपलाइनों का कुशलतापूर्वक मार्गदर्शन करते हैं। वे एक साथ कई महत्वपूर्ण भूमिकाओं का निर्वहन कर रहे हैं, जिसमें पलनी में 'भारत शैक्षणिक संस्थानों के संस्थापक', 'ऐश्वर्या मेडिकल फाउंडेशन के प्रबंध न्यासी' और 'ऐश्वर्या विंडमिल एंड एनर्जी के निदेशक' (Director) शामिल हैं, जिससे वे आधुनिक स्वास्थ्य सेवा, वैश्विक शिक्षा और संधारणीय (Sustainable) ऊर्जा के क्षेत्रों को एक नया आकार दे रहे हैं।.",
    storyButton: "अधिक जानकारी के लिए नीले नाम या स्थान पर क्लिक करें।",
    profileNote: "",
    familyChandra: "डॉ. एस. चंद्रलेखा स्त्री रोग, प्रसूति और उन्नत प्रजनन विज्ञान के क्षेत्र में चार दशकों से अधिक का अद्वितीय अनुभव रखने वाली एक अत्यंत प्रतिष्ठित चिकित्सा अग्रणी हैं।.अपने स्कूली दिनों से ही असाधारण शैक्षणिक प्रतिभा का परिचय देते हुए, उन्होंने अपनी '11वीं कक्षा की बोर्ड परीक्षा में राज्य में पहला स्थान' प्राप्त करने की ऐतिहासिक उपलब्धि हासिल की थी।. अपनी उच्च चिकित्सा शिक्षा के दौरान उनकी असाधारण शैक्षणिक उत्कृष्टता के लिए उन्हें स्नातकोत्तर विशेषता के दौरान प्रतिष्ठित 'स्त्री रोग में स्वर्ण पदक' (Gold Medal) से सम्मानित किया गया था। 1980 के दशक के उत्तरार्ध में, डॉ. के. वेलुस्वामी के साथ मिलकर उन्होंने पलनी के डिंडीगुल रोड पर ऐतिहासिक 'के.वी. अस्पताल' और 'ऐश्वर्या फर्टिलिटी सेंटर' की मजबूत नींव रखी थी। मानव भ्रूणविज्ञान (Embryology) के क्षेत्र में एक अभूतपूर्व क्रांति लाते हुए, उन्होंने भारत के 'पहले फ्रोजन एग और फ्रोजन स्पर्म बच्चे' (First frozen egg + sperm baby) को सफलतापूर्वक जन्म देने के ऐतिहासिक चिकित्सा चमत्कार का नेतृत्व किया। इसके अलावा, उन्होंने भारत में एक 'गुर्दा प्रत्यारोपण कराने वाली महिला' और एक 'स्तन कैंसर से उबरने वाली महिला' दोनों के लिए सफल आईवीएफ (IVF) गर्भधारण प्राप्त करके चिकित्सा इतिहास रच दिया। आज, वे चेन्नई में प्रमुख 'NABH-प्रमाणित' ओएमआर केंद्र सहित 110 से अधिक अत्याधुनिक क्लीनिकों में नैदानिक मानकों का कुशलतापूर्वक मार्गदर्शन कर रही हैं, जहाँ लेजर-असिस्टेड हैचिंग, आईसीएसआई (ICSI) और उन्नत आनुवंशिक परीक्षण (PGS/PGD) जैसी क्रांतिकारी पद्धतियों के माध्यम से हजारों निःसंतान दंपत्तियों के माता-पिता बनने के सपने को सफलतापूर्वक साकार किया जा रहा है।.",
    familyArun: "डॉ. अरुण पांडिचेरी विश्वविद्यालय से अपनी 'MBBS' की पढ़ाई पूरी करने के बाद, उन्होंने श्री रामचंद्र मेडिकल कॉलेज (SRMC), चेन्नई से प्रसूति और स्त्री रोग में 'MS (OBGYN)' की डिग्री प्राप्त की, और इसके बाद भारत की पहली विशेष सुपर-स्पेशलिटी उपाधि 'MCh - रिप्रोडक्टिव मेडिसिन एंड सर्जरी' सफलतापूर्वक पूरी की. उन्होंने वैश्विक स्तर के शीर्ष संस्थानों से प्रशिक्षण प्राप्त किया है, जिसमें बोस्टन आईवीएफ और हार्वर्ड मेडिकल स्कूल (Harvard University) से 'उन्नत आईवीएफ प्रशिक्षण', मिशिगन आईवीएफ से 'नेचुरल साइकिल आईवीएफ', मियामी विश्वविद्यालय से 'एंड्रोलॉजी और माइक्रो टीईएसई (Micro TESE)', तथा 'क्लीवलैंड क्लिनिक, यूएसए' (Cleveland Clinic) से 'पीजीडी और एम्ब्रियो बायोप्सी' प्रोटोकॉल शामिल हैं. वे अमेरिका में प्रतिष्ठित अमेरिकन सोसाइटी ऑफ रिप्रोडक्टिव मेडिसिन (ASRM) सम्मेलन में मौखिक शोध पत्र प्रस्तुत (Oral Presenter) करने वाले 'भारत के पहले डॉक्टर' बने। इसके अतिरिक्त, फ्रोजन एग ट्रांसफर (FET) चक्रों के दौरान प्रोजेस्टेरोन के जलीय मार्ग (Aqueous route) का उपयोग करने वाले वे दुनिया के 'पहले विशेषज्ञ' हैं. उनके उत्कृष्ट चिकित्सा योगदान के लिए उन्हें टाइम्स हेल्थ अवार्ड्स 2018 में प्रतिष्ठित 'Young Achievers Award' और रेडियो सिटी द्वारा 'Chennai City Icon Award 2018' से सम्मानित किया गया है.",
    familyAravind: "डॉ. अरविंद चंदर प्रसूति, उन्नत बांझपन निवारण और स्त्री रोग लेप्रोस्कोपिक सर्जरी के क्षेत्र में अंतर्राष्ट्रीय स्तर पर प्रसिद्ध एक असाधारण चिकित्सा विशेषज्ञ और प्रबंध निदेशक (Managing Director) हैं। अन्नामलाई विश्वविद्यालय से अपनी 'MBBS' की पढ़ाई पूरी करने के बाद, उन्होंने डॉ. एम.जी.आर. मेडिकल यूनिवर्सिटी से प्रसूति और स्त्री रोग में 'MS (OG)' की स्नातकोत्तर उपाधि प्राप्त की, और इसके बाद 'प्रजनन चिकित्सा में पोस्टडॉक्टरल फैलोशिप' (Postdoctoral Fellowship in Reproductive Medicine) पूरी की। अपने क्लिनिकल ज्ञान को वैश्विक मानकों पर ले जाने के लिए, उन्होंने जर्मनी के प्रतिष्ठित कील विश्वविद्यालय (Kiel University, Germany) से 'M.MAS' (मास्टर इन मिनिमल एक्सेस सर्जरी) और 'D.MAS' (डिप्लोमा इन मिनिमल एक्सेस सर्जरी) की डिग्रियां प्राप्त कीं, साथ ही नेशनल यूनिवर्सिटी हॉस्पिटल (NUH, Singapore) से उन्नत 'ART फर्टिलिटी प्रशिक्षण' भी प्राप्त किया। अपनी उत्कृष्ट चिकित्सा विशेषज्ञता के साथ, उन्होंने '80,000 से अधिक सफल आईवीएफ चक्रों' (IVF Cycles) का कुशलतापूर्वक प्रबंधन किया है, जिसके परिणामस्वरूप 25,000 से अधिक स्वस्थ बच्चों का जन्म हुआ है। उनके इस विश्व स्तरीय चिकित्सा योगदान के लिए उन्हें प्रतिष्ठित 'गिनीज वर्ल्ड रिकॉर्ड्स' (Guinness World Records), 'इंडिया बुक ऑफ रिकॉर्ड्स', और 'बेस्ट आईवीएफ स्पेशलिस्ट साउथ' (National Fertility Awards) जैसे सर्वोच्च राष्ट्रीय और अंतर्राष्ट्रीय सम्मानों से नवाजा गया है।.",

  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const t = (key: string) => uiText[language][key] ?? uiText.en[key] ?? key;

  const translateContent = (value: string) => {
    if (language === "en") return value;
    // Translate all repeated data labels too (timeline titles, institution names,
    // locations and infobox values), not only the longer paragraphs below.
    const labels: Record<Language, Record<string, string>> = {
      en: {},
      ta: {
        "MD — General Medicine": "MD — பொது மருத்துவம்",
        "Clinical Practice in Palani": "பழனியில் மருத்துவப் பணி",
       
        "M.Sc. — Sexual and Reproductive Medicine": "M.Sc. — பாலியல் மற்றும் இனப்பெருக்க மருத்துவம்",
        "IVF Training": "IVF பயிற்சி",
        "Hospital Leadership and Research": "மருத்துவமனைத் தலைமைத்துவம் மற்றும் ஆராய்ச்சி",
        "Baarath Vidhya Bavan Matriculation School": "பாரத் வித்யா பவன் மெட்ரிகுலேஷன் பள்ளி",
        "Baarath College of Nursing": "பாரத் செவிலியர் கல்லூரி",
        "Baarath Public School": "பாரத் பொதுப் பள்ளி",
        "Iswarya Fertility Centre": "ஐஸ்வர்யா கருவுறுதல் சிகிச்சை மையம்",
        "V.C. Medical Educational and Trust": "V.C. மருத்துவக் கல்வி அறக்கட்டளை",
        "Iswarya Wind Power and Energy": "ஐஸ்வர்யா காற்றாலை மின்சாரம் மற்றும் ஆற்றல்",
        "Iswarya Medical Trust": "ஐஸ்வர்யா மருத்துவ அறக்கட்டளை",
        "Coimbatore": "கோயம்புத்தூர்", "Chennai": "சென்னை", "Madurai": "மதுரை",
        "Palani": "பழனி", "Palani, Tamil Nadu": "பழனி, தமிழ்நாடு",
        "General Medicine and Cardiology": "பொது மருத்துவம் மற்றும் இதயவியல்",
        "Further medical education": "மேற்படிப்பு மருத்துவக் கல்வி",
        "National University of Singapore": "சிங்கப்பூர் தேசியப் பல்கலைக்கழகம்",
        "Healthcare and scientific initiatives": "சுகாதாரம் மற்றும் அறிவியல் முயற்சிகள்",
        "Research and laboratory initiative, Chennai": "ஆராய்ச்சி மற்றும் ஆய்வக முயற்சி, சென்னை",
        "Kakatiya Medical College, Andhra Pradesh": "காகத்தியா மருத்துவக் கல்லூரி, ஆந்திரப் பிரதேசம்",
        "All India Institute of Medical Sciences, New Delhi": "அகில இந்திய மருத்துவ அறிவியல் நிறுவனம் (AIIMS), புதுதில்லி",
        "Kakatiya Medical College; AIIMS, New Delhi": "காகத்தியா மருத்துவக் கல்லூரி; AIIMS, புதுதில்லி",
        "17 October 1954 ": "17 அக்டோபர் 1954",
        "Clinical care, fertility services, education and research initiatives": "மருத்துவச் சேவை, கருவுறுதல் சிகிச்சை, கல்வி மற்றும் ஆராய்ச்சி முயற்சிகள்",
        "K.V. Hospital, Iswarya centres, educational and research initiatives": "K.V. மருத்துவமனை, ஐஸ்வர்யா மையங்கள், கல்வி மற்றும் ஆராய்ச்சி முயற்சிகள்",
      },
      hi: {
        "MD — General Medicine": "MD — जनरल मेडिसिन",
        "Clinical Practice in Palani": "पलानी में चिकित्सा सेवा",
  
        "M.Sc. — Sexual and Reproductive Medicine": "M.Sc. — यौन एवं प्रजनन चिकित्सा",
        "IVF Training": "IVF प्रशिक्षण",
        "Hospital Leadership and Research": "अस्पताल नेतृत्व और अनुसंधान",
        "Baarath Vidhya Bavan Matriculation School": "भारत विद्या भवन मैट्रिकुलेशन स्कूल",
        "Baarath College of Nursing": "भारत कॉलेज ऑफ नर्सिंग",
        "Baarath Public School": "भारत पब्लिक स्कूल",
        "Iswarya Fertility Centre": "इस्वर्या फर्टिलिटी सेंटर",
        "V.C. Medical Educational and Trust": "V.C. मेडिकल एजुकेशनल एंड ट्रस्ट",
        "Iswarya Wind Power and Energy": "इस्वर्या पवन ऊर्जा और ऊर्जा पहल",
        "Iswarya Medical Trust": "इस्वर्या मेडिकल ट्रस्ट",
        "Coimbatore": "कोयंबटूर", "Chennai": "चेन्नई", "Madurai": "मदुरै",
        "Palani": "पलानी", "Palani, Tamil Nadu": "पलानी, तमिलनाडु",
        "General Medicine and Cardiology": "जनरल मेडिसिन और कार्डियोलॉजी",
        "Further medical education": "आगे की चिकित्सा शिक्षा",
        "National University of Singapore": "नेशनल यूनिवर्सिटी ऑफ सिंगापुर",
        "Healthcare and scientific initiatives": "स्वास्थ्य सेवा और वैज्ञानिक पहल",
        "Research and laboratory initiative, Chennai": "अनुसंधान और प्रयोगशाला पहल, चेन्नई",
        "Kakatiya Medical College, Andhra Pradesh": "काकतीय मेडिकल कॉलेज, आंध्र प्रदेश",
        "All India Institute of Medical Sciences, New Delhi": "अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS), नई दिल्ली",
        "Kakatiya Medical College; AIIMS, New Delhi": "काकतीय मेडिकल कॉलेज; AIIMS, नई दिल्ली",
        "17 October 1954 (as stated in the supplied biography)": "17 अक्टूबर 1954 (प्रदान की गई जीवनी के अनुसार)",
        "Clinical care, fertility services, education and research initiatives": "चिकित्सा सेवा, प्रजनन सेवाएँ, शिक्षा और अनुसंधान पहल",
        "K.V. Hospital, Iswarya centres, educational and research initiatives": "K.V. अस्पताल, इस्वर्या केंद्र, शैक्षणिक और अनुसंधान पहल",
      },
    };
    if (labels[language][value]) return labels[language][value];
    const ta: Record<string, string> = {
      "As the foundational step towards his medical dream, he successfully completed his MBBS medical degree in 1972 at the historic Kakatiya Medical College, affiliated with the prestigious Osmania University.": "தனது மருத்துவக் கனவின் முதல் படியாக, புகழ்பெற்ற உஸ்மானியா பல்கலைக்கழகத்தில் (University of Osmania) அமைந்துள்ள காகத்திய மருத்துவ கல்லூரில் 1972 - ஆம் ஆண்டு தனது MBBS மருத்துவப் படிப்பை வெற்றிகரமாக நிறைவு செய்தார்.",
      "Driven by his medical dream, he completed his postgraduate medical education in 1982 in the department of Internal Medicine at AIIMS, New Delhi, India's most premier and prestigious medical institution.": " இந்தியாவின் மிக உயரிய மற்றும் முதன்மையான மருத்துவக் கழகமான புதுடெல்லியில் அமைந்துள்ள எய்ம்ஸ் (AIIMS, New Delhi) நிறுவனத்தில் உள்ள மருத்துவ பிரிவில் தனது முதுகலை மருத்துவப் படிப்பை 1982 - ஆம் ஆண்டு மருத்துவ கனவோடு நிறைவு செய்தார்.",
      "He began his medical practice as a small general medicine and maternity center under the name 'K.V. Hospital', located on Dindigul Road in Palani. It was from here that he, along with his wife, the renowned gold medalist gynecologist Dr. S. Chandralekha, embarked on their ethical medical journey.": "பழனி நகரில் திண்டுக்கல் சாலையில் (Dindigul Road) அமைத்துள்ள 'கே.வி. மருத்துவமனை' (K.V. Hospital) என்ற பெயரில் ஒரு சிறிய பொது மருத்துவம் மற்றும் மகப்பேறு மையமாகத் தனது பணியைத் தொடங்கினார். அவரும், அவரது மனைவியான புகழ்பெற்ற தங்கம் வென்ற மகப்பேறு மருத்துவர் டாக்டர் எஸ். சந்திரலேகா அவர்களும் இணைந்து இங்கிருந்துதான் தங்களது தார்மீக மருத்துவப் பயணத்தைத் தொடங்கினர்", 
      
      "Dr. K. Veluswamy's advanced qualification reflects his exceptional expertise in the field of infertility eradication. This academic distinction has equipped him with the profound clinical wisdom to manage complex hormonal imbalances and cutting-edge fertility solutions with a world-class scientific foundation.": "டாக்டர் கே. வேலுச்சாமி அவர்கள் பெற்றுள்ள உயரிய தகுதி, மலட்டுத்தன்மை ஒழிப்புத் துறையில் அவரது அசாத்திய நிபுணத்துவத்தை உணர்த்துகிறது. இக்கல்வித் தகுதி சிக்கலான ஹார்மோன் குறைபாடுகள் மற்றும் அதிநவீனக் கருவுறுதல் சிகிச்சைகளை உலகத்தர அறிவியல் பின்னணியுடன் கையாளும் பேரறிவை அவருக்கு வழங்கியுள்ளது.",
      "Dr. K. Veluswamy's advanced IVF and Assisted Reproductive Techniques (ART) training from the globally renowned National University of Singapore (NUS) confirms his world-class clinical expertise in infertility eradication. This international qualification provides him with the clinical wisdom required to manage cutting-edge test-tube baby treatments with absolute precision.": "உலகப் புகழ்பெற்ற சிங்கப்பூர் தேசியப் பல்கலைக்கழகத்தில் (NUS) டாக்டர் கே. வேலுச்சாமி அவர்கள் பெற்றுள்ள மேம்பட்ட IVF மற்றும் உதவி இனப்பெருக்க தொழில்நுட்ப (ART) பயிற்சிகள், மலட்டுத்தன்மை ஒழிப்புத் துறையில் அவரது உலகத்தரம் வாய்ந்த மருத்துவத் திறனை உறுதிப்படுத்துகின்றன. இந்த சர்வதேசத் தகுதி, அதிநவீன சோதனைக்குழாய் குழந்தை சிகிச்சை முறைகளை மிகத் துல்லியமாக கையாள்வதற்கான கிளினிக்கல் பேரறிவை இவருக்கு வழங்கியுள்ளது.",
      "A revolutionary union of four decades of visionary healthcare leadership and cutting-edge biotechnology research. Under the guidance of Dr. K. Veluswamy, 'ChenGene' operates as a premier genetic and reproductive research hub, implementing advanced genomic insights to break new grounds in precision fertility care.": "சுகாதாரக் கட்டமைப்பில் நாற்பதாண்டுகாலத் தொலைநோக்குத் தலைமைத்துவமும், அதிநவீன உயிரித் தொழில்நுட்ப ஆராய்ச்சியும் (Biotechnology Research) இணைந்த ஒரு புதிய மருத்துவக் கூட்டு முயற்சி! டாக்டர் கே. வேலுச்சாமி அவர்களின் வழிகாட்டுதலில் உருவான 'சென்ஜீன்' (ChenGene) மையம், மரபணு சார்ந்த குறைபாடுகளைக் கண்டறிந்து, நவீனத் தொழில்நுட்பத்தின் மூலம் மகப்பேறின்மைக்குத் துல்லியமான உலகத்தரம் வாய்ந்த தீர்வுகளை வழங்கி வருகிறது.",
      "Shaping the leaders of tomorrow with academic excellence and core values. Conceptualized under the visionary outlook of Dr. K. Veluswamy, Baarath Vidhya Bavan Matriculation School stands as a premier educational landmark, providing world-class holistic education to empower young minds.": "எதிர்காலத் தலைமுறையினரை வடிவமைக்கும் உன்னதக் கல்வித் தளம்! டாக்டர் கே. வேலுச்சாமி அவர்களின் தொலைநோக்குப் பார்வையில் உருவான 'பாரத் வித்யா பவன் மெட்ரிகுலேஷன் பள்ளி', கிராமப்புற மற்றும் நகர்ப்புற மாணவர்களுக்கு உலகத்தரம் வாய்ந்த நவீனக் கல்வியையும், ஒழுக்க நெறிகளையும் வழங்கி, அவர்களின் பன்முகத் திறமைகளை வளர்க்கும் உன்னதப் பாலமாகத் திகழ்கிறது.",
      "The premier destination for advanced reproductive care in the Kongu region. Guided by the world-class medical expertise of Dr. K. Veluswamy, Iswarya Fertility Centre in Coimbatore blends cutting-edge IVF technologies with deeply compassionate clinical care, standing as the most trusted landmark turning parenthood dreams into reality.": "கொங்கு மண்டலத்தின் முதன்மை மகப்பேறு சிகிச்சைத் தலம்! டாக்டர் கே. வேலுச்சாமி அவர்களின் உலகத்தரம் வாய்ந்த மருத்துவ வழிகாட்டுதலில் இயங்கும் 'கோவை ஐஸ்வர்யா கருத்தரிப்பு மையம்', அதிநவீன சோதனைக்குழாய் குழந்தை (IVF) தொழில்நுட்பங்கள் மற்றும் கனிவான மருத்துவச் சேவையின் மூலம் பல்லாயிரக்கணக்கான குடும்பங்களில் தாய்மை ஒளியேற்றி, கோவை மக்களின் பேராதரவைப் பெற்ற மிக நம்பகமான மையமாகத் திகழ்கிறது",
      "Where pioneering clinical science harmonizes with deep human empathy. Under the strategic steering of Dr. K. Veluswamy, Iswarya Fertility Centre and Iswarya Hospital stand as timeless sanctuaries of holistic healing. From setting global benchmarks in assisted reproductive technologies (ART) to deploying robust, full-spectrum multi-specialty clinical systems, the institution delivers seamless diagnostic accuracy and preventative interventions, fundamentally elevating the accessibility and quality of modern patient care.": "விஞ்ஞானத் துல்லியமும் தார்மீக அர்ப்பணிப்பும் இணையும் உன்னதத் தளம்! டாக்டர் கே. வேலுச்சாமி அவர்களின் வழிகாட்டுதலில் இயங்கும் ஐஸ்வர்யா கருத்தரிப்பு மையம் மற்றும் ஐஸ்வர்யா மருத்துவமனை, தலைமுறைகளைக் கடந்து மக்களின் ஆகச்சிறந்த மருத்துவத் தேவைகளைப் பூர்த்தி செய்து வருகின்றன. அதிநவீன உதவி இனப்பெருக்க தொழில்நுட்பங்கள் (ART) மூலம் புதிய உயிர்களை மலரச் செய்யும் முதன்மைப் பணியில் தொடங்கி, இன்று ஒட்டுமொத்த மனிதகுல ஆரோக்கியத்திற்கான அவசரக்காலச் சிகிச்சை, நவீன அறுவை சிகிச்சைகள் மற்றும் பல்லுயிர் மருத்துவப் பிரிவுகள் (Multi-Specialty Care) வரை அனைத்தையும்வழங்கி வருகிறார். இந்தியச் சுகாதாரத் துறையின் தரப்பண்பை இந்தத் தலைமை உலகத்தரத்திற்கு உயர்த்தியுள்ளது",
      "The cornerstone of advanced reproductive excellence in the Temple City. Guided by the clinical wisdom of Dr. K. Veluswamy, Iswarya Fertility Centre in Madurai seamlessly integrates next-generation Assisted Reproductive Technologies (ART) with specialized Andrology diagnostics, serving as South Tamil Nadu’s premier sanctuary for fertility resolution.": "தூங்காநகரத்தின் துல்லியமான மருத்துவக் காப்பரண்! டாக்டர் கே. வேலுச்சாமி அவர்களின் உயர்தர வழிகாட்டுதலில் இயங்கும் மதுரை ஐஸ்வர்யா கருத்தரிப்பு மையம், தென் தமிழக மக்களுக்கு மேம்பட்ட உதவி இனப்பெருக்க தொழில்நுட்பங்களையும் (ART) நவீன ஆண்ட்ராலஜி (Andrology) தீர்வுகளையும் வழங்கி வருகிறார். மதுரையின் மிக நம்பகமான கிளினிக்கல் அடையாளமாகத் திகழ்கிறது.",
      "Nurturing the compassionate pillars of global healthcare. Established in the year 2010 under the educational vision of Dr. K. Veluswamy in Palani, Bhaarath College of Nursing stands as a premier institution delivering rigorous medical education and hands-on clinical brilliance to empower the next generation of nursing professionals.": "சுகாதாரத் துறையின் அர்ப்பணிப்புமிக்க தூண்களை உருவாக்கும் உன்னதக் கல்விக்கூடம்! டாக்டர் கே. வேலுச்சாமி அவர்களின் உயரிய தொலைநோக்குப் பார்வையில், கடந்த 2010 ஆம் ஆண்டு பழனியில் தொடங்கப்பட்ட 'பாரத் செவிலியர் கல்லூரி', உலகத்தரம் வாய்ந்த மருத்துவக் கல்வியையும், செய்முறைப் பயிற்சிகளையும் வழங்கி, மாணவிகளை மிகச்சிறந்த சர்வதேசச் செவிலியர் வல்லுநர்களாக வடிவமைத்து வருகிறது.",
      "Igniting young minds with innovative learning and global benchmarks. Established in the year 2017 under the progressive vision of Dr. K. Veluswamy in Palani, Bhaarath Public School delivers a premier tech-driven curriculum designed to foster academic brilliance, critical thinking, and strong core values from the foundational years.": "புத்தகச் சிந்தனையும் உலகத்தரக் கல்வியும் இணையும் உன்னதத் தளம்! டாக்டர் கே. வேலுச்சாமி அவர்களின் தொலைநோக்குப் பார்வையில், கடந்த 2017 ஆம் ஆண்டு பழனியில் தொடங்கப்பட்ட 'பாரத் பப்ளிக் பள்ளி', சிபிஎஸ்இ (CBSE) பாடத்திட்டத்தின் அடிப்படையில் நவீனக் கற்றல் முறைகளையும், ஒழுக்க விழுமியங்களையும் புகுத்தி, மாணவர்களின் ஆளுமைத் திறனைத் தொடக்கக் காலத்திலிருந்தே சர்வதேசத் தரத்திற்கு மெருகேற்றி வருகிறது.",
      "Advancing reproductive science and engineering the future of biopharma. Officially incorporated in the year 2023 under the visionary leadership of Dr. K. Veluswamy at MEPZ, Tambaram, SEZ, Chennai, ChenGene Private Limited is a premier biotechnology-driven life science enterprise dedicated to manufacturing world-class biosimilar therapeutics, complex monoclonal antibodies, and specialized IVF media with absolute precision.": "உயிர் அறிவியல் மற்றும் பயோபார்மா துறையில் ஒரு புதிய தொழில்நுட்பப் புரட்சி! டாக்டர் கே. வேலுச்சாமி அவர்களின் தொலைநோக்குத் தலைமையில், கடந்த 2023 ஆம் ஆண்டு முறைப்படி தொடங்கப்பட்டு, சென்னை தாம்பரம் மெப்ஸ் ஏற்றுமதி வளாகத்தில் (MEPZ, Tambaram, SEZ, Chennai) இயங்கி வரும் 'சென்ஜீன் பிரைவேட் லிமிடெட்', அதிநவீன உயிரித் தொழில்நுட்ப ஆராய்ச்சி (Biotechnology Research) மூலம் உலகத்தரம் வாய்ந்த பயோசிமிலர் மருந்துகள் மற்றும் பிரத்யேக IVF ஊடகங்களை (IVF Media) முற்றிலும் உள்நாட்டிலேயே தயாரிக்கும் முதன்மை நோக்குடன் செயல்பட்டு வருகிறது.",
      "Established under the humanitarian vision of Dr. K. Veluswamy to uplift economically weaker and underprivileged sections of society, 'V.C. Medical and Educational Charitable Trust' operates as a premier non-profit philanthropic institution. Dedicated to easing the financial burdens of the poor, the trust provides critical monetary subsidies for life-saving surgeries, sponsors free rural diagnostic camps, and extends comprehensive educational scholarships to deserving students from marginalized backgrounds. By seamlessly anchoring grass-roots clinical care with accessible quality education, the foundation stands as a living testament to Dr. K. Veluswamy's commitment to social empowerment and community healing..": "பொருளாதாரத்தில் பின்தங்கிய ஏழை எளிய மக்களின் வாழ்வாதாரத்தை மேம்படுத்தவும், அவர்களின் மருத்துவ மற்றும் கல்வித் தேவைகளுக்குக் கரம் கொடுக்கவும் டாக்டர் கே. வேலுச்சாமி அவர்களின் உன்னத மனிதநேயச் சிந்தனையில் தோற்றுவிக்கப்பட்ட ஒரு பரோபகார நற்பணி அமைப்புதான் 'வி.சி. மருத்துவ மற்றும் கல்வி அறக்கட்டளை' (V.C. Medical and Educational Charitable Trust) ஆகும். கிராமப்புற மற்றும் நலிவடைந்த பிரிவினருக்கு இலவச மருத்துவ உதவிகள், உயிர்காக்கும் அறுவை சிகிச்சைகளுக்கான நிதியுதவிகள் மற்றும் மருத்துவ விழிப்புணர்வு முகாம்களை நடத்துவதோடு மட்டுமன்றி, வசதியற்ற ஏழை மாணவர்களின் உயர்கல்விக் கனவை நனவாக்கப் பிரத்யேகக் கல்வி உதவித்தொகைகளையும் (Scholarships) இந்த அறக்கட்டளை வழங்கி வருகிறது; சுகாதாரம் மற்றும் கல்வியை சமுதாயத்தின் விளிம்புநிலை மக்களுக்கும் தடையின்றி கொண்டு சேர்த்து, அவர்களின் வாழ்வில் மறுமலர்ச்சியை ஏற்படுத்துவதையே இந்த அறக்கட்டளை தனது முதன்மை லட்சியமாகக் கொண்டு தார்மீக அர்ப்பணிப்புடன் செயலாற்றி வருகிறது.",
      "Recognizing the urgent global need to combat climate change and reduce carbon dependency, Dr. K. Veluswamy expanded his philanthropy into the renewable energy sector in 2009, establishing a robust framework for clean power generation. The institution utilizes highly sophisticated, aerodynamically optimized wind turbines installed in strategic wind corridors. These systems are seamlessly integrated with modern power grids to maximize kinetic-to-electrical energy conversion. By generating clean, sustainable mega-watt capacity power, the enterprise successfully offsets thousands of tons of greenhouse gas emissions annually, making a tangible contribution to ecological preservation and resource conservation. This energy matrix highlights Dr. K. Veluswamy's multifaceted leadership, proving that corporate responsibility and advanced eco-technologies can co-exist to fuel the nation's infrastructural demands responsibly.": "புவி வெப்பமயமாதலைக் குறைத்து, எதிர்காலத் தலைமுறைக்குத் தூய்மையான காற்றையும் ஆற்றலையும் வழங்க வேண்டும் என்ற உன்னத நோக்கில், டாக்டர் கே. வேலுச்சாமி அவர்களால் 2009 ஆம் ஆண்டில் இந்த ஆற்றல் பிரிவு முறைப்படி தொடங்கப்பட்டு இன்றுவரை வெற்றிகரமாகச் செயல்பட்டு வருகிறது. இந்த நிறுவனம் சாதகமான காற்று வீச்சு கொண்ட முதன்மைப் பகுதிகளில் அதிநவீன, உயர் செயல்திறன் மிக்க காற்றாலைகளை (High-Yield Wind Turbines) நிறுவி, அதன்மூலம் நவீனக் தொழில்நுட்பங்களுடன் இணைந்து தடையற்ற தூய மின்சாரத்தை உற்பத்தி செய்து வருகிறது. பாரம்பரிய நிலக்கரி மின்சாரத்திற்கு மாற்றாக, பல மெகாவாட் பசுமை மின்சாரத்தை உற்பத்தி செய்வதன் மூலம், ஆண்டுதோறும் ஆயிரக்கணக்கான டன் கார்பன்-டை- ஆக்சைடு உமிழ்வைத் தவிர்த்து சுற்றுச்சூழல் சமநிலையைப் பேண இம்மையம் உதவுகிறது. மருத்துவ மற்றும் கல்விச் சேவைகளைத் தாண்டி, நாட்டின் உள்கட்டமைப்பு மற்றும் தூய்மையான ஆற்றல் உற்பத்தியிலும் தன்னாதிக்கம் பெற வேண்டும் என்ற டாக்டர் கே. வேலுச்சாமியின் பன்முகத் சிந்தனைக்கு இந்த ஆற்றல் நிறுவனம் ஒரு சிறந்த எடுத்துக்காட்டாகும்.",
      "Driven by the profound belief that financial constraints should never stand between a human life and quality medical care, Dr. K. Veluswamy incorporated this foundation in 2010 to systematically anchor his extensive charity projects. The institution actively deploys large-scale free healthcare camps, dynamic diagnostic screenings, and specialized maternal wellness awareness programs directly into underserved rural landscapes and marginalized urban sectors. Providing a robust safety net, the foundation extends significant financial subsidies and zero-cost medications for critical clinical pathways, including complex cardiovascular interventions, renal support, and high-end advanced fertility solutions for deserving families. This foundation stands as a living testament to Dr. K. Veluswamy's multifaceted leadership, showcasing that cutting-edge clinical infrastructure and grassroots social responsibility can seamlessly unify to heal communities responsibly.": "பண வசதி இல்லாத காரணத்தால் எந்தவொரு உயிரும் மருத்துவ உதவியின்றித் தவிக்கக் கூடாது என்ற உன்னத நோக்கில், டாக்டர் கே. வேலுச்சாமி அவர்களால் 2010 ஆம் ஆண்டில் இந்த அறக்கட்டளைப் பிரிவு முறைப்படி தோற்றுவிக்கப்பட்டு இயங்கி வருகிறது. இறக்குமதி சார்ந்த மருத்துவ வசதிகளையும் அதிநவீனப் பரிசோதனைகளையும் கிராமப்புற மக்களிடம் நேரடியாகக் கொண்டு சேர்க்கும் பொருட்டு, இந்த அறக்கட்டளை ஆண்டுதோறும் நூற்றுக்கணக்கான இலவச பொது மருத்துவ மற்றும் மகப்பேறு விழிப்புணர்வு முகாம்களைத் தொடர்ந்து நடத்தி வருகிறது. பொருளாதாரத்தில் பின்தங்கிய ஏழைக் குடும்பங்களைச் சேர்ந்த நோயாளிகளுக்கு, குறிப்பாகக் கடினமான இதய அறுவை சிகிச்சைகள், சிறுநீரகக் கோளாறுகள் மற்றும் மகப்பேறு சார்ந்த நவீன சிகிச்சைகளுக்கு இந்த அறக்கட்டளை மூலம் பெருமளவில் நிதி உதவிகளும் இலவச மருந்துகளும் வழங்கப்படுகின்றன. தொழில்முறை மருத்துவ நிர்வாகம், கல்வி நிறுவனங்கள் மற்றும் பசுமை ஆற்றல் உற்பத்தியைத் தாண்டி, சமுதாயத்தின் விளிம்பு நிலை மனிதர்களுக்குக் கரம் கொடுக்கும் டாக்டர் கே. வேலுச்சாமியின் உன்னதத் தார்மீகப் பண்பிற்கு இந்த அறக்கட்டளை ஒரு மிகச்சிறந்த சான்றாகும்.",
      "MBBS": "MBBS", "MD — General Medicine": "MD — பொது மருத்துவம்", "Clinical Practice in Palani": "பழனியில் மருத்துவப் பணி", "Palani Multispecialty Hospital": "பழனி பல்துறை மருத்துவமனை", "M.Sc. — Sexual and Reproductive Medicine": "M.Sc. — பாலியல் மற்றும் இனப்பெருக்க மருத்துவம்", "IVF Training": "IVF பயிற்சி", "Hospital Leadership and Research": "மருத்துவமனைத் தலைமைத்துவம் மற்றும் ஆராய்ச்சி", "Baarath Vidhya Bavan Matriculation School": "Baarath Vidhya Bavan மெட்ரிகுலேஷன் பள்ளி", "Iswarya Fertility Centre": "ஐஸ்வர்யா பெர்ட்டிலிட்டி சென்டர்", "Baarath College of Nursing": "Baarath செவிலியர் கல்லூரி", "Baarath Public School": "Baarath பொதுப் பள்ளி", "Coimbatore": "கோயம்புத்தூர்", "Chennai": "சென்னை", "Madurai": "மதுரை", "Palani": "பழனி", "Palani, Tamil Nadu": "பழனி, தமிழ்நாடு", "General Medicine and Cardiology": "பொது மருத்துவம் மற்றும் இதயவியல்", "Further medical education": "மேற்படிப்பு மருத்துவக் கல்வி", "National University of Singapore": "சிங்கப்பூர் தேசியப் பல்கலைக்கழகம்", "Healthcare and scientific initiatives": "சுகாதாரம் மற்றும் அறிவியல் முயற்சிகள்", "Research and laboratory initiative, Chennai": "ஆராய்ச்சி மற்றும் ஆய்வக முயற்சி, சென்னை", "Kakatiya Medical College; AIIMS, New Delhi": "காகத்தியா மருத்துவக் கல்லூரி; AIIMS, புதுதில்லி", "17 October 1954 (as stated in the supplied biography)": "17 அக்டோபர் 1954 ", "Clinical care, fertility services, education and research initiatives": "மருத்துவச் சேவை, கருவுறுதல் சிகிச்சை, கல்வி மற்றும் ஆராய்ச்சி முயற்சிகள்", "K.V. Hospital, Iswarya centres, educational and research initiatives": "K.V. மருத்துவமனை, ஐஸ்வர்யா மையங்கள், கல்வி மற்றும் ஆராய்ச்சி முயற்சிகள்"};
    const hi: Record<string, string> = {
      "As the foundational step towards his medical dream, he successfully completed his MBBS medical degree in 1972 at the historic Kakatiya Medical College, affiliated with the prestigious Osmania University.": "अपने चिकित्सा के सपने के पहले कदम के रूप में, उन्होंने वर्ष 1972 में प्रतिष्ठित उस्मानिया विश्वविद्यालय (Osmania University) के अंतर्गत आने वाले ऐतिहासिक काकतीय मेडिकल कॉलेज से अपनी एमबीबीएस (MBBS) की पढ़ाई सफलतापूर्वक पूरी की।.",
      "Driven by his medical dream, he completed his postgraduate medical education in 1982 in the department of Internal Medicine at AIIMS, New Delhi, India's most premier and prestigious medical institution.": "अपने मेडिकल के सपने से प्रेरित होकर, उन्होंने 1982 में भारत के सबसे प्रतिष्ठित चिकित्सा संस्थान, अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS), नई दिल्ली से इंटरनल मेडिसिन में अपनी पोस्ट-ग्रेजुएट शिक्षा पूरी की। इसके बाद, उन्होंने पलानी में डिंडीगुल रोड पर 'के.वी. हॉस्पिटल' नाम से एक छोटे सामान्य चिकित्सा और प्रसूति केंद्र के रूप में अपनी प्रैक्टिस शुरू की। यहीं से उन्होंने अपनी पत्नी और प्रसिद्ध स्वर्ण पदक विजेता स्त्री रोग विशेषज्ञ डॉ. एस. चंद्रलेखा के साथ अपनी नैतिक चिकित्सा यात्रा का शिलान्यास किया। आज उनका यह सफर चिकित्सा क्षेत्र में समर्पण और ईमानदारी की एक अनूठी मिसाल है।.",
      "He began his medical practice as a small general medicine and maternity center under the name 'K.V. Hospital', located on Dindigul Road in Palani. It was from here that he, along with his wife, the renowned gold medalist gynecologist Dr. S. Chandralekha, embarked on their ethical medical journey.": "'के.वी. हॉस्पिटल' के नाम से पलानी में डिंडीगुल रोड पर एक छोटे सामान्य चिकित्सा और प्रसूति केंद्र के रूप में उन्होंने अपने चिकित्सा अभ्यास की शुरुआत की थी। यहीं से उन्होंने अपनी पत्नी, प्रसिद्ध स्वर्ण पदक विजेता स्त्री रोग विशेषज्ञ डॉ. एस. चंद्रलेखा के साथ अपनी नैतिक चिकित्सा यात्रा शुरू की।.",
     
      "Dr. K. Veluswamy's advanced qualification reflects his exceptional expertise in the field of infertility eradication. This academic distinction has equipped him with the profound clinical wisdom to manage complex hormonal imbalances and cutting-edge fertility solutions with a world-class scientific foundation.": "प्रजनन और यौन चिकित्सा में डॉ. के. वेलुस्वामी की उच्च स्नातकोत्तर योग्यता (M.Sc. Reproductive and Sexual Medicine) बांझपन निवारण और मातृत्व स्वास्थ्य के क्षेत्र में उनकी गहरी चिकित्सा विशेषज्ञता को दर्शाती है; यह शैक्षणिक डिग्री उन्हें जटिल प्रजनन विकारों, हार्मोनल असंतुलन और अत्याधुनिक फर्टिलिटी उपचारों को विश्व स्तरीय वैज्ञानिक दृष्टिकोण के साथ संभालने का एक मजबूत आधार प्रदान करती है, जिससे उन्हें हजारों निःसंतान दंपत्तियों के माता-पिता बनने के सपने को सफलतापूर्वक साकार करने की असाधारण क्लिनिकल अंतर्दृष्टि मिलती है।.",
      "Dr. K. Veluswamy's advanced IVF and Assisted Reproductive Techniques (ART) training from the globally renowned National University of Singapore (NUS) confirms his world-class clinical expertise in infertility eradication. This international qualification provides him with the clinical wisdom required to manage cutting-edge test-tube baby treatments with absolute precision.": "विश्व प्रसिद्ध नेशनल यूनिवर्सिटी ऑफ सिंगापुर (NUS) से डॉ. के. वेलुस्वामी का उन्नत आईवीएफ (IVF) और असिस्टेड रिप्रोडक्टिव टेक्नोलॉजी (ART) प्रशिक्षण, बांझपन निवारण के क्षेत्र में उनकी विश्व स्तरीय चिकित्सा विशेषज्ञता को प्रमाणित करता है। यह अंतर्राष्ट्रीय योग्यता उन्हें अत्याधुनिक टेस्ट-ट्यूब बेबी उपचार पद्धतियों को अत्यंत सटीकता के साथ संभालने के लिए आवश्यक क्लिनिकल अंतर्दृष्टि प्रदान करती है।.",
      "A revolutionary union of four decades of visionary healthcare leadership and cutting-edge biotechnology research. Under the guidance of Dr. K. Veluswamy, 'ChenGene' operates as a premier genetic and reproductive research hub, implementing advanced genomic insights to break new grounds in precision fertility care.": "चार दशकों के दूरदर्शी स्वास्थ्य सेवा नेतृत्व और अत्याधुनिक जैव प्रौद्योगिकी अनुसंधान (Biotechnology Research) का एक क्रांतिकारी संगम। डॉ. के. वेलुस्वामी के मार्गदर्शन में स्थापित 'चेनजीन' (ChenGene) केंद्र, सटीक फर्टिलिटी उपचार के क्षेत्र में नए आयाम स्थापित करने के लिए उन्नत आनुवंशिक (Genetic) समाधान प्रदान कर रहा है।.",
      "Shaping the leaders of tomorrow with academic excellence and core values. Conceptualized under the visionary outlook of Dr. K. Veluswamy, Baarath Vidhya Bavan Matriculation School stands as a premier educational landmark, providing world-class holistic education to empower young minds.": "शैक्षणिक उत्कृष्टता और नैतिक मूल्यों के साथ कल के कर्णधारों को आकार देना। डॉ. के. वेलुस्वामी के दूरदर्शी दृष्टिकोण के तहत स्थापित 'भारत विद्या भवन मैट्रिकुलेशन स्कूल', युवा मस्तिष्क को सशक्त बनाने के लिए विश्व स्तरीय समग्र शिक्षा प्रदान करने वाला एक अग्रणी संस्थान है।.",
      "The premier destination for advanced reproductive care in the Kongu region. Guided by the world-class medical expertise of Dr. K. Veluswamy, Iswarya Fertility Centre in Coimbatore blends cutting-edge IVF technologies with deeply compassionate clinical care, standing as the most trusted landmark turning parenthood dreams into reality.": "कोंगु क्षेत्र में उन्नत प्रजनन उपचार (Fertility Care) का प्रमुख केंद्र। डॉ. के. वेलुस्वामी के विश्व स्तरीय चिकित्सा मार्गदर्शन में संचालित 'ऐश्वर्या फर्टिलिटी सेंटर, कोयंबटूर', अत्याधुनिक आईवीएफ (IVF) तकनीकों और संवेदनशील चिकित्सा सेवा के माध्यम से हजारों परिवारों के माता-पिता बनने के सपने को साकार कर रहा है।.",
      "Where pioneering clinical science harmonizes with deep human empathy. Under the strategic steering of Dr. K. Veluswamy, Iswarya Fertility Centre and Iswarya Hospital stand as timeless sanctuaries of holistic healing. From setting global benchmarks in assisted reproductive technologies (ART) to deploying robust, full-spectrum multi-specialty clinical systems, the institution delivers seamless diagnostic accuracy and preventative interventions, fundamentally elevating the accessibility and quality of modern patient care.": "जहाँ अत्याधुनिक चिकित्सा विज्ञान और मानवीय संवेदनाओं का अटूट संगम होता है। डॉ. के. वेलुस्वामी के कुशल मार्गदर्शन में संचालित 'ऐश्वर्या फर्टிலिटी सेंटर' और 'ऐश्वर्या अस्पताल', समग्र स्वास्थ्य सेवा के क्षेत्र में उत्कृष्टता के जीवंत प्रतीक हैं। उन्नत सहायक प्रजनन तकनीकों (ART) के माध्यम से नए जीवन की शुरुआत करने से लेकर, आज जटिल सर्जरी और बहु-विशेषज्ञता (Multi-Specialty) चिकित्सा प्रणालियों को एक ही छत के नीचे लाकर, यह संस्थान भारतीय स्वास्थ्य सेवा के मानकों को वैश्विक स्तर पर पुनर्परिभाषित कर रहा है।.",
      "The cornerstone of advanced reproductive excellence in the Temple City. Guided by the clinical wisdom of Dr. K. Veluswamy, Iswarya Fertility Centre in Madurai seamlessly integrates next-generation Assisted Reproductive Technologies (ART) with specialized Andrology diagnostics, serving as South Tamil Nadu’s premier sanctuary for fertility resolution": "दक्षिण तमिलनाडु का सबसे बड़ा और सबसे उन्नत फर्टिलिटी अस्पताल। डॉ. के. वेलुस्वामी के कुशल चिकित्सा मार्गदर्शन में वर्ष 2010 में ऐतिहासिक मंदिर नगरी मदुरै में स्थापित 'ऐश्वर्या फर्टिलिटी सेंटर', अत्याधुनिक प्रजनन विज्ञान के माध्यम से दक्षिण जिलों के परिवारों के माता-पिता बनने के सपने को साकार कर रहा है।.",
      "Nurturing the compassionate pillars of global healthcare. Established in the year 2010 under the educational vision of Dr. K. Veluswamy in Palani, Bhaarath College of Nursing stands as a premier institution delivering rigorous medical education and hands-on clinical brilliance to empower the next generation of nursing professionals.": "वैश्विक स्वास्थ्य सेवा के समर्पित और संवेदनशील स्तंभों का निर्माण। डॉ. के. वेलुस्वामी के दूरदर्शी दृष्टिकोण के तहत वर्ष 2010 में पलनी में स्थापित 'भारत कॉलेज ऑफ नर्सिंग', युवा मस्तिष्क को कुशल नर्सिंग पेशेवरों के रूप में सशक्त बनाने के लिए विश्व स्तरीय शैक्षणिक और क्लिनिकल शिक्षा प्रदान करने वाला एक अग्रणी संस्थान है।.",
      "Igniting young minds with innovative learning and global benchmarks. Established in the year 2017 under the progressive vision of Dr. K. Veluswamy in Palani, Bhaarath Public School delivers a premier tech-driven curriculum designed to foster academic brilliance, critical thinking, and strong core values from the foundational years.": "नवाचार और वैश्विक मानकों के साथ युवा मस्तिष्क को प्रेरित करना। डॉ. के. वेलुस्वामी के प्रगतिशील दृष्टिकोण के तहत वर्ष 2017 में पलनी में स्थापित 'भारत पब्लिक स्कूल', एक अग्रणी तकनीकी-संचालित पाठ्यक्रम प्रदान करता है जो प्रारंभिक वर्षों से ही शैक्षणिक उत्कृष्टता और नैतिक मूल्यों को बढ़ावा देता है।",
      "Advancing reproductive science and engineering the future of biopharma. Officially incorporated in the year 2023 under the visionary leadership of Dr. K. Veluswamy at MEPZ, Tambaram, SEZ, Chennai, ChenGene Private Limited is a premier biotechnology-driven life science enterprise dedicated to manufacturing world-class biosimilar therapeutics, complex monoclonal antibodies, and specialized IVF media with absolute precision.": "बायोफार्मा और जीवन विज्ञान (Life Sciences) के क्षेत्र में एक नया तकनीकी नवाचार। डॉ. के. |वेलुस्वामी के कुशल दूरदर्शी नेतृत्व में वर्ष 2023 में स्थापित और मेप्स सेज, चेन्नई (MEPZ SEZ, Chennai) में संचालित 'चेनजीन प्राइवेट लिमिटेड', अत्याधुनिक जैव प्रौद्योगिकी के माध्यम से |विश्व स्तरीय बायोसिमिलर दवाओं और विशिष्ट आईवीएफ मीडिया (IVF Media) को स्वदेशी रूप से विकसित करने वाला एक अग्रणी संस्थान है।.",
      "Established under the humanitarian vision of Dr. K. Veluswamy to uplift economically weaker and underprivileged sections of society, 'V.C. Medical and Educational Charitable Trust' operates as a premier non-profit philanthropic institution. Dedicated to easing the financial burdens of the poor, the trust provides critical monetary subsidies for life-saving surgeries, sponsors free rural diagnostic camps, and extends comprehensive educational scholarships to deserving students from marginalized backgrounds. By seamlessly anchoring grass-roots clinical care with accessible quality education, the foundation stands as a living testament to Dr. K. Veluswamy's commitment to social empowerment and community healing.": "समाज के आर्थिक रूप से कमजोर और वंचित वर्गों के उत्थान के लिए डॉ. के. वेलुस्वामी के मानवीय दृष्टिकोण के तहत स्थापित, 'वी.सी. मेडिकल एंड एजुकेशनल चैरिटेबल ट्रस्ट' (V.C. Medical and Educational Charitable Trust) एक अग्रणी गैर-लाभकारी परमार्थ संस्थान के रूप में कार्य कर रहा है। गरीबों के वित्तीय बोझ को कम करने के लिए समर्पित, यह ट्रस्ट जीवन रक्षक सर्जरी के लिए महत्वपूर्ण वित्तीय सहायता प्रदान करता है, मुफ्त ग्रामीण चिकित्सा शिविर आयोजित करता है, और वंचित पृष्ठभूमि के मेधावी छात्रों को उच्च शिक्षा के लिए छात्रवृत्ति (Scholarships) प्रदान करता है। जमीनी स्तर पर स्वास्थ्य सेवा और सुलभ गुणवत्तापूर्ण शिक्षा को एक साथ जोड़कर, यह फाउंडेशन सामाजिक सशक्तिकरण के प्रति डॉ. के. वेलुस्वामी के नैतिक समर्पण का एक जीवंत प्रमाण है।.",
      "Recognizing the urgent global need to combat climate change and reduce carbon dependency, Dr. K. Veluswamy expanded his philanthropy into the renewable energy sector in 2009, establishing a robust framework for clean power generation. The institution utilizes highly sophisticated, aerodynamically optimized wind turbines installed in strategic wind corridors. These systems are seamlessly integrated with modern power grids to maximize kinetic-to-electrical energy conversion. By generating clean, sustainable mega-watt capacity power, the enterprise successfully offsets thousands of tons of greenhouse gas emissions annually, making a tangible contribution to ecological preservation and resource conservation. This energy matrix highlights Dr. K. Veluswamy's multifaceted leadership, proving that corporate responsibility and advanced eco-technologies can co-exist to fuel the nation's infrastructural demands responsibly.": "जलवायु परिवर्तन के खतरों को कम करने और भविष्य की पीढ़ियों के लिए पर्यावरण को सुरक्षित रखने के नेक उद्देश्य से, डॉ. के. वेलुस्वामी ने वर्ष 2009 में नवीकरणीय ऊर्जा के क्षेत्र में कदम रखा और स्वच्छ बिजली उत्पादन की मजबूत नींव रखी।. यह संस्थान रणनीतिक पवन गलियारों (Wind Corridors) में स्थापित अत्यधिक कुशल और आधुनिक पवन टरबाइनों का उपयोग करता है, जो आधुनिक पावर ग्रिड प्रणालियों के साथ मिलकर निर्बाध रूप से स्वच्छ बिजली का उत्पादन करते हैं।. हरित मेगावाट क्षमता की बिजली उत्पन्न करके, यह संस्थान प्रतिवर्ष हजारों टन हानिकारक गैसों के उत्सर्जन को रोकने में सफल रहा है, जिससे प्राकृतिक पारिस्थितिकी संतुलन को बनाए रखने में मदद मिलती है।. यह ऊर्जा उपक्रम डॉ. के. |वेलुस्वामी के बहुमुखी नेतृत्व को दर्शाता है, जो यह प्रमाणित करता है कि आधुनिक पर्यावरण-तकनीक और सामाजिक जिम्मेदारी एक साथ मिलकर देश के बुनियादी ढांचे के विकास को एक नई दिशा दे सकते हैं।.",
      "Driven by the profound belief that financial constraints should never stand between a human life and quality medical care, Dr. K. Veluswamy incorporated this foundation in 2010 to systematically anchor his extensive charity projects. The institution actively deploys large-scale free healthcare camps, dynamic diagnostic screenings, and specialized maternal wellness awareness programs directly into underserved rural landscapes and marginalized urban sectors. Providing a robust safety net, the foundation extends significant financial subsidies and zero-cost medications for critical clinical pathways, including complex cardiovascular interventions, renal support, and high-end advanced fertility solutions for deserving families. This foundation stands as a living testament to Dr. K. Veluswamy's multifaceted leadership, showcasing that cutting-edge clinical infrastructure and grassroots social responsibility can seamlessly unify to heal communities responsibly.": "इस गहरे विश्वास के साथ कि धन की कमी कभी भी किसी मानव जीवन और गुणवत्तापूर्ण चिकित्सा देखभाल के बीच बाधा नहीं बननी चाहिए, डॉ. के. वेलुस्वामी ने अपने व्यापक धर्मार्थ कार्यों को सुव्यवस्थित करने के लिए वर्ष 2010 में इस फाउंडेशन की स्थापना की।. यह संस्थान ग्रामीण और दूरदराज के क्षेत्रों में बड़े पैमाने पर मुफ्त सामान्य चिकित्सा शिविर, उन्नत नैदानिक (Diagnostic) जांच और मातृ स्वास्थ्य जागरूकता कार्यक्रम आयोजित करने में सक्रिय रूप से काम कर रहा है।. यह फाउंडेशन जरूरतमंद परिवारों को जटिल हृदय सर्जरी, रीनल केयर (गुर्दा रोग) और उन्नत फर्टिलिटी उपचारों सहित गंभीर चिकित्सा प्रक्रियाओं के लिए भारी वित्तीय सब्सिडी और मुफ्त दवाएं प्रदान करके एक मजबूत सुरक्षा कवच सुनिश्चित करता है।. यह मेडिकल फाउंडेशन डॉ. के. वेलुस्वामी के बहुमुखी नेतृत्व को दर्शाता है, जो यह प्रमाणित करता है कि अत्याधुनिक चिकित्सा बुनियादी ढांचा और जमीनी स्तर पर सामाजिक जिम्मेदारी एक साथ मिलकर समाज कल्याण में अभूतपूर्व योगदान दे सकते हैं।.",
      "MBBS": "MBBS", "MD — General Medicine": "MD — जनरल मेडिसिन", "Clinical Practice in Palani": "पलानी में चिकित्सा सेवा", "Palani Multispecialty Hospital": "पलानी बहु-विशेषता अस्पताल", "M.Sc. — Sexual and Reproductive Medicine": "M.Sc. — यौन एवं प्रजनन चिकित्सा", "IVF Training": "IVF प्रशिक्षण", "Hospital Leadership and Research": "अस्पताल नेतृत्व और अनुसंधान", "Baarath Vidhya Bavan Matriculation School": "Baarath Vidhya Bavan मैट्रिकुलेशन स्कूल", "Iswarya Fertility Centre": "इस्वर्या फर्टिलिटी सेंटर", "Baarath College of Nursing": "Baarath कॉलेज ऑफ नर्सिंग", "Baarath Public School": "Baarath पब्लिक स्कूल", "Coimbatore": "कोयंबटूर", "Chennai": "चेन्नई", "Madurai": "मदुरै", "Palani": "पलानी", "Palani, Tamil Nadu": "पलानी, तमिलनाडु", "General Medicine and Cardiology": "जनरल मेडिसिन और कार्डियोलॉजी", "Further medical education": "आगे की चिकित्सा शिक्षा", "National University of Singapore": "नेशनल यूनिवर्सिटी ऑफ सिंगापुर", "Healthcare and scientific initiatives": "स्वास्थ्य सेवा और वैज्ञानिक पहल", "Research and laboratory initiative, Chennai": "अनुसंधान और प्रयोगशाला पहल, चेन्नई", "Kakatiya Medical College; AIIMS, New Delhi": "काकतीय मेडिकल कॉलेज; AIIMS, नई दिल्ली", "17 October 1954 (as stated in the supplied biography)": "17 अक्टूबर 1954 ", "Clinical care, fertility services, education and research initiatives": "चिकित्सा सेवा, प्रजनन सेवाएँ, शिक्षा और अनुसंधान पहल", "K.V. Hospital, Iswarya centres, educational and research initiatives": "K.V. अस्पताल, इस्वर्या केंद्र, शैक्षणिक और अनुसंधान पहल"    };
    return (language === "ta" ? ta : hi)[value] ?? value;
  };
  const [activeTopic, setActiveTopic] = useState<StoryTopic | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  const [activeHospital, setActiveHospital] = useState<
    "coimbatore" | "chennai" | "madurai" | null
  >(null);

  const openTopic = useCallback((id: string) => {
    setActiveTopic(topics[id] ?? null);
  }, []);

  const closeTopic = useCallback(() => {
    setActiveTopic(null);
  }, []);

  
const topicForInstitution = (item: (typeof institutions)[number]) => {
  const place = item.place.toLowerCase();
  const title = item.title.toLowerCase();

  if (item.year === "2006" && place.includes("coimbatore")) {
    return "iswarya-coimbatore";
  }

  if (item.year === "2008" && place.includes("chennai")) {
    return "iswarya-chennai";
  }

  if (item.year === "2010" && place.includes("madurai")) {
    return "iswarya-madurai";
  }

  if (title.includes("iswarya")) return "iswarya";
  if (title.includes("chengene")) return "research";

  if (title.includes("baarath vidhya bavan")) {
    return "bharath-vidya-bhavan";
  }

  if (title.includes("baarath public school")) {
    return "bharath-public-school";
  }

  if (title.includes("baarath college of nursing")) {
    return "bharath-college-nursing";
  }

  return "education";
};


  // Route each career milestone to its own matching story. Avoid sending
  // MBBS, MD and IVF to the same generic AIIMS popup.
  const topicForCareer = (title: string) => {
    const value = title.toLowerCase();
    if (value.includes("mbbs") || value.includes("kakatiya")) return "kakatiya";
    if (value.includes("md") || value.includes("aiims")) return "aiims";
    if (value.includes("palani")) return "palani";
    if (value.includes("sexual and reproductive") || value.includes("m.sc")) return "reproductive";
    if (value.includes("ivf") || value.includes("singapore")) return "singapore";
    if (value.includes("research")) return "research";
    return "education";
  };

  const contents = [
    [t("earlyLife"), "early-life"],
    [t("medicalCareer"), "medical-career"],
    [t("hospital"), "hospital"],
    [t("fertility"), "fertility"],
    [t("institutions"), "institutions"],
    [t("research"), "research"],
    [t("business"), "service"],
    [t("legacy"), "legacy"],
    [t("currentRole"), "current-role"],
  ];

  return (
    <>
    <IntroScreen />
    <main className="min-h-screen bg-[#f7f8fa] text-[#202122] antialiased">
      {/* Simple Wikipedia-inspired header */}
      <header className="sticky top-0 z-40 border-b border-[#e2e6ec] bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d5c29a] bg-[#fbf8f1] font-serif text-sm font-semibold text-[#17324d] shadow-sm">
              KV
            </span>
            <span>
              <span className="block font-serif text-lg">Biography</span>
              <span className="block text-xs text-[#54595d]">
                Dr. K. Veluswamy
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            <a href="#biography" className="text-[#0645ad] hover:underline">{t("biography")}</a>
            <a href="#education" className="text-[#0645ad] hover:underline">{t("educationCareer")}</a>
            <a href="#institutions" className="text-[#0645ad] hover:underline">{t("institutions")}</a>
          </nav>
          <label className="flex items-center gap-2 text-sm">
            <span className="hidden text-[#54595d] sm:inline">{t("language")}</span>
            <select aria-label="Select language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="max-w-[112px] rounded-md border border-[#d7dee7] bg-white px-2 py-2 text-sm text-[#24364b] outline-none transition focus:border-[#17324d] focus:ring-2 focus:ring-[#17324d]/10 sm:max-w-none">
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
              <option value="hi">हिन्दी</option>
            </select>
          </label>
          <button
            type="button"
            className="rounded border border-[#a2a9b1] p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t border-[#a2a9b1] bg-white px-5 py-4 text-sm md:hidden">
            <a href="#biography" onClick={() => setMenuOpen(false)} className="text-[#0645ad]">{t("biography")}</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="text-[#0645ad]">{t("educationCareer")}</a>
            <a href="#institutions" onClick={() => setMenuOpen(false)} className="text-[#0645ad]">{t("institutions")}</a>
            <a href="#service" onClick={() => setMenuOpen(false)} className="text-[#0645ad]">{t("service")}</a>
          </nav>
        )}
      </header>

      <div id="top" className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[180px_minmax(0,1fr)_290px] xl:gap-10">
          {/* LEFT: CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-lg border border-[#e2e7ee] bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-sm font-bold">{t("contents")}</h2>
              <nav className="space-y-2 text-[13px]">
                {contents.map(([label, id]) => (
                  <a key={id} href={`#${id}`} className="block text-[#0645ad] hover:underline">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTRE: BIOGRAPHY ARTICLE */}
          <article id="biography" className="min-w-0 scroll-mt-24">
            <h1 className="border-b border-[#dce2e9] pb-4 font-serif text-3xl font-semibold tracking-tight text-[#17324d] sm:text-4xl lg:text-[2.75rem]">
              Dr. K. VELUSWAMY
            </h1>
            <blockquote className="mt-5 ml-auto w-fit max-w-full rounded-l-md border-r-4 border-[#c9a96e] bg-gradient-to-l from-[#f5efe3] to-[#fbfaf7] px-5 py-4 font-serif text-base italic leading-7 text-[#24364b] shadow-sm sm:text-lg whitespace-pre-line">
              {language === "ta"
                ? "“தொல்லாணை நல்லாசிரியர்\nபுணர்கூட்டுண்ட புகழ்சால் சிறப்பின்...\nஅறிவுஅறிந்து ஆள்செய்தல் மாண்பு”"
                : language === "hi"
                ? "“चिकित्सा केवल रोग का उपचार नहीं, जीवन में आशा जगाने की सेवा है। विज्ञान, सेवा और शिक्षा को जोड़कर अगली पीढ़ी को राह दिखाना ही सच्ची विरासत है।”"
                : "“Medicine is not only the art of healing, but the service of restoring hope. To unite science, service and education—and open doors for the next generation—is a legacy that lives beyond one lifetime.”"}
            </blockquote>

            <p className="mt-5 text-[15px] leading-7 text-pretty text-justify">
              {t("bioIntro")}
            </p>

            <section id="early-life" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">{t("earlyLife")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">
                {t("earlyText")}{" "}
                <button type="button" className={placeButton} onClick={() => openTopic("aiims")} aria-haspopup="dialog">AIIMS, New Delhi</button>. {t("exactSchool")}
              </p>
            </section>

            <section id="medical-career" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">{t("medicalCareer")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">
                {t("careerText")}{" "}
                <button type="button" className={placeButton} onClick={() => openTopic("palani")} aria-haspopup="dialog">Palani, Tamil Nadu</button>. {t("qualificationCheck")}
              </p>
            </section>

            <section id="hospital" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">{t("hospital")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">
                {t("hospitalText")}{" "}
                <button type="button" className={placeButton} onClick={() => openTopic("palani")} aria-haspopup="dialog">Palani Multispecialty Hospital</button>
                {" "}{t("hospitalText2")}
              </p>
            </section>

            
            <section id="fertility" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">
                {t("fertility")}
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-justify">
                {t("fertilityText")}{" "}
                <button
                  type="button"
                  className={placeButton}
                  onClick={() => setActiveFamily("chandralekha")}
                >
                  Dr. S. Chandralekha
                </button>
                , {t("fertilityText2")}{" "}
                <button
                  type="button"
                  className={placeButton}
                  onClick={() => setActiveHospital("coimbatore")}
                >
                  Coimbatore
                </button>
                ,{" "}
                <button
                  type="button"
                  className={placeButton}
                  onClick={() => setActiveHospital("chennai")}
                >
                  Chennai
                </button>
                {" and "}
                <button
                  type="button"
                  className={placeButton}
                  onClick={() => setActiveHospital("madurai")}
                >
                  Madurai
                </button>
                . {t("fertilityText3")}
              </p>
            </section>

            <section id="education" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">
                {t("timeline")}
              </h2>

              <div className="mt-4 space-y-6">
                {career.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={`${item.year}-${item.title}`}
                      className="grid min-w-0 grid-cols-1 items-start gap-5
                      rounded-xl border border-[#e2e8f0] bg-white p-4
                      shadow-sm transition-shadow duration-200 hover:shadow-md
                      md:grid-cols-[minmax(0,1fr)_240px] md:p-5"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-medium tracking-wide text-[#64748b]">
                          {translateContent(item.year)}
                        </p>

                        <h3 className="mt-1 font-semibold">
                          {translateContent(item.title)}
                        </h3>

                        <p className="mt-1 text-sm">
                          <button
                            type="button"
                            className={placeButton}
                            onClick={() => openTopic(topicForCareer(item.title))}
                            aria-haspopup="dialog"
                          >
                            {translateContent(item.place)}
                          </button>
                        </p>

                        <p className="mt-2 text-[15px] leading-6 text-justify">
                          {translateContent(item.description)}
                        </p>
                      </div>

                      <div className="relative isolate h-48 w-full min-w-0 overflow-hidden
                            rounded-lg border border-[#e2e8f0] bg-[#f1f5f9]
                            md:h-44">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={translateContent(item.title)}
                            fill
                            sizes="(max-width: 768px) 100vw, 240px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Icon className="h-10 w-10 text-[#72777d]" />
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>


            <section id="institutions" className="mt-7 scroll-mt-24">
              <h2 className="mt-8 border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-[1.35rem]">{t("milestones")}</h2>
              <p className="mt-5 text-[15px] leading-7 text-pretty text-justify">
                {t("timelineIntro")}
              </p>
              <div className="mt-3 space-y-4">
                {institutions.map((item) => (
                  <div key={`${item.year}-${item.title}-${translateContent(item.place)}`} className="rounded-lg border border-[#e2e8f0] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <p className="text-xs font-medium tracking-wide text-[#64748b]">{translateContent(item.year)}</p>
                    <h3 className="mt-1 font-semibold">
                      <button type="button" className={placeButton} onClick={() => openTopic(topicForInstitution(item))} aria-haspopup="dialog">
                        {item.title}
                      </button>
                    </h3>
                    <p className="mt-1 text-sm text-[#54595d]">
                      {translateContent(item.place)}
                    </p>
                    <p className="mt-2 text-[15px] leading-6 text-justify">{translateContent(item.description)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="research" className="mt-7 scroll-mt-24">
              <h2 className="border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-2xl">{t("research")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">
                {t("researchText")}
              </p>
            </section>

            <section id="service" className="mt-7 scroll-mt-24">
              <h2 className="border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-2xl">{t("business")}</h2>
              <div className="mt-3 space-y-4">
                {ventures.map((item) => (
                  <div key={item.title} className="rounded-lg border border-[#e2e8f0] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <p className="text-xs font-medium tracking-wide text-[#64748b]">{translateContent(item.year)}</p>
                    <h3 className="mt-1 font-semibold">{translateContent(item.title)}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-justify">{translateContent(item.description)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="legacy" className="mt-7 scroll-mt-24">
              <h2 className="border-b border-[#a2a9b1] pb-2 font-serif text-2xl sm:text-3xl">{t("familyTitle")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">{t("familyIntro")}</p>

              <div className="mt-4 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Dr. S. Chandralekha */}
                <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src="https://dqbsrktgjpkbhljddxqq.supabase.co/storage/v1/object/public/gallery/2-1772680588130.jpg"
                    alt="Dr. S. Chandralekha"
                    className="h-56 w-full bg-[#f1f5f9] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:h-52"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-semibold"><button type="button" className={placeButton} onClick={() => setActiveFamily("chandralekha")}>Dr. S. Chandralekha</button></h3>
                    <p className="mt-1 text-sm text-[#54595d] text-justify">{t("wifeRole")}</p>
                    <button type="button" className={`${placeButton} mt-3 self-start text-sm`} onClick={() => setActiveFamily("chandralekha")}>{t("readProfile")}</button>
                  </div>
                </article>

                {/* Dr. Aravind Chandar */}
                <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src="https://www.draravindsivf.com/uploads/experts/medium_1648710401.jpg"
                    alt="Dr. Aravind Chandar"
                    className="h-56 w-full bg-[#f1f5f9] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:h-52"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-semibold"><button type="button" className={placeButton} onClick={() => setActiveFamily("aravind")}>Dr. Aravind Chandar</button></h3>
                    <p className="mt-1 text-sm text-[#54595d] text-justify">{t("elderRole")}</p>
                    <button type="button" className={`${placeButton} mt-3 self-start text-sm`} onClick={() => setActiveFamily("aravind")}>{t("readProfile")}</button>
                  </div>
                </article>

                {/* Dr. Arun Muthuvel */}
                <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ">
                  <img
                    src="https://ptaotftgibfrvonhydgm.supabase.co/storage/v1/object/public/doctors/dr-arun-muthuvel-2-Dr-Arun-Muthuvel.webp"
                    alt="Dr. Arun Muthuvel"
                    className="h-56 w-full bg-[#f1f5f9] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:h-52"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-semibold"><button type="button" className={placeButton} onClick={() => setActiveFamily("arun")}>Dr. Arun Muthuvel</button></h3>
                    <p className="mt-1 text-sm text-[#54595d] text-justify">{t("youngerRole")}</p>
                    <button type="button" className={`${placeButton} mt-3 self-start text-sm`} onClick={() => setActiveFamily("arun")}>{t("readProfile")}</button>
                  </div>
                </article>
              </div>
            </section>

            <section id="current-role" className="mt-7 scroll-mt-24">
              <h2 className="border-b border-[#d7dee7] pb-2 font-serif text-xl font-medium tracking-tight text-[#17324d] sm:text-2xl">{t("currentRole")}</h2>
              <p className="mt-3 text-[15px] leading-7 text-justify">{t("currentText")}</p>
            </section>
          </article>

          {/* RIGHT: PROFILE INFOBOX */}
          <aside className="h-fit rounded-xl border border-[#dce3ec] bg-white p-4 text-sm shadow-sm">
            <h2 className="rounded-md bg-[#f1f5f9] px-3 py-3 text-center font-serif font-bold text-[#17324d]">Dr. K. Veluswamy</h2>
            <div className="relative mx-auto my-4 aspect-[4/5] max-w-[230px] overflow-hidden rounded-lg border border-[#e2e8f0] bg-[#f8fafc]">
              <Image src="/images/dr-veluswamy-portrait.png" alt={language === "ta" ? "டாக்டர் கே. வேலுச்சாமியின் உருவப்படம்" : language === "hi" ? "डॉ. के. वेलुस्वामी का चित्र" : "Portrait of Dr. K. Veluswamy"} fill sizes="230px" className="object-cover object-center" />
            </div>
            <p className="mb-3 text-center text-xs text-[#54595d]">{t("doctorSummary")}</p>
            <dl className="divide-y divide-[#c8ccd1]">
              <div className="py-2">
                <dt className="font-bold">{t("education")}</dt>
                <dd className="mt-1">{translateContent("AIIMS, New Delhi")}</dd>
              </div>
              <div className="py-2">
                <dt className="font-bold">{t("practice")}</dt>
                <dd className="mt-1">{translateContent("Palani, Chennai, Chengene Private Limited, Tamil Nadu")}</dd>
              </div>
              <div className="py-2">
                <dt className="font-bold">{t("dob")}</dt>
                <dd className="mt-1">{translateContent("17 October 1954")}</dd>
              </div>
              <div className="py-2">
                <dt className="font-bold">{t("family")}</dt>
                <dd className="mt-1">Dr. S. Chandralekha;  Dr. Arun Muthuvel; Dr. Aravind Chandar</dd>
              </div>
              <div className="py-2">
                <dt className="font-bold">{t("activity")}</dt>
                <dd className="mt-1">{translateContent("Clinical care, fertility services, education and research initiatives")}</dd>
              </div>
              <div className="py-2">
                <dt className="font-bold">{t("listedInstitutions")}</dt>
                <dd className="mt-1">{translateContent("K.V. Hospital, Iswarya centres, educational and research initiatives")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>

      <StoryModal topic={activeTopic} language={language} onClose={closeTopic} />
      {activeFamily && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveFamily(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="family-modal-title" className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#54595d]">{t("familyProfile")}</p>
                <h2 id="family-modal-title" className="mt-1 font-serif text-2xl font-semibold tracking-tight text-[#17324d]">{activeFamily === "chandralekha" ? "Dr. S. Chandralekha" : activeFamily === "aravind" ? "Dr. Aravind Chandar" : "Dr. Arun Muthuvel"}</h2>
              </div>
              <button type="button" onClick={() => setActiveFamily(null)} className="shrink-0 rounded-lg border border-[#d7dee7] px-3 py-2 text-sm text-[#334155] transition-colors hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324d]" aria-label="Close family profile">{t("close")}</button>
            </div>
            <div className="mt-4 border-t border-[#eaecf0] pt-4">
              <img
                src={activeFamily === "chandralekha" ? "https://dqbsrktgjpkbhljddxqq.supabase.co/storage/v1/object/public/gallery/2-1772680588130.jpg" : activeFamily === "aravind" ? "https://www.draravindsivf.com/uploads/experts/medium_1648710401.jpg" : "https://ptaotftgibfrvonhydgm.supabase.co/storage/v1/object/public/doctors/dr-arun-muthuvel-2-Dr-Arun-Muthuvel.webp"}
                alt={activeFamily === "chandralekha" ? "Dr. S. Chandralekha" : activeFamily === "aravind" ? "Dr. Aravind Chandar" : "Dr. Arun Muthuvel"}
                className="mb-4 max-h-72 w-full rounded-lg object-contain object-top"
                loading="lazy"
              />
            </div>
            <div className="text-[15px] leading-7">
              {activeFamily === "chandralekha" ? (
                <p className="text-justify">{t("familyChandra")}</p>
              ) : activeFamily === "aravind" ? (
                <p className="text-justify">{t("familyAravind")}</p>
              ) : (
                <p className="text-justify">{t("familyArun")}</p>
              )}

              
              <blockquote className="mt-5 whitespace-pre-line border-l-2 border-[#c9a96e] bg-[#f8f6f1] px-4 py-3 font-serif text-base italic leading-7 text-[#24364b]">
                {activeFamily === "chandralekha"
                  ? language === "ta"
                    ? `“காலம் தாழ்ந்தாலும் கலங்கத் தேவையில்லை;"உங்களுக்கும் ஒரு குழந்தை" உண்டு என்ற நம்பிக்கையின் முகவரி!”`
                    : language === "hi"
                    ? `“देर हो जाए तो भी निराश न हों;
              ‘आपको भी एक संतान होगी’ — इसी विश्वास का पता!”`
                    : `“"Conception is nature’s deepest mystery, and a great doctor is the guide who turns it into history."`
                  : activeFamily === "aravind"
                  ? language === "ta"
                    ? `“விஞ்ஞானமும் மெய்ஞானமும் இணையும் அற்புதப் புள்ளி, அதை மண்ணில் மலரவைக்கும் நடமாடும் தெய்வம் மருத்துவர்”`
                    : language === "hi"
                    ? `“वह अद्भुत बिंदु जहाँ विज्ञान और आध्यात्मिक ज्ञान मिलते हैं;
              उसे धरती पर साकार करने वाले चलते-फिरते देवता हैं चिकित्सक।”`
                    : `"Nature designs the canvas of life, but it takes a doctor's masterstroke to bring the cradle to life."`
                  : language === "ta"
                  ? `“தாய்மைக்காகக் காத்திருக்கும் நெஞ்சங்களின் ஏக்கம் ஒரு இருள்; அதை நீக்கி கருத்தரிப்பைத் தரும் ஒளிரும் விளக்கு மருத்துவர்!”`
                  : language === "hi"
                  ? `“मातृत्व की प्रतीक्षा करते दिलों की तड़प एक अंधकार है;
              उसे दूर कर गर्भधारण की आशा जगाने वाला प्रकाशमान दीप है चिकित्सक!”`
                  : `"Nature takes its time, but a trusted doctor bridges the gap between waiting and holding."`}
              </blockquote>

            </div>
          </section>
        </div>
      )}

      {activeHospital && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveHospital(null)}
        >
          <div
            className="relative max-w-full rounded-2xl border border-white/20 bg-white p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveHospital(null)}
              className="absolute right-2 top-2 z-10 rounded-full border border-[#e2e8f0] bg-white/95 px-3 py-1 text-2xl text-[#17324d] shadow-sm transition hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17324d]"
            >
              ×
            </button>

            <img
              src={
                activeHospital === "coimbatore"
                  ? "/images/iswarya-coimbatore.jpg"
                  : activeHospital === "chennai"
                    ? "/images/iswarya-hospital.png"
                    : "/images/iswarya-madurai.jpg"
              }
              alt={`${activeHospital} hospital`}
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
    </>
  );
}
