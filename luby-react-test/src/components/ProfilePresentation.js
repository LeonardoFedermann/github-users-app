import React from 'react'
import { ProfilePresentationContainer } from '../style/style'

export const ProfilePresentation = (props) => {
    return (
        <ProfilePresentationContainer >
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.location}</p>
            </div>
        </ProfilePresentationContainer >
    )
}