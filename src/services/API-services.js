import axios from 'axios'
import sortData from './sorting-service';

const annonymousInstance = axios.create({
    baseURL: 'https://restcountries.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const getData = async (sortOrder, toggleFilterLTU, toggleFilterOceania) => {
    const response = await annonymousInstance.get('/v2/all?fields=name,region,area')
    console.log({ sortOrder, toggleFilterLTU, toggleFilterOceania })
    if (toggleFilterLTU) {
        const filterLTU = response.data.find(x => x.name === "Lithuania")
        const smallerThanLTU = response.data.filter(country => country.area < filterLTU.area)
        return sortData(sortOrder,smallerThanLTU)
    }
    if (toggleFilterOceania) {
        const filteredOcenia = response.data.filter(country => country.region === "Oceania")
        return sortData(sortOrder,filteredOcenia)
    }
    return response.data
}

const ApiServices = {
    getData
}

export default ApiServices
