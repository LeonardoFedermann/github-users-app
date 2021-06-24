import React from 'react'
import { ProfileBioContainer } from '../style/style'

export const ProfileBio = (props) => {
    return (
        <ProfileBioContainer>
            {props.bio &&
                <>
                    <h1>BIO</h1>
                    <p>{props.bio}</p>
                </>
            }
        </ProfileBioContainer>
    )
}