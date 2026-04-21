class RoadmapEngine {
    constructor(manifest) {
        this.manifest = manifest;
        
        this.intents = {
            yalnizlik: ["yalnız", "arkadaş", "sosyal", "kimse", "iletişim", "konuşacak"],
            motivasyon: ["motivasyon", "disiplin", "isteksiz", "harekete", "üşeniyorum", "ertele", "zaman", "odak"],
            sıkıntı: ["sıkıntı", "sıkılıyorum", "yapacak şey", "bunaldım", "eğlence", "hobi"],
            ogrenme: ["öğrenmek", "gelişmek", "yeni", "başlamak", "kendimi", "bilgi", "nasıl başlarım"],
            korku: ["korku", "çekiniyorum", "rezil", "başaramam", "özgüven"],
            yaratıcılık: ["üretmek", "tasarım", "çizmek", "yapmak", "yaratıcı", "kod", "yazılım"]
        };

        // Course mapping scores per intent
        // Format: courseId: scoreWeight
        this.intentMapping = {
            yalnizlik: { diksiyon: 3, ingilizce: 2 },
            motivasyon: { zamanyonetimi: 4, yazilim: 1 },
            sıkıntı: { gitar: 3, modelleme: 3 },
            ogrenme: { yazilim: 3, ingilizce: 2, modelleme: 1 },
            korku: { diksiyon: 3, zamanyonetimi: 1 },
            yaratıcılık: { yazilim: 3, modelleme: 3, gitar: 2 }
        };

        this.reasonTemplates = {
            diksiyon: "İnsanlarla daha rahat iletişim kurmak ve özgüvenini inşa etmek için biçilmiş kaftan.",
            ingilizce: "Dünyanın kapılarını açarak farklı kültürlerle kaynaşman ve ufkunun genişlemesi için.",
            zamanyonetimi: "Disiplin kazanman ve erteleme alışkanlığını bitirip hayatını kontrol etmen için.",
            gitar: "Boş zamanlarını sıkıntıdan kurtarıp, müziğin akışkanlığıyla stres atman için.",
            modelleme: "Sıkıcı rutinleri kırarak, sıfırdan kendi dijital dünyasını yaratman için.",
            yazilim: "Kalıcı ve çok güçlü yetenekler öğrenerek hem üretken hissetmen hem de kariyere ilk adımı atman için.",
            yatirim: "Finansal kontrol hissini eline alman, streslerini ve gelecek kaygını dindirmen için."
        };
    }

    analyze(text) {
        text = text.toLowerCase();
        let intentScores = {};
        
        for (let intent in this.intents) {
            intentScores[intent] = 0;
            for (let kw of this.intents[intent]) {
                if (text.includes(kw)) {
                    intentScores[intent] += 1;
                }
            }
        }

        // Rank intents based on hit counts
        let sortedIntents = Object.keys(intentScores).filter(k => intentScores[k] > 0).sort((a,b) => intentScores[b] - intentScores[a]);
        
        let courseScores = {};
        Object.keys(this.manifest).forEach(id => courseScores[id] = 0);

        // Map ranked intents to courses
        sortedIntents.forEach((intent, index) => {
            let multiplier = (sortedIntents.length - index); // Higher weight for top intent
            let mappings = this.intentMapping[intent] || {};
            for(let cId in mappings) {
                if(courseScores[cId] !== undefined) {
                    courseScores[cId] += (mappings[cId] * multiplier);
                }
            }
        });

        // Add 1 default point to "zamanyonetimi" and "ingilizce" if completely empty logic
        if (sortedIntents.length === 0) {
            if(courseScores.zamanyonetimi !== undefined) courseScores.zamanyonetimi += 1;
            if(courseScores.ingilizce !== undefined) courseScores.ingilizce += 1;
        }

        let finalIds = Object.keys(courseScores).filter(id => courseScores[id] > 0).sort((a,b) => courseScores[b] - courseScores[a]).slice(0, 3);
        
        if (finalIds.length === 0) {
            finalIds = Object.keys(this.manifest).slice(0, 2);
        }

        // Generate messages dynamically
        let introTitle = "Senin İçin Özel Yol Haritası 🚀";
        if(text.includes('korku') || text.includes('panik')) introTitle = "Derin Bir Nefes Al, Güvendesin 🛡️";
        if(text.includes('sıkı') || text.includes('bunal')) introTitle = "Sıkıntıyı Dağıtma Yolculuğun Başlıyor 🔥";
        if(text.includes('yalnız')) introTitle = "Artık Yalnız Değilsin 🫂";

        const steps = finalIds.map(id => {
            return {
                courseId: id,
                title: this.manifest[id].title,
                icon: this.manifest[id].icon,
                duration: this.manifest[id].duration,
                reason: this.reasonTemplates[id] || "Bu sistemin sana sağlayacağı katma değer inanılmaz yüksek."
            };
        });

        return {
            title: introTitle,
            steps: steps
        };
    }
    analyzeExt(text, intent) {
        let baseAnalysis = this.analyze(text);
        let courses = baseAnalysis.steps;

        let introTitle = baseAnalysis.title;
        if(intent.energy === 'yorgun') introTitle = "Sakin Bir Öğrenme Haritası 🌿";

        let extendedSteps = [];
        let dayCounter = 1;
        let dayStages = ['Odaklanma', 'Uygulama', 'Derinleşme', 'Alışkanlık', 'Ustalaşma'];
        let missions = ['Bugün sadece başla ve 5 dakika ayır.', 'Dünkü konuyu tekrar et ve bir adım ileri git.', 'Pratik yapmadan teoriyi bırak, eyleme geç.', 'Bunu bir alışkanlık döngüsüne oturt.', 'Başkasına anlatabilecek kadar iyi öğren.'];

        courses.forEach((c, idx) => {
            extendedSteps.push({
                courseId: c.courseId,
                title: c.title,
                icon: c.icon,
                duration: c.duration,
                reason: c.reason,
                stage: `${dayCounter}. Gün → ${dayStages[idx % dayStages.length]}`,
                mission: missions[idx % missions.length]
            });
            dayCounter++;
        });

        return {
            title: introTitle,
            steps: extendedSteps
        };
    }
}
