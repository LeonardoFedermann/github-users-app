export const getFollowingUsers = (username) => {
    return {
        type: 'GET_FOLLOWING_USERS',
        payload: {
            username
        }
    }
}