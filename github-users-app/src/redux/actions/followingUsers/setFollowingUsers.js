export const setFollowingUsers = (followingUsers) => {
    return {
        type: 'SET_FOLLOWING_USERS',
        payload: {
            followingUsers
        }
    }
}