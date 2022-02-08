
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
}

export default sortData