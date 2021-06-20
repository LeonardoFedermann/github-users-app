import { cleanList } from "./questao-3"

export const divideArray = (list, number) => {
    let parameter = list
    let result = []
    for (let i = 0; i <= (list.length / number).toFixed(0) + 1; i++) {
        let addedArray = []
        for (let j = 0; j < number; j++) {
            addedArray.push(parameter[j])
        }

        result.push(cleanList(addedArray))
        parameter.splice(0, number)
    }
    if (parameter.length > 0) {
        result.push(parameter)
    }
    return result
}