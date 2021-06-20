//Assumo que, conforme o exemplo, a função receberá dois itens após o array de entrada.

export const removeFromArray = (list, itemA, itemB) => {
    const cleanList = list.filter((item) => {
        return item !== itemA && item !== itemB
    })
    return cleanList
}