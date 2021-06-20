export const arraysAreEqual = (listA, listB) => {
    if (listA.length !== listB.length) {
        return false
    }

    let result = true

    for (let i = 0; i < listA.length; i++) {
        if (listA[i] !== listB[i]) {
            result = false
        }
    }
    return result
}