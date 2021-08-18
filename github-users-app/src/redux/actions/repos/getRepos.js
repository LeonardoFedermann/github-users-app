export const getRepos = (username) => {
    return {
        type: 'GET_REPOS',
        payload: {
            username
        }
    }
}