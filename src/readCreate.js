const fs = require('fs');

module.exports = (path) => {
    if(fs.existsSync(path)) {
        const file = fs.readFileSync(path, 'utf-8');
        const data = JSON.parse(file);
        return data;
    } else {
        fs.writeFileSync(path, '{}');
        return {};
    }
}