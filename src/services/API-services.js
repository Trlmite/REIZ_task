import axios from 'axios'
import dataHandling from './data-handling-service';

const annonymousInstance = axios.create({
    baseURL: 'https://restcountries.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const getData = async (sortOrder, filters) => {
    const response = await annonymousInstance.get('/v2/all?fields=name,region,area')
    const data = dataHandling.filterData(filters, response.data)
    return dataHandling.sortData(sortOrder, data)
}

const ApiServices = {
    getData
}

export default ApiServices
