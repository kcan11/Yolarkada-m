class ProblemSolver {
    constructor() {
        this.intentMap = {
            zorlanma: { 
                keywords: ["zor", "yapamıyorum", "anlamadım", "başaramadım", "hata", "takıldım", "olmuyor", "çalışmıyor"], 
                motivation: "Bu aşamada zorlanman tamamen doğal, öğrenme tam olarak burada başlıyor." 
            },
            motivasyon: { 
                keywords: ["sıkıldım", "istemiyorum", "bıktım", "odaklanamıyorum", "bunaldım", "üşeniyorum"], 
                motivation: "Derin bir nefes al. Eğlenceden önce çaba gelir. Kendini sadece 5 dakika daha dayanmaya zorla." 
            },
            korku: { 
                keywords: ["korkuyorum", "çekiniyorum", "utanıyorum", "rezil", "panik"], 
                motivation: "Hata yapmak acemilerin değil, gelişmeye çalışanların ayrıcalığıdır. Korkmadan adım at." 
            }
        };
    }

    findSolution(userInput, currentStep) {
        let text = userInput.toLowerCase().trim();
        
        let foundAnswer = currentStep.fallback;
        let altAnswer = null;
        let detectedMotivation = "Harika bir soru! Adım adım gidiyoruz, işte şöyle:";

        // Intent Detection First
        for (let intent in this.intentMap) {
            let matchedIntent = this.intentMap[intent].keywords.some(kw => text.includes(kw));
            if(matchedIntent) {
                detectedMotivation = this.intentMap[intent].motivation;
                break;
            }
        }

        let easyAnswer = "Adımı geçici olarak atla ve sadece 1 dakika dinlen.";

        // Check for simplify mode
        if (text.includes("çözemedim") || text.includes("anlamadım") || text.includes("yapamadım") || text.includes("hiç")) {
            return {
                response: "Tamam, hiç sorun değil. Bazen beynimiz yorulur. Hadi bunu **en basit** haliyle tekrar anlatalım:\n\n1. Her şeyi bırak, sadece derin bir nefes al.\n2. Çözmeye çalıştığın şeyi unut, bu adımın ana fikrine odaklan.",
                alt: "Başka bir yol yok, en kolayı buydu. Yarın taze bir zihinle tekrar dene!",
                easy: "Bu adımı tamamen es geç. Sistem senin için daha sonra tekrar hatırlatacak."
            };
        }

        if (currentStep.problems && currentStep.problems.length > 0) {
            for (let problem of currentStep.problems) {
                // Check direct keywords
                let matched = problem.keywords.some(kw => text.includes(kw));
                
                // Very basic fuzzy logic inside current step
                if(!matched) {
                    const userWords = text.split(" ");
                    for(let uWord of userWords) {
                        if(uWord.length > 3) {
                             if(problem.keywords.some(kw => this.fuzzyMatch(kw, uWord))) {
                                 matched = true;
                                 break;
                             }
                        }
                    }
                }

                if (matched) {
                    // Make the answer step-by-step format if not already
                    foundAnswer = problem.answer.split(". ").map((s, i) => `${i+1}. ${s}`).join("<br>");
                    altAnswer = problem.alt || "Bir mola ver. Bu adımı şimdilik atlayıp temiz bir zihinle yarın deneyebilirsin.";
                    easyAnswer = "Daha küçük bir hedef belirle. Hiç zorlamadan sadece mantığını kavramaya çalış.";
                    break;
                }
            }
        }

        return { 
            response: "<b>" + detectedMotivation + "</b><br><br>📍 <b>Ana Çözüm Planı:</b><br>" + foundAnswer, 
            alt: altAnswer,
            easy: easyAnswer
        };
    }

    fuzzyMatch(word, target) {
        if(target.includes(word) || word.includes(target)) return true;
        if(Math.abs(word.length - target.length) > 2) return false;
        let errors = 0;
        for(let i=0; i<Math.min(word.length, target.length); i++){
            if(word[i] !== target[i]) errors++;
        }
        return errors <= 2;
    }
}
const Solver = new ProblemSolver();
