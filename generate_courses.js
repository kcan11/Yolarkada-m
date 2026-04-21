const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'data');

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

// Helper to write JSON
function writeData(id, data) {
    fs.writeFileSync(path.join(dir, id + '.json'), JSON.stringify(data, null, 2));
}

// Read existing JSONs
const existingFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'manifest.json');
let allCourses = {};
existingFiles.forEach(f => {
    let p = path.join(dir, f);
    allCourses[f.replace('.json', '')] = JSON.parse(fs.readFileSync(p, 'utf8'));
});

// Expand single-step courses
if (allCourses['diksiyon']) {
    let d = allCourses['diksiyon'];
    d.steps = [
        d.steps[0],
        {
            title: "Adım 2: Uygulama / Pratik (Kalem Egzersizi)",
            summary: { what: "Dudak tembelliğini kırmayı", duration: "10 Dk", why: "Kelimelerin yutulmasını engellemek için dudak kaslarının güçlenmesi şart." },
            content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Ağzına yatay bir şekilde temiz bir kalem al ve dişlerinle hafifçe tut. Bu haldeyken yüksek sesle bir haber metni okumaya çalış. Tükürük saçman veya zorlanman çok normal.</p><p>Kalemi çıkardığında kelimelerin ne kadar rahat çıktığına inanamayacaksın.</p>",
            problems: [{ keywords: ["acı", "zor", "tükürük"], answer: "Ağzındaki kasların yorulması doğru yolda olduğunu gösterir.", alt: "Eğer kalem zorluyorsa sadece ağzını abartılı açarak konuşmayı dene." }],
            fallback: "Devam et, pes etme!"
        },
        {
            title: "Adım 3: Geliştirme / Derinleşme (Vurgu)",
            summary: { what: "Monotonluktan kurtulup vurgulu konuşmayı", duration: "15 Dk", why: "Robot gibi konuşmak dinleyicinin sıkılmasına neden olur." },
            content: "<p>Şimdi okuduğun metindeki sadece YÜKLEM (son kelime) kısımlarında sesini hafifçe yükselt. Monotonluğu kırmak için sesine melodi kat.</p>",
            problems: [{ keywords: ["garip", "yapay", "sahte"], answer: "Başlangıçta tiyatrocu gibi hissetmen normal. Zamanla oturacak.", alt: "Sevdiğin bir spikeri açıp aynısını taklit ederek başla." }],
            fallback: "Ses tonu senin en güçlü silahın."
        }
    ];
}

if (allCourses['yatirim']) {
    let d = allCourses['yatirim'];
    d.steps = [
        d.steps[0],
        {
            title: "Adım 2: Uygulama / Pratik (Bütçe Analizi)",
            summary: { what: "Giderlerini yüzleşerek görmeyi", duration: "15 Dk", why: "Nereye gittiğini bilmediğin parayı yönetemezsin." },
            content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Son 1 ayın banka özetini aç. Hayatta kalmak için ZORUNLU olmayan tüm harcamaları işaretle (Dışarıda kahve, abonelikler vs). Toplamı gördüğünde şok olabilirsin.</p>",
            problems: [{ keywords: ["çok", "fazla", "üzücü"], answer: "Bu yüzleşme iyidir, kanamayı durdurmak için önce yarayı görmelisin.", alt: "Tüm abonelikleri iptal et. İhtiyacın olursa tekrar açarsın." }],
            fallback: "Matematik yalan söylemez."
        },
        {
            title: "Adım 3: Geliştirme / Derinleşme (Bileşik Getiri)",
            summary: { what: "Paranın kar topu etkisini", duration: "15 Dk", why: "Zenginliğin sırrı bileşik getiridir." },
            content: "<p>Paranı düzenli olarak yatırım fonlarına veya hisselere yönlendir. Gelen karı da ana paraya ekle. Bu katlanarak büyümeni sağlayacak.</p>",
            problems: [{ keywords: ["bilmiyorum", "riskli", "borsa"], answer: "En düşük riskli yatırım fonlarıyla (Örn: Para piyasası fonları) başla. Banka uygulamanı aç ve incele.", alt: "Altın almak en temel ve basit başlangıçtır." }],
            fallback: "Başlamak bitirmenin yarısıdır."
        }
    ];
}

if (allCourses['modelleme']) {
    let d = allCourses['modelleme'];
    d.steps = [
        d.steps[0],
        {
            title: "Adım 2: Uygulama / Pratik (İlk Eşyanı Yap)",
            summary: { what: "Blender'da bir kupa tasarlamayı", duration: "30 Dk", why: "Öğrendiğin araçları bir ürüne dönüştürmek motivasyonu katlar." },
            content: "<p><b>Mini Challenge (Bugün bunu dene):</b> O başlangıç küpünü sil. Bir 'Cylinder' (Silindir) ekle. Üst yüzeyini seçip 'I' tuşuyla içe doğru daralt, 'E' tuşuyla aşağı doğru iterek kupanın içini boşalt. Harikasın!</p>",
            problems: [{ keywords: ["silindi", "bozuldu", "yanlış"], answer: "CTRL+Z senin en iyi dostun. Hata yaptıkça öğreneceksin.", alt: "Ekranı yanlışlıkla bozarsan yeni bir proje açmaktan çekinme." }],
            fallback: "3D dünyası hatalarla güzel."
        },
        {
            title: "Adım 3: Geliştirme / Derinleşme (Işık ve Render)",
            summary: { what: "Tasarımına ışık ekleyip resmini almayı", duration: "20 Dk", why: "Gösteremediğin tasarım senin değildir." },
            content: "<p>Shift+A ile bir 'Light -> Point' ekle. Kupanın üstüne getir. F12 tuşuna basarak tasarımının fotoğrafını (Render) al!</p>",
            problems: [{ keywords: ["karanlık", "siyah", "görünmüyor"], answer: "Işığın gücü (Power) çok düşük olabilir. Sağ menüden ışık ayarlarında Watt değerini 1000'e çıkar.", alt: "Işık eklemek yerine direkt materyale renk verebilirsin." }],
            fallback: "Tebrikler, ilk 3D render'ını aldın!"
        }
    ];
}

// Validate all existing courses to have at least 3 steps
for (let key in allCourses) {
    let course = allCourses[key];
    if (course.steps.length < 3) {
        while (course.steps.length < 3) {
            let stepNum = course.steps.length + 1;
            course.steps.push({
                title: `Adım ${stepNum}: Geliştirme ve Derinleşme`,
                summary: { what: "Bu alanda bir adım öteye geçmeyi", duration: "15 Dk", why: "Sürekli gelişim ustalık getirir." },
                content: `<p><b>Mini Challenge (Bugün bunu dene):</b> Öğrendiğin beceriyi bugün hiç beklemediğin bir anda 5 dakika boyunca uygula.</p><p>Pratik yapmak seni her zaman öne taşıyacaktır.</p>`,
                problems: [{ keywords: ["hata", "sorun", "yapamadım"], answer: "Bu aşamada hata yapman, sınırlarını zorladığını gösterir.", alt: "Eğer çok zor geldi ise bir önceki adımı tekrar gözden geçir." }],
                fallback: "Zorlanmak, gelişmenin en net göstergesidir."
            });
        }
    }
    
    // Add Mini challenge to at least one step if not exists
    let hasChallenge = course.steps.some(s => s.content.includes("Mini Challenge") || s.content.includes("Bugün bunu dene"));
    if (!hasChallenge && course.steps.length > 1) {
        course.steps[1].content = `<p><b>Mini Challenge (Bugün bunu dene):</b> Hemen şimdi telefonunu sessize al ve bu adımda öğrendiğini 2 dakika pratik yap.</p>` + course.steps[1].content;
    }
}

// 10 New Courses
const newCourses = {
    "ozguven": {
        id: "ozguven", icon: "🦁", title: "Özgüven Geliştirme", desc: "İçindeki gücü açığa çıkar ve sosyal ortamlarda parılda.", tags: ["sosyal", "odaklı", "iletişim", "cesaret", "psikoloji"], difficulty: "Tüm Seviyeler", duration: "40 Dk", categoryType: "Kişisel Gelişim",
        steps: [
            { title: "Adım 1: Dik Duruşun Gücü", summary: { what: "Fiziksel duruşun psikolojiyi nasıl etkilediğini", duration: "10 Dk", why: "Beden dilin beynini kandırabilir." }, content: "<p>Kambur durmak beynine 'tehlikedeyiz, saklan' mesajı verir. Omuzlarını geriye al, çeneni hafifçe yukarı kaldır.</p>", problems: [{ keywords: ["ağrı", "zor"], answer: "Kasların alışkın olmadığı için ağrıyor, normal.", alt: "Duvarda sırtını yaslayarak dik durma pratiği yap." }], fallback: "Süpermen pozu ver!" },
            { title: "Adım 2: Uygulama / Pratik (Göz Teması)", summary: { what: "İnsanların gözlerine korkmadan bakmayı", duration: "15 Dk", why: "Göz teması kurmak özgüvenin en belirgin işaretidir." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Bugün konuştuğun herkesin göz rengini fark etmeye çalış. Gözlerine bak ama dik dik değil, nazikçe.</p>", problems: [{ keywords: ["utanıyorum", "çekiniyorum", "kaçırıyorum"], answer: "Gözlerinin tam içine bakamıyorsan, iki kaşının ortasına bak. Karşıdaki fark etmeyecektir.", alt: "Sadece dinlerken göz teması kur, konuşurken hafifçe başka yere bakabilirsin." }], fallback: "Gözler ruhun aynasıdır." },
            { title: "Adım 3: Geliştirme / Derinleşme (Reddedilme Terapisi)", summary: { what: "Hayır cevabına karşı duyarsızlaşmayı", duration: "15 Dk", why: "Korktuğun şey aslında sadece bir kelimedir." }, content: "<p>Bilinçli olarak reddedileceğin bir şey iste. Mesela bir kafede 'Kahvemi bedava alabilir miyim?' de. Amaç kahve almak değil, 'Hayır' kelimesini duyup dünyanın sonu olmadığını görmek.</p>", problems: [{ keywords: ["rezil", "korkunç", "yapamam"], answer: "Rezil olmak zihninde yarattığın bir ilüzyon. Kimse seni umursamıyor.", alt: "Daha küçük bir şeyle başla, yoldan geçen birine saati sor." }], fallback: "Cesaret korkmamak değil, korkuya rağmen adım atmaktır." }
        ]
    },
    "fitness": {
        id: "fitness", icon: "💪", title: "Kas Yapma (Başlangıç)", desc: "Evde ekipmansız bir şekilde kendi vücudunu inşa et.", tags: ["enerjik", "spor", "sağlık", "disiplin"], difficulty: "Başlangıç", duration: "30 Dk", categoryType: "Sağlık ve Spor",
        steps: [
            { title: "Adım 1: Temel Şınav Mekaniği", summary: { what: "Doğru şınav çekmeyi", duration: "10 Dk", why: "Yanlış şınav omuzları sakatlar." }, content: "<p>Kollarını omuz genişliğinde aç. Kalçanı sık ve gövdeni düz bir tahta gibi tut. Dirseklerini dışarı değil, geriye doğru bük.</p>", problems: [{ keywords: ["yapamıyorum", "gücüm yok", "kalkamıyorum"], answer: "Dizlerinin üzerinde şınav çekerek başla. Güçleneceksin.", alt: "Duvarda şınav çekerek ilk adımı atabilirsin." }], fallback: "Yerçekimine karşı savaşıyorsun!" },
            { title: "Adım 2: Uygulama / Pratik (Squat)", summary: { what: "Vücudun en büyük kasını çalıştırmayı", duration: "10 Dk", why: "Bacaklar tüm vücudun temelidir." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Sandalyeye oturup kalkar gibi havaya doğru 15 kez çömelip kalk (Squat). Sırtın dik olsun.</p>", problems: [{ keywords: ["dizim", "ağrıyor", "ses", "çıt"], answer: "Dizlerin ayak parmak ucunu geçmemesine dikkat et. Kalçayı geriye doğru çıkar.", alt: "Arkanı duvara yaslayarak görünmez sandalyede oturma hareketi (Wall sit) yap." }], fallback: "Yanma hissi gelişimin ayak sesleridir." },
            { title: "Adım 3: Geliştirme / Derinleşme (Protein)", summary: { what: "Beslenmenin temeli proteini", duration: "10 Dk", why: "Kaslar antrenmanda yıkılır, mutfakta inşa edilir." }, content: "<p>Kilon başına en az 1.5 gram protein almalısın. Yumurta, tavuk, lor peyniri... Her öğününe protein ekle.</p>", problems: [{ keywords: ["pahalı", "para", "yemek", "sevmiyorum"], answer: "Yumurta ve mercimek en ucuz ve kaliteli protein kaynaklarıdır.", alt: "Peynir altı suyu tozu (Whey) pratik bir çözüm olabilir." }], fallback: "Sen ne yersen osun." }
        ]
    },
    "parakazanma": {
        id: "parakazanma", icon: "💰", title: "İnternetten Para Kazanma", desc: "Dijital becerilerini gelire dönüştürmenin ilk adımları.", tags: ["odaklı", "finans", "yazılım", "kariyer"], difficulty: "Orta", duration: "45 Dk", categoryType: "Kariyer",
        steps: [
            { title: "Adım 1: Değer Yaratma Algısı", summary: { what: "Paranın aslında ne olduğunu anlamayı", duration: "15 Dk", why: "Para, çözdüğün problemin yan ürünüdür." }, content: "<p>Kimse sana durduk yere para vermez. İnternette para kazanmak, birinin sorununu uzaktan çözmek demektir. Hangi yeteneğin bir başkasının hayatını kolaylaştırır? Yazı yazmak mı, tasarım mı, kodlamak mı?</p>", problems: [{ keywords: ["yetenek", "hiçbir", "yok"], answer: "Yetenek doğuştan gelmez, öğrenilir. Şuan bu platformda olman bile bir gelişim.", alt: "Canva gibi basit araçları öğrenerek sosyal medya gönderileri tasarlamaya başla." }], fallback: "Odaklan ve bir problem bul." },
            { title: "Adım 2: Uygulama / Pratik (Freelance Profil)", summary: { what: "Bionluk, Fiverr gibi sitelerde var olmayı", duration: "15 Dk", why: "Vitrin olmadan satış olmaz." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Bionluk veya Fiverr'da bir hesap aç ve sunabileceğin en basit hizmeti (Örn: Arkaplan silme, metin düzenleme) ilan olarak ekle.</p>", problems: [{ keywords: ["müşteri", "gelmiyor", "satış", "yok"], answer: "İlk satış her zaman en zorudur. Fiyatını çok düşük tutarak sadece yorum almaya odaklan.", alt: "Tanıdıklarına veya sosyal medyadaki küçük sayfalara ücretsiz iş teklif et, referans topla." }], fallback: "Sadece başla, kervan yolda dizilir." },
            { title: "Adım 3: Geliştirme / Derinleşme (Soğuk E-posta)", summary: { what: "Müşterilere ulaşma sanatı", duration: "15 Dk", why: "Müşterinin sana gelmesini beklersen aç kalırsın." }, content: "<p>İşletmelere 'Sitenizdeki şu sorunu gördüm, bunu sizin için X fiyata çözebilirim' şeklinde direkt mesaj at. 100 kişiye atarsan en az 2'si kabul eder.</p>", problems: [{ keywords: ["red", "cevap", "spam"], answer: "Reddedilmek işin doğası. Mesajını kişiselleştir, kopyala yapıştır yapma.", alt: "E-posta yerine Instagram veya LinkedIn'den ulaşmayı dene." }], fallback: "Her 'Hayır', seni bir 'Evet'e yaklaştırır." }
        ]
    },
    "sosyal": {
        id: "sosyal", icon: "🤝", title: "Sosyal Beceriler", desc: "Karizma ve etkili dinleme sanatı.", tags: ["sosyal", "iletişim", "insan", "psikoloji"], difficulty: "Tüm Seviyeler", duration: "35 Dk", categoryType: "Kişisel Gelişim",
        steps: [
            { title: "Adım 1: Aktif Dinleme", summary: { what: "İnsanları gerçekten duymayı", duration: "10 Dk", why: "İnsanlar konuşanı değil, iyi dinleyeni severler." }, content: "<p>Birisi konuşurken ona ne cevap vereceğini düşünmeyi bırak. Sadece anlattığı hikayenin içine gir.</p>", problems: [{ keywords: ["sıkıcı", "dinlemek", "dikkat"], answer: "Detaylara odaklan. Karşındakinin kullandığı kelimeleri tekrarla.", alt: "Anlatılan hikayeyi kafanda canlandır." }], fallback: "Sessizlik bazen en iyi cevaptır." },
            { title: "Adım 2: Uygulama / Pratik (İsim Hatırlama)", summary: { what: "İnsanların isimlerini ilk seferde ezberlemeyi", duration: "10 Dk", why: "Bir insanın duyabileceği en güzel kelime kendi adıdır." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Biriyle tanıştığında ismini duyduktan sonra o ismi yüksek sesle kendi cümlende kullan. 'Memnun oldum Ahmet.'</p>", problems: [{ keywords: ["unutuyorum", "hafıza"], answer: "İsmi beyninde komik bir görselle eşleştir.", alt: "Hemen telefonuna not al." }], fallback: "İlgi gösterirsen, ilgi görürsün." },
            { title: "Adım 3: Geliştirme / Derinleşme (Açık Uçlu Sorular)", summary: { what: "Sohbeti tıkanmaktan kurtarmayı", duration: "15 Dk", why: "Evet/Hayır ile biten sorular sohbeti öldürür." }, content: "<p>Karşındakine 'Bugün nasılsın?' yerine 'Bugün en çok neye heyecanlandın?' veya 'Bu konuyu nasıl çözdün?' gibi uzun cevap gerektiren sorular sor.</p>", problems: [{ keywords: ["garip", "soru", "bulamıyorum"], answer: "Karşındakinin anlattığı son cümleden bir kelime seçip onunla ilgili soru sor.", alt: "Nasıl veya Neden ile başlayan basit sorular sor." }], fallback: "İnsanlar kendilerini anlatmaya bayılır." }
        ]
    },
    "derscalisma": {
        id: "derscalisma", icon: "📚", title: "Ders Çalışma Teknikleri", desc: "Saatlerce bakmak yerine beynini kodla.", tags: ["odaklı", "öğrenme", "verimlilik", "okul"], difficulty: "Orta", duration: "40 Dk", categoryType: "Verimlilik",
        steps: [
            { title: "Adım 1: Feynman Tekniği", summary: { what: "Öğrendiğini 5 yaşındaki bir çocuğa anlatmayı", duration: "15 Dk", why: "Basitleştiremiyorsan anlamamışsındır." }, content: "<p>Bir konuyu öğren. Kitabı kapat. Sanki hiç bilmeyen birine anlatıyormuş gibi boş bir kağıda yazarak veya sesli şekilde anlat.</p>", problems: [{ keywords: ["takıldım", "anlatamıyorum"], answer: "Takıldığın yer tam olarak eksiğin olduğu yerdir. Hemen kitaba dön ve o kısmı tekrar çalış.", alt: "Sadece arkadaşına ses kaydı atarak konuyu anlatmayı dene." }], fallback: "Öğretmek en iyi öğrenmedir." },
            { title: "Adım 2: Uygulama / Pratik (Aralıklı Tekrar)", summary: { what: "Unutma eğrisini yenmeyi", duration: "10 Dk", why: "Beyin kullanmadığı bilgiyi siler." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Dün öğrendiğin bir şeyi bugün 5 dakika tekrar et. Sonra 3 gün sonra, sonra 1 hafta sonra tekrar et.</p>", problems: [{ keywords: ["unutuyorum", "hatırlamıyorum"], answer: "Anki veya Quizlet gibi dijital bilgi kartı uygulamalarını kullan.", alt: "Kendi not kartlarını (Flashcards) kağıttan hazırla." }], fallback: "Sık tekrar her zaman işe yarar." },
            { title: "Adım 3: Geliştirme / Derinleşme (Aktif Hatırlama)", summary: { what: "Not okumayı bırakıp kendini test etmeyi", duration: "15 Dk", why: "Okumak pasiftir, hatırlamaya zorlamak aktiftir." }, content: "<p>Kitabı fosforlu kalemle çizmek yerine, kitaptaki başlıklardan sorular çıkar. Kitabı kapat ve soruları cevaplamaya çalış.</p>", problems: [{ keywords: ["zor", "beynim yandı"], answer: "Zorlanmak, beyninde o an nöronların bağ kurduğunu gösterir. Çok iyi!", alt: "Test çözerek başla." }], fallback: "Terlemeden kas yapılmaz." }
        ]
    },
    "stres": {
        id: "stres", icon: "🧘", title: "Stres Yönetimi", desc: "Zihnini dinginleştir, paniği kontrol et.", tags: ["sakin", "sağlık", "psikoloji", "meditasyon"], difficulty: "Başlangıç", duration: "25 Dk", categoryType: "Kişisel Gelişim",
        steps: [
            { title: "Adım 1: 4-7-8 Nefesi", summary: { what: "Sinir sistemini anında hacklemeyi", duration: "5 Dk", why: "Nefes, beynin panik butonunu kapatan tek şalterdir." }, content: "<p>4 saniye boyunca burnundan nefes al. 7 saniye nefesini tut. 8 saniye boyunca ağzından yavaşça üfleyerek ver. Bunu 4 kez tekrarla.</p>", problems: [{ keywords: ["boğuldum", "zor", "tutamıyorum"], answer: "Süreleri kısalt. 3-4-5 yap. Önemli olan nefes verişin alıştan uzun olmasıdır.", alt: "Sadece derin bir nefes alıp 'Ommm' diyerek uzunca ver." }], fallback: "Oksijen beyninin ilacıdır." },
            { title: "Adım 2: Uygulama / Pratik (Endişe Saati)", summary: { what: "Endişeyi gün içine yaymak yerine sınırlamayı", duration: "10 Dk", why: "Sürekli endişe etmek enerjini emer." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Kendine günde sadece 15 dakikalık bir 'Endişe saati' belirle (Örn: 18:00). O saat dışında aklına kötü bir şey gelirse, 'Bunu saat 6'da düşüneceğim' de.</p>", problems: [{ keywords: ["geliyor", "engel olamıyorum", "düşünüyorum"], answer: "Düşünceler bulut gibidir, geldiklerinde onlarla savaşma. Sadece izle ve geçip gitmelerine izin ver.", alt: "Endişelerini bir kağıda yaz, kağıdı buruşturup at." }], fallback: "Düşüncelerin gerçek değil." },
            { title: "Adım 3: Geliştirme / Derinleşme (Etki Alanı)", summary: { what: "Kontrol edemediklerini bırakmayı", duration: "10 Dk", why: "Dünyayı kontrol edemezsin, sadece tepkini edebilirsin." }, content: "<p>Seni strese sokan olayı düşün. Bunu değiştirmek benim elimde mi? Evetse plan yap. Hayırsa serbest bırak.</p>", problems: [{ keywords: ["bırakamıyorum", "korkuyorum"], answer: "Kontrol edemediğin şeyleri kabul etmek bir süreçtir. Sadece farkındalıkla başla.", alt: "Dışarı çık ve sadece 10 dakika yürü." }], fallback: "Sadece şu an var." }
        ]
    },
    "sabahrutini": {
        id: "sabahrutini", icon: "🌅", title: "Erken Kalkma ve Sabah Rutini", desc: "Günü kazanmak için sabahı fethet.", tags: ["enerjik", "odaklı", "disiplin", "planlama"], difficulty: "Orta", duration: "30 Dk", categoryType: "Verimlilik",
        steps: [
            { title: "Adım 1: Erteleme Butonunu Yok Et", summary: { what: "Alarm çaldığında anında kalkmayı", duration: "10 Dk", why: "Ertelemek beynin uyku döngüsünü bozar, daha yorgun kalkarsın." }, content: "<p>Alarmı yatağından kalkmadan ulaşamayacağın bir yere koy. O ilk 5 saniye çok önemlidir. Düşünmeden fırla.</p>", problems: [{ keywords: ["uyuyakalıyorum", "duymuyorum", "yorgun"], answer: "Erken kalkmanın sırrı erken uyumaktır. Gece 12'den önce ekranları kapat.", alt: "Alarm sesini her hafta değiştir ki beynin alışmasın." }], fallback: "Günün galibi sabah belli olur." },
            { title: "Adım 2: Uygulama / Pratik (Yatağı Topla)", summary: { what: "Günün ilk görevini tamamlamayı", duration: "10 Dk", why: "Küçük bir başarı diğer başarıları tetikler." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Kalktığın an, 1 dakika içinde yatağını jilet gibi topla. Akşam döndüğünde sana bir ödül gibi gelecek.</p>", problems: [{ keywords: ["üşeniyorum", "vakit yok"], answer: "Mükemmel olmasına gerek yok, sadece örtüyü düzelt. Bu bir zihin egzersizi.", alt: "Sadece yastığını düzelt." }], fallback: "Disiplin küçük adımlarla başlar." },
            { title: "Adım 3: Geliştirme / Derinleşme (İlk 1 Saat)", summary: { what: "Telefonsuz bir başlangıç yapmayı", duration: "10 Dk", why: "Güne başkalarının hayatına bakarak başlamak seni reaktif yapar." }, content: "<p>Uyandıktan sonraki ilk 1 saat telefona DOKUNMA. Su iç, esne, kahve yap, gününü planla. Kontrol sende olsun.</p>", problems: [{ keywords: ["bağımlıyım", "merak", "mesaj"], answer: "Telefonu gece uçak moduna al ve sabah o modu 1 saat sonra kapat.", alt: "Sadece 15 dakika telefonsuz kalmayı dene." }], fallback: "Zihnini temiz tut." }
        ]
    },
    "odaklanma": {
        id: "odaklanma", icon: "🎯", title: "Derin Odaklanma (Deep Work)", desc: "Dikkat dağıtıcıları yok et ve lazer gibi odaklan.", tags: ["odaklı", "çalışma", "verimlilik", "başarı"], difficulty: "Orta", duration: "35 Dk", categoryType: "Verimlilik",
        steps: [
            { title: "Adım 1: Ortam Tasarımı", summary: { what: "Masayı dikkat dağıtıcılardan arındırmayı", duration: "10 Dk", why: "Görsel gürültü zihinsel gürültü yaratır." }, content: "<p>Masandaki telefon, tablet, gereksiz kağıtları görüş alanından kaldır. Sadece tek bir göreve ait materyaller kalsın.</p>", problems: [{ keywords: ["dağınık", "toplayamıyorum"], answer: "Tüm eşyaları bir kutuya at ve o an için sadece gerekeni çıkar.", alt: "Kütüphane veya kafe gibi farklı bir ortama git." }], fallback: "Fiziksel alan, zihinsel alandır." },
            { title: "Adım 2: Uygulama / Pratik (Dijital Diyet)", summary: { what: "Bildirim terörünü durdurmayı", duration: "10 Dk", why: "Her bildirim seni odaklandığın andan 20 dakika geriye atar." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> Telefonundaki SOSYAL MEDYA bildirimlerini tamamen kapat. Onlar seni değil, sen istediğinde onları kontrol et.</p>", problems: [{ keywords: ["önemli", "haber", "acil"], answer: "Gerçekten acilse ararlar. Bildirimler acil değil, sadece dikkat çekicidir.", alt: "Sadece odaklanma saatlerinde 'Rahatsız Etmeyin' modunu aç." }], fallback: "Dikkatin senin en değerli para birimindir." },
            { title: "Adım 3: Geliştirme / Derinleşme (Düşünce Parkı)", summary: { what: "Akla gelen alakasız fikirleri yönetmeyi", duration: "15 Dk", why: "Çalışırken aklına gelen 'Şunu da yapmalıyım' düşüncesi odağı bozar." }, content: "<p>Yanında küçük bir not defteri bulundur. Odaklanırken aklına alakasız bir fikir gelirse hemen oraya yaz ve kafandan atıp işe geri dön.</p>", problems: [{ keywords: ["unuturum", "çok var"], answer: "Yazdığın için unutmayacaksın, zihnin rahatlayacak.", alt: "Dijital bir not uygulaması kullan ama bu telefona bakmana sebep olabilir, dikkat et." }], fallback: "Beyin fikir üretmek içindir, depolamak için değil." }
        ]
    },
    "aliskanlik": {
        id: "aliskanlik", icon: "🔄", title: "Alışkanlık Kazanma", desc: "Atomik alışkanlıklarla hayatını otomatik pilota al.", tags: ["disiplin", "psikoloji", "sürdürülebilir", "gelişim"], difficulty: "Orta", duration: "30 Dk", categoryType: "Kişisel Gelişim",
        steps: [
            { title: "Adım 1: İki Dakika Kuralı", summary: { what: "Büyük hedefleri mikrolaştırmayı", duration: "10 Dk", why: "Beyin zor şeylerden kaçar, kolay şeyleri yapar." }, content: "<p>Kitap okuma alışkanlığı mı istiyorsun? Hedef 'Günde 1 sayfa okumak' olsun. Spor mu? 'Sadece ayakkabılarımı giyeceğim' olsun. Olay kimlik inşa etmektir.</p>", problems: [{ keywords: ["az", "yetersiz", "komik"], answer: "Başlangıçta amaç sonuç değil, alışkanlığı sisteme entegre etmektir.", alt: "Başladıktan sonra istersen devam edebilirsin ama hedefin hep o küçük şey olsun." }], fallback: "Mükemmellik, tutarlılığın düşmanıdır." },
            { title: "Adım 2: Uygulama / Pratik (Alışkanlık İstifleme)", summary: { what: "Yeni alışkanlığı eski bir rutine bağlamayı", duration: "10 Dk", why: "Mevcut nöron ağlarını kullanarak işi kolaylaştırırsın." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> 'Dişlerimi fırçaladıktan SONRA 1 bardak su içeceğim' gibi bir formül kur ve bugün uygula.</p>", problems: [{ keywords: ["unutuyorum"], answer: "Bağladığın eski rutini her gün mutlaka yaptığın bir şeyden seç.", alt: "Eski alışkanlığın olduğu yere hatırlatıcı bir not yapıştır." }], fallback: "Sistem hedeflerden daha önemlidir." },
            { title: "Adım 3: Geliştirme / Derinleşme (Görünürlük)", summary: { what: "Çevreyi alışkanlığa göre tasarlamayı", duration: "10 Dk", why: "İrade gücü sınırlıdır, ortam tasarımı kalıcıdır." }, content: "<p>Su içmek istiyorsan masana dolu bir şişe koy. Gitar çalmak istiyorsan gitarı kılıfında değil, görebileceğin bir stantta tut.</p>", problems: [{ keywords: ["yer yok", "dağınık"], answer: "Gözünün önünde olması en önemli kuraldır.", alt: "Sadece yapacağın aktivitenin malzemelerini bir arada hazır tut." }], fallback: "İradeyle değil, çevreyle kazanılır." }
        ]
    },
    "hizliogrenme": {
        id: "hizliogrenme", icon: "⚡", title: "Hızlı Öğrenme Teknikleri", desc: "Beyninin işletim sistemini güncelle.", tags: ["odaklı", "eğitim", "zeka", "öğrenme"], difficulty: "Orta", duration: "35 Dk", categoryType: "Verimlilik",
        steps: [
            { title: "Adım 1: %20'yi Bulmak (Pareto Prensibi)", summary: { what: "Konunun özünü kavramayı", duration: "10 Dk", why: "Sonuçların %80'i, çabanın %20'sinden gelir." }, content: "<p>Bir dil öğreniyorsan tüm kelimeleri değil, günlük hayatta en çok kullanılan 100 kelimeyi öğren. Bir program öğreniyorsan en çok kullanılan 5 aracı öğren.</p>", problems: [{ keywords: ["hepsi önemli", "eksik"], answer: "Her şey aynı derecede önemli olamaz. Ana iskeleti kur, detayları sonra eklersin.", alt: "Bir bilene 'Bunun en önemli %20'si nedir?' diye sor." }], fallback: "Zekice çalış, çok değil." },
            { title: "Adım 2: Uygulama / Pratik (Pomodoro + Feynman)", summary: { what: "İki tekniği birleştirmeyi", duration: "15 Dk", why: "Odak ve anlama gücünü maksimize eder." }, content: "<p><b>Mini Challenge (Bugün bunu dene):</b> 25 dakika odaklanarak çalış. Süre bitince, öğrendiklerini 5 dakika boyunca kağıda veya sesli olarak kendi kelimelerinle özetle.</p>", problems: [{ keywords: ["yapamadım", "zaman", "bitti"], answer: "Önemli olan denemektir. Pomodoro süresini kendine göre ayarla.", alt: "Sadece ses kaydı alarak kendini test et." }], fallback: "Sinerji her zaman 1+1'den büyüktür." },
            { title: "Adım 3: Geliştirme / Derinleşme (Uyku Öncesi Tekrar)", summary: { what: "Uykuyu öğrenme sürecine dahil etmeyi", duration: "10 Dk", why: "Beyin uyku sırasında bilgileri kısa bellekten uzun belleğe aktarır." }, content: "<p>Uyumadan hemen önceki 15 dakikayı ekran kaydırarak değil, o gün öğrendiğin en önemli 3 şeye göz atarak geçir.</p>", problems: [{ keywords: ["uyku bastırdı", "yorgunum"], answer: "Sadece 2 dakika notlarına bakman bile yeterli.", alt: "Öğrendiğin konuyu zihninde canlandırarak uyu." }], fallback: "Uyku en iyi hafıza geliştiricidir." }
        ]
    }
};

Object.assign(allCourses, newCourses);

// Save everything back
for (let key in allCourses) {
    writeData(key, allCourses[key]);
}

console.log("Course generation and validation complete. Run upgrade_data.js next.");
