import React from 'react'
import { MainContainer } from '../style/mainContainerStyle'
import { UserCard } from '../components/users/UserCard'
import { goToProfile } from '../coordinator/Coordinator'
import { UsersListHeader } from '../components/users/UsersListHeader'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { getFollowingUsers } from '../redux/actions/getFollowingUsers'
import { getQuantityFollowing } from '../redux/actions/getQuantityFollowing'
import { useSelector, useDispatch } from 'react-redux'

export default function FollowingPage() {
    const history = useHistory()
    const logedUser = useSelector(state => state.logedUser)
    const followingUsers = useSelector(state => state.followingUsers)
    const quantity = useSelector(state => state.quantity)
    const dispatch = useDispatch()
    const { username } = useParams()

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = `Who follows ${username}`
        getFollowing()
    }, [])

    const getFollowing = () => {
        dispatch(getFollowingUsers(username))
        dispatch(getQuantityFollowing(username))
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${username} follows ${quantity} users`}
            />
            {followingUsers && followingUsers.map((followingUser, index) => {
                return <UserCard
                    key={index}
                    login={followingUser.login}
                    imageUrl={followingUser.avatar_url}
                    checkUser={() => goToProfile(history, followingUser.login)}
                />
            })}
        </MainContainer>
    )
}