export const getFollowers = (username) => {
    return {
        type: 'GET_FOLLOWERS',
        payload: {
            username
        }
    }
}