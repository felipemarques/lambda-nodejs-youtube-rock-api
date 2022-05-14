const config = require('./config');
const axios = require('axios')

const API_ROCK_TOKEN = process.env.API_ROCK_TOKEN || 'setup your token';
const API_ROCK_BASE_URL = process.env.API_ROCK_BASE_URL || 'https://api.rock.so';

class RockAPI {

    static async sendMessage(message){
        
        console.log('sendMessage >>>>>> ');
        
        const postData = {
            "text": message,
            "attr": "bold"
        };

        const headers = {
            //'Authorization': 'Bearer xxx'
        }
        
        const URL = `${API_ROCK_BASE_URL}/webhook/bot?method=sendMessage&auth=${API_ROCK_TOKEN}`;
    
        await axios.post(
            URL, 
            postData, 
            headers
        ).then((response) => {        
            console.log(response.data)
        }).catch((error) => {
            console.error(error)
        });
        
        console.log('RockAPI >>> URL: ', URL)
        console.log('RockAPI >>> postData: ', postData)

    }

}

module.exports = RockAPI