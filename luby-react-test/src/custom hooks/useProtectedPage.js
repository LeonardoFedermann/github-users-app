import {useEffect, useContext, useHistory} from 'react'
import { goToLogin } from '../coordinator/Coordinator'
import {GlobalContext} from '../global/GlobalContext'

export const useProtectedPage = (history) =>{
    const {shownUser, setShownUser} = useContext(GlobalContext)

    useEffect(()=>{
        if(!shownUser.login){
            goToLogin(history)
        }
    }, [shownUser])
}