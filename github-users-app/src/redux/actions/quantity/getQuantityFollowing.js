export const getQuantityFollowing = (username) => {
    return {
        type: 'GET_QUANTITY_FOLLOWING',
        payload: {
            username
        }
    }
}