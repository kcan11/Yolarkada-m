class RecommendationEngine {
    constructor(manifest) {
        // We only need the manifest (metadata) to recommend courses, not full JSON data
        this.manifest = manifest;
    }

    getRecommendations(db) {
        const progress = db.getProgressData();
        const lastCourse = db.get('last_clicked') || db.get('last_course');
        const interactions = db.get('interactions', true) || {};
        
        let scores = {};
        Object.keys(this.manifest).forEach(id => scores[id] = 0);

        // Find most clicked category
        let topCat = null;
        if(Object.keys(interactions).length > 0) {
            topCat = Object.keys(interactions).reduce((a, b) => interactions[a] > interactions[b] ? a : b);
        }

        Object.values(this.manifest).forEach(course => {
            let s = 0;
            // +1 Same Category
            if (topCat && course.categoryType === topCat) s += 1;
            
            // +3 Last Clicked
            if (lastCourse === course.id) s += 3;

            // Check Progress
            let reachedStep = progress[course.id] !== undefined ? progress[course.id] : -1;
            if (reachedStep > -1 && reachedStep < course.stepCount - 1) {
                // In progress (not finished)
                s += 2; 
            } else if (reachedStep >= course.stepCount - 1) {
                // Finished
                s -= 2; 
            }
            scores[course.id] = s;
        });

        // Build recommendations
        let sorted = Object.keys(scores).sort((a,b) => scores[b] - scores[a]);
        
        let suggestions = [];
        let recommendedIds = new Set();
        
        // Find user's most problematic area
        let problemAreas = db.get('problem_areas', true) || {};
        let topProblem = Object.keys(problemAreas).sort((a,b) => problemAreas[b] - problemAreas[a])[0];

        // 1. Problematic Area Solver (If they struggle somewhere, recommend something to help)
        if(topProblem) {
            // E.g. if they struggle in tech, suggest focus/time management
            let problemCourse = this.manifest[topProblem];
            let helperCat = problemCourse.categoryType === 'Teknoloji' ? 'Verimlilik' : 'Kişisel Gelişim';
            let helperId = sorted.find(id => this.manifest[id].categoryType === helperCat && !recommendedIds.has(id));
            if(helperId) {
                this.manifest[helperId]._recReason = "Zorlandığın alanı aşman için sana güç verecek.";
                suggestions.push(this.manifest[helperId]);
                recommendedIds.add(helperId);
            }
        }

        // 2. Top Scorer (Resume or highly relevant)
        let topId = sorted.find(id => !recommendedIds.has(id));
        if(topId) {
            this.manifest[topId]._recReason = "Doğrudan senin ilgi alanına giren en güçlü öneri.";
            suggestions.push(this.manifest[topId]);
            recommendedIds.add(topId);
        }

        // 3. Opposite Category (Discovery)
        let unstartedIds = sorted.filter(id => progress[id] === undefined && !recommendedIds.has(id));
        if(unstartedIds.length > 0) {
            // Pick a completely opposite category to topCat if possible
            let discoverId = unstartedIds.find(id => this.manifest[id].categoryType !== topCat) || unstartedIds[0];
            this.manifest[discoverId]._recReason = "Konfor alanından çıkman için zıt bir kategori!";
            suggestions.push(this.manifest[discoverId]);
            recommendedIds.add(discoverId);
        }

        // 4. Trending (Randomizer if we still need one)
        if(suggestions.length < 3) {
            let trendId = sorted.find(id => !recommendedIds.has(id));
            if(trendId) {
                this.manifest[trendId]._recReason = "Şu an platformda yükselen trend.";
                suggestions.push(this.manifest[trendId]);
                recommendedIds.add(trendId);
            }
        }

        return suggestions;
    }

    renderBoredMode() {
        const progress = db.getProgressData();
        const unstartedIds = Object.keys(this.manifest).filter(id => progress[id] === undefined);
        let suggestions = [];
        let randomIds = unstartedIds.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        if(randomIds.length < 3) {
            randomIds = Object.keys(this.manifest).sort(() => 0.5 - Math.random()).slice(0, 3);
        }
        
        suggestions = randomIds.map(id => this.manifest[id]);
        
        // Ensure UI is updated (assuming global functions exist from app.js context)
        const container = document.getElementById('recommended-container');
        if(container && window.RecommendationEngineInstance) {
            container.innerHTML = '';
            suggestions.forEach(course => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.style.borderLeft = "4px solid #ef4444"; // Highlight mode
                card.innerHTML = `
                    <div class="card-header">
                        <div class="category-icon" style="background:rgba(239,68,68,0.1); color:#ef4444;">${course.icon}</div>
                        <div class="card-badges">
                            <span class="mini-badge"><i class="fas fa-bolt"></i> Yeni Macera</span>
                            <span class="mini-badge"><i class="fas fa-clock"></i> ${course.duration}</span>
                        </div>
                    </div>
                    <div class="category-info">
                        <h3>${course.title}</h3>
                        <p>${course.desc}</p>
                    </div>
                    ${course._recReason ? `<div style="font-size:0.75rem; color:#ef4444; margin-bottom:0.5rem; font-weight:bold;">${course._recReason}</div>` : ''}
                    <div class="tag-container">
                        <span class="tag"><i class="fas fa-folder"></i> ${course.categoryType}</span>
                    </div>
                `;
                card.addEventListener('click', () => {
                    db.trackInteraction(course.id, course.categoryType);
                    window.startCourseFromRoadmap(course.id); // reuse roadmap starter
                });
                container.appendChild(card);
            });
            window.UI.showToast("Al sana tamamen farklı bir dünya! 🌍", "success");
        }
    }
}
window.RecommendationEngineInstance = new RecommendationEngine(); // Accessible dummy
