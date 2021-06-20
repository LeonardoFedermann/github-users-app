export const onlyOneArray = (list) => {
    let result = []
    list.forEach((item) => {
        if (!item[0]) {
            result.push(item)
        } else {
            item.forEach((i) => {
                result.push(i)
            })
        }
    })
    return result
}