export const removeDuplicate = (list) => {
    const cleanList = list.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
    return cleanList
}