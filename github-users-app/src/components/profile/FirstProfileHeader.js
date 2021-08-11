import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const FirstProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <h4>#{props.login}</h4>
            <p onClick={props.function}>{props.buttonWord}</p>
        </ProfileHeaderContainer>
    )
}