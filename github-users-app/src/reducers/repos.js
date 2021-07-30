export const repos = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_REPOS':
            return payload.repos
        default:
            return state
    }
}