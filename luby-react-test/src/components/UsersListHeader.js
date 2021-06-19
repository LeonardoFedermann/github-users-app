import React, {useContext} from 'react'
import {UsersListHeaderContainer} from '../style/style'
import {GlobalContext} from '../global/GlobalContext'
import { goBack } from '../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const UsersListHeader = (props) =>{
    const history = useHistory()

    return (
    <UsersListHeaderContainer>
        <h4 onClick={()=>goBack(history)}>&#x2190;</h4>
        <h4>{props.showingPhrase}</h4>
        {/* {user.followers} repositórios de {user.login} */}
    </UsersListHeaderContainer>
    )
}