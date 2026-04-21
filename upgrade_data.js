const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'data');
if(fs.existsSync(dir)){
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'manifest.json');
    let meta = {};
    files.forEach(f => {
        let p = path.join(dir, f);
        let d = JSON.parse(fs.readFileSync(p));
        
        // Add new properties for FUTURE readiness
        if(!d.relatedCourses) {
            d.relatedCourses = files.filter(x => x !== f).map(x => x.replace('.json','')).slice(0, 2); 
        }
        if(!d.difficultyLevel) d.difficultyLevel = d.difficulty || "Basit";
        if(!d.skillPath) d.skillPath = "General";
        if(!d.categoryCluster) d.categoryCluster = d.categoryType || "Genel";
        
        fs.writeFileSync(p, JSON.stringify(d, null, 2));
        
        // Meta mapping
        meta[d.id] = {
            id: d.id, icon: d.icon, title: d.title, desc: d.desc, 
            tags: d.tags, categoryType: d.categoryType, difficultyLevel: d.difficultyLevel, 
            duration: d.duration, relatedCourses: d.relatedCourses, categoryCluster: d.categoryCluster,
            stepCount: d.steps ? d.steps.length : 1
        };
    });
    fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(meta, null, 2));
    console.log("Data restructuring complete. Manifest created.");
} else {
    console.error("Data directory not found.");
}
