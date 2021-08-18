export const renderedProfile = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_RENDERED_PROFILE':
            return payload.user
        default:
            return state
    }
}