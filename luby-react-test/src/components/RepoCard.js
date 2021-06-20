import React, { useContext } from 'react'
import { ReposCardContainer, YellowContainer } from '../style/style'
import { GlobalContext } from '../global/GlobalContext'
import { goBack } from '../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const RepoCard = (props) => {
    return (
        <ReposCardContainer>
            {/* <YellowContainer /> */}
            <div>
                <h3>{props.name}</h3>
                <p>{props.descrition}</p>
                <p><strong>&#9733;</strong> {props.stargazers}</p>
            </div>
        </ReposCardContainer>
    )
}