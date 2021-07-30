import { useEffect, useContext } from 'react'
import { goToLogin } from '../coordinator/Coordinator'

export const useProtectedPage = (history, logedUser) => {
    useEffect(() => {
        if (!logedUser.login) {
            goToLogin(history)
        }
    }, [logedUser])
}
