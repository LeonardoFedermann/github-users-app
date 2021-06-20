import React, { useContext } from 'react'
import { UserCardContainer, YellowContainer } from '../style/style'
import { GlobalContext } from '../global/GlobalContext'
import { goBack } from '../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const UserCard = (props) => {
        return (
        <UserCardContainer>
            {/* <YellowContainer /> */}
            <div>
                <img alt={props.login} src={props.imageUrl} />
                <h4>{props.login}</h4>
            </div>
            <h2 onClick={props.checkUser}>&#8594;</h2>
        </UserCardContainer>
    )
}