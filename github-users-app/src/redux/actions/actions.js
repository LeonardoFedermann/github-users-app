export const setRepos = (repos) => {
    return {
        type: 'SET_REPOS',
        payload: {
            repos
        }
    }
}

export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload: {
            user
        }
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const setFollowingUsers = (followingUsers) => {
    return {
        type: 'SET_FOLLOWING_USERS',
        payload: {
            followingUsers
        }
    }
}

export const setFollowers = (followers) => {
    return {
        type: 'SET_FOLLOWERS',
        payload: {
            followers
        }
    }
}