export const getQuantityRepos = (username) => {
    return {
        type: 'GET_QUANTITY_REPOS',
        payload: {
            username
        }
    }
}