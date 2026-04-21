class Store {
    constructor() {
        this.prefix = 'yt_';
    }

    get(key, isJson = false) {
        const val = localStorage.getItem(this.prefix + key);
        if(!val) return isJson ? null : val;
        try {
            return isJson ? JSON.parse(val) : val;
        } catch(e) {
            return isJson ? null : val;
        }
    }

    set(key, value, isJson = false) {
        localStorage.setItem(this.prefix + key, isJson ? JSON.stringify(value) : value);
    }

    remove(key) {
        localStorage.removeItem(this.prefix + key);
    }

    // --- Streak & Daily Goals ---
    checkAndApplyStreak() {
        const today = new Date().toLocaleDateString();
        const lastLogin = this.get('last_login');
        let streak = parseInt(this.get('streak')) || 0;

        if (lastLogin) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastLogin === yesterday.toLocaleDateString()) {
                streak += 1;
            } else if (lastLogin !== today) {
                streak = 1;
            }
        } else {
            streak = 1; 
        }
        
        this.set('last_login', today);
        this.set('streak', streak);
        this.updateActiveHours();
        return streak;
    }

    getDailyGoal() {
        const today = new Date().toLocaleDateString();
        let goalObj = this.get('daily_goal', true);
        if(!goalObj || goalObj.date !== today) {
            const goals = [
                "Bugün 1 yeni adım tamamla",
                "Hiç bilmediğin bir kategori keşfet",
                "Bir konudaki problemini AI ile çöz",
                "Kaldığın yerden eğitime devam et"
            ];
            goalObj = { date: today, text: goals[Math.floor(Math.random() * goals.length)], done: false };
            this.set('daily_goal', goalObj, true);
        }
        return goalObj;
    }

    completeDailyGoal() {
        let goalObj = this.get('daily_goal', true);
        if(goalObj && !goalObj.done) {
            goalObj.done = true;
            this.set('daily_goal', goalObj, true);
            return true;
        }
        return false;
    }

    // --- User Profile Memory (NEW) ---
    trackInteraction(courseId, category) {
        let interactions = this.get('interactions', true) || {};
        interactions[category] = (interactions[category] || 0) + 1;
        this.set('interactions', interactions, true);
        
        let courseViews = this.get('course_views', true) || {};
        courseViews[courseId] = (courseViews[courseId] || 0) + 1;
        this.set('course_views', courseViews, true);

        this.set('last_clicked', courseId);
    }

    trackProblem(courseId) {
        let problems = this.get('problem_areas', true) || {};
        problems[courseId] = (problems[courseId] || 0) + 1;
        this.set('problem_areas', problems, true);
    }

    updateActiveHours() {
        let hour = new Date().getHours();
        let acts = this.get('active_hours', true) || {};
        let period = hour < 12 ? 'sabah' : (hour < 18 ? 'öğle' : 'akşam');
        acts[period] = (acts[period] || 0) + 1;
        this.set('active_hours', acts, true);
    }

    getPreferredTime() {
        let acts = this.get('active_hours', true) || {};
        if(Object.keys(acts).length === 0) return 'belirsiz';
        return Object.keys(acts).reduce((a,b) => acts[a] > acts[b] ? a : b);
    }

    // --- Progress ---
    saveProgress(courseId, stepIndex) {
        this.set('last_course', courseId);
        this.set('last_step', stepIndex);
        
        let progress = this.get('progress_data', true) || {};
        if(!progress[courseId]) progress[courseId] = 0;
        
        progress[courseId] = Math.max(progress[courseId], stepIndex);
        this.set('progress_data', progress, true);
    }

    getResumeInfo() {
        const courseId = this.get('last_course');
        const stepIndex = parseInt(this.get('last_step')) || 0;
        return { courseId, stepIndex };
    }

    getProgressData() {
        return this.get('progress_data', true) || {};
    }
    
    // --- Badges & Onboarding ---
    awardBadge(badgeId) {
        let earned = this.get('badges', true) || [];
        if (!earned.includes(badgeId)) {
            earned.push(badgeId);
            this.set('badges', earned, true);
            return true;
        }
        return false;
    }

    getBadges() {
        return this.get('badges', true) || [];
    }
    
    isOnboardingDone() { return this.get('onboarding_done') === 'true'; }
    setOnboardingDone() { this.set('onboarding_done', 'true'); }
}
const db = new Store();
