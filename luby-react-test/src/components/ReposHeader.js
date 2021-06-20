import React, {useContext} from 'react'
import {ReposHeaderContainer} from '../style/style'
import {GlobalContext} from '../global/GlobalContext'
import { goBack } from '../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const ReposHeader = (props) =>{
    const { shownUser, setShownUser} = useContext(GlobalContext)
    const history = useHistory()

    return (
    <ReposHeaderContainer>
        <h4 onClick={()=>goBack(history)}>&#x2190;</h4>
        <h4>{props.publicRepos} repositórios de {props.username}</h4>
    </ReposHeaderContainer>
    )
}