export const followers = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_FOLLOWERS':
            return payload.followers
        default:
            return state
    }
}