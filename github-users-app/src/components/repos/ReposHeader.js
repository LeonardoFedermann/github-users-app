import React from 'react'
import { ReposHeaderContainer } from '../../style/reposStyle'
import { goBack } from '../../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const ReposHeader = (props) => {
    const history = useHistory()

    return (
        <ReposHeaderContainer>
            <h4 onClick={() => goBack(history)}>&#x2190;</h4>
            <h4>{props.username} has {props.publicRepos} repositories</h4>
        </ReposHeaderContainer>
    )
}