import axios from 'axios'

const annonymousInstance = axios.create({
    baseURL: 'https://restcountries.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const getData = async () => {
    const response = await annonymousInstance.get('/v2/all?fields=name,region,area')
    return response.data;
}

const ApiServices = {
    getData
}

export default ApiServices
