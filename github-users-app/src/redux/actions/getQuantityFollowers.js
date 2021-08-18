export const getQuantityFollowers = (username) => {
    return {
        type: 'GET_QUANTITY_FOLLOWERS',
        payload: {
            username
        }
    }
}