import React, { useContext } from 'react'
import { ProfilePresentationContainer, YellowContainer } from '../style/style'
import { GlobalContext } from '../global/GlobalContext'

export const ProfilePresentation = (props) => {
    return (
        <ProfilePresentationContainer >
            {/* <YellowContainer>
                <div></div>
            </YellowContainer> */}
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.location}</p>
            </div>
        </ProfilePresentationContainer >
    )
}