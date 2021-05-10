const fs = require('fs');
const read_or_create_file = require('./src/readCreate');

class easyJSON {
    
    /**
     * @param { String } path 
     */
    constructor(path) {
        const data = read_or_create_file(path);
        
        this.path = path;
        this.data = data;
        
        return this;
    }

    /**
     * @param { String } key 
     * @param { Any } value
     * @returns { Object }
     */
    set(key, value) {
        this.data[key] = value;
        this.save();
        return this;
    }

    /**
     * @param { String } key 
     * @returns { Object }
     */
    get(key) {
        return this.data[key];
    }

    /**
     * @param { String } key 
     * @returns { Object }
     */
    delete(key) {
        delete this.data[key];
        this.save();
        return this;
    }

    /**
     * @param { String } key 
     * @param { Any } value
     * @returns { Object }
     */
    add(key, value) {
        const curVal = this.get(key);
        
        if(typeof curVal == 'number' && typeof value == 'number') {
            this.data[key] = curVal + value;
            this.save();
        }
    }

    /**
     * @param { String } key 
     * @param { Any } value
     * @returns { Object }
     */
    subtract(key, value) {
        const curVal = this.get(key);
        
        if(typeof curVal == 'number' && typeof value == 'number') {
            this.data[key] = curVal - value;
            this.save();
        }
    }

    save() {
        fs.writeFileSync(this.path, JSON.stringify(this.data), {
            encoding: 'utf-8'
        });
    }
}

module.exports = easyJSON;