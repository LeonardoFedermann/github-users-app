import React from 'react'
import { useHistory } from 'react-router-dom'
import { ProfileNumbersContainer } from '../../style/profileStyle'
import { goToListOfFollowers, goToListOfFollowingUsers, goToReposList } from '../../coordinator/Coordinator'

export const ProfileNumbers = (props) => {
    const history = useHistory()

    return (
        <ProfileNumbersContainer >
            <div onClick={() => goToListOfFollowers(history, props.login)}>
                <h1>{props.followers}</h1>
                <p>Followers</p>
            </div>
            <div onClick={() => goToListOfFollowingUsers(history, props.login)}>
                <h1>{props.following}</h1>
                <p>Following</p>
            </div>
            <div onClick={() => goToReposList(history, props.login)}>
                <h1>{props.repos}</h1>
                <p>Repos</p>
            </div>
        </ProfileNumbersContainer >
    )
}