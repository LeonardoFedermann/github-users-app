export const renderedUser = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_RENDERED_USER':
            return payload.user
        default:
            return state
    }
}