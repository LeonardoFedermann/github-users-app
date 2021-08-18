export const changeLogedUser = (username) => {
    return {
        type: 'CHANGE_LOGED_USER',
        payload: {
            username
        }
    }
}