import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'6dfda532da1a4d09b2a61f287b2d0925'
    }
})

