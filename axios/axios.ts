import Axios from 'axios';

const axios = Axios.create({
    baseURL:'https://hn.algolia.com/api/v1/'
});

export default axios;