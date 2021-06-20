export const cleanList = (list) => {
    let cleanList = []
    for (let i = 0; i < list.length; i++) {
        if (list[i]) {
            cleanList.push(list[i])
        }
    }
    return cleanList
}