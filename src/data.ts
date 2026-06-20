import { 
  AdmissionCourse, DnyaneshwariChapter, AbhangBhajan, 
  DailyRojnishi, DevotionalThought, EventCalendarItem 
} from './types';

export const SANSTHAN_HERITAGE = {
  name: 'वारकरी शिक्षण संस्था',
  marathiName: 'वारकरी शिक्षण संस्था',
  location: 'आळंदी देवाची, पुणे, महाराष्ट्र',
  established: '१९१७ (सद्गुरू जोग महाराज स्थापित)',
  vision: 'वारकरी संप्रदायाची पवित्र, नैतिक आणि भक्तीपर शिकवण जतन करणे, तिचा प्रसार करणे आणि ती अंगीकारणे. तसेच अत्यंत शिस्तबद्ध निवासी गुरुकुल पद्धतीद्वारे भावी कीर्तनकार, मृदंगाचार्य आणि आध्यात्मिक नेते घडवणे.',
  history: 'इ.स. १९१७ मध्ये थोर संत सद्गुरु जोग महाराज यांनी पवित्र इंद्रायणी नदीच्या तीरावर आळंदीत या संस्थेची स्थापना केली. संजीवन समाधी ज्ञानेश्वर माउली आणि जगद्गुरू संत तुकाराम महाराज यांची भक्तीपरंपरा अखंडपणे चालू ठेवण्यासाठी संस्थेने गेल्या शतकभरात हजारो विद्यार्थी (विद्यार्थी) घडविले आहेत, की जे आज संपूर्ण महाराष्ट्रभर धर्मजागृतीचे महान कार्य विनामूल्य करत आहेत. संस्थेत राहण्याची व भोजनाची व्यवस्था विनामूल्य असते.',
  founderName: 'ह.भ.प. सद्गुरु जोग महाराज',
  founderTitle: 'दिव्य द्रष्टे आणि संस्थात्मक वारकरी शिक्षणाचे जनक',
  founderBio: 'ह.भ.प. गोपाळराव देवराव जोग, जे सर्वत्र "सद्गुरु जोग महाराज" म्हणून आदरपूर्वक ओळखले जातात, त्यांनी १९१७ मध्ये आळंदीत या गुरुकुलाची स्थापना केली. आधुनिक काळात वारकरी परंपरेचे संरक्षण व संवर्धन करण्यासाठी शास्त्रांचे पद्धतशीर व शिस्तबद्ध प्रशिक्षण आवश्यक आहे हे त्यांनी जाणले होते. त्यांनी त्यांचे संपूर्ण आयुष्य विरक्ती, नैतिक शुद्धता आणि पांडुरंग चरणी समर्पित केले.',
  founderImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600&h=600'
};

export const CORE_VALUES = [
  {
    title: 'निष्काम सेवा (Nishkam Seva)',
    description: 'सर्व प्राणिमात्रांमध्ये पांडुरंगाचे रूप पाहून कोणत्याही लोभ किंवा स्वार्थाशिवाय निस्वार्थ भावनेने सेवा करणे.',
    icon: 'ShieldCheck'
  },
  {
    title: 'अध्यात्म आणि शास्त्र (Scriptural Mastery)',
    description: 'ज्ञानेश्वरी, तुकाराम गाथा आणि श्रीमद्भगवद्गीता यांचे शुद्ध व्याकरण व सखोल चिंतनासह शास्त्रोक्त अध्ययन.',
    icon: 'GraduationCap'
  },
  {
    title: 'सदाचार आणि नियम (Moral Discipline)',
    description: 'नित्य नियमांचे काटेकोर पालन, शुद्ध शाकाहार, सदाचारी वर्तन आणि अखंड नामस्मरण.',
    icon: 'Award'
  }
];

export const DAILY_ROJNISHI: DailyRojnishi[] = [
  {
    time: ' पहाटे ०४:३० - ०५:३०',
    activity: 'काकड आरती आणि नित्यपाठ',
    marathiActivity: 'काकड आरती आणि नित्यपाठ',
    significance: 'मुख्य मंदिर गाभाऱ्यात सुस्वर भजनाने ईश्वराला जागृत करणे व सामूहिक नामस्मरण करणे.',
    icon: 'Bell'
  },
  {
    time: 'पहाटे ०५:३० - ०७:००',
    activity: 'स्नान आणि ध्यान धारणा',
    marathiActivity: 'स्नान आणि ध्यान धारणा',
    significance: 'पवित्र इंद्रायणी नदीत स्नान, त्यानंतर प्राणायाम, योगासने आणि शांत ध्यान साधना.',
    icon: 'Droplet'
  },
  {
    time: 'सकाळी ०७:३० - ०९:३०',
    activity: 'ज्ञानेश्वरी पारायण आणि पाठ',
    marathiActivity: 'ज्ञानेश्वरी पारायण आणि पाठ',
    significance: 'ज्ञानेश्वरी ग्रंथाचे शुद्ध उच्चारांसह सामूहिक वाचन व अध्याय पाठांतर करणे.',
    icon: 'BookOpen'
  },
  {
    time: 'सकाळी ०९:३० - १०:३०',
    activity: 'महाप्रसाद (भोजन)',
    marathiActivity: 'महाप्रसाद (भोजन)',
    significance: 'सामूहिक पंगतीमध्ये ईश्वराचा नैवेद्य दाखवून बनवलेला सात्विक शाकाहारी महाप्रसाद ग्रहण करणे.',
    icon: 'Flame'
  },
  {
    time: 'सकाळी ११:०० - दुपारी ०१:००',
    activity: 'व्यासपीठ प्रवचन आणि निरूपण',
    marathiActivity: 'व्यासपीठ प्रवचन आणि निरूपण',
    significance: 'आध्यात्मिक ग्रंथांमधील कठीण ओव्यांचा व श्लोकांचा अर्थ आणि निरूपण करण्याचे शास्त्र शुद्ध शिक्षण देणे.',
    icon: 'UserCheck'
  },
  {
    time: 'दुपारी ०१:३० - ०३:३०',
    activity: 'मृदंग वादन आणि टाळ अभ्यास',
    marathiActivity: 'मृदंग वादन आणि टाळ अभ्यास',
    significance: 'पारंपारीक पखवाज (मृदंग) वाजवण्याचे प्रात्यक्षिक आणि टाळ संगतीचा सराव घेणे.',
    icon: 'Music'
  },
  {
    time: 'दुपारी ०३:४५ - संध्याकाळी ०५:००',
    activity: 'स्वाध्याय आणि कंठस्थीकरण',
    marathiActivity: 'स्वाध्याय आणि कंठस्थीकरण',
    significance: 'नियमित अभंग, गाथा आणि श्लोक पाठांतर व गृहपाठ तपासणे.',
    icon: 'Heart'
  },
  {
    time: 'संध्याकाळी ०५:३० - ०७:००',
    activity: 'सामुदायिक संध्या हरिपाठ',
    marathiActivity: 'सामुदायिक संध्या हरिपाठ',
    significance: 'ज्ञानेश्वर माउली प्रणीत हरिपाठाचे सामूहिक गायन करून नामस्मरणाची उजळणी करणे.',
    icon: 'Sun'
  },
  {
    time: 'संध्याकाळी ०७:३० - रात्री ०९:००',
    activity: 'कीर्तन सेवा आणि नामसंकीर्तन',
    marathiActivity: 'कीर्तन सेवा आणि नामसंकीर्तन',
    significance: 'विद्यार्थ्यांद्वारे मंदिरात आलटून-पालटून कीर्तन सादरीकरण व सामूहिक अभंग गायन करणे.',
    icon: 'Users'
  },
  {
    time: 'रात्री ०९:३०',
    activity: 'सेज आरती आणि विश्राम',
    marathiActivity: 'सेज आरती आणि विश्राम',
    significance: 'रात्री देवाची शेवटची आरती करून शांत विश्रांतीसाठी जाणे.',
    icon: 'Moon'
  }
];

export const ADMISSION_COURSES: AdmissionCourse[] = [
  {
    id: 'kirtan_praveen',
    title: 'कीर्तन शास्त्र प्रवीण (कथा-कीर्तन शास्त्र परीक्षा)',
    category: 'कीर्तन शास्त्र (Kirtan)',
    duration: '२ वर्षे ( निवासी - विनामूल्य)',
    eligibility: 'वय १५-२५ वर्षे, किमान साक्षरता, शुद्ध शाकाहारी, वारकरी आचरणाची आवड.',
    description: 'महाराष्ट्रातील प्राचीन व प्रसिद्ध कीर्तन परंपरेचे सखोल शिक्षण. यामध्ये संस्कृत श्लोक, संतांचे अभंग, बोधप्रद कथा आणि वेदान्त निरूपण यांचे शास्त्रशुद्ध संयोजन शिकविले जाते.',
    syllabus: [
      'प्रथम सत्र: कीर्तन मांडणी, पूर्वरंग, उत्तररंग आणि सुस्वर गायन पद्धती.',
      'द्वितीय सत्र: अर्थासह ५० निवडक अभंग कंठस्थ करणे.',
      'तृतीय सत्र: ज्ञानेश्वरी आणि उपनिषदांमधील दाखल्यांचा अभ्यास.',
      'चतुर्थ सत्र: ज्येष्ठ आचार्यांच्या मार्गदर्शनाखाली थेट कीर्तन सादरीकरण परीक्षा.'
    ],
    instructor: 'ह.भ.प. रामकृष्ण महाराज आळंदीकर',
    instructorTitle: 'कीर्तन व प्रवचन मुख्य आचार्य',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800'
  },
  {
    id: 'mridanga_vishi',
    title: 'पखवाज-मृदंग विशारद (मृदंग वादन अभ्यासक्रम)',
    category: 'मृदंग वादन (Mridanga)',
    duration: '१ वर्ष (निवासी - विनामूल्य)',
    eligibility: 'वय १४-२४ वर्षे, तालाची आवड, बोटांची चपळता आणि रोज सराव करण्याची सिद्धता.',
    description: 'वारकरी भजनात मृदंग (पखवाज) हा प्राण मानला जातो. या अभ्यासक्रमात विद्यार्थ्यांना गजरे उठवणे, भजनी ठेका, तीनताल, केरवा अशा विविध तालांचे सखोल प्रात्यक्षिक मार्गदर्शन दिले जाते.',
    syllabus: [
      'महिने १-३: हात ठेवण्याची पद्धत, शुद्ध थाप आणि बोलांचा सराव ("धा", "ती", "टे", "ता" इत्यादी).',
      'महिने ४-६: दादरा, रुपक आणि वारकरी भजनी ठेक्यावर हुकुमत.',
      'महिने ७-९: कीर्तनातील लया नियंत्रित करणे आणि गती बदलणे शिकणे.',
      'महिने १०-१२: कीर्तन आणि भजनात प्रत्यक्षात साथसंगत करण्याची परीक्षा.'
    ],
    instructor: 'ह.भ.प. विठ्ठलराव मृदंगाचार्य',
    instructorTitle: 'मुख्य पखवाजाचार्य व तालशास्त्र प्रमुख',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bhajan_vocal',
    title: 'भजनी गायन आणि टाळ संगत (पारंपारिक भजनी पद्धत)',
    category: 'भजन व टाळ (Bhajan & Taal)',
    duration: '६ महिने (निवासी - विनामूल्य)',
    eligibility: 'वय १४-३० वर्षे, सुमधुर आवाज किंवा भक्ती गीतांची प्राथमिक आवड.',
    description: 'पारंपारिक वारकरी भजनी गायन पद्धती, रागदारीवर आधारित अभंग, आणि भजनात अचूक लयीत टाळ वाजवण्याचे शास्त्रशुद्ध शिक्षण.',
    syllabus: [
      'भाग १: यमन, भैरवी आणि बिहाग रागातील प्राथमिक कंठसाधना सराव.',
      'भाग २: संथ हरिपाठ आणि नित्यपाठाचे सुस्वर गायन पद्धत.',
      'भाग ३: वेगवेगळ्या लयीत आणि वेगात टाळ/चिपर चिमटा वाजवून साथसंगत करणे.'
    ],
    instructor: 'ह.भ.प. ज्ञानेश्वर महाराज देहूकर',
    instructorTitle: 'अभंग गायन व स्वरसाधना आचार्य',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800'
  },
  {
    id: 'prasthantrayi_adhyayan',
    title: 'प्रस्थानत्रयी आणि संत साहित्य अध्ययन (शास्त्र अभ्यास)',
    category: 'प्रस्थानत्रयी (Prasthantrayi)',
    duration: '२ वर्षे ( निवासी - विनामूल्य)',
    eligibility: 'वय १६+ वर्षे, मराठीचे उत्तम ज्ञान आणि आध्यात्मिक ग्रंथांची आवड.',
    description: 'वारकरी संप्रदायातील महान ग्रंथांचे सखोल अध्ययन. ज्ञानेश्वरी (भावार्थ दीपिका), तुकाराम गाथा, प्रस्थानत्रयी आणि भगवद्गीतेचा सखोल अभ्यास.',
    syllabus: [
      'वर्ष १: ज्ञानेश्वरीचे पहिले ९ अध्याय आणि त्यांचा भावार्थासह व ओवीरूप अभ्यास.',
      'वर्ष २: वेदान्त विचार आणि संत तुकाराम महाराजांच्या गाथेतील जीवनदर्शन तुलनात्मक अभ्यास.'
    ],
    instructor: 'आचार्य डॉ. मारुती महाराज शास्त्री',
    instructorTitle: 'वेदान्ताचार्य व संत साहित्य शास्त्र व्याख्याते',
    image: 'https://images.unsplash.com/photo-1561361041-c96a291b9978?q=80&w=800'
  }
];

export const DNYANESHWARI_DATA: DnyaneshwariChapter[] = [
  {
    id: 1,
    title: 'अर्जुन-विषाद योग (Arjuna Vishada Yoga)',
    marathiTitle: 'अध्याय पहिला: अर्जुनविषादयोग',
    totalVerses: 85,
    description: 'आध्यात्मिक युद्धाची पार्श्वभूमी. ज्ञानेश्वर माउलींनी पहिल्या अध्यायाची सुरुवात बुद्धीचे दैवत असलेल्या श्री गणेश आणि सद्गुरू कृपेला परमवंदन करून केली आहे.',
    keyTakeaway: 'कुरुक्षेत्राचे रणांगण हे आपल्या स्वतःच्या अंतःकरणाचे प्रतीक आहे. गीतेचा संदेश संभ्रमातून बाहेर पडून सत्याची कास धरण्यास प्रेरित करतो.',
    verses: [
      {
        id: 'dn_1_1',
        verseNumber: '१_१',
        original: 'ॐ नमोजी आद्या । वेदप्रतिपाद्या । जय जय स्वसंवेद्या । आत्मरूपा ॥',
        translation: 'OM! Salutations to the primordial Lord, who is established by the Vedas. Glory be to the self-realized soul which shines in pure self-evident grace.',
        meaning: 'माउली म्हणतात: हे वेदांनी प्रतिपादन केलेल्या आदिपुरुषा, आत्मरूपा तुझा जयजयकार असो. हा ग्रंथ सुरू करताना मी प्रथम तुला आणि श्री सद्गुरूंच्या दिव्य चैतन्याला वंदन करतो.'
      },
      {
        id: 'dn_1_2',
        verseNumber: '१_२',
        original: 'देवा तूंचि गणेशु । सकळमतिप्रकाशु । म्हणे निवृत्तिदासु । अवधारिंतो ॥',
        translation: 'O Lord, You are indeed Ganesha, the sole illuminator of all clean intellects! Thus says the humble servant of Nivruttinath Maharaj.',
        meaning: 'सद्गुरू निवृत्तिनाथांचे दास ज्ञानेश्वर महाराज म्हणतात: हे देवा, तूच बुद्धिप्रकाश देणारा श्री गणेश आहेस. तुझ्या कृपेने बुद्धीचे सर्व पटल प्रकाशित होते.'
      }
    ]
  },
  {
    id: 2,
    title: 'सांख्य योग (Sankhya Yoga)',
    marathiTitle: 'अध्याय दुसरा: सांख्ययोग',
    totalVerses: 72,
    description: 'भगवान श्रीकृष्ण अर्जुनाला आत्म्याचे अमरत्व आणि आत्मज्ञानी पुरुषाची (स्थितप्रज्ञ) लक्षणे समजावून सांगतात.',
    keyTakeaway: 'देह नाशवंत आहे पण आत्मा अमर आहे. जुनी वस्त्रे टाकून नवीन धारण करावीत तसाच आत्मा देहांतर करतो. त्यामुळे आपले विहित कर्तव्य फळाची आशा न धरता करत राहावे.',
    verses: [
      {
        id: 'dn_2_11',
        verseNumber: '२_११',
        original: 'जैसें जीर्ण वस्त्र थोंकिजे । मग नूतन वेढिजे । तैसें देहांतरा स्वीकारिजे । चैतन्येसी ॥',
        translation: 'Just as old, decayed garments are discarded and brand new ones are worn, so does the eternal spirit accept new physical bodies.',
        meaning: 'ज्याप्रमाणे माणूस जुने कपडे टाकून नवीन कपडे परिधान करतो, त्याचप्रमाणे अविनाशी आत्मा जुना देह सोडून नवीन जन्म स्वीकारतो. मृत्यू हा केवळ बाह्य देहाचा बदल आहे.'
      }
    ]
  },
  {
    id: 6,
    title: 'ध्यान योग (Dhyana Yoga / योगशास्त्र अभ्यास)',
    marathiTitle: 'अध्याय सहावा: आत्मसंयमयोग',
    totalVerses: 47,
    description: 'ज्ञानेश्वरीतील अत्यंत अभ्यासपूर्ण असा प्रसिद्ध अध्याय. यामध्ये ज्ञानेश्वर माउलींनी कुंडलिनी शक्तीची जागृती, आसने आणि प्राणायामाचे अत्यंत बारकाईने वर्णन केले आहे.',
    keyTakeaway: 'प्राणायाम आणि आसनांच्या माध्यमातून इंद्रियांना अंतर्मुख करून चंचल मनाला मूळ स्वरूपात विलीन करणे हाच योगाचा परम उद्देश आहे.',
    verses: [
      {
        id: 'dn_6_16',
        verseNumber: '६_१६',
        original: 'जेथ चित्त आपुलिये पाठीं । येउनि बैसें गा कोठीं । मग ते आपोआप मिठी । मिळेचि मिळे ॥',
        translation: 'When the wandering mind turns around and sits quietly in its inner chamber, it automatically merges with the Supreme Divine.',
        meaning: 'जेव्हा वारा विरून जातो आणि मन मागे वळून स्वतःच्या हृदयरूपी कोठीत शांत बसते, तेव्हा जीवाचा शिवाशी आपोआप सुमधुर मिलाफ होतो.'
      }
    ]
  },
  {
    id: 9,
    title: 'राजविद्या राजगुह्य योग (Raja Vidya Rasa Guhya)',
    marathiTitle: 'अध्याय नववा: राजविद्याराजगुह्ययोग',
    totalVerses: 34,
    description: 'ज्ञानयुक्त भक्तीचा श्रेष्ठ मार्ग. माउली या अध्यायात स्पष्ट करतात की केवळ प्रेमाने अर्पण केलेले पान, फूल, फळ किंवा पाणी देखील ईश्वर आनंदाने स्वीकारतो.',
    keyTakeaway: 'जे निस्सीम भक्त अनन्याने ईश्वराचे चिंतन करतात, त्यांच्या योगक्षेमाची (संरक्षण व सुखसोई) संपूर्ण जबाबदारी स्वतः परमात्मा स्वतःच्या शिरावर घेतो.',
    verses: [
      {
        id: 'dn_9_22',
        verseNumber: '९_२२',
        original: 'अहो जे आवडी एकले । मजचि जाहले । त्यांचे सर्वस्व मी वहिले । वाहें तान्हयाचे ॥',
        translation: 'Indeed, those who love Me and merge into Me completely—I bear all their daily burdens and responsibilities on My own shoulders, just as a mother carries her infant.',
        meaning: 'जे भक्त अनन्य भावाने मला शरण आले आहेत, त्यांचा संपूर्ण भार मी स्वतः वाहतो. ज्याप्रमाणे माता आपल्या नवजात अर्भकाचे संपूर्ण संगोपन स्वतः करते, अगदी तसेच माझे आणि भक्ताचे नाते आहे.'
      }
    ]
  },
  {
    id: 18,
    title: 'मोक्ष-संन्यास योग आणि पसायदान (Pasayadan)',
    marathiTitle: 'अध्याय अठरावा: मोक्षसंन्यासयोग (पसायदान)',
    totalVerses: 78,
    description: 'ज्ञानेश्वरीचा सुवर्ण मुकुट. ग्रंथ पूर्ण झाल्यावर ज्ञानेश्वर माउलींनी आपले सद्गुरू श्री निवृत्तिनाथांकडे संपूर्ण जगाच्या कल्याणासाठी "पसायदान" च्या माध्यमातून विश्वशांती व मांगल्याचा आशिर्वाद मागितला आहे.',
    keyTakeaway: 'स्वतःसाठी काहीही न मागता संपूर्ण विश्वातील प्राणिमात्रांचे दुःख दूर व्हावे, दुर्जनांची बुद्धी सुधारावी आणि सर्वांच्या जीवनात सुख आणि मैत्री नांदावी हीच पसायदानाची परम मागणी आहे.',
    verses: [
      {
        id: 'dn_18_p1',
        verseNumber: 'पसायदान १',
        original: 'आता विश्वात्मके देवे । yeणे वाग्यज्ञे तोषावे । तोषोनि मज द्यावे । पसायदान हे ॥',
        translation: 'Now may the Cosmic Divine Lord be pleased with this sacrifice of sacred literary words. And being pleased, may He grant me this grace-request (Pasayadan).',
        meaning: 'आता विद्वानांच्या आणि विश्वाच्या रूपाने नटलेल्या देवाने माझ्या या ग्रंथ रूपी वाग्यज्ञाने प्रसन्न व्हावे आणि प्रसन्न होऊन मला हा आशिर्वाद (पसायदान) द्यावा.'
      },
      {
        id: 'dn_18_p2',
        verseNumber: 'पसायदान २',
        original: 'जे खळांची व्यंकटी सांडो । तया सत्कर्मी रती वाढो । भूतां परस्परे पडो । मैत्र जीवांचे ॥',
        translation: 'May the crookedness of wicked minds drop away. May their hearts find pure delight in performing noble, selfless acts. And may all living beings be bound by cordial soul-friendship.',
        meaning: 'दुर्बुद्धी असणाऱ्या लोकांची कुटिलता नाहीशी होवो, त्यांची सत्कर्मात आवड वाढो आणि सर्व प्राणिमात्रांमध्ये एकमेकांविषयी जीवलग मित्रांप्रमाणे स्नेह निर्माण होवो.'
      },
      {
        id: 'dn_18_p3',
        verseNumber: 'पसायदान ३',
        original: 'दुरितांचे तिमिर जावो । विश्व स्वधर्मसूर्ये पाहो । जो जे वांच्छील तो ते लाहो । प्राणिजात ॥',
        translation: 'May the deep darkness of sin and ignorance melt away. May the sun of moral duty and self-religion light up the world. And may whatever is desired by any creature be granted immediately.',
        meaning: 'पाप आणि अज्ञानाचा अंधकार दूर होवो. संपूर्ण जगाला स्वधर्माचा सूर्य प्रकाशित करो आणि जो प्राणी जे काही योग्य इच्छित असेल त्याला ते प्राप्त होवो.'
      },
      {
        id: 'dn_18_p4',
        verseNumber: 'पसायदान ४',
        original: 'वर्षत सकळ मंगळी । ईश्वरनिष्ठांची मांदियाळी । अनवरत भूमंडळी । भेटतु भूतां ॥',
        translation: 'May clusters of absolute God-devotees, who are continuous showers of auspicious blessings, walk this Earth and meet all living creatures constantly.',
        meaning: 'कल्याणकारी मंगलाचा वर्षाव करणारे ईश्वरनिष्ठ सज्जनांचे समूह या पृथ्वीतलावर सर्व प्राण्यांना सतत भेटत राहोत, जेणेकरून सृष्टी सुखी होईल.'
      }
    ]
  }
];

export const BHAJAN_DATA: AbhangBhajan[] = [
  {
    id: 'abhang_1',
    title: 'Roop Pahata Lochani (रूप पाहता लोचनी)',
    marathiTitle: 'रूप पाहता लोचनी सुख झाले वो साजणी',
    saint: 'Sant Dnyaneshwar Maharaj',
    lyrics: `रूप पाहता लोचनी । सुख झाले वो साजणी ॥ १ ॥
तो हा विठ्ठल बरवा । तो हा माधव बरवा ॥ २ ॥
बहुतां सुकृतांची जोडी । म्हणून विठ्ठली आवडी ॥ ३ ॥
सर्व सुखाचे आगरु । बाप रखुमादेवीवरु ॥ ४ ॥`,
    translation: 'Looking upon this supreme beauty of my Panduranga, my eyes have experienced eternal, absolute bliss, O my dear companion! Good indeed is this Vitthal, sweet is this Madhava. I have found Him after lifetimes of moral merits. He is the ocean of all ultimate joy, the Lord of Mother Rakhumai.',
    rag: 'Raga Bhupali (भूप)',
    tall: 'Bhajani Tala / Kerwa (भजनी ठेका)',
    audioPreset: 'peaceful'
  },
  {
    id: 'abhang_2',
    title: 'Sundar Te Dhyan (सुंदर ते ध्यान उभे विटेवरी)',
    marathiTitle: 'सुंदर ते ध्यान उभे विटेवरी',
    saint: 'Sant Tukaram Maharaj',
    lyrics: `सुंदर ते ध्यान उभे विटेवरी ।
कर कटावरी ठेवूनिया ॥ १ ॥
तुळसी हार गळा कासे पीतांबर ।
आवडे निरंतर हेचि ध्यान ॥ २ ॥
मकर कुंडले तळपती कानी ।
कौस्तुभमणी विराजित ॥ ३ ॥
तुका म्हणे माझे हेचि सर्व सुख ।
पाहीन श्रीमुख आवडीने ॥ ४ ॥`,
    translation: 'Beautiful beyond words is this divine Form standing upright on a brick with hands gently placed on His waist. Around His neck hangs a fragrant Tulsi garland, wrapped with saffron-golden silk (Pitambar). This form is what I desire to contemplate for eternity. In His ears shine traditional dolphin-shaped earrings with the Kaustubha jewel glowing on His chest. Tukaram says: This is my entire bliss, to gaze on His glowing face with intense love.',
    rag: 'Raga Yaman / Bhairavi',
    tall: 'Bhajani Tala (८ मात्रा)',
    audioPreset: 'harmony'
  },
  {
    id: 'abhang_3',
    title: 'Majhe Maher Pandhari (माझे माहेर पंढरी)',
    marathiTitle: 'माझे माहेर पंढरी भीवरेच्या तिरावरी',
    saint: 'Sant Eknath Maharaj',
    lyrics: `माझे माहेर पंढरी । भीवरेच्या तिरावरी ॥ १ ॥
बाप रखुमादेवीवरु । विठ्ठल माझा प्रल्हाद-तारु ॥ २ ॥
साधुसंत मायबाप । हरविती संताप ॥ ३ ॥
एका जनार्दनी शरणागत । विठ्ठल पाहे हृदयस्थ ॥ ४ ॥`,
    translation: 'Pandharpur is my loving mother’s home, sitting peacefully on the sacred banks of river Bhima (Chandrabhaga). There stands Vitthal, the protector and rescuer. All the holy saints are like my dear parents who soothe my anger, anxiety and sorrows. Janardana’s servant Eknath surrenders completely, witnessing Lord Vitthal residing deeply in his own heart.',
    rag: 'Raga Yaman / Kalavati',
    tall: 'Kerwa / Dadra (६ मात्रा)',
    audioPreset: 'chant'
  },
  {
    id: 'abhang_4',
    title: 'Khel Mandiyela (खेळ मांडियेला इंड्राणीच्या काठी)',
    marathiTitle: 'खेळ मांडियेला वाळवंटी घाई',
    saint: 'Sant Tukaram Maharaj',
    lyrics: `खेळ मांडियेला वाळवंटी घाई ।
परस्परां पायीं मिठी पडली ॥ १ ॥
महाद्वारीं वैष्णवांची दाटी ।
सुखाचीच सुटी पंढरीये ॥ २ ॥
नाचती हरीचे दास प्रेमें ।
टाळियांचे घाईं हरिनाम ॥ ३ ॥
तुका म्हणे खेळ सांडू नका कोणी ।
पंढरिचा धनी राखतसे ॥ ४ ॥`,
    translation: 'A divine festival game has been set up on the sands of Chandrabhaga. Everybody is falling at each other’s feet in deep, holy equality. The main temple gate is packed with thousands of loving Vaishnava devotees. Pandharpur is an absolute state of free bliss! The servants of Hari dance with ecstasy, clashing their cymbals and singing His names. Tukaram says: Let no one leave this glorious game of love, for the Lord of Pandhari Himself protects us all.',
    rag: 'Raga Bhairavi (भैरवी)',
    tall: 'Varkari Drut Tala (द्रुत ठेका)',
    audioPreset: 'ecstasy'
  }
];

export const DEVOTIONAL_THOUGHTS: DevotionalThought[] = [
  {
    id: 'q1',
    author: 'Sant Tukaram Maharaj',
    quote: 'True spiritual devotion does not require leaving your family or escaping to a cave. Simply chant the Lord’s name, earn your living with moral honesty, and treat every living being with compassion.',
    marathiQuote: 'प्रपंच साधून परमार्थ करावा, मुखाने हरीचे नाम घ्यावे आणि सत्य आणि भूतदयेचे पालन करावे.',
    source: 'Tukaram Gatha'
  },
  {
    id: 'q2',
    author: 'Sant Dnyaneshwar Mauli',
    quote: 'Knowledge is not dry information. It is seeing the same pure consciousness in an ant, a king, a saint, and a stone. True wisdom dissolves all sense of separate superiority.',
    marathiQuote: 'ज्ञानाचा उदय म्हणजे सर्व भूतमात्रांमध्ये एकाच परमात्म्याचे दर्शन घेणे होय.',
    source: 'Bhavartha Deepika Chapter 13'
  },
  {
    id: 'q3',
    author: 'Sant Chokhamela',
    quote: 'The sugar cane may be twisted and bent, but its juice is ever straight and sweet. Similarly, a body may be despised by society, but the inner devotion to Vitthal remains pure and spotless.',
    marathiQuote: 'ऊस डोंगा परी रस नव्हे डोंगा, काय भुललासी वरलीया रंगा.',
    source: 'Chokhamela Abhangavalil'
  }
];

export const VARKARI_CALENDAR: EventCalendarItem[] = [
  {
    id: 'ev_1',
    title: 'Devshayani Ashadhi Ekadashi Sohla (आषाढी एकादशी सोहळा)',
    marathiTitle: 'आषाढी एकादशी महासोहळा',
    date: 'Ashadh Shuddha Ekadashi',
    details: 'The peak of the annual Wari pilgrimage. Millions of Varkaris walk hundreds of miles from Alandi and Dehu carrying the sacred palqyuin (Palkhi) of Sant Dnyaneshwar and Sant Tukaram to Pandharpur.',
    significance: 'Representing absolute soul surrender and equality, when Lord Vitthal welcomes his devotees home after their long physical trek.'
  },
  {
    id: 'ev_2',
    title: 'Kartiki Ekadashi Samadhi Utsav (कार्तिकी एकादशी सोहळा)',
    marathiTitle: 'कार्तिकी एकादशी आणि माउली संजीवन समाधी सोहळा',
    date: 'Kartik Shuddha Ekadashi to Trayodashi',
    details: 'The celebratory period marking the Sanjivan Samadhi of Sant Dnyaneshwar Maharaj in Alandi. He entered the sacred underground tomb alive in 1296 CE at the tender age of 21, leaving behind the message of cosmic love.',
    significance: 'Varkaris gather in Alandi, turning the banks of river Indrayani into a beautiful ocean of golden oil lamps, continuous bhajans, and deep, tearful meditation.'
  },
  {
    id: 'ev_3',
    title: 'Tukaram Beej Sohla (तुकाराम बीज सोहळा)',
    marathiTitle: 'जगद्गुरू संत तुकाराम महाराज बीज',
    date: 'Phalgun Krishna Dwitiya',
    details: 'The day Sant Tukaram Maharaj ascended directly to Vaikuntha (the spiritual realm) from the sacred Indrayani banks in Dehu, leaving final advice on love and truth to his disciples.',
    significance: 'Dehu temple is decorated; lakhs of devotees sing the sacred Tukaram Gatha verses for 24 hours continuously.'
  },
  {
    id: 'ev_4',
    title: 'Sadguru Jog Maharaj Punyatithi (जोग महाराज पुण्यतिथी उत्सव)',
    marathiTitle: 'सद्गुरू जोग महाराज पुण्यतिथी',
    date: 'Kartik Krishna Ekadashi',
    details: 'Reverent remembrance ceremonies at our Alandi math for the founder who organized the institutional gurukul. Devotees and graduated students return to touch the Samadhi padukas of Jog Maharaj.',
    significance: 'Inspires students to renew their vows of selfless teaching, moral purity, and dedication to Varkari preservation.'
  }
];

export const SISTER_PORTALS = [
  {
    name: 'Warkari Rojnishi Portal',
    url: 'https://warkarirojnishi.in/',
    description: 'Our primary parent website containing daily Varkari diary notes, updated Ekadashi schedules, local kirtankars contacts, and PDF sant literature.',
    badge: 'Primary Reference Site'
  },
  {
    name: 'Pandharpur Devsthan Mandir',
    url: 'https://www.vitthalrukminimandir.org/',
    description: 'The official portal of the main Vitthal Rakhumai temple in Pandharpur. Book live online darshan passes and support temple charity feeds.',
    badge: 'Sacred Headquarters'
  },
  {
    name: 'Alandi Dehu Palkhi Sohla',
    url: 'https://www.varkarisampraday.org/',
    description: 'Central registry of Varkari dindis (marching groups) tracking schedules, paths and security arrangements of the annual Palkhi procession.',
    badge: 'Wari Pilgrimage Tracker'
  }
];
