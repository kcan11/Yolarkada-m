const coursesData = {
    // 1. GİTAR ÇALMAK (3 Adım)
    "gitar": {
        id: "gitar",
        icon: "🎸",
        title: "Gitar Çalmak",
        desc: "Sıfırdan gitar serüveni. Temel akorlar, ritimler ve o mükemmel ilk şarkı hissi.",
        tags: ["sakin", "yaratıcı", "yorgun", "müzik", "sanat", "gitar"],
        steps: [
            {
                title: "Adım 1: Gitarı Tanıyalım & DOĞRU Tutuş",
                content: `
                    <p>Öncelikle müziğe attığın bu cesur adım için tebrikler! 🎉 Eğlenceli ama bazen can yakıcı (sadece parmak ucu acısı) bir yolculuğa başlıyoruz.</p>
                    <p><b>Temel Kural:</b> Gitarı kucağına aldığında savaşır gibi değil, sarılır gibi durmalısın.</p>
                    <ul>
                        <li><b>Pozisyon:</b> Dik bir sandalyeye otur. Koltuğa yayılma! Gitarın o kıvrımlı kısmını sağ bacağının üzerine çok nazikçe oturt.</li>
                        <li><b>Kollar:</b> Sağ kolunun dirseğini, gitarın üst gövdesine yasla. Sol elin klavyeyi (gitarın sapını) boğarcasına sıkmamalı. Sadece baş parmağın arkadan hafifçe destek vermeli.</li>
                    </ul>
                    <p>Hemen şimdi dediklerimi yap ve sağ elinin baş parmağıyla kalın tellere yukarıdan aşağıya yavaşça bir vur. Titreşimi göğsünde hisset.</p>
                `,
                problems: [
                    { keywords: ["ağrı", "acı", "parmak", "yara", "uyuş"], answer: "İlk günlerde parmak uçlarının (özellikle sol el) acıması ÇOK normal! O acı, beyninin oraya nasır inşa etmesinin bir uyarısı. Günde 15 dakikadan fazla zorlama. 💙" },
                    { keywords: ["kayıyor", "tutamıyorum", "ağır", "düşüyor", "otur", "bacak"], answer: "Gitarın kayması kıyafetle alakalıdır. Eşofman gibi kaygan kumaşlar tutuşu zorlaştırır. Sol bacağını hafif ucuz bir ayaklık alarak havaya kaldırmayı veya kitap yığınını ayağının altına koymayı dene!" }
                ],
                fallback: "Zorlanman doğal. Omuzlarını indir, derin bir nefes al ve tekrar kucağına oturt."
            },
            {
                title: "Adım 2: İlk Akorumuz: Mi Minör (Em)",
                content: `
                    <p>Gitarı tutmayı başardık, şimdi ses çıkarma vakti! Öğreneceğin ilk akor <b>Mi Minör (Em)</b>.</p>
                    <p>Kullanacağımız Teller (Gitarın boynu havaya bakarken, en soldaki en kalın tele 6 numara diyoruz):</p>
                    <ul>
                        <li>Orta parmağını al, yukarıdan aşağıya doğru 5. Telin <b>2. Perdesi</b>ne bas.</li>
                        <li>Yüzük parmağını al, onun tam altına yani 4. Telin <b>2. Perdesi</b>ne bas.</li>
                    </ul>
                    <p>Geri kalan hiçbir tele dokunma. Şimdi sağ elinle tüm telleri yukarıdan aşağı tek hamlede tara. Ses nasıl?</p>
                `,
                problems: [
                    { keywords: ["cızırtı", "cırt", "ses çıkmıyor", "boğuk", "titreşim"], answer: "Tellerin cızırtı yapması: 1- Parmağını metal perdeden uzağa basıyorsun. Dibine bas. 2- Yeterince sert basmıyorsun. Cesur ol!" },
                    { keywords: ["değiyor", "diğer", "alt", "susturuyor", "çarpıyor"], answer: "Piyano çalar gibi klavyeye parmaklarını dik kanca olarak indirmelisin! Etlerin alt tellere değerse o tellerin sesini boğarsın." }
                ],
                fallback: "Parmakların birbirine düşman gibi davranabilir, basıp bozup tekrar bas."
            },
            {
                title: "Adım 3: Kas Hafızası ve La Minör (Am)",
                content: `
                    <p>Sırada Mi Minör'ün dostu: <b>La Minör (Am)</b>. Bu ikisi arası geçiş yüzlerce şarkıyı açar.</p>
                    <p>Am Akoru için:</p>
                    <ul>
                        <li>İşaret parmağın: 2. Tel 1. Perde</li>
                        <li>Orta ve Yüzük parmağın: 3. ve 4. tel 2. perde.</li>
                    </ul>
                    <p>Geçiş yaparken beynin çıldıracak gibi olabilir. Ritim atarken Em bas, telleri sustur, ÇOK YAVAŞ bir şekilde Am'ye geç. Hızlanmaya çalışma, doğru basmaya odaklan!</p>
                `,
                problems: [
                    { keywords: ["yavaş", "hız", "geçemiyorum", "takılıyorum", "yetişemiyorum"], answer: "Akorlar arası yavaş geçiş yapmak hata değil süreçtir. 1 ayın sonunda beynin sen düşünmeden otomatik geçiş yapacak." }
                ],
                fallback: "Müzikte hızlanmanın tek kuralı, doğru ve çok yavaş çalmayı öğrenmektir! Devam et!"
            }
        ]
    },

    // 2. YAZILIM (3 Adım)
    "yazilim": {
        id: "yazilim",
        icon: "💻",
        title: "Yazılıma Başlamak",
        desc: "Kendi internet sitenizi kodlayarak yazılım dünyasının kapılarını aralayın. Matrix'e hoş geldin.",
        tags: ["enerjik", "odaklı", "yazılım", "kod", "bilgisayar", "meraklı"],
        steps: [
            {
                title: "Adım 1: İnternetin İskeleti (HTML)",
                content: `
                    <p>Her web sitesinin altında yatan yegane dil HTML'dir. Tarayıcıya nerede ne duracağını söyler.</p>
                    <p>Hemen şimdi "Not Defteri"ni aç. İçine şunu yaz:</p>
                    <p><code>&lt;h1&gt;Merhaba Dünya!&lt;/h1&gt;</code></p>
                    <p>Sonra "Farklı Kaydet"e tıkla. Dosya adını <b>ilk-sitem.html</b> yap. Dosyaya çift tıklayarak tarayıcında aç.</p>
                `,
                problems: [
                    { keywords: ["txt", "görünmüyor", "kod", "metin", "chrome"], answer: "Kodu çalışmak yerine metin olarak okuyorsan sebebi dosya uzantısını '.txt' kaydetmendir. 'Tüm Dosyalar' özelliğini seçip tekrar .html uzantısıyla kaydet!" }
                ],
                fallback: "Bilgisayarlar inatçı ve saf makinelerdir. Virgülüne kadar kontrol et."
            },
            {
                title: "Adım 2: Güzelleştirme Sanatı (CSS)",
                content: `
                    <p>HTML iskeletse, CSS boyasıdır.</p>
                    <p>Not defterini aç ve etiketini şu şekilde güncelle:</p>
                    <p><code>&lt;h1 style="color: red;"&gt;Merhaba Dünya!&lt;/h1&gt;</code></p>
                    <p>Kaydet ve tarayıcıda yenile. Rengin kırmızıya döndüğünü göreceksin.</p>
                `,
                problems: [
                    { keywords: ["renk", "kırmızı", "çalışmıyor", "değişmedi"], answer: "Tırnak işaretlerine çok dikkat et! İki nokta (:) noktalı virgül (;) ve tırnak işaretleri (\") eksiksiz konmalıdır." }
                ],
                fallback: "Eğer sayfanda hata varsa, gözlerini kıs koduna dikkatlice bak."
            },
            {
                title: "Adım 3: Sihir ve Etkileşim (JavaScript)",
                content: `
                    <p>İskelet (HTML) ve Boya (CSS) tamam. Düğmeye basınca lambanın yanması? Bu <b>JavaScript</b>'tir.</p>
                    <p>Sayfana bir buton ekleyelim:</p>
                    <p><code>&lt;button onclick="alert('Uyandın!')"&gt;Bana Tıkla&lt;/button&gt;</code></p>
                    <p>Sayfayı yenile ve butona tıkla. Siten seninle konuşmaya başladı!</p>
                `,
                problems: [
                    { keywords: ["buton", "basılmıyor", "çıkmıyor", "uyarı", "alert"], answer: "Eğer buton çıkmıyorsa <button> etiketini kapatmamışsındır. onclick içindeki alert tek tırnakla (') sarmalanmalıdır!" }
                ],
                fallback: "Yazılımcılığın %90'ı nerede hata yaptığını aramaktır (Debugging). Hatanın üzerine cesurca yürü!"
            }
        ]
    },

    // 3. İNGİLİZCE İLETİŞİM (3 Adım)
    "ingilizce": {
        id: "ingilizce",
        icon: "🌍",
        title: "İngilizce İletişim",
        desc: "Grameri bir kenara bırak, sadece konuş. Dil engeli zihnindedir.",
        tags: ["enerjik", "sosyal", "meraklı", "dil", "ingilizce", "iletişim"],
        steps: [
            {
                title: "Adım 1: Psikolojik Blokajı Kırmak",
                content: `
                    <p>Hata yapmanın korkunç bir şey olduğu kodlandı bize. Oysa İngilizce sadece kaba bir iletişim aracı.</p>
                    <p><b>Görev:</b> Etrafına bak. Gördüğün her nesneyi ingilizce olarak yüksek sesle, odada çınlayacak şekilde bağırarak söyle.</p>
                    <p>"This is a table!", "This is a wall!" Kendi sesinden utancını yenmeden konuşamazsın!</p>
                `,
                problems: [
                    { keywords: ["utan", "çekini", "rezil", "telaffuz", "kötü", "aksan"], answer: "Senin Türk aksanına sahip olman tamamen normal. Amerikan başkanı gibi konuşmak zorunda değilsin, amacın derdini anlatmak!" }
                ],
                fallback: "Çocuklar dili önce anlamsız sesler çıkararak öğrenir, utanma."
            },
            {
                title: "Adım 2: Çeviri Kanserini Bitirmek",
                content: `
                    <p>Önce Türkçe duyup, sonra İngilizceye çevirerek düşünürsen takılırsın.</p>
                    <p><b>Think in English Kuralı:</b> Kalktığında iç sesin Türkçe yerine İngilizce konuşsun. "I am going to shower", "I am tired".</p>
                    <p>Bir kelimeyi bilmiyorsan, Türkçe karşılığını kullanma. "Helikopter" gelmiyorsa aklına "Big flying car" de geç!</p>
                `,
                problems: [
                    { keywords: ["kelime", "bilmiyorum", "unutuyorum", "hafıza"], answer: "Unuttuğun kelimenin sözlüğüne bakma. Onu anlatacak 3 basit kelime uydur. Beynin doğaçlama yapmayı öğrenmeli!" }
                ],
                fallback: "Mükemmel cümle yoktur, kurulmuş anlaşılır cümle vardır."
            },
            {
                title: "Adım 3: 'Shadowing' (Gölgeleme) Tekniği",
                content: `
                    <p>Duyduğunu taklit etmek en güçlü öğrenmedir.</p>
                    <p>İngilizce bir film sahnesini aç. Kulaklığı tak. Aktör cümleyi söylerken aynı anda, onun hemen yarım saniye peşinden, onun vurgusunu birebir kopyalayarak yüksek sesle TEKRAR ET.</p>
                    <p>Günde 15 dakika sadece bunu yaparsan akıcılık (fluency) patlaması yaşarsın.</p>
                `,
                problems: [
                    { keywords: ["hızlı", "anlamıyorum", "yetişemiyorum"], answer: "Eğer çok hızlı geliyorsa YouTube'dan hızı x0.75'e çek. Önemli olan aktörün vurguladığı o melodiyi hissetmektir." }
                ],
                fallback: "Bu adımda kendi kendine dalga geçer gibi kopyala, utancını at!"
            }
        ]
    },

    // 4. DİKSİYON VE İLETİŞİM (3 Adım)
    "diksiyon": {
        id: "diksiyon",
        icon: "🗣",
        title: "Diksiyon ve Etkili Konuşma",
        desc: "İnsanları sesinle büyüle, kelimenin gücüyle iz bırak.",
        tags: ["odaklı", "sosyal", "iletişim", "konuşma", "liderlik"],
        steps: [
            {
                title: "Adım 1: Diyafram Nefesi",
                content: `
                    <p>Diksiyon "nefese" dayanır. Sadece göğsüne nefes alırsan cümlenin sonunu getiremezsin, sesin cılızlaşır.</p>
                    <p><b>Egzersiz:</b> Sırt üstü yere uzan. Karnının üzerine bir kitap koy. Nefes alırken göğsün ŞİŞMEMELİ, sadece karnın yukarı kalkmalı (kitap yükselmeli).</p>
                    <p>Her gerildiğinde derin bir şekilde burnundan sadece diyaframına oksijen doldur.</p>
                `,
                problems: [
                    { keywords: ["baş", "döndü", "bayılacak", "oksijen"], answer: "Diyafram nefesi beynine giden oksijeni fena artırır. Baş dönmesi harika çalıştığının göstergesidir, otur 1-2 dakika dinlen!" }
                ],
                fallback: "Denizde yüzerken nasıl derin nefes alıyorsan o diyaframdır."
            },
            {
                title: "Adım 2: Çene ve Dil Tembelliği",
                content: `
                    <p>Kelimeler ağzından çıkarken kapalı dişlere veya tembel yanaklara çapmamalı.</p>
                    <p>Kurşun kalemi dudaklarının arasına yatay (köpeklerin kemik taşıdığı gibi) yerleştir.</p>
                    <p>Bunu düşürmeden oku: <i>"Şu köşe yaz köşesi, şu köşe kış köşesi, ortada su şişesi."</i> 3 Dakika yap, kalemi bırak ve sesindeki o muazzam açılmayı dinle.</p>
                `,
                problems: [
                    { keywords: ["tükürük", "salya", "anlaşılmıyor", "acı", "çenem acıdı"], answer: "Bu dil kaslarına en büyük ağırlık idmanıdır. Ağrıyabilir, anlaşılmaz çıkabilir, asıl hedef engellere rağmen dili ve çeneyi açmaktır." }
                ],
                fallback: "Ağzını abartarak aç, kelimeleri boğazından değil dudaklarından çıkar."
            },
            {
                title: "Adım 3: Vurgu ve Beden Dili Şovu",
                content: `
                    <p>Sadece robotik bir şekilde yüksek sesle konuşmak etkili değildir. Sözcüklerin bazılarının KALIN ve BÜYÜK yazıldığını hisset.</p>
                    <p><b>Beden Dili:</b> Sesin enerjisi ayağından başlar. Konuşurken sadece ağzın değil, ellerin ve omuzların da o cümlenin şeklini çizmelidir.</p>
                    <p>Ellerini kullanarak bir metni okumayı dene. Sesindeki tonlamanın ellerinin kalkışıyla nasıl yükseldiğini göreceksin.</p>
                `,
                problems: [
                    { keywords: ["sahte", "komik", "tiyatro", "abartılı", "yapmacık"], answer: "Sana şu an yapmacık geliyor çünkü sınırlarını yeni genişletiyorsun. Aynanın karşısındaki o abartı, sahnede / toplantıda 'karizma' olarak görünecektir." }
                ],
                fallback: "Duygunu sesine katmazsan insanlar teknik bilgi dinler gibi sıkılır. Sahnede ol!"
            }
        ]
    },

    // 5. YATIRIM VE FİNANS (3 Adım)
    "yatirim": {
        id: "yatirim",
        icon: "📈",
        title: "Yatırım ve Finans",
        desc: "Paranın senin için köle gibi çalışmasını sağla. Zaman en büyük silahın.",
        tags: ["odaklı", "sakin", "finans", "para", "ekonomi", "matematik"],
        steps: [
            {
                title: "Adım 1: Gelir/Gider ve 'Önce Kendine Öde'",
                content: `
                    <p>Zenginliğin sırrı ne kadar kazandığın değil, kazandığının ne kadarını KENDİNE yatırdığındır.</p>
                    <p>Maaş yattığı an %10'unu hiç var olmamış gibi görünmez bir banka/fon hesabına at. Tüm faturaları sonra öde. Önce GELECEĞİNE ödeme yapmalısın.</p>
                    <p>Bugün banka uygumana girip 'vadesiz altın' hesabı bile açsan, o %10'u yok et.</p>
                `,
                problems: [
                    { keywords: ["yetmiyor", "param az", "kalmıyor", "borç", "enflasyon"], answer: "Ayda 100 TL bile ayıramam diyorsan harcamalarını (dışarıdaki kahve) gözden geçir. Burada amacımız miktardan çok 'Biriktirme Refleksi' kurmaktır." }
                ],
                fallback: "Paradan ve matematikten kaçmak durumu daha da kötüleştirir, gerçekle yüzleş."
            },
            {
                title: "Adım 2: Einstein'ın Sırrı: Bileşik Getiri",
                content: `
                    <p>Bileşik getiri, 'Kârın Kâr Getirmesidir'. Kartopu felsefesi.</p>
                    <p>10.000 liran 1.000 lira kâr ettiğinde, ertesi ay 11.000 lira üzerinden kâr edersin. 5 yıl sonra ana paran değil, SADECE karlarının aylık getirdiği kar maaşını geçer.</p>
                    <p>Sihir çok yüklü paralarla girmek değildir, <b>Küçük paralarla ERKEN başlamaktır.</b></p>
                `,
                problems: [
                    { keywords: ["bilmiyorum", "hangi hisse", "zarar", "kripto", "risk", "korkuyorum"], answer: "Tekil şirket seçemiyorsan, bankalardan TEFAS sistemli 'Yatırım Fonları'nı al. Bu fonlarda senin paranı profesyoneller yönetir ve riski çok düşürür." }
                ],
                fallback: "Zaman dâhiyane hisse analizlerinden bile daha çok kazandıran tek kaldıraçtır."
            },
            {
                title: "Adım 3: Duyusal Finans ve Panik (Kriz Yönetimi)",
                content: `
                    <p>Yatırım hesabına her gün girip bakıyorsan kumar oynuyorsun demektir.</p>
                    <p>Borsa %20 düştüğünde satmak istersin paniğe kapılıp. Oysa zenginlerin kuralı basittir: Herkes korkarken al, herkes coşarken sat.</p>
                    <p>Hesabına attığın parayı 3 yıl yok say. Krizler, hisselerin / varlıkların indirime girdiği devasa Black Friday satışlarıdır.</p>
                `,
                problems: [
                    { keywords: ["zarardayım", "çok düştü", "eksi", "satayım mı", "panik"], answer: "Satmadığın sürece zarar etmedin. Kırmızı ekranlar, aslında o mala daha ucuza ortak olman için fırsat verir. Çıkarken de düşerken de düzenli (Dolar Maliyeti Ortalaması) almalısın." }
                ],
                fallback: "Ekranı kapat. Psikoloji matematikten büyüktür."
            }
        ]
    },

    // 6. 3D MODELLEME (3 Adım)
    "modelleme": {
        id: "modelleme",
        icon: "🧊",
        title: "3D Modelleme (Blender)",
        desc: "Kendi 3 boyutlu dünyanı ve karakterlerini yarat.",
        tags: ["yaratıcı", "odaklı", "sanat", "tasarım", "bilgisayar"],
        steps: [
            {
                title: "Adım 1: Küpün İçindeki Şaheser",
                content: `
                    <p>Evrenin en güçlü ücretsiz 3D modelleme programı Blender. Milyonlarca tuşa aldırış etme.</p>
                    <p>Ortada o meşhur 'Küp' var. <b>TAB</b> tuşuna bas (Edit Mode), fare ile kübün köşesindeki siyah noktayı seç ve klavyede <b>G</b> harfine bas.</p>
                    <p>Fareyi kaydır. İşte 3 boyutu büküyorsun. S tuşu büyütür (Scale), R tuşu çevirir (Rotate).</p>
                `,
                problems: [
                    { keywords: ["kas", "kasıyor", "çöktü", "dondu", "bilgisayar"], answer: "Eğer kasıyorsa Material özelliklerini açmışsındır. Sağ üstten Solid (Düz gri form) görünümüne geri al." }
                ],
                fallback: "Menüler uçak kokpiti gibi durur, senin şimdilik sadece sol tık ve TAB tuşuna ihtiyacın var."
            },
            {
                title: "Adım 2: Yüzeyleri Oymak (Extrude & Inset)",
                content: `
                    <p>Bu küpten bir ev yapmak o kadar kolay ki. Klavyede <b>3</b> tuşuna basıp noktalardan ziyade "Yüzeyleri (Face)" seçebilir hale gel.</p>
                    <p>Kübrün bir yüzeyine tıkla. Klavyede <b>E</b> harfine basıp (Extrude) yukarı çek! Küp uzadı. <b>I</b> (Inset) harfine basıp içe doğru daraltın. </p>
                    <p>Sadece E ve I basarak saniyeler içinde devasa gökdelenler dikebilirsin!</p>
                `,
                problems: [
                    { keywords: ["şekil", "bozuldu", "garip oldu", "iç içe", "çizgiler"], answer: "Extrude (E) basıp sağ tıkladığında hareket iptal olur sanırsın ama o yüzeyi üst üste kopyalamış olur. CTRL+Z yapıp tamamen geri al!" }
                ],
                fallback: "Bol bol bozuk, yamuk, garip şekiller yaratacaksın. Hepsi öğrenmenin parçası."
            },
            {
                title: "Adım 3: Boya Fırçası (Material Atamak)",
                content: `
                    <p>Modelimiz gri ve sıkıcı. Sağ menüde Kırmızı bir Dünya (Material Properties) ikonu var, tıkla.</p>
                    <p><b>NEW</b> de. "Base Color" yazan yandaki beyaz kutuya tıklayıp rengi cırtlak kırmızı yap.</p>
                    <p>Fakat rengi göremeyeceksin, çünkü hala "Katı (Solid)" moddasın. Sağ üstteki 4 yuvarlaktan sondan 2. (Material Preview) ikonuna tıkla. Sihri gör!</p>
                `,
                problems: [
                    { keywords: ["karanlık", "gözükmüyor", "siyah", "ışık", "renk yok"], answer: "Eğer tamamen simsiyah olduysa en sağdaki Render görünümüne geçmişsindir ve dünyanda ışık yoktur. Onun hemen solundaki Material Preview'e geç." }
                ],
                fallback: "Tasarımını zihnindeki gibi renklendir. Gerçek bir sanatçısın."
            }
        ]
    },

    // 7. ZAMAN YÖNETİMİ (3 Adım)
    "zamanyonetimi": {
        id: "zamanyonetimi",
        icon: "⏳",
        title: "Zaman Yönetimi",
        desc: "Daha çok çalışarak değil, daha zekice bir planla günü ele geçir.",
        tags: ["yorgun", "odaklı", "liderlik", "verimlilik", "planlama"],
        steps: [
            {
                title: "Adım 1: Dopamin Tufanı ve Pomodoro",
                content: `
                    <p>Sorun zamanın olmaması değil, kısa vadeli hazların (Tiktok, Reels) odak reseptörlerimizi yakmasıdır.</p>
                    <p>Klasik: <b>Pomodoro!</b> Telefonu odanın diğer ucuna koy (Ters şekilde uçak modunda). Bir zamanlayıcı aç. SADECE 25 dakika çalışacaksın.</p>
                    <p>Beynine söz ver: "Sadece 25 dk sıkılacağım sonra bakacağım." 25. Dakikanın sonunda beyninin odak akışına (Flow) geçtiğini göreceksin.</p>
                `,
                problems: [
                    { keywords: ["sıkıntı", "sıkılıyorum", "bunaldım", "patladım", "dikkat", "bakamıyorum"], answer: "Bu can sıkıntısı bir semptomdur. Zehrin dışarı çıkışıdır. Dopamine öyle alıştın ki beynin onu arıyor. Sıkıntıya tahammül ettiğin an lider olacaksın, devam et!" }
                ],
                fallback: "10 saniye boyunca derin nefes al, saate bakmayı bırak ve önündeki kağıda / ekrana kilitlen."
            },
            {
                title: "Adım 2: Eisenhower Matrisi (Aciliyet Yanılgısı)",
                content: `
                    <p>Dünyada her iş sana 'ACİL'miş gibi davranır. Seni panikletir. Buna düşme.</p>
                    <p>Bir kağıdı 4 parçaya (artı işareti çizerek) böl. Kutular şöyle olacak:<br>
                    1. Acil VE Önemli (Hemen şimdi YAP)<br>
                    2. Acil Değil AMA Önemli (Takvime PLANLA - Spor yapmak, İngilizce çalışmak)<br>
                    3. Acil AMA Önemli Değil (Başkasına DEVRET veya sonra yap)<br>
                    4. Acil Değil VE Önemli Değil (Bunu direkt SİL / ÇÖPE AT - Mesela DM kontrol etmek)</p>
                `,
                problems: [
                    { keywords: ["hepsi acil", "her şey öenmli", "zaman yok", "hepsi lazım"], answer: "Her şey acil diyorsan aslında hiçbir şeyin öncelikli olmadığını itiraf ediyorsundur. Sana en uzun vadede yararı olacak tek işi (Örn. Kodlama öğrenmek) en başa al, gerisi yanabilir." }
                ],
                fallback: "Zamanı kontrol edemezsin ama yapacağın işi kontrol edebilirsin."
            },
            {
                title: "Adım 3: Derin Çalışma (Deep Work)",
                content: `
                    <p>Aynı anda hem müzik dinleyip, hem mesajlara cevap verip, hem tasarım/ders yapmak zekanı bölmek demektir (Multi-tasking büyük bir yalandır).</p>
                    <p>İnsanın dikkatini bir objeden koparıp diğer objeye verdiğinde, beyninin geride kalıntıları kalır. İşler arasında atlama. Tek bir monitör sekmesi. Tek bir kalem. 1 Saat sadece o tünelde yürü.</p>
                `,
                problems: [
                    { keywords: ["müzik", "sessizlik", "ses", "arkaplan", "uyku", "gürültü"], answer: "Eğer sessizlikte uykun geliyorsa sadece lirik barındırmayan sözsüz şarkılar dinle (Beyaz gürültü, Lo-Fi, Brown Noise). Sözlü müzik dili işleyen lobunu meşgul eder." }
                ],
                fallback: "Bugünün dünyasında tek süper güç saatlerce odaklanıp dikkati dağılmamaktır."
            }
        ]
    },

    // 8. HIZLI OKUMA (3 Adım)
    "hizliokuma": {
        id: "hizliokuma",
        icon: "📚",
        title: "Hızlı Okuma",
        desc: "Aylarca bitmeyen kitapları saniyelerce okuduğunu düşün.",
        tags: ["sakin", "odaklı", "kitap", "meraklı"],
        steps: [
            {
                title: "Adım 1: İç Ses Sürgünü",
                content: `
                    <p>Beynin ışık hızında kelimeyi işler. Ama sen okurken, kafanın içinde bir "İç Ses" kelimeleri telaffuz eder.</p>
                    <p>Yani okuma hızın = senin konuşma sınırındır. Bu çok yavaş.</p>
                    <p>Bugün okurken ritimli bir melodi mırıldan. Gözlerin metni tararken kulağın iç sesini TEK bir sese (aaaaa gibi) boğsun. Kelimenin Düz fotoğrafını çek!</p>
                `,
                problems: [
                    { keywords: ["anlamadım", "anlaşılmıyor", "boşluk", "kayboldum", "atladım"], answer: "Duyduğun his anlama eksikliği değil 'Eksiklik paniği'dir. Harfleri seslendirmediğin için zihnin okumadığını sanıyor. Hiçe say ve gözünle taramaya zorla, beynin anlamı direkt fotoğraf karesi gibi çekmeye başlayacak." }
                ],
                fallback: "Gözlerin harfleri okumaz, sadece siyah lekelere bakar, beyin onu çözümler. Engeli kaldır."
            },
            {
                title: "Adım 2: Parmak Takibi (Görsel Rehber)",
                content: `
                    <p>Gözlerin doğası gereği hareket eden hedefleri mükemmel kilitler ama sabit yazıda sürekli yukarı aşağı kaybolur (Regresyon - Geri Dönüş).</p>
                    <p>İşaret parmağını (veya bir tükenmez kalemi) metnin hemen altında hızlıca gezdir ve gözlerin o kalemi takip etsin.</p>
                    <p>Geri dönüp anlamadığın yeri bir daha, bir daha okuma. Geriye bakışı yasakla!</p>
                `,
                problems: [
                    { keywords: ["yavaşlıyorum", "yetişemiyorum", "kalem yetişmiyor", "geri döndü"], answer: "Parmak hızını senin anlama hızından %20 daha hızlı olacak şekilde ayarla. Beynin arkadan nefes nefese gelse de bir süre sonra o hıza yetişip kendi vitesini büyütecektir." }
                ],
                fallback: "Satır atlasan bile bırak ritim devam etsin."
            },
            {
                title: "Adım 3: Periferik Görüş (Blok Okuma)",
                content: `
                    <p>Kelimeleri tek tek okumak (1...2...3) yerine bloklar halinde okumalısın.</p>
                    <p>Gözünü cümlede 3 kelimelik öbeklerin ortasına odakla. Sağındaki ve solundaki kelimeyi çevresel (Periferik) görüşün ile ZATEN görüyorsun.</p>
                    <p>Satırda 10 duraklama yerine gözünü 3 kez duraklatıp kelime gruplarının resmini çekerek ilerle. 2 kat hızlandığını fark edeceksin.</p>
                `,
                problems: [
                    { keywords: ["bulanık", "yoruldu", "başımağrıdı", "odaklanamıyorum"], answer: "Göz kasların spor salonuna gitmiş gibi yanıyor, süper. Kaslarını güçlendiriyorsun. Birkaç güne geçecek ve inanılmaz alanları tek bakışta görebileceksin." }
                ],
                fallback: "Kendine güven. Göz sadece kameradır, işi beyin halleder."
            }
        ]
    },

    // 9. VİDEO KURGU (3 Adım)
    "kurgu": {
        id: "kurgu",
        icon: "🎬",
        title: "Video Kurgu (Montaj)",
        desc: "Ham görüntüleri duygu ve tempo yaratan büyülü kliplere çevir.",
        tags: ["yaratıcı", "enerjik", "video", "medya", "sanat"],
        steps: [
            {
                title: "Adım 1: Timeline (Zaman Çizelgesi) ve Kesmek",
                content: `
                    <p>İyi bir kurgu CapCut, Premiere, DaVinci fark etmez; aynıdır: <b>Timeline.</b></p>
                    <p>Müzik videonun ruhudur. Timeline'ın alt kısmına müziğini at. Müziği dinle ve kulağının "Bass" veya nota patlaması (Beat) duyduğu tam o zirve anlarında farenle (veya C tuşuyla) kesik at.</p>
                    <p>Kötü görüntüleri At. Geriye kalanları ritimle birleştir. Harika klipler sadece budur.</p>
                `,
                problems: [
                    { keywords: ["ses", "uyuşmuyor", "senkron", "bozuldu", "kaydı"], answer: "Görüntüyü silerken aşağıda müzik yerinden kaydı. Görüntüyü taşıdıktan sonra müziği tekrar o tam beat (vuruş) noktasına ses dalgalarından (waveform) bularak hizala." }
                ],
                fallback: "Kötü kamera iyi kurguyla kurtulur ama kötü ritimli kurgu herkesi sıkar."
            },
            {
                title: "Adım 2: A-Roll ve B-Roll Kullanımı",
                content: `
                    <p>Eğer birisi 5 dakika düz kameraya konuşursa (Buna A-Roll denir) izleyici esner, videoyu kapatır.</p>
                    <p>Onu kurtaracak olan <b>B-Roll (Destekleyici Görüntü)</b>'dür. Adam kamerada "Kaldırımlar ıslaktı" diyorsa, sen de üstüne o an ıslak kaldırım videosu veya yağmur damlası görüntüsü bindirirsin.</p>
                    <p>Sesi alttan akarken izleyici farklı açılar, stok görüntüler görsün. Dinamizmi B-Roll katar.</p>
                `,
                problems: [
                    { keywords: ["bulamıyorum", "video", "ücretsiz", "görüntü"], answer: "Pexels veya Pixabay gibi ücretsiz Stock Video sitelerine gir. Aradığın duyguyu İngilizce yaz (Rain, Coffee, City vs.) Onları indirip üst katmana koy." }
                ],
                fallback: "İzleyici bir sahneye 4 saniyeden fazla katlanamaz, sürekli açıyı veya görüntüyü değiştir."
            },
            {
                title: "Adım 3: Renk Eşleştirme (Color Correction)",
                content: `
                    <p>Sinematik görünmek ister misin? Çektiğin sarımtırak ve soluk oda ışığı yerine renkleri toparla.</p>
                    <p>Önce Exposure (Pozlama) ve Contrast (Zıtlık) değerlerini artır. Görüntüdeki siyahların TAM siyah olmasını sağla.</p>
                    <p>Eğer melankolik bir video yapıyorsan beyaz dengesini (Temperature) maviye (soğuk) çek, neşeliyse turuncuya (sıcak) sarıya çek. Rengi duygu belirler.</p>
                `,
                problems: [
                    { keywords: ["karanlık", "patlak", "kötü", "kalp","abartılı", "renkli", "soluk"], answer: "Renk tekerleğiyle (Saturation) çok fazla oynamışsın, insanın yüzü kıpkırmızı olmuş. Her zaman Subtle (Hafif) dokunuşlar yap. Doğallığı kaybetme!" }
                ],
                fallback: "Renkler izleyicinin ne hissetmesi gerektiğini doğrudan beynine enjekte eder."
            }
        ]
    },

    // 10. TASARIM TEMELLERİ (3 Adım)
    "tasarim": {
        id: "tasarim",
        icon: "🎨",
        title: "Tasarım Temelleri",
        desc: "Boşlukların ve hiyerarşinin büyüsü. Çizim bilmene gerek yok.",
        tags: ["sakin", "yaratıcı", "tasarım", "görsel", "çizim", "sanat"],
        steps: [
            {
                title: "Adım 1: Boşluğa Tapınma (White Space)",
                content: `
                    <p>Amatör ve profesyonel arasındaki uçurum: <b>Nefes Almak</b>.</p>
                    <p>Bir afiş veya web sitesi tasarlarken boşlukları şeytan gibi görüp her köşeyi doldurmaya çalışma. Oysaki devasa firmalar devasa "Negatif Boşluklar" bırakır.</p>
                    <p>Yazıların etrafındaki boşluğu (Padding/Margin) şu ankinin 3 katına çıkar. Boşluk lüksü simgeler.</p>
                `,
                problems: [
                    { keywords: ["soluk", "boş", "zayıf", "kötü durdu", "orantısız"], answer: "Aşırı boş bıraktığın için değil, çok ince veya zayıf font kullandığın için öyle. Devasa ve kalın (ExtraBold, Black) bir ana başlık atarsan o boşluk onu müthiş taşıyacaktır." }
                ],
                fallback: "Kendini frenle. Az, çoğu zaman daha çoktur (Less is more)."
            },
            {
                title: "Adım 2: Renk Harmonisi (60-30-10 Kuralı)",
                content: `
                    <p>Rainbow gibi 10 renk kullanma. Gösterişi kısıtlama yaratır.</p>
                    <p>Kuralı Uygula:<br>
                    -%60 Arka Plan rengi (Genelde nötr: Kirli beyaz veya çok koyu lacivert)<br>
                    -%30 İkincil Renk (Kartlar, gri kutular, açık pastel tonlar)<br>
                    -%10 Vurgu Rengi (Sadece dikkat çekmesi gereken butonlar. Kırmızı, fosfor yeşili vs.)</p>
                `,
                problems: [
                    { keywords: ["neon", "göz yoruyor", "cırtlak", "okunmuyor", "kırmızı"], answer: "Arkaplanı kırmızı yapıyor olabilirsin. Vurgu renkleri (%10) sayfada sadece ufak elmaslar gibi serpiştirilmeli, bütün odayı kaplamamalı." }
                ],
                fallback: "Doğadan ilham al, gün doğumu sana renk paleti sunar."
            },
            {
                title: "Adım 3: Tipografi Hiyerarşisi (Sese Yön Verme)",
                content: `
                    <p>Hangi metnin okunmasını istiyorsan tasarım onu bağırır.</p>
                    <p>Sadece tek bir modern font kullan (Örn: Montserrat, Inter). Fakat kalınlık (Weight) farkı yarat.</p>
                    <p>Başlık: Devasa Boyut ve <b>BOLD</b> olsun.<br>Açıklama: Açık gri ve ince (Light/Regular) olsun. Aradaki bu tezatlık okuyucunun gözünü yönlendirir.</p>
                `,
                problems: [
                    { keywords: ["karışık", "okunmuyor", "comic", "font", "küçük", "ufak"], answer: "Süslü, el yazısı gibi fontlar kullanmayı bırak. Dünyanın en iyi tasarım ajansları düz ve temiz (Sans-Serif) okunabilir fontlar kullanır." }
                ],
                fallback: "Güzel font yoktur, yerine uygun font vardır."
            }
        ]
    }
};

let currentCourse = null;
let currentStepIndex = 0;

const homeView = document.getElementById('home-view');
const courseView = document.getElementById('course-view');
const categoriesContainer = document.getElementById('categories-container');
const btnHome = document.getElementById('btn-home');

const courseTitle = document.getElementById('course-title');
const stepTitle = document.getElementById('step-title');
const stepContent = document.getElementById('step-content');
const progressFill = document.getElementById('progress-fill');
const currentStepEl = document.getElementById('current-step-num');
const totalStepEl = document.getElementById('total-step-num');

const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const btnProblem = document.getElementById('btn-problem');

const modalProblem = document.getElementById('problem-modal');
const problemInput = document.getElementById('problem-input');
const btnSolve = document.getElementById('btn-solve');
const solutionBox = document.getElementById('solution-box');
const solutionText = document.getElementById('solution-text');

const modalBadges = document.getElementById('badges-modal');
const modalMood = document.getElementById('mood-modal');

const searchInput = document.getElementById('search-input');
const btnDarkmode = document.getElementById('btn-darkmode');
const btnResume = document.getElementById('btn-resume');
const btnRandom = document.getElementById('btn-random');
const btnBadges = document.getElementById('btn-badges');
const btnMood = document.getElementById('btn-mood');

function init() {
    loadDarkModeState();
    renderCategories(Object.values(coursesData));
}

function renderCategories(coursesArray) {
    categoriesContainer.innerHTML = '';
    if(coursesArray.length === 0){
        categoriesContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">Kriterlere uygun kurs bulunamadı. Belki kelimeleri değiştirmek istersin... 👀</p>';
        return;
    }

    coursesArray.forEach(course => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${course.icon}</div>
            <div class="category-info">
                <h3>${course.title}</h3>
                <p>${course.desc}</p>
            </div>
            <div class="tag-container">
                ${course.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        card.addEventListener('click', () => startCourse(course.id));
        categoriesContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = Object.values(coursesData).filter(course => {
        const textToSearch = (course.title + " " + course.desc + " " + course.tags.join(" ")).toLowerCase();
        return textToSearch.includes(term);
    });
    renderCategories(filtered);
    
    if (!homeView.classList.contains('active')) {
        courseView.classList.remove('active');
        homeView.classList.add('active');
    }
});

btnHome.addEventListener('click', () => {
    searchInput.value = '';
    renderCategories(Object.values(coursesData));
    courseView.classList.remove('active');
    homeView.classList.add('active');
});

function startCourse(courseId, stepIndex = 0) {
    currentCourse = coursesData[courseId];
    currentStepIndex = stepIndex;
    
    courseTitle.innerText = currentCourse.title;
    totalStepEl.innerText = currentCourse.steps.length;
    
    homeView.classList.remove('active');
    courseView.classList.add('active');
    
    saveCurrentState();
    renderStep();
}

function renderStep() {
    const step = currentCourse.steps[currentStepIndex];
    stepTitle.innerText = step.title;
    stepContent.innerHTML = step.content;
    currentStepEl.innerText = currentStepIndex + 1;
    
    const progressPercent = ((currentStepIndex + 1) / currentCourse.steps.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    if(currentStepIndex === currentCourse.steps.length - 1) {
        btnNext.innerHTML = '🔥 Kursu Tamamla ve Rozet Kazan 🏆';
    } else {
        btnNext.innerHTML = 'Tamamladım, İleri! 🎉';
    }
}

btnBack.addEventListener('click', () => {
    courseView.classList.remove('active');
    homeView.classList.add('active');
    currentCourse = null;
});

btnNext.addEventListener('click', () => {
    if (currentStepIndex < currentCourse.steps.length - 1) {
        currentStepIndex++;
        saveCurrentState();
        renderStep();
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        awardBadge(currentCourse.id);
        alert("Efsanesin! Bu devasa kursu bitirdin ve Başarı Duvarına mükemmel bir rozet eklendi! 🏆");
        localStorage.removeItem('yt_last_course');
        btnBack.click();
    }
});

function loadDarkModeState() {
    if(localStorage.getItem('yt_dark') === 'true') {
        document.body.classList.add('dark-mode');
        btnDarkmode.innerHTML = '<i class="fas fa-cloud-sun"></i>';
    } else {
        btnDarkmode.innerHTML = '<i class="fas fa-circle-half-stroke"></i>';
    }
}

btnDarkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('yt_dark', isDark);
    btnDarkmode.innerHTML = isDark ? '<i class="fas fa-cloud-sun"></i>' : '<i class="fas fa-circle-half-stroke"></i>';
});

function saveCurrentState() {
    localStorage.setItem('yt_last_course', currentCourse.id);
    localStorage.setItem('yt_last_step', currentStepIndex);
}

btnResume.addEventListener('click', () => {
    const lastCourseId = localStorage.getItem('yt_last_course');
    const lastStep = parseInt(localStorage.getItem('yt_last_step'));

    if (lastCourseId && coursesData[lastCourseId]) {
        startCourse(lastCourseId, lastStep || 0);
    } else {
        alert("Henüz yarım bıraktığın bir eğitim yok. Yeni bir yolculuğa başla! 🚀");
    }
});

btnRandom.addEventListener('click', () => {
    const keys = Object.keys(coursesData);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    startCourse(randomKey, 0);
});

btnMood.addEventListener('click', () => modalMood.classList.add('show'));
document.querySelector('.btn-close-mood').addEventListener('click', () => modalMood.classList.remove('show'));

document.querySelectorAll('.btn-mood-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const mood = e.target.getAttribute('data-mood');
        modalMood.classList.remove('show');
        
        if (mood === 'hepsi') {
            renderCategories(Object.values(coursesData));
            return;
        }

        const filtered = Object.values(coursesData).filter(c => c.tags.includes(mood));
        renderCategories(filtered);
        searchInput.value = '';
    });
});

function awardBadge(courseId) {
    let earned = JSON.parse(localStorage.getItem('yt_badges') || '[]');
    if (!earned.includes(courseId)) {
        earned.push(courseId);
        localStorage.setItem('yt_badges', JSON.stringify(earned));
    }
}

btnBadges.addEventListener('click', () => {
    const container = document.getElementById('badges-container');
    container.innerHTML = '';
    const earned = JSON.parse(localStorage.getItem('yt_badges') || '[]');

    Object.values(coursesData).forEach(course => {
        const hasEarned = earned.includes(course.id);
        container.innerHTML += `
            <div class="badge-item ${hasEarned ? 'earned' : ''}">
                <span class="badge-icon">${course.icon}</span>
                <span class="badge-title">${course.title}<br>Üstadı</span>
            </div>
        `;
    });
    modalBadges.classList.add('show');
});
document.querySelector('.btn-close-badges').addEventListener('click', () => modalBadges.classList.remove('show'));


btnProblem.addEventListener('click', () => {
    modalProblem.classList.add('show');
    problemInput.value = '';
    solutionBox.classList.add('hidden');
    setTimeout(() => problemInput.focus(), 100);
});

btnSolve.addEventListener('click', () => {
    const userInput = problemInput.value.toLowerCase().trim();
    if(userInput === '') return;

    btnSolve.innerText = "Yükleniyor...";
    
    setTimeout(() => {
        const step = currentCourse.steps[currentStepIndex];
        let foundAnswer = step.fallback;

        if (step.problems && step.problems.length > 0) {
            for (let problem of step.problems) {
                const matches = problem.keywords.some(keyword => userInput.includes(keyword.toLowerCase()));
                if(matches) {
                    foundAnswer = problem.answer;
                    break;
                }
            }
        }

        solutionText.innerText = foundAnswer;
        solutionBox.classList.remove('hidden');
        btnSolve.innerText = "Akıllı Çözüm Bul ✨";
        
    }, 400); 
});

window.addEventListener('click', (e) => {
    if (e.target === modalProblem) modalProblem.classList.remove('show');
    if (e.target === modalBadges) modalBadges.classList.remove('show');
    if (e.target === modalMood) modalMood.classList.remove('show');
});
document.querySelector('#problem-modal .close-btn').addEventListener('click', () => modalProblem.classList.remove('show'));

init();
