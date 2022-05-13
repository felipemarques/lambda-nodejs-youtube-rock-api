const axios = require('axios')

//const API_ROCK_TOKEN = 'XnytXUNnUceWzO90ayc63nrbkjuoD3NUurRlwkjZvGo&_gl=1*14v7mxw*_ga*NTAxMzYwNzgwLjE2NDk3MDI2NTU.*_ga_84KEGC2JP6*MTY1MjM4ODc5Mi43OS4xLjE2NTIzOTA3NzUuNDQ.';
const API_ROCK_TOKEN = 'AcszL_pGi0uW9C3qtkEZYF1SdmCWOC-cnfFvX8O0Un4';
const API_ROCK_BASE_URL = 'https://api.rock.so';

class RockAPI {

    static async sendMessage(message){
        
        const postData = {
            "text": message,
            "attr": "bold"
        };

        const headers = {
            //'Authorization': 'Bearer xxx'
        }
    
        axios.post(
            `${API_ROCK_BASE_URL}/webhook/bot?method=sendMessage&auth=${API_ROCK_TOKEN}`, 
            postData, 
            headers
        ).then((response) => {        
            console.log(response.data)
        })

    }

}

module.exports = RockAPI