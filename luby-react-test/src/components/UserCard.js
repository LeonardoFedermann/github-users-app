import React from 'react'
import { UserCardContainer } from '../style/style'

export const UserCard = (props) => {
    return (
        <UserCardContainer>
            <div>
                <img alt={props.login} src={props.imageUrl} />
                <h4>{props.login}</h4>
            </div>
            <h2 onClick={props.checkUser}>&#8594;</h2>
        </UserCardContainer>
    )
}