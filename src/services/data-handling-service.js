
const sortData = (sortOrder,data) =>{
    if (!sortOrder) {
        const sortedDataDesending = data.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        return sortedDataDesending
    } else if (sortOrder) {
        const sortedDataAscending = data.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
        return sortedDataAscending
    }
};

const filterData = ({area, region}, data) =>{
    if(area){
        const findCountry = data.find(x => x.name === area)
        const smallerArea = data.filter(country => country.area < findCountry.area)
        if(region){
            const smallerAreaRegion = smallerArea.filter(country => country.region === region)
            return smallerAreaRegion
        }
        return smallerArea
    }
    if(region){
        const regionFilter = data.filter(country => country.region === region)
        return regionFilter
    }
    return data
};

const dataHandling ={
    sortData,
    filterData,
};

export default dataHandling;