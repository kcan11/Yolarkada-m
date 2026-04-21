class ProgressionEngine {
    constructor() {
        this.baseXP = 100;
    }
    
    addXP(amount, reason) {
        let xp = parseInt(db.get('xp')) || 0;
        let level = parseInt(db.get('level')) || 1;
        
        xp += amount;
        
        let requiredXP = level * this.baseXP;
        let leveledUp = false;
        
        if (xp >= requiredXP) {
            level++;
            xp -= requiredXP;
            leveledUp = true;
            this.showLevelUpModal(level);
        }
        
        db.set('xp', xp);
        db.set('level', level);
        
        this.updateUI(level, xp, requiredXP);
        if(!leveledUp) {
            // Check if UI object is loaded
            if (window.UI && window.UI.showToast) {
                UI.showToast(`+${amount} XP (${reason})`, "success", "fas fa-star");
            }
            
            // Micro animation for XP
            const xpAnim = document.createElement('div');
            xpAnim.innerHTML = `+${amount} XP`;
            xpAnim.style.position = 'fixed';
            xpAnim.style.top = '50%';
            xpAnim.style.left = '50%';
            xpAnim.style.transform = 'translate(-50%, -50%)';
            xpAnim.style.color = '#fbbf24';
            xpAnim.style.fontWeight = 'bold';
            xpAnim.style.fontSize = '3rem';
            xpAnim.style.zIndex = '99999';
            xpAnim.style.pointerEvents = 'none';
            xpAnim.style.textShadow = '0 4px 15px rgba(251, 191, 36, 0.4)';
            xpAnim.style.animation = 'floatUpFade 1.5s ease forwards';
            document.body.appendChild(xpAnim);
            setTimeout(() => xpAnim.remove(), 1500);
            
            if(!document.getElementById('xpAnimStyle')) {
                const s = document.createElement('style');
                s.id = 'xpAnimStyle';
                s.innerHTML = `@keyframes floatUpFade { 0% { opacity: 0; transform: translate(-50%, -10%) scale(0.5); } 20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -150%) scale(1); } }`;
                document.head.appendChild(s);
            }
        }
    }

    updateUI(level, xp, requiredXP) {
        const xpLvlEl = document.getElementById('stat-level');
        const xpValEl = document.getElementById('stat-xp');
        if(xpLvlEl) xpLvlEl.innerText = `Seviye ${level}`;
        if(xpValEl) xpValEl.innerText = `${xp} / ${requiredXP} XP`;
    }

    showLevelUpModal(newLevel) {
        const html = `
            <div id="levelup-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15, 23, 42, 0.9);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;opacity:0;transition:opacity 0.5s;">
                <div style="text-align:center;animation: scaleUp 0.5s ease forwards;">
                    <i class="fas fa-crown" style="font-size: 5rem; color: #fbbf24; margin-bottom:1rem;"></i>
                    <h1 style="color:#fbbf24;font-size:4rem;font-family:'Outfit';">Seviye ${newLevel}!</h1>
                    <p style="color:white;font-size:1.5rem;margin-bottom:2rem;">Bu harika bir ilerleme! Asla pes etme.</p>
                    <button onclick="document.getElementById('levelup-overlay').style.opacity=0;setTimeout(()=>document.getElementById('levelup-overlay').remove(),500)" class="btn btn-primary" style="font-size:1.2rem;padding:1rem 2rem;">Büyümeye Devam</button>
                </div>
            </div>
            <style>
                @keyframes scaleUp { from {transform:scale(0.5); opacity:0;} to {transform:scale(1); opacity:1;} }
            </style>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        setTimeout(() => { document.getElementById('levelup-overlay').style.opacity = 1; }, 50);
    }
}

class DailyMissionEngine {
    constructor() {
        this.missionPool = [
            { id: "read_1", text: "1 Adım Öğren", diff: "kolay", xp: 20, icon: "fa-book-open" },
            { id: "solve_1", text: "Bir problemine AI çözümü bul", diff: "orta", xp: 50, icon: "fa-brain" },
            { id: "explore_1", text: "Farklı bir kategori incele", diff: "kolay", xp: 20, icon: "fa-compass" },
            { id: "roadmap_1", text: "Kendine özel yol haritası çiz", diff: "orta", xp: 50, icon: "fa-map" },
            { id: "focus_1", text: "Bir eğitimi tamamen bitir", diff: "zor", xp: 150, icon: "fa-fire" }
        ];
    }

    getDailyMissions() {
        const today = new Date().toLocaleDateString();
        let saved = db.get('daily_missions_v3', true);
        if (!saved || saved.date !== today) {
            let selected = this.missionPool.sort(() => 0.5 - Math.random()).slice(0, 3);
            saved = { date: today, missions: selected.map(m => ({ ...m, done: false })) };
            db.set('daily_missions_v3', saved, true);
        }
        return saved.missions;
    }

    completeMission(id) {
        let saved = db.get('daily_missions_v3', true);
        if(!saved) return false;
        
        let mission = saved.missions.find(m => m.id === id);
        if (mission && !mission.done) {
            mission.done = true;
            db.set('daily_missions_v3', saved, true);
            window.Progression.addXP(mission.xp, "Görev: " + mission.text);
            this.renderUI();
            return true;
        }
        return false;
    }

    renderUI() {
        const container = document.getElementById('missions-container');
        if(!container) return;
        
        let missions = this.getDailyMissions();
        container.innerHTML = '';
        missions.forEach(m => {
            let card = document.createElement('div');
            card.className = `mission-card ${m.done ? 'mission-done' : ''} diff-${m.diff}`;
            card.innerHTML = `
                <div class="mission-icon"><i class="fas ${m.icon}"></i></div>
                <div class="mission-info">
                    <h4>${m.text}</h4>
                    <span class="mission-reward">+${m.xp} XP</span>
                </div>
                <div class="mission-action">
                    ${m.done ? '<i class="fas fa-check-circle" style="color:#22c55e;font-size:1.5rem;"></i>' : `<button class="btn btn-sm btn-secondary" onclick="window.MissionEngine.completeMission('${m.id}')">Yapıldı</button>`}
                </div>
            `;
            container.appendChild(card);
        });
    }
}

class SocialEngine {
    renderLeaderboard() {
        const container = document.getElementById('leaderboard-container');
        if(!container) return;

        let level = parseInt(db.get('level')) || 1;
        let ghostData = [
            { name: "NeonRider", level: level + 1, score: (level+1)*120, icon: "fa-user-ninja" },
            { name: "CodePanda", level: level, score: level*100 + 40, icon: "fa-user-astronaut" },
            { name: "Sen (Gelişiyorsun)", level: level, score: parseInt(db.get('xp')) || 0, isMe: true, icon: "fa-user" },
            { name: "GuitarHero99", level: Math.max(1, level - 1), score: Math.max(0, (level-1)*100 - 20), icon: "fa-user-tie" }
        ].sort((a,b) => b.score - a.score);

        container.innerHTML = `
            <div class="leaderboard-header">
                <h3><i class="fas fa-trophy" style="color: #fbbf24;"></i> Canlı Rekabet (Senin Gibiler)</h3>
                <p>Bugün seninle aynı yolda yürüyen kullanıcılarla yarışıyorsun.</p>
            </div>
            <div class="leaderboard-list">
                ${ghostData.map((user, idx) => `
                    <div class="lb-item ${user.isMe ? 'lb-me' : ''}">
                        <div class="lb-rank">#${idx+1}</div>
                        <div class="lb-icon"><i class="fas ${user.icon}"></i></div>
                        <div class="lb-details">
                            <strong>${user.name}</strong>
                            <small>Seviye ${user.level}</small>
                        </div>
                        <div class="lb-score">${user.score} XP</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

class HookEngine {
    checkRetention() {
        const today = new Date().toLocaleDateString();
        const lastLogin = db.get('last_login');
        
        if(lastLogin && lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            // Eğer dün girmeden daha önce girdiyse
            if(lastLogin !== yesterday.toLocaleDateString()) {
                // Return Trigger Modal'ı çıkar (App.js'den UI çağrısı yapılacak)
                setTimeout(() => {
                    if (window.UI && window.UI.toggleModal) {
                        window.UI.toggleModal('hook-modal', true);
                    }
                }, 2000); // 2 saniye sonra şok etkisiyle ver
            }
        }
        
        // Modalın içindeki göreve basarsa
        let btnClick = document.getElementById('btn-hook-go');
        if(btnClick) {
            btnClick.addEventListener('click', () => {
                if(window.UI) window.UI.toggleModal('hook-modal', false);
                document.getElementById('welcome-section').classList.add('hidden');
                document.getElementById('search-input').focus();
                // Seri sıfırlamayı engelliyor hissiyatı ver
                db.set('streak', Math.max(parseInt(db.get('streak')) || 1, 1));
                if(document.getElementById('stat-streak')) {
                    document.getElementById('stat-streak').innerText = `${db.get('streak')} Günlük Seri`;
                }
            });
        }
    }
}

// Instantiate
window.Progression = new ProgressionEngine();
window.MissionEngine = new DailyMissionEngine();
window.Social = new SocialEngine();
window.HookSystem = new HookEngine();

// Refresh UI on load
document.addEventListener('DOMContentLoaded', () => {
    let level = parseInt(db.get('level')) || 1;
    let xp = parseInt(db.get('xp')) || 0;
    window.Progression.updateUI(level, xp, level * window.Progression.baseXP);
    window.MissionEngine.renderUI();
    window.Social.renderLeaderboard();
    window.HookSystem.checkRetention();
});
