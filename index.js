const config = require('./src/config');
const Utils = require('./src/Utils');
const RockAPI = require('./src/RockAPI');
const YoutubeAPI = require('./src/YoutubeAPI');

exports.handler = async (event) => {

    const { videosList, hasInvalidPublicVideo } = await YoutubeAPI.verifyVideos();

    if (hasInvalidPublicVideo) {
        RockAPI.sendMessage('Atenção! Existe um vídeo publico no canal da MM!! Verifique se está permitido, caso contrário mude a visibilidade do video para privado!')
    }

    return {
        statusCode: 200,
        body: Utils.jsonStringify(videosList),
    };
};


