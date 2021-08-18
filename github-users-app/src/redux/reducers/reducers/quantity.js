export const quantity = (state = 0, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_QUANTITY':
            return payload.quantity
        default:
            return state
    }
}