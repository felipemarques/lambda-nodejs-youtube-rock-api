class Utils {

    static jsonStringify(obj) {
        let jsonString = JSON.stringify(obj);
        return JSON.stringify(JSON.parse(jsonString),null,2);
    }

}

module.exports = Utils