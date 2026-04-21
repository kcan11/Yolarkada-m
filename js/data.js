const coursesData = {
    "gitar": {
        id: "gitar", icon: "🎸", title: "Gitar Çalmak", desc: "Sıfırdan gitar serüveni. Temel akorlar, ritimler ve o mükemmel ilk şarkı hissi.",
        tags: ["sakin", "yaratıcı", "yorgun", "müzik", "sanat", "gitar"], difficulty: "Başlangıç", duration: "45 Dk", categoryType: "Müzik ve Sanat",
        steps: [
            {
                title: "Adım 1: Gitarı Tanıyalım & DOĞRU Tutuş",
                summary: { what: "Gitarı doğru tutmayı ve temel pozisyonu", duration: "10 Dk", why: "Yanlış tutuş ileride sırt ağrısı ve çalma zorluğu yaratır." },
                content: `<p>Öncelikle müziğe attığın bu cesur adım için tebrikler! 🎉 Eğlenceli ama bazen can yakıcı (sadece parmak ucu acısı) bir yolculuğa başlıyoruz.</p>
                          <p><b>Temel Kural:</b> Gitarı kucağına aldığında savaşır gibi değil, sarılır gibi durmalısın.</p>
                          <ul><li><b>Pozisyon:</b> Dik bir sandalyeye otur. Koltuğa yayılma! Gitarın o kıvrımlı kısmını sağ bacağının üzerine çok nazikçe oturt.</li>
                          <li><b>Kollar:</b> Sağ kolunun dirseğini, gitarın üst gövdesine yasla. Sol elin klavyeyi boğarcasına sıkmamalı. Sadece baş parmağın arkadan hafifçe destek vermeli.</li></ul>
                          <p>Hemen şimdi dediklerimi yap ve sağ elinin baş parmağıyla kalın tellere yukarıdan aşağıya yavaşça bir vur. Titreşimi göğsünde hisset.</p>`,
                problems: [
                    { keywords: ["ağrı", "acı", "parmak", "yara", "uyuş"], answer: "İlk günlerde parmak uçlarının (özellikle sol el) acıması ÇOK normal! O acı, beyninin oraya nasır inşa etmesinin bir uyarısı. Günde 15 dakikadan fazla zorlama. 💙", alt: "Eğer dayanılmaz bir acıysa gitarın telleri çok kalın veya yüksek olabilir. İnce tel (0.9 veya 0.10) takmayı düşünebilirsin." },
                    { keywords: ["kayıyor", "tutamıyorum", "ağır", "düşüyor", "otur", "bacak"], answer: "Gitarın kayması kıyafetle alakalıdır. Eşofman gibi kaygan kumaşlar tutuşu zorlaştırır. Sol bacağını hafif ucuz bir ayaklık alarak havaya kaldırmayı deneyebilirsin.", alt: "Ayrıca gitar için bir askı (strap) alıp otururken bile takarsan gitarın dengesini sağlamak çok daha kolay olur." }
                ],
                fallback: "Zorlanman doğal. Omuzlarını indir, derin bir nefes al ve tekrar kucağına oturt."
            },
            {
                title: "Adım 2: İlk Akorumuz: Mi Minör (Em)",
                summary: { what: "İlk akor olan Mi Minör basmayı", duration: "15 Dk", why: "Bu akor yüzlerce popüler şarkının temel taşıdır." },
                content: `<p>Gitarı tutmayı başardık, şimdi ses çıkarma vakti! Öğreneceğin ilk akor <b>Mi Minör (Em)</b>.</p>
                          <p>Kullanacağımız Teller (Gitarın boynu havaya bakarken, en soldaki en kalın tele 6 numara diyoruz):</p>
                          <ul><li>Orta parmağını al, yukarıdan aşağıya doğru 5. Telin <b>2. Perdesi</b>ne bas.</li>
                          <li>Yüzük parmağını al, onun tam altına yani 4. Telin <b>2. Perdesi</b>ne bas.</li></ul>
                          <p>Geri kalan hiçbir tele dokunma. Şimdi sağ elinle tüm telleri yukarıdan aşağı tek hamlede tara. Ses nasıl?</p>`,
                problems: [
                    { keywords: ["cızırtı", "cırt", "ses çıkmıyor", "boğuk", "titreşim"], answer: "Tellerin cızırtı yapması: 1- Parmağını metal perdeden uzağa basıyorsun. Dibine bas. 2- Yeterince sert basmıyorsun. Cesur ol!", alt: "Parmak ucunun tam tırnak dibiyle basmaya dikkat et. Etli kısımla basarsan yandaki telleri de susturursun." }
                ],
                fallback: "Parmakların birbirine düşman gibi davranabilir, basıp bozup tekrar bas."
            },
            {
                title: "Adım 3: Kas Hafızası ve La Minör (Am)",
                summary: { what: "La Minör akoru ve geçiş egzersizini", duration: "20 Dk", why: "Akorlar arası akıcı geçiş şarkı çalabilmenin tek yoludur." },
                content: `<p>Sırada Mi Minör'ün dostu: <b>La Minör (Am)</b>. Bu ikisi arası geçiş yüzlerce şarkıyı açar.</p>
                          <ul><li>İşaret parmağın: 2. Tel 1. Perde</li><li>Orta ve Yüzük parmağın: 3. ve 4. tel 2. perde.</li></ul>
                          <p>Geçiş yaparken beynin çıldıracak gibi olabilir. Ritim atarken Em bas, telleri sustur, ÇOK YAVAŞ bir şekilde Am'ye geç. Hızlanmaya çalışma, doğru basmaya odaklan!</p>`,
                problems: [
                    { keywords: ["yavaş", "hız", "geçemiyorum", "takılıyorum", "yetişemiyorum"], answer: "Akorlar arası yavaş geçiş yapmak hata değil süreçtir. 1 ayın sonunda beynin sen düşünmeden otomatik geçiş yapacak.", alt: "Gece uyumadan önce sadece sol elinle akorları basıp bırak. Uykuda beyin bu kas hafızasını kaydeder." }
                ],
                fallback: "Müzikte hızlanmanın tek kuralı, doğru ve yavaş çalmayı öğrenmektir! Devam et!"
            }
        ]
    },

    "yazilim": {
        id: "yazilim", icon: "💻", title: "Yazılıma Başlamak", desc: "Kendi internet sitenizi kodlayarak yazılım dünyasının kapılarını aralayın.",
        tags: ["enerjik", "odaklı", "yazılım", "kod", "bilgisayar", "meraklı"], difficulty: "Başlangıç", duration: "1 Saat", categoryType: "Teknoloji",
        steps: [
            {
                title: "Adım 1: İnternetin İskeleti (HTML)",
                summary: { what: "HTML ile web sayfasının omurgasını kurmayı", duration: "15 Dk", why: "İnternetteki her şeyin temeli HTML'dir." },
                content: `<p>Her web sitesinin altında yatan yegane dil HTML'dir. Tarayıcıya nerede ne duracağını söyler.</p>
                          <p>Hemen şimdi "Not Defteri"ni aç. İçine şunu yaz:</p>
                          <p><code>&lt;h1&gt;Merhaba Dünya!&lt;/h1&gt;</code></p>
                          <p>Sonra "Farklı Kaydet"e tıkla. Dosya adını <b>ilk-sitem.html</b> yap. Dosyaya çift tıklayarak tarayıcında aç.</p>`,
                problems: [
                    { keywords: ["txt", "görünmüyor", "kod", "metin", "chrome"], answer: "Kodu çalışmak yerine metin olarak okuyorsan sebebi dosya uzantısını '.txt' kaydetmendir. 'Tüm Dosyalar' özelliğini seçip tekrar .html uzantısıyla kaydet!", alt: "Not defteri yerine VS Code adlı ücretsiz programı indirirsen kodların renklenir ve bu hataları engeller." }
                ],
                fallback: "Bilgisayarlar inatçı ve saf makinelerdir. Virgülüne kadar kontrol et."
            },
            {
                title: "Adım 2: Güzelleştirme Sanatı (CSS)",
                summary: { what: "CSS ile siteni makyajlamayı", duration: "20 Dk", why: "Düz metin kimsenin ilgisini çekmez, tasarım her şeydir." },
                content: `<p>HTML iskeletse, CSS boyasıdır.</p>
                          <p>Not defterini aç ve etiketini şu şekilde güncelle:</p>
                          <p><code>&lt;h1 style="color: red;"&gt;Merhaba Dünya!&lt;/h1&gt;</code></p>
                          <p>Kaydet ve tarayıcıda yenile. Rengin kırmızıya döndüğünü göreceksin.</p>`,
                problems: [
                    { keywords: ["renk", "kırmızı", "çalışmıyor", "değişmedi", "bozuk"], answer: "Tırnak işaretlerine çok dikkat et! İki nokta (:) noktalı virgül (;) ve tırnak işaretleri (\") eksiksiz konmalıdır.", alt: "Tarayıcında sayfayı yenilemeyi (F5) veya dosyayı kaydetmeyi (CTRL+S) unutmuş olabilirsin." }
                ],
                fallback: "Eğer sayfanda hata varsa, gözlerini kıs koduna dikkatlice bak."
            },
            {
                title: "Adım 3: Sihir ve Etkileşim (JavaScript)",
                summary: { what: "JavaScript ile siteye can vermeyi", duration: "25 Dk", why: "Modern sitelerin etkileşimli olmasını sağlayan beyin JS'dir." },
                content: `<p>İskelet (HTML) ve Boya (CSS) tamam. Düğmeye basınca lambanın yanması? Bu <b>JavaScript</b>'tir.</p>
                          <p>Sayfana bir buton ekleyelim:</p>
                          <p><code>&lt;button onclick="alert('Uyandın!')"&gt;Bana Tıkla&lt;/button&gt;</code></p>
                          <p>Sayfayı yenile ve butona tıkla. Siten seninle konuşmaya başladı!</p>`,
                problems: [
                    { keywords: ["buton", "basılmıyor", "çıkmıyor", "uyarı", "alert"], answer: "Eğer buton çıkmıyorsa <button> etiketini kapatmamışsındır. onclick içindeki alert tek tırnakla (') sarmalanmalıdır!", alt: "Sayfana sağ tıklayıp 'İncele' (Inspect) de, 'Console' sekmesine bak. Oradaki kırmızı yazılar sana nerede hata yaptığını söyler." }
                ],
                fallback: "Yazılımcılığın %90'ı nerede hata yaptığını aramaktır (Debugging). Hatanın üzerine cesurca yürü!"
            }
        ]
    },

    "ingilizce": {
        id: "ingilizce", icon: "🌍", title: "İngilizce İletişim", desc: "Grameri bir kenara bırak, sadece konuş. Dil engeli zihnindedir.",
        tags: ["enerjik", "sosyal", "meraklı", "dil", "ingilizce", "iletişim"], difficulty: "Tüm Seviyeler", duration: "30 Dk", categoryType: "Kişisel Gelişim",
        steps: [
            {
                title: "Adım 1: Psikolojik Blokajı Kırmak",
                summary: { what: "Sesli konuşma korkusunu aşmayı", duration: "10 Dk", why: "Bir dili telaffuz etmekten çekinmek onu öğrenmenin önündeki en büyük engeldir." },
                content: `<p>Hata yapmanın korkunç bir şey olduğu kodlandı bize. Oysa İngilizce sadece kaba bir iletişim aracı.</p>
                          <p><b>Görev:</b> Etrafına bak. Gördüğün her nesneyi ingilizce olarak yüksek sesle, odada çınlayacak şekilde bağırarak söyle.</p>
                          <p>"This is a table!", "This is a wall!" Kendi sesinden utancını yenmeden konuşamazsın!</p>`,
                problems: [
                    { keywords: ["utan", "çekini", "rezil", "telaffuz", "kötü", "aksan"], answer: "Senin Türk aksanına sahip olman tamamen normal. Amerikan başkanı gibi konuşmak zorunda değilsin, amacın derdini anlatmak!", alt: "Kendini odana kapat, müziği aç ve sadece kendi bildiğin gibi bağırarak şarkılara eşlik et. Kasların açılsın." }
                ],
                fallback: "Çocuklar dili önce anlamsız sesler çıkararak öğrenir, utanma."
            },
            {
                title: "Adım 2: Çeviri Kanserini Bitirmek",
                summary: { what: "İngilizce düşünme tekniğini 'Think in English'", duration: "10 Dk", why: "Kafanda çeviri yapmak konuşmayı çok yavaşlatır." },
                content: `<p>Önce Türkçe duyup, sonra İngilizceye çevirerek düşünürsen takılırsın.</p>
                          <p><b>Think in English Kuralı:</b> Kalktığında iç sesin Türkçe yerine İngilizce konuşsun. "I am going to shower", "I am tired".</p>
                          <p>Bir kelimeyi bilmiyorsan, Türkçe karşılığını kullanma. "Helikopter" gelmiyorsa aklına "Big flying car" de geç!</p>`,
                problems: [
                    { keywords: ["kelime", "bilmiyorum", "unutuyorum", "hafıza"], answer: "Unuttuğun kelimenin sözlüğüne bakma. Onu anlatacak 3 basit kelime uydur. Beynin doğaçlama yapmayı öğrenmeli!", alt: "Günde sadece 5 yeni kelime öğren ve o kelimeleri o gün herkesle sohbet ederken zorla araya sıkıştır." }
                ],
                fallback: "Mükemmel cümle yoktur, kurulmuş anlaşılır cümle vardır."
            },
            {
                title: "Adım 3: 'Shadowing' (Gölgeleme) Tekniği",
                summary: { what: "Ana dili İngilizce olanları taklit etmeyi", duration: "10 Dk", why: "Akıcılık ve doğal vurgulama duyarak gelişir." },
                content: `<p>Duyduğunu taklit etmek en güçlü öğrenmedir.</p>
                          <p>İngilizce bir film sahnesini aç. Kulaklığı tak. Aktör cümleyi söylerken aynı anda, onun hemen yarım saniye peşinden, onun vurgusunu birebir kopyalayarak yüksek sesle TEKRAR ET.</p>
                          <p>Günde 15 dakika sadece bunu yaparsan akıcılık (fluency) patlaması yaşarsın.</p>`,
                problems: [
                    { keywords: ["hızlı", "anlamıyorum", "yetişemiyorum", "takip"], answer: "Eğer çok hızlı geliyorsa YouTube'dan hızı x0.75'e çek. Önemli olan aktörün vurguladığı o melodiyi hissetmektir.", alt: "Çizgi filmlerle başla! Peppa Pig gibi İngiliz çizgi filmlerinin telaffuzu kusursuz ve çok yavaştır." }
                ],
                fallback: "Bu adımda kendi kendine dalga geçer gibi kopyala, utancını at!"
            }
        ]
    },

    "zamanyonetimi": {
        id: "zamanyonetimi", icon: "⏳", title: "Zaman Yönetimi", desc: "Daha çok çalışarak değil, daha zekice bir planla günü ele geçir.",
        tags: ["yorgun", "odaklı", "liderlik", "verimlilik", "planlama"], difficulty: "Tüm Seviyeler", duration: "30 Dk", categoryType: "Verimlilik",
        steps: [
            {
                title: "Adım 1: Dopamin Tufanı ve Pomodoro",
                summary: { what: "Odaklanma sınırını korumayı (Pomodoro)", duration: "10 Dk", why: "Bölünmüş dikkat ile verimli olunmaz." },
                content: `<p>Sorun zamanın olmaması değil, kısa vadeli hazların (Tiktok, Reels) odak reseptörlerimizi yakmasıdır.</p>
                          <p>Klasik: <b>Pomodoro!</b> Telefonu odanın diğer ucuna koy (Ters şekilde uçak modunda). Bir zamanlayıcı aç. SADECE 25 dakika çalışacaksın.</p>
                          <p>Beynine söz ver: "Sadece 25 dk sıkılacağım sonra bakacağım." 25. Dakikanın sonunda beyninin odak akışına (Flow) geçtiğini göreceksin.</p>`,
                problems: [
                    { keywords: ["sıkıntı", "sıkılıyorum", "bunaldım", "patladım", "dikkat", "bakamıyorum"], answer: "Bu can sıkıntısı bir semptomdur. Zehrin dışarı çıkışıdır. Sıkıntıya tahammül ettiğin an lider olacaksın, devam et!", alt: "İlk günlerde 25 dakika bile uzun gelebilir. Sadece 15 dakikalık bloklar halinde kur, yavaş yavaş artır." }
                ],
                fallback: "10 saniye boyunca derin nefes al, saate bakmayı bırak ve önündeki kağıda kilitlen."
            },
            {
                title: "Adım 2: Eisenhower Matrisi (Aciliyet Yanılgısı)",
                summary: { what: "İşlerin önceliğini belirlemeyi", duration: "10 Dk", why: "Her şey acil olamaz, önemli olanı ayırmalıyız." },
                content: `<p>Dünyada her iş sana 'ACİL'miş gibi davranır. Seni panikletir. Buna düşme.</p>
                          <p>Bir kağıdı 4 parçaya (artı işareti çizerek) böl. Kutular şöyle olacak:<br>
                          1. Acil VE Önemli (Hemen şimdi YAP)<br>
                          2. Acil Değil AMA Önemli (Takvime PLANLA - Spor yapmak, kod yazmak)<br>
                          3. Acil AMA Önemli Değil (Başkasına DEVRET veya sonra yap)<br>
                          4. Acil Değil VE Önemli Değil (Bunu direkt SİL - DM kontrol etmek)</p>`,
                problems: [
                    { keywords: ["hepsi acil", "her şey öenmli", "zaman yok", "hepsi lazım"], answer: "Her şey acil diyorsan aslında hiçbir şeyin öncelikli olmadığını itiraf ediyorsundur. Geleceğini en çok etkileyecek olanı en başa al.", alt: "Bugün için sadece ve sadece EN ÖNEMLİ 1 Yegane görev belirle. O bitene kadar diğerlerine bakma." }
                ],
                fallback: "Zamanı kontrol edemezsin ama yapacağın işi kontrol edebilirsin."
            },
            {
                title: "Adım 3: Derin Çalışma (Deep Work)",
                summary: { what: "Gerçek ve kesintisiz üretkenlik alanını yaratmayı", duration: "10 Dk", why: "Multitasking zekayı düşürür, derin çalışma dehaların sırrıdır." },
                content: `<p>Aynı anda hem müzik dinleyip, hem mesajlara cevap verip çalışmak zekanı bölmek demektir (Multi-tasking yalandır).</p>
                          <p>İnsanın dikkatini bir objeden koparıp diğer objeye verdiğinde, beyninin geride kalıntıları kalır. İşler arasında atlama. Tek bir monitör sekmesi. Tek bir kalem. 1 Saat sadece o tünelde yürü.</p>`,
                problems: [
                    { keywords: ["müzik", "sessizlik", "ses", "arkaplan", "uyku", "gürültü"], answer: "Eğer sessizlikte uykun geliyorsa sadece lirik barındırmayan sözsüz şarkılar dinle (Beyaz gürültü, Lo-Fi, Brown noise).", alt: "Sesi izole eden güzel bir kulaklık veya kulak tıkacı odaklanma eşiğini 3 katına çıkarabilir." }
                ],
                fallback: "Bugünün dünyasında tek süper güç saatlerce odaklanıp dikkati dağılmamaktır."
            }
        ]
    }
    // Geri kalan aynı formatta (hizliokuma, tasarim vs.) - burayı daha tutarlı ve kısaltarak scale edilebilir tutuyorum
};

coursesData['diksiyon'] = {
    id: "diksiyon", icon: "🗣", title: "Diksiyon ve Etkili Konuşma", desc: "İnsanları sesinle büyüle, kelimenin gücüyle iz bırak.",
    tags: ["odaklı", "sosyal", "iletişim", "konuşma", "liderlik"], difficulty: "Başlangıç", duration: "40 Dk", categoryType: "Kişisel Gelişim",
    steps: [{ title: "Adım 1: Diyafram Nefesi", summary: { what: "Doğru nefes almayı öğrenmek", duration: "15 Dk", why: "Sesinin titrememesi ve güçlü çıkması için." }, content: "<p>Diksiyon nefese dayanır. Sırt ustu uzan, karnına kitap koy...</p>", fallback: "Denizde yüzerken nasıl derin nefes alıyorsan o diyaframdır." }]
};

coursesData['yatirim'] = {
    id: "yatirim", icon: "📈", title: "Yatırım ve Finans", desc: "Paranın senin için köle gibi çalışmasını sağla. Zaman en büyük silahın.",
    tags: ["odaklı", "sakin", "finans", "para", "ekonomi", "matematik"], difficulty: "Orta", duration: "50 Dk", categoryType: "Finans",
    steps: [{ title: "Adım 1: Gelir/Gider ve 'Önce Kendine Öde'", summary: { what: "Birikim refleksi oluşturmak", duration: "20 Dk", why: "Harcamalardan önce birikime öncelik vermek zenginliğin kuralıdır." }, content: "<p>Maaş yattığı an %10'unu hiç var olmamış gibi görünmez bir hesaba at...</p>", fallback: "Matematikten kaçmak durumu kötüleştirir." }]
};

coursesData['modelleme'] = {
    id: "modelleme", icon: "🧊", title: "3D Modelleme (Blender)", desc: "Kendi 3 boyutlu dünyanı ve karakterlerini yarat.",
    tags: ["yaratıcı", "odaklı", "sanat", "tasarım", "bilgisayar"], difficulty: "Orta", duration: "1.5 Saat", categoryType: "Tasarım",
    steps: [{ title: "Adım 1: Küpün İçindeki Şaheser", summary: { what: "Blender temelleri", duration: "30 Dk", why: "Programın arayüzüne alışmak ve temeli kavramak." }, content: "<p>Ortada o meşhur Küp var. TAB tuşuna bas, G harfine bas...</p>", fallback: "Menüler karmaşık gelse de sana şimdilik sol tık yeter." }]
};

// Akıllı sözlük / Synonyms Database for Problem Solver
const synonymsDB = {
    "acı": ["ağrı", "acıyor", "yaralandı", "sızlıyor", "kanadı", "yara"],
    "yapamıyorum": ["olmuyor", "çalışmıyor", "başaramadım", "hata", "takıldım", "zor", "anlamadım"],
    "bozuk": ["kötü", "çirkin", "yanlış", "kasma", "donma"],
    "sıkıldım": ["bıktım", "dikkatim", "çekmiyor", "bunaldım", "istemiyorum"],
    "korku": ["panik", "çekince", "utanıyorum", "rezil"]
};

// Fuzzy match logic helper
const fuzzyMatch = (word, target) => {
    // Basic prefix matching or similarity
    if(target.includes(word) || word.includes(target)) return true;
    
    // Levenshtein / Simple typo tolerance (rudimentary but effective for product demo)
    if(Math.abs(word.length - target.length) > 2) return false;
    let errors = 0;
    for(let i=0; i<Math.min(word.length, target.length); i++){
        if(word[i] !== target[i]) errors++;
    }
    return errors <= 2;
};
