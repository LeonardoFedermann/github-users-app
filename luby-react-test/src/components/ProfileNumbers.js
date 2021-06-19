import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ProfileNumbersContainer, YellowContainer } from '../style/style'
import { GlobalContext } from '../global/GlobalContext'
import {goToListOfFollowers, goToListOfFollowingUsers, goToReposList} from '../coordinator/Coordinator'

export const ProfileNumbers = (props) => {
    const history = useHistory()

    return (
        <ProfileNumbersContainer >
            <div onClick={()=>goToListOfFollowers(history, props.login)}>
                <h1>{props.followers}</h1>
                <p>Seguidores</p>
            </div>
            <div onClick={()=>goToListOfFollowingUsers(history, props.login)}>
                <h1>{props.following}</h1>
                <p>Seguindo</p>
            </div>
            <div onClick={()=>goToReposList(history, props.login)}>
                <h1>{props.repos}</h1>
                <p>Repos</p>
            </div>
        </ProfileNumbersContainer >
    )
}