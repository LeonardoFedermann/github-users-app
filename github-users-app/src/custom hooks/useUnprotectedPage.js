import { useEffect } from 'react'
import { goToProfile } from '../coordinator/Coordinator'

export const useUnprotectedPage = (history, logedUser) => {
    useEffect(() => {
        if (logedUser.login) {
            goToProfile(history, logedUser.login)
        }
    }, [logedUser])
}
