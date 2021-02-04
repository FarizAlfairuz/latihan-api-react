import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID kzy-3Qt5I5jmDAnjPgI_OHtg0n60DECYHNkJeKCM8KI'
    }
})