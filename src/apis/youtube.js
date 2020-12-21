import axios from 'axios'


const KEY =  'AIzaSyBb-Jgzv1L5_WrzFAAVUZtOxHvieAqW9mg';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY,
    }
});
