class BrainEngine {
    constructor() {
        this.manifest = {}; // Metadata of all courses
        this.cache = {}; // Full course JSONs
        this.roadmapEngine = null;
        this.recEngine = null;
        // db is globally accessible as window.db
        // Solver is globally accessible as window.Solver
    }

    async init() {
        try {
            const res = await fetch('data/manifest.json');
            if(!res.ok) throw new Error("Manifest could not be loaded.");
            this.manifest = await res.json();
            
            // Engines
            this.recEngine = new RecommendationEngine(this.manifest);
            this.roadmapEngine = new RoadmapEngine(this.manifest); // Roadmap only needs manifest metadata
            
            return true;
        } catch(e) {
            console.error("BrainEngine Init Error:", e);
            return false;
        }
    }

    getRecommendations() {
        return this.recEngine.getRecommendations(db);
    }

    getDailyWowPlan() {
        const preferredTime = db.getPreferredTime();
        const interactions = db.get('interactions', true) || {};
        const isBurnedOut = Object.keys(db.get('problem_areas', true) || {}).length > 3;

        let suggestions = this.getRecommendations();
        let targetCourse = suggestions[0];

        let timeMsg = preferredTime === 'sabah' ? 'Sabahın erken saatlerinde' : (preferredTime === 'gece' ? 'Gecenin sessizliğinde' : 'Günün yorgunluğunu atarken');
        
        let plan = [];
        if (isBurnedOut) {
            plan.push(`Bugün biraz fazla zorlandığını görüyorum. Enerjiyi yüksek tutmalıyız.`);
            plan.push(`Telefonunu sessize al ve <b>${targetCourse.title}</b> alanında sakin bir 10 dakika geçir.`);
        } else if (Object.keys(interactions).length === 0) {
            plan.push(`Uzun bir yolculuk tek bir adımla başlar.`);
            plan.push(`Keşfe başlaman için sana <b>${targetCourse.title}</b> öneriyorum. En azından ilk adamını tamamla.`);
        } else {
            plan.push(`${timeMsg} odaklanabildiğini fark ettim.`);
            plan.push(`Ritmini bozmuyoruz. <b>${targetCourse.title}</b> hedefine ilerle ve serini koru! 🔥`);
        }

        return plan;
    }

    async getCourse(id) {
        if(this.cache[id]) return this.cache[id];
        
        try {
            const res = await fetch(`data/${id}.json`);
            const data = await res.json();
            
            // --- CONTENT ENGINE ---
            // 1. Ensure minimum 3 steps
            const totalRequired = 3;
            while(data.steps.length < totalRequired) {
                data.steps.push({
                    title: `🚀 Yapım Aşamasında (Bölüm ${data.steps.length + 1})`,
                    content: `<p>Bu adım senin için yapay zeka sistemimiz tarafından şu an kurgulanıyor. Yakında burada yeni bir aksiyon planı bulacaksın.</p><ul><li>Yeni görevler eklenecek</li><li>Detaylı çözüm haritaları</li></ul>`,
                    summary: { what: "Yakında Görüşeceğiz", duration: "Belirsiz", why: "Sistemin sürekli güncellenmesi" },
                    problems: [],
                    fallback: "Henüz bu aşamada sistemimiz tam hazır değil ama vazgeçmek yok."
                });
            }
            
            // 2. Ensure each step has basic problem/solution fallback
            data.steps.forEach(s => {
                if(!s.problems || s.problems.length === 0) {
                    s.problems = [
                        { keywords: ["hata", "yapamadım"], answer: "Bu adımı doğru yaptığından emin ol. Acele etme.", alt: "Biraz dinlenip baştan sona tekrar göz gezdir." }
                    ];
                }
                if(!s.fallback) s.fallback = "Bu konuda özel bir çözüm henüz bulamadım. Adımı dikkatlice tekrar oku.";
            });
            // ----------------------
            
            this.cache[id] = data;
            return data;
        } catch(e) {
            console.error("Failed to load course details:", id);
            return null;
        }
    }

    // Proxy to solver
    solveProblem(text, stepData, courseId) {
        db.trackProblem(courseId);
        return Solver.findSolution(text, stepData);
    }

    // 10X Growth Feature: Fake AI Engine
    analyzeUserState(input, dbData) {
        let text = input.toLowerCase();
        let interactions = dbData.interactions || {};
        let problemAreas = dbData.problemAreas || {};
        
        let mood = "nötr";
        if (text.match(/(kötü|berbat|zor|olmuyor|çalışmıyor|mutsuz|üzgün|yorucu|ağır)/)) mood = "tükenmiş";
        else if (text.match(/(iyi|harika|süper|başarılı|istiyorum|hevesli|mutlu)/)) mood = "istekli";
        
        let intent = "belirsiz";
        if (text.match(/(öğren|eğitim|yeni|ders|geliş|kitap|yazılım|dil)/)) intent = "gelişim";
        else if (text.match(/(oyun|eğlence|hobi|gitar|şarkı|tasarım)/)) intent = "kaçış";
        else if (text.match(/(para|yatırım|zengin|iş|kariyer)/)) intent = "hırs";

        let riskLevel = "düşük";
        if (mood === "tükenmiş" && Object.keys(problemAreas).length > 2) riskLevel = "yüksek"; // Churn risk
        
        let suggestedPath = this.roadmapEngine.analyzeExt(input, { energy: mood === "tükenmiş" ? "yorgun" : "enerjik" }).steps;

        return { mood, intent, riskLevel, suggestedPath };
    }

    // Advanced NLP to Roadmap
    generateRoadmap(text) {
        let dbData = {
            interactions: db.get('interactions', true) || {},
            problemAreas: db.get('problem_areas', true) || {}
        };
        
        let analysis = this.analyzeUserState(text, dbData);
        
        let introText = `Sistem analizine göre şu an **${analysis.mood}** bir ruh halindesin ve asıl niyetin **${analysis.intent}**. `;
        
        if (analysis.riskLevel === "yüksek") {
            introText += "Biraz yıpranmış görünüyorsun, o yüzden hedeflerini senin için daha ulaşılabilir ve motive edici hale getirdik.";
        } else {
            introText += "Potansiyelini zirveye taşıyacak sağlam bir plan kurguladık.";
        }
        
        return {
            title: analysis.mood === 'tükenmiş' ? "Kurtarma Planı 🛡️" : "Zirve Planı 🚀",
            description: introText,
            steps: analysis.suggestedPath
        };
    }

    // 10X Feature: Hybrid API Helper
    async askAI(message) {
        try {
            const response = await fetch('/.netlify/functions/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });
            if (!response.ok) throw new Error("API call failed");
            const data = await response.json();
            if (data.reply) return data.reply;
            throw new Error("No reply in response");
        } catch (e) {
            console.error("AI API Error, falling back to local...", e);
            return null; // Frontend will fallback to fake-ai
        }
    }
}

