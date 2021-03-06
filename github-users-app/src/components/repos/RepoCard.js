import React from 'react'
import { ReposCardContainer } from '../../style/reposStyle'

export const RepoCard = (props) => {
    return (
        <ReposCardContainer>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p><strong>&#9733;</strong> {props.stargazers}</p>
            </div>
        </ReposCardContainer>
    )
}