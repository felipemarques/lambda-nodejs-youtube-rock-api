const config = require('./config');
const { Youtube } = require('tube-api');

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || 'setup your api key'
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UC-Xx8PAWbWCqra16G782EfQ'; // MM Tech channel youtube

const ytube = new Youtube(YOUTUBE_API_KEY);

class YoutubeAPI {

    static async channelDetails() {
        /**
         * @param {string} channelId 
         * @example
         * Channel URL: https://www.youtube.com/channel/UCn8zNIfYAQNdrFRrr8oibKw
         * channelId is UCn8zNIfYAQNdrFRrr8oibKw 
         */
        return await ytube.channelDetails(YOUTUBE_CHANNEL_ID)
    }

    static async videosList(details) {

        /**
         * @param {string} uploads_id Taken from the channelDetails result
         * @param {Array} empty array
         */
        const videos = await ytube.videosList(details.uploads_id, [])
        return videos;
    }

    static async verifyVideos() {

        const details = await this.channelDetails()
        const videosList = await this.videosList(details)
        
        // ADD here the allowed videos on MM Youtube channel
        const allowedVideos = [
            '0oF1kgT_AGk' // Talentfy Logo animation
        ]

        let hasInvalidPublicVideo = false;
        for(let idx in videosList) {
            const item = videosList[idx];
            if (!allowedVideos.includes(item.video_id)) {
                hasInvalidPublicVideo = true;
                break;
            }
        }
    
        return { 
            videosList, 
            hasInvalidPublicVideo: hasInvalidPublicVideo 
        };

    }

}

module.exports = YoutubeAPI