import React, { useContext } from 'react'
import { ProfileBioContainer } from '../style/style'
import { GlobalContext } from '../global/GlobalContext'

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