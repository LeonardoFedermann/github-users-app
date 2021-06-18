import { PinDropSharp } from '@material-ui/icons'
import {useState} from 'react'
import {GlobalContext} from './GlobalContext'

export const GlobalContextProvider = (props) =>{
    const [user, setUser] = useState({})
    const data = {
        user, 
        setUser
    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}