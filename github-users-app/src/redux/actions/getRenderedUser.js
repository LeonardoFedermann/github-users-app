export const getRenderedUser = (username) => {
    return {
        type: 'GET_RENDERED_USER',
        payload: {
            username
        }
    }
}