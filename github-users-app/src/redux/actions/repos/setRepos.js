export const setRepos = (repos) => {
    return {
        type: 'SET_REPOS',
        payload: {
            repos
        }
    }
}