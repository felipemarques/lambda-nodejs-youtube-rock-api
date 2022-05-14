const config = require('./src/config');
const Utils = require('./src/Utils');
const RockAPI = require('./src/RockAPI');
const YoutubeAPI = require('./src/YoutubeAPI');

exports.handler = async (event) => {

    console.log('event: ', event);

    const { videosList, hasInvalidPublicVideo } = await YoutubeAPI.verifyVideos();
    const message = process.env.ROCK_ALERT_MESSAGE || 'Ajuste a mensagem de alerta no .env'

    if (hasInvalidPublicVideo) {
        await RockAPI.sendMessage(message)
    }

    return {
        statusCode: 200,
        body: Utils.jsonStringify({
            hasInvalidPublicVideo: hasInvalidPublicVideo,
            videosList,
        }),
    };
};


