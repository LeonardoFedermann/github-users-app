export const setFollowers = (followers) => {
    return {
        type: 'SET_FOLLOWERS',
        payload: {
            followers
        }
    }
}