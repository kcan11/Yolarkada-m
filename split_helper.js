const fs = require('fs');
const path = require('path');

const dataContent = fs.readFileSync(path.join(__dirname, 'js/data.js'), 'utf-8');

// A risky but reliable localized trick to extract coursesData object from script
let coursesData = {};
try {
    eval(dataContent + '\nmodule.exports = coursesData;');
    coursesData = module.exports;
} catch (e) {
    console.error("Eval failed, trying fallback.");
    // Fallback if module.exports hack fails
}

if(!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

let manifest = [];
for(let key in coursesData) {
    if(coursesData[key] && typeof coursesData[key] === 'object' && coursesData[key].id) {
        fs.writeFileSync(path.join(__dirname, 'data', key + '.json'), JSON.stringify(coursesData[key], null, 2));
        manifest.push(key);
    }
}
fs.writeFileSync(path.join(__dirname, 'data', 'manifest.json'), JSON.stringify(manifest));

console.log('Split complete. Keys:', manifest);
