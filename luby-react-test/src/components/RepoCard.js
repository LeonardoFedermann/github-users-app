import React from 'react'
import { ReposCardContainer } from '../style/style'

export const RepoCard = (props) => {
    return (
        <ReposCardContainer>
            <div>
                <h3>{props.name}</h3>
                <p>{props.descrition}</p>
                <p><strong>&#9733;</strong> {props.stargazers}</p>
            </div>
        </ReposCardContainer>
    )
}