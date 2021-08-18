import React from 'react'
import { MainContainer } from '../style/mainContainerStyle'
import { UserCard } from '../components/users/UserCard'
import { UsersListHeader } from '../components/users/UsersListHeader'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { goToProfile } from '../coordinator/Coordinator'
import { getFollowers } from '../redux/actions/getFollowers'
import { useSelector, useDispatch } from 'react-redux'
import { getQuantityFollowers } from '../redux/actions/getQuantityFollowers'

export default function FollowersPage() {
    const followers = useSelector(state => state.followers)
    const logedUser = useSelector(state => state.logedUser)
    const quantity = useSelector(state => state.quantity)
    const dispatch = useDispatch()
    const history = useHistory()
    const { username } = useParams()

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = `${username}'s followers`
        getUserFollowers()
    }, [])

    const getUserFollowers = () => {
        dispatch(getFollowers(username))
        dispatch(getQuantityFollowers(username))
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${username} has ${quantity} followers`}
            />
            {followers && followers.map((follower, index) => {
                return <UserCard
                    key={index}
                    login={follower.login}
                    imageUrl={follower.avatar_url}
                    checkUser={() => goToProfile(history, follower.login)}
                />
            })}
        </MainContainer>
    )
}