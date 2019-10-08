import axios from 'axios';

export default axios.create({
    baseURL: 'https://pl.wikipedia.org/w/'
});