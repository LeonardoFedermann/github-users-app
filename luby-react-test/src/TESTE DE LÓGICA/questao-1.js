export const createList = (number, word) => {
    let list = []
    for (let i = number; i > 0; i--) {
        list.push(word)
    }
    return list
}