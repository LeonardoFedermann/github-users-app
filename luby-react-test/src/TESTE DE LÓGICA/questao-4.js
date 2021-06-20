export const arrayToObject = (list) => {
    let result = {}
    list.forEach((item) => {
        const object = { ...result, [item[0]]: item[1] }
        result = object
    })
    return result
}