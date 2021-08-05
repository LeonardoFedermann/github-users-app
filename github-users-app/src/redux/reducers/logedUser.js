export const logedUser = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SAVE_USER':
            return payload.user
        case 'LOG_OUT':
            return {}
        default:
            return state
    }
}