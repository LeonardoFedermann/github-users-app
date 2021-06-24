import { useEffect, useContext } from 'react'
import { goToLogin } from '../coordinator/Coordinator'
import { GlobalContext } from '../global/GlobalContext'

export const useProtectedPage = (history) => {
    const { logedUser, setLogedUser } = useContext(GlobalContext)

    useEffect(() => {
        if (!logedUser.login) {
            goToLogin(history)
        }
    }, [logedUser])
}