export const followingUsers = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_FOLLOWING_USERS':
            return payload.followingUsers
        default:
            return state
    }
}