import {useEffect, useContext, useHistory} from 'react'
import { goToLogin } from '../coordinator/Coordinator'
import {GlobalContext} from '../global/GlobalContext'

export const useProtectedPage = (history) =>{
    const {user, setUser} = useContext(GlobalContext)

    useEffect(()=>{
        if(!user.login){
            goToLogin(history)
        }
    }, [])
}