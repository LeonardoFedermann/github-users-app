import { removeDuplicate } from "./questao-6"

export const commonValues = (listA, listB) => {
    let result = []
    for (let i = 0; i < listA.length; i++) {
        for (let j = 0; j <= listB.length; j++) {
            if (listA[i] === listB[j]) {
                result.push(listA[i])
            }
        }
    }
    return removeDuplicate(result)
}