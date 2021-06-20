import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {ProfileHeaderContainer} from '../style/style'
import {GlobalContext} from '../global/GlobalContext'

export const ProfileHeader = (props) =>{
    const history = useHistory()

    return (
    <ProfileHeaderContainer buttonColor={props.buttonColor}>
        <h4 onClick={props.goToLastPage}>&#x2190;</h4>
        <h4>#{props.login}</h4>
        <p onClick={props.function}>{props.buttonWord}</p>
    </ProfileHeaderContainer>
    )
}