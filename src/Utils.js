class Utils {

    static jsonStringify(obj) {
        let jsonString = '';
        
        if (process.env.NODE_ENV == 'development') {
            jsonString = JSON.stringify(obj);
            jsonString = JSON.stringify(JSON.parse(jsonString),null,2);
        } else {
            jsonString = JSON.stringify(obj);
        }

        return jsonString;
    }

}

module.exports = Utils