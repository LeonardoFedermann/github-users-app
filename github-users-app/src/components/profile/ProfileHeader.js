import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const ProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <h4 onClick={props.goToLastPage}>&#x2190;</h4>
            <h4>#{props.login}</h4>
            <p onClick={props.function}>{props.buttonWord}</p>
        </ProfileHeaderContainer>
    )
}