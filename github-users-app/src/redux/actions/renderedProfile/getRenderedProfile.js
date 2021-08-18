export const getRenderedProfile = (username) => {
    return {
        type: 'GET_RENDERED_PROFILE',
        payload: {
            username
        }
    }
}