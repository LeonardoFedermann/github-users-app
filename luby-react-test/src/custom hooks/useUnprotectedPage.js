import {useEffect, useContext, useHistory} from 'react'
import { goToProfile } from '../coordinator/Coordinator'
import {GlobalContext} from '../global/GlobalContext'

export const useUnprotectedPage = (history) =>{
    const {shownUser, setShownUser} = useContext(GlobalContext)

    useEffect(()=>{
        if(shownUser.login){
            goToProfile(history, shownUser.login)
        }
    }, [shownUser])
}