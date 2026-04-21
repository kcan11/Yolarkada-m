document.addEventListener('DOMContentLoaded', () => {
    UI.init();

    // The Global AI Brain
    window.brain = new BrainEngine();
    
    // Elements
    const searchInput = document.getElementById('search-input');
    const categoriesContainer = document.getElementById('categories-container');
    const recommendedContainer = document.getElementById('recommended-container');
    const homeView = document.getElementById('home-view');
    const courseView = document.getElementById('course-view');
    
    const resumeCard = document.getElementById('resume-card');
    const resumeCourseName = document.getElementById('resume-course-name');
    const resumeCourseProgress = document.getElementById('resume-course-progress');
    const resumeBtnTrigger = document.getElementById('resume-btn-trigger');

    const statCourses = document.getElementById('stat-courses');
    const statStreak = document.getElementById('stat-streak');
    
    const btnHome = document.getElementById('btn-home');
    const btnDarkmode = document.getElementById('btn-darkmode');
    const btnBadges = document.getElementById('btn-badges');
    const btnMood = document.getElementById('btn-mood');
    const btnRandom = document.getElementById('btn-random');
    const btnDailyWow = document.getElementById('btn-daily-wow');
    
    // Roadmap UI
    const roadmapInput = document.getElementById('ai-roadmap-input');
    const btnGenerateRoadmap = document.getElementById('btn-generate-roadmap');
    const roadmapResultSection = document.getElementById('roadmap-result-section');
    const roadmapCardsContainer = document.getElementById('roadmap-cards-container');

    const courseTitle = document.getElementById('course-title');
    const totalStepEl = document.getElementById('total-step-num');
    const currentStepEl = document.getElementById('current-step-num');
    const progressFill = document.getElementById('progress-fill');
    const stepTitle = document.getElementById('step-title');
    const stepContent = document.getElementById('step-content');
    const summaryWhat = document.getElementById('summary-what');
    const summaryWhy = document.getElementById('summary-why');
    const summaryTime = document.getElementById('summary-time');
    
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const btnProblem = document.getElementById('btn-problem');
    const feedbackButtons = document.querySelectorAll('.btn-feedback');

    const problemInput = document.getElementById('problem-input');
    const btnSolve = document.getElementById('btn-solve');
    const solutionBox = document.getElementById('solution-box');
    const solutionText = document.getElementById('solution-text');
    const solverFeedbackBox = document.getElementById('solver-feedback-box');
    
    // State
    let currentActiveCourse = null; // Full course object lazy loaded
    let currentStepIndex = 0;
    let lastSolverResponse = null;

    // ----- LAZY LOADING INITIALIZATION -----
    window.brain.init().then(success => {
        if(success) {
            initApp();
            
            setTimeout(() => {
                document.getElementById('startup-loader').classList.add('fade-out');
                document.getElementById('app-container').classList.remove('hidden');
                document.getElementById('main-navbar').classList.remove('hidden');
                if(window.innerWidth <= 768) document.getElementById('mobile-search-bar').classList.remove('hidden');
            }, 500);
        } else {
            document.querySelector('.startup-loader p').innerText = "Yerel sunucu bağlantısı kurulamadı. Lütfen Node/LiveServer ile başlatın.";
            document.querySelector('.loader-spinner').style.display = 'none';
        }
    });

    // Initialization
    function initApp() {
        applyTheme();
        updateStreakDisplay();
        renderResumeCard();
        setupRecommendations();
        setupDailyWowBlock();
        renderCategories(Object.values(window.brain.manifest));
        checkOnboarding();
        checkReturnHook();
        injectSmartWelcomeMessage();
        renderWeeklyReport();
        
        statCourses.innerText = Object.keys(window.brain.manifest).length + " Eğitim";
    }

    function checkReturnHook() {
        const lastActionDate = db.get('last_action_date');
        const streak = parseInt(db.get('streak') || "0");
        const today = new Date().toLocaleDateString('tr-TR');
        if (streak > 0 && lastActionDate !== today && !db.get('hook_shown_today')) {
            setTimeout(() => {
                UI.toggleModal('hook-modal', true);
                db.set('hook_shown_today', true);
            }, 2000);
        }
    }
    
    document.getElementById('btn-hook-go').addEventListener('click', () => {
        UI.toggleModal('hook-modal', false);
        document.getElementById('btn-daily-wow').click(); // Auto start daily wow
    });

    function injectSmartWelcomeMessage() {
        const problemAreas = db.get('problem_areas', true) || {};
        const interactions = db.get('interactions', true) || {};
        const mostProblematic = Object.keys(problemAreas).sort((a,b) => problemAreas[b] - problemAreas[a])[0];
        
        let msg = "Senin İçin Tasarlanmış <span>Akıllı</span> Öğrenme Rehberi";
        
        // Dynamic Personality Engine
        if (Object.keys(problemAreas).length > 4 && Object.keys(interactions).length < 2) {
            // Tüketici / Tembel
            msg = `Bugün yine kaçıyorsun gibi... ama <span style="color:var(--primary)">bu sefer yapıyoruz</span>. Birlikte.`;
        } else if (Object.keys(interactions).length > 8) {
            // Üretken / Hiperaktif
            msg = `Durmak bilmiyorsun! <span style="color:var(--primary)">Bu enerjiyle</span> dünyayı bile değiştirirsin.`;
        } else if (mostProblematic && window.brain.manifest[mostProblematic]) {
            msg = `Son zamanlarda <span style="color:var(--primary)">${window.brain.manifest[mostProblematic].title}</span> konusunda zorlandığını görüyorum. Beraber aşacağız.`;
        }
        document.querySelector('.hero-title').innerHTML = msg;
    }

    function renderWeeklyReport() {
        const problemAreas = db.get('problem_areas', true) || {};
        const interactions = db.get('interactions', true) || {};
        const reportCard = document.getElementById('weekly-report-card');
        
        if (Object.keys(interactions).length > 0 && reportCard) {
            let best = Object.keys(interactions).reduce((a,b) => interactions[a] > interactions[b] ? a : b);
            let weak = Object.keys(problemAreas).length > 0 ? Object.keys(problemAreas).reduce((a,b) => problemAreas[a] > problemAreas[b] ? a : b) : null;
            
            document.getElementById('report-best').innerText = best.toUpperCase();
            if (weak && window.brain.manifest[weak]) {
                document.getElementById('report-weak').innerText = window.brain.manifest[weak].title;
            } else {
                document.getElementById('report-weak').innerText = "hiçbir";
                document.getElementById('report-weak').parentElement.innerHTML = `Senin zayıf yönün yok, tam bir <strong style="color:var(--primary)">makinesin!</strong>`;
            }
            reportCard.classList.remove('hidden');
        }
    }

    function checkOnboarding() {
        if(!db.isOnboardingDone()) {
            UI.toggleModal('onboarding-modal', true);
        }
    }

    document.getElementById('btn-finish-onboarding').addEventListener('click', () => {
        db.setOnboardingDone();
        UI.toggleModal('onboarding-modal', false);
        UI.showToast("Yol Arkadaşım'a hoş geldin! Harika bir yolculuk başlıyor.", 'success', 'fas fa-rocket');
        db.awardBadge('ilk-adim');
    });

    function applyTheme() {
        if(db.get('dark') === 'true') {
            document.body.classList.add('dark-mode');
            btnDarkmode.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            btnDarkmode.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Initialize Disiplin Modu UI
        const isDisiplin = db.get('disiplin_modu') === 'true';
        const btnDisiplin = document.getElementById('btn-disiplin');
        if (btnDisiplin) {
            if (isDisiplin) {
                btnDisiplin.innerHTML = '<i class="fas fa-lock" style="color:#ef4444;"></i>';
            } else {
                btnDisiplin.innerHTML = '<i class="fas fa-lock-open"></i>';
            }
        }
    }

    const btnDisiplin = document.getElementById('btn-disiplin');
    if(btnDisiplin) {
        btnDisiplin.addEventListener('click', () => {
            const current = db.get('disiplin_modu') === 'true';
            db.set('disiplin_modu', !current);
            if (!current) {
                btnDisiplin.innerHTML = '<i class="fas fa-lock" style="color:#ef4444;"></i>';
                UI.showToast("DİSİPLİN MODU AKTİF! Artık bahanelere yer yok. Görev bitmeden çıkış yasak.", "warning", "fas fa-fire");
                if (db.awardBadge('zor-mod')) {
                    setTimeout(() => UI.showToast("Zor Mod Rozeti kazanıldı!", "badge", "fas fa-shield-alt"), 1000);
                }
            } else {
                btnDisiplin.innerHTML = '<i class="fas fa-lock-open"></i>';
                UI.showToast("Disiplin modu kapatıldı. Rahatlayabilirsin.", "info", "fas fa-coffee");
            }
        });
    }

    btnDarkmode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        db.set('dark', isDark);
        btnDarkmode.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        if(isDark && db.awardBadge('gece-kusu')) {
            setTimeout(() => UI.showToast("Gece Kuşu Rozeti kazanıldı!", "badge", "fas fa-moon"), 500);
        }
    });

    function updateStreakDisplay() {
        const streak = db.checkAndApplyStreak();
        statStreak.innerHTML = `<i class="fas fa-fire" style="color: #ef4444;"></i> ${streak} Günlük Seri`;
        if (streak >= 3 && db.awardBadge('seri-3')) {
            UI.showToast("Ateşli! 3. Gün Serisi rozetini kaptın!", "badge", "fas fa-fire");
        }
    }

    // Removed old completeGoalAction, replaced by MissionEngine

    function renderResumeCard() {
        const info = db.getResumeInfo();
        if(info.courseId && window.brain.manifest[info.courseId]) {
            const m = window.brain.manifest[info.courseId];
            resumeCard.classList.remove('hidden');
            resumeCourseName.innerText = m.title;
            const pct = Math.round(((info.stepIndex) / m.stepCount) * 100);
            resumeCourseProgress.innerText = pct > 0 ? `% ${pct} Tamamlandı` : 'Henüz Başlamadın';
            resumeBtnTrigger.onclick = () => startCourse(info.courseId, info.stepIndex);
        } else {
            resumeCard.classList.add('hidden');
        }
    }

    // ==== ADVANCED RECOMMENDATION ENGINE ====
    function setupRecommendations() {
        const recs = window.brain.getRecommendations();
        if(recs && recs.length > 0) {
            document.getElementById('recommended-section').classList.remove('hidden');
            drawCardsToContainer(recs, recommendedContainer);
            
            // Populate related/explore courses
            const exploreContainer = document.getElementById('explore-container');
            if (exploreContainer) {
                // Find a completely different course by taking last items
                let allKeys = Object.keys(window.brain.manifest);
                let randomKeys = allKeys.sort(() => 0.5 - Math.random()).slice(0, 2);
                let exploreCourses = randomKeys.map(k => window.brain.manifest[k]);
                drawCardsToContainer(exploreCourses, exploreContainer);
            }
        } else {
            document.getElementById('recommended-section').classList.add('hidden');
        }
    }

    function setupDailyWowBlock() {
        const plan = window.brain.getDailyWowPlan();
        document.getElementById('wow-block-desc').innerHTML = plan.map((p, i) => i === 0 ? `<strong>${p}</strong>` : `<br>${p}`).join('');
        
        let recs = window.brain.getRecommendations();
        if(recs && recs.length > 0) {
            document.getElementById('wow-block-course').innerText = recs[0].title;
            document.getElementById('wow-block-btn').onclick = () => {
                document.getElementById('welcome-section').classList.add('hidden');
                startCourse(recs[0].id);
            };
        } else {
            document.getElementById('wow-block-btn').classList.add('hidden');
            document.getElementById('wow-block-course').innerText = "Her Şeyi Tamamladın!";
        }
    }

    function renderCategories(coursesArray, noResultMsg = "Kriterlere uygun kurs bulunamadı.") {
        if(coursesArray.length === 0){
            UI.renderEmptyState(categoriesContainer, noResultMsg + " Belki başka terimler denemek istersin...", "fas fa-search");
            return;
        }
        drawCardsToContainer(coursesArray, categoriesContainer);
    }

    function drawCardsToContainer(coursesArray, container) {
        container.innerHTML = '';
        coursesArray.forEach(course => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="card-header">
                    <div class="category-icon">${course.icon}</div>
                    <div class="card-badges">
                        <span class="mini-badge"><i class="fas fa-signal"></i> ${course.difficultyLevel || course.difficulty || 'Orta'}</span>
                        <span class="mini-badge"><i class="fas fa-clock"></i> ${course.duration}</span>
                    </div>
                </div>
                <div class="category-info">
                    <h3>${course.title}</h3>
                    <p>${course.desc}</p>
                </div>
                <div class="tag-container">
                    <span class="tag"><i class="fas fa-folder"></i> ${course.categoryType}</span>
                </div>
            `;
            card.addEventListener('click', () => {
                db.trackInteraction(course.id, course.categoryType);
                startCourse(course.id);
            });
            container.appendChild(card);
        });
    }

    // ==== SMART SEARCH ENGINE ====
    const handleSearch = (term) => {
        if(term === '') {
            document.getElementById('search-suggestions').innerHTML = '';
            document.getElementById('welcome-section').classList.remove('hidden');
            renderCategories(Object.values(window.brain.manifest));
            return;
        }
        
        document.getElementById('welcome-section').classList.add('hidden');

        const filtered = Object.values(window.brain.manifest).filter(course => {
            const textToSearch = (course.title + " " + course.desc + " " + course.tags.join(" ") + " " + course.categoryType).toLowerCase();
            return textToSearch.includes(term) || Solver.fuzzyMatch(term, course.title.toLowerCase()) || Solver.fuzzyMatch(term, course.categoryType.toLowerCase());
        });
        
        if(filtered.length === 0) {
            let rndTitle = Object.values(window.brain.manifest)[Math.floor(Math.random()*(Object.values(window.brain.manifest).length))].title;
            document.getElementById('search-suggestions').innerHTML = `<p class="suggestion-txt">Bunu mu demek istedin? <b onclick="document.getElementById('search-input').value='${rndTitle}'; document.getElementById('search-input').dispatchEvent(new Event('input'));" >${rndTitle}</b></p>`;
        } else {
            document.getElementById('search-suggestions').innerHTML = '';
        }

        renderCategories(filtered, "Aradığın şeyi tam bulamadık.");
        if (!homeView.classList.contains('active')) {
            courseView.classList.remove('active');
            homeView.classList.add('active');
        }
    };

    searchInput.addEventListener('input', (e) => handleSearch(e.target.value.toLowerCase().trim()));
    const mobileSearchInput = document.getElementById('mobile-search-input');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value.toLowerCase().trim()));
    }

    btnHome.addEventListener('click', () => {
        // Disiplin Modu Check
        const isDisiplin = db.get('disiplin_modu') === 'true';

        // Addiction Loop Check on exit attempt
        const lastActionDate = db.get('last_action_date');
        const today = new Date().toLocaleDateString('tr-TR');
        const streak = parseInt(db.get('streak') || "0");
        
        if (courseView.classList.contains('active')) {
            if (isDisiplin && lastActionDate !== today) {
                UI.showToast("DİSİPLİN MODU AÇIK: Görevi bitirmeden kaçamazsın!", "error", "fas fa-lock");
                btnNext.style.boxShadow = "0 0 0 5px rgba(239, 68, 68, 0.5)";
                setTimeout(() => btnNext.style.boxShadow = "none", 1000);
                return; // Strict block
            }
            if (streak > 0 && lastActionDate !== today && !window.exitWarned) {
                UI.showToast("Dur! Sadece 1 adım daha yaparsan bugünkü serin korunacak!", "warning", "fas fa-fire");
                // Highlight the next button to keep them
                btnNext.style.transform = "scale(1.1)";
                setTimeout(() => btnNext.style.transform = "none", 500);
                window.exitWarned = true;
                return; // Block exit once
            }
        }
        window.exitWarned = false;

        searchInput.value = '';
        document.getElementById('search-suggestions').innerHTML = '';
        document.getElementById('welcome-section').classList.remove('hidden');
        renderCategories(Object.values(window.brain.manifest));
        courseView.classList.remove('active');
        homeView.classList.add('active');
        renderResumeCard();
        setupRecommendations();
    });
async function askAI(message) {
    const res = await fetch('/.netlify/functions/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || 'AI çalışmadı');
    }

    return data.reply || 'Yanıt alınamadı.';
}

btnGenerateRoadmap.addEventListener('click', async () => {
    const text = roadmapInput.value.trim();

    if (text === '') {
        UI.showToast("Lütfen hislerini kısaca tarif et.", "warning");
        return;
    }

    roadmapResultSection.classList.remove('hidden');
    roadmapCardsContainer.innerHTML = `
        <div class="roadmap-card" style="grid-column:1/-1;">
            <div class="rm-title">Analiz ediliyor...</div>
            <div class="rm-reason">Lütfen 1-2 saniye bekle.</div>
        </div>
    `;

    btnGenerateRoadmap.disabled = true;
    btnGenerateRoadmap.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analiz ediliyor...';

    try {
        const reply = await askAI(`
Kullanıcının yazdığı metni analiz et.
Türkçe cevap ver.
Kısa, net ve samimi ol.
Önce 2-3 cümlelik analiz yap.
Sonra "3 adımlık plan:" başlığı aç.
Altına 3 kısa madde yaz.

Kullanıcı metni:
${text}
        `);

        document.getElementById('roadmap-title').innerText = '🧠 AI Analizin Hazır';

        const desc = document.querySelector('#roadmap-result-section .section-title p');
        if (desc) {
            desc.innerText = 'Yazdıklarını analiz ettim. İşte sana kısa ve net bir yön haritası.';
        }

        roadmapCardsContainer.innerHTML = `
            <div class="roadmap-card" style="grid-column:1/-1;">
                <div class="rm-title">Kişisel Analiz</div>
                <div class="rm-reason" style="white-space: pre-line; line-height: 1.8;">${reply}</div>
            </div>
        `;

        roadmapResultSection.scrollIntoView({ behavior: 'smooth' });
        UI.showToast("AI analizi hazır.", "success", "fas fa-check");
    } catch (err) {
        console.error(err);
        roadmapCardsContainer.innerHTML = `
            <div class="roadmap-card" style="grid-column:1/-1;">
                <div class="rm-title">Hata</div>
                <div class="rm-reason">AI şu an cevap vermedi. Function veya API tarafında sorun olabilir.</div>
            </div>
        `;
        UI.showToast("AI cevap vermedi.", "warning", "fas fa-triangle-exclamation");
    } finally {
        btnGenerateRoadmap.disabled = false;
        btnGenerateRoadmap.innerHTML = '<i class="fas fa-magic"></i> Profilimi Analiz Et';
    }
});
    window.startCourseFromRoadmap = (id) => {
        startCourse(id);
    };

    // Course Engine View logic (ASYNC LAZY LOADED)
    async function startCourse(courseId, stepIndex = 0) {
        UI.showToast("Reklamlar yüklenirken bekle...", "info", "fas fa-spinner fa-spin");
        
        // FAKE AD DELAY for Monetization
        setTimeout(async () => {
            const course = await window.brain.getCourse(courseId);
            if(!course) {
                UI.showToast("Bu kurs yüklenemedi.", "error"); return;
            }
            
            currentActiveCourse = course;
            currentStepIndex = stepIndex;
            
            // Reset related courses UI
            const relatedContainer = document.getElementById('related-courses-container');
            if (relatedContainer) relatedContainer.classList.add('hidden');
            
            courseTitle.innerText = course.title;
            totalStepEl.innerText = course.steps.length;
            
            homeView.classList.remove('active');
            courseView.classList.add('active');
            window.scrollTo({top: 0, behavior: 'auto'});
            
            db.saveProgress(courseId, stepIndex);
            
            window.Progression.addXP(10, 'Kursa Başlama');
            
            renderStep();
        }, 800);
    }

    function renderStep() {
        const step = currentActiveCourse.steps[currentStepIndex];
        
        stepTitle.innerText = step.title;
        stepContent.innerHTML = step.content;
        currentStepEl.innerText = currentStepIndex + 1;
        
        if(step.summary) {
            summaryWhat.innerText = step.summary.what;
            summaryTime.innerText = step.summary.duration;
            summaryWhy.innerText = step.summary.why;
            document.querySelector('.step-summary').classList.remove('hidden');
        } else {
            document.querySelector('.step-summary').classList.add('hidden');
        }
        
        const progressPercent = ((currentStepIndex) / currentActiveCourse.steps.length) * 100;
        progressFill.style.width = `${progressPercent}%`;

        if(currentStepIndex === currentActiveCourse.steps.length - 1) {
            btnNext.innerHTML = '🔥 Kursu Tamamla ve Rozet Kazan 🏆';
        } else {
            btnNext.innerHTML = 'Tamamladım, İleri! 🎉';
        }
        
        feedbackButtons.forEach(btn => btn.classList.remove('active'));
    }

    btnNext.addEventListener('click', () => {
        if (currentStepIndex < currentActiveCourse.steps.length - 1) {
            currentStepIndex++;
            db.saveProgress(currentActiveCourse.id, currentStepIndex);
            db.set('last_action_date', new Date().toLocaleDateString('tr-TR'));
            
            const stepCont = document.querySelector('.step-container');
            stepCont.style.animation = 'none';
            setTimeout(() => { stepCont.style.animation = 'slideUp 0.4s ease'; renderStep(); }, 10);
            window.Progression.addXP(25, 'Adım Tamamlama');
            
            const microMotivations = ["Şu an gerçekten gelişiyorsun!", "Bunu yapan çok az kişi var!", "Harika gidiyorsun, durma!", "Beyninde yeni yollar inşa ediyorsun."];
            UI.showToast(microMotivations[Math.floor(Math.random()*microMotivations.length)], 'info', 'fas fa-bolt');
            
            // GİZLİ GÖREV SÜRPRİZİ (%15 İhtimal)
            if (Math.random() < 0.15) {
                setTimeout(() => {
                    UI.showToast("GİZLİ GÖREV BULUNDU: Kritik odaklanma! (+50 XP)", "badge", "fas fa-user-secret");
                    window.Progression.addXP(50, 'Gizli Görev');
                }, 1500);
            }
            
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            const newlyEarned = db.awardBadge(currentActiveCourse.id);
            db.saveProgress(currentActiveCourse.id, currentActiveCourse.steps.length);
            db.set('last_action_date', new Date().toLocaleDateString('tr-TR'));
            progressFill.style.width = `100%`;
            
            if(newlyEarned) {
                UI.toggleModal('badges-modal', true);
                UI.showToast("Efsanesin! Bir eğitim yolculuğunu daha tamamladın.", 'success');
            } else {
                UI.showToast("Harika! Bu konudaki bilgilerini tazeledin.", 'success');
            }
            
            // Show Related Courses dynamically
            const relatedContainer = document.getElementById('related-courses-container');
            if(relatedContainer) {
                relatedContainer.classList.remove('hidden');
                let simCat = Object.values(window.brain.manifest).filter(c => c.categoryType === currentActiveCourse.categoryType && c.id !== currentActiveCourse.id).slice(0,2);
                if(simCat.length === 0) simCat = Object.values(window.brain.manifest).sort(() => 0.5 - Math.random()).slice(0, 2);
                drawCardsToContainer(simCat, document.getElementById('related-cards'));
            }
        }
    });

    btnBack.addEventListener('click', () => {
        btnHome.click();
    });

    feedbackButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = e.target.closest('.btn-feedback').getAttribute('data-val');
            feedbackButtons.forEach(b => b.classList.remove('active'));
            e.target.closest('.btn-feedback').classList.add('active');
            
            if(val === 'zor') {
                db.trackProblem(currentActiveCourse.id);
                UI.showToast("Zorlandığını not aldım. Bu tamamen normal! 🚀", "info", "fas fa-brain");
            } else {
                UI.showToast("Harika gidiyorsun! Geri bildirimin için teşekkürler.", "success", "fas fa-check");
            }
        });
    });

    // ==== ADVANCED SOLVER NLP ====
    btnProblem.addEventListener('click', () => {
        UI.toggleModal('problem-modal', true);
        problemInput.value = '';
        solutionBox.classList.add('hidden');
        solverFeedbackBox.classList.add('hidden');
        btnSolve.innerText = "Akıllı Çözüm Bul ✨";
        setTimeout(() => problemInput.focus(), 100);
    });

    btnSolve.addEventListener('click', async () => {
        const text = problemInput.value;
        if(text.trim() === '') return;
        
        btnSolve.innerText = "Düşünüyor...";
        btnSolve.disabled = true;
        
        // HYBRID AI CALL
        let sol = null;
        if (text.length > 20) {
             const aiReply = await window.brain.askAI(text);
             if (aiReply) {
                 sol = { 
                     response: `<strong>(Gerçek AI Çözümü)</strong><br>` + aiReply.replace(/\n/g, '<br>'), 
                     alt: "Alternatif için mevcut adım açıklamasına yeniden göz atmalısın.", 
                     easy: "Derin bir nefes al, bazen en iyisi biraz beklemektir." 
                 };
             }
        }
        
        // Fallback to local
        if (!sol) {
            const step = currentActiveCourse.steps[currentStepIndex];
            sol = window.brain.solveProblem(text, step, currentActiveCourse.id);
        }
        
        lastSolverResponse = sol;
        solutionText.innerHTML = sol.response;
        
        solutionBox.classList.remove('hidden');
        solverFeedbackBox.classList.remove('hidden');
        btnSolve.innerText = "Yeni Bir Çözüm İste";
        btnSolve.disabled = false;
    });

    document.getElementById('btn-solver-yes').addEventListener('click', () => {
        solverFeedbackBox.innerHTML = "<p>Harika! Sorunu çözmemize çok sevindim. Haydi öğrenmeye devam! 🚀</p>";
        window.Progression.addXP(15, 'Problem Çözme');
        if(db.awardBadge('kriz-savar')) UI.showToast("Kriz Savar Rozeti kazanıldı!", "badge", "fas fa-shield");
        setTimeout(() => UI.toggleModal('problem-modal', false), 2000);
    });

    document.getElementById('btn-solver-no').addEventListener('click', () => {
        if(lastSolverResponse && lastSolverResponse.alt) {
            solutionText.innerText = lastSolverResponse.alt;
            solverFeedbackBox.innerHTML = "<p>Bazen alternatif yollar daha iyidir. Şunu dene ve rahatla.</p>";
        } else {
            solverFeedbackBox.innerHTML = "<p>Anlıyorum. Bazen derin bir nefes alıp o adımı yarına bırakmak en iyi çözümdür.</p>";
        }
    });

    const btnSolverEasy = document.getElementById('btn-solver-easy');
    if (btnSolverEasy) {
        btnSolverEasy.addEventListener('click', () => {
            if(lastSolverResponse && lastSolverResponse.easy) {
                solutionText.innerHTML = `<span style="font-size:1.2rem;">${lastSolverResponse.easy}</span>`;
                solverFeedbackBox.innerHTML = "<p>Öğrenmek bir yarış değil. Bazen en kolayı seçmek zekicedir.</p>";
            }
        });
    }

    // Viral Share & Roadmap Hooks
    let currentRoadmapSteps = [];
    const btnSaveRoadmap = document.getElementById('btn-save-roadmap');
    if (btnSaveRoadmap) {
        btnSaveRoadmap.addEventListener('click', () => {
            UI.showToast("Yol Haritan başarıyla profil belleğine kaydedildi!", 'success', 'fas fa-save');
        });
    }

    const btnShareRoadmap = document.getElementById('btn-share-roadmap');
    if (btnShareRoadmap) {
        btnShareRoadmap.addEventListener('click', () => {
            // Populate the Viral Card
            const titleEl = document.getElementById('viral-card-title');
            const stepsEl = document.getElementById('viral-card-steps');
            const streakEl = document.getElementById('viral-card-streak');
            const levelEl = document.getElementById('viral-card-level');
            
            if (titleEl && currentRoadmapSteps.length > 0) {
                titleEl.innerText = document.getElementById('roadmap-title').innerText;
                stepsEl.innerHTML = currentRoadmapSteps.map((s, i) => `${i+1}. ${s.title}`).join('<br>');
                streakEl.innerText = `${db.get('streak') || 0} Gün`;
                levelEl.innerText = `Seviye ${db.get('level') || 1}`;
            }

            UI.toggleModal('viral-modal', true);
        });
    }

    const btnViralCopy = document.getElementById('btn-viral-copy');
    if (btnViralCopy) {
        btnViralCopy.addEventListener('click', () => {
            navigator.clipboard.writeText("yolarkadasim.com/share/X8B2").catch(e=>{});
            btnViralCopy.innerHTML = '<i class="fas fa-check"></i> Kopyalandı!';
            UI.showToast("Link panoya kopyalandı! Şimdi paylaşma zamanı.", 'success');
            setTimeout(() => { btnViralCopy.innerHTML = '<i class="fas fa-copy"></i> Linki Kopyala'; }, 3000);
        });
    }

    const btnViralDownload = document.getElementById('btn-viral-download');
    if (btnViralDownload) {
        btnViralDownload.addEventListener('click', () => {
            btnViralDownload.innerHTML = '<i class="fas fa-spinner fa-spin"></i> İndiriliyor...';
            setTimeout(() => {
                btnViralDownload.innerHTML = '<i class="fas fa-download"></i> Resim Olarak İndir (PNG)';
                UI.showToast("Planın PNG olarak indirildi! (Demo)", "success");
            }, 1000);
        });
    }

    const btnViralStory = document.getElementById('btn-viral-story');
    if (btnViralStory) {
        btnViralStory.addEventListener('click', () => {
            UI.showToast("Instagram uygulamasına yönlendiriliyorsunuz...", "info");
        });
    }

    // WOW Feature Generator via BrainEngine
    btnDailyWow.addEventListener('click', () => {
        const plan = window.brain.getDailyWowPlan();
        
        document.getElementById('wow-plan-text').innerHTML = plan.map((p, i) => i === 0 ? `<strong>${p}</strong>` : `<br>${p}`).join('');
        UI.toggleModal('wow-modal', true);
    });

    document.getElementById('btn-wow-go').addEventListener('click', () => {
        UI.toggleModal('wow-modal', false);
        UI.showToast("Hazırsan başlıyoruz!", 'success', 'fas fa-rocket');
        document.getElementById('welcome-section').classList.add('hidden');
        searchInput.focus();
    });

    btnRandom.addEventListener('click', () => {
        const progress = db.getProgressData();
        const uncompleted = Object.keys(window.brain.manifest).filter(id => !progress[id] || progress[id] < window.brain.manifest[id].stepCount);
        
        let target;
        if (uncompleted.length > 0) {
            target = uncompleted[Math.floor(Math.random() * uncompleted.length)];
        } else {
            target = Object.keys(window.brain.manifest)[Math.floor(Math.random() * Object.keys(window.brain.manifest).length)];
        }
        
        UI.showToast("Evren senin için seçti: " + window.brain.manifest[target].title, "info", "fas fa-magic");
        setTimeout(() => startCourse(target, 0), 1000);
    });

    btnMood.addEventListener('click', () => UI.toggleModal('mood-modal', true));
    document.querySelectorAll('.btn-mood-select').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('.btn-mood-select') || btn;
            const mood = btnEl.getAttribute('data-mood');
            UI.toggleModal('mood-modal', false);
            
            if (mood === 'hepsi') {
                document.getElementById('welcome-section').classList.remove('hidden');
                renderCategories(Object.values(window.brain.manifest));
                return;
            }
            
            document.getElementById('welcome-section').classList.add('hidden');
            const filtered = Object.values(window.brain.manifest).filter(c => c.tags.includes(mood));
            renderCategories(filtered);
            
            const guideTitle = document.createElement('div');
            guideTitle.className = 'section-title mood-guide-title';
            guideTitle.innerHTML = `<h2>Bugünkü enerjine göre sana en uygun başlangıç yolları 💫</h2>`;
            categoriesContainer.prepend(guideTitle);
            
            searchInput.value = '';
        });
    });

    btnBadges.addEventListener('click', () => {
        const container = document.getElementById('badges-container');
        container.innerHTML = '';
        const earned = db.getBadges();

        Object.values(window.brain.manifest).forEach(course => {
            const hasEarned = earned.includes(course.id);
            container.innerHTML += `
                <div class="badge-item ${hasEarned ? 'earned' : 'locked'}">
                    <span class="badge-icon">${course.icon}</span>
                    <span class="badge-title">${course.title}<br>Üstadı</span>
                </div>
            `;
        });
        
        const specialBadges = [
            { id: 'ilk-adim', name: 'İlk Adım', icon: '🚀' },
            { id: 'gece-kusu', name: 'Gece Kuşu', icon: '🦉' },
            { id: 'seri-3', name: '3 Gün Serisi', icon: '🔥' },
            { id: 'kriz-savar', name: 'Kriz Savar', icon: '🛡️' }
        ];
        
        specialBadges.forEach(b => {
            const hasEarned = earned.includes(b.id);
            container.innerHTML += `
                <div class="badge-item ${hasEarned ? 'earned' : 'locked'}">
                    <span class="badge-icon">${b.icon}</span>
                    <span class="badge-title">${b.name}</span>
                </div>
            `;
        });

        UI.toggleModal('badges-modal', true);
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });
});
