import { useEffect, useContext } from 'react'
import { goToProfile } from '../coordinator/Coordinator'
import { GlobalContext } from '../global/GlobalContext'

export const useUnprotectedPage = (history) => {
    const { logedUser, setLogedUser } = useContext(GlobalContext)

    useEffect(() => {
        if (logedUser.login) {
            goToProfile(history, logedUser.login)
        }
    }, [logedUser])
}