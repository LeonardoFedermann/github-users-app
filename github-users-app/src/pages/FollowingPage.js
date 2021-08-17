import React, { useState } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/mainContainerStyle'
import { UserCard } from '../components/users/UserCard'
import { goToProfile } from '../coordinator/Coordinator'
import { UsersListHeader } from '../components/users/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { getFollowingUsers } from '../redux/actions/getFollowingUsers'
import { useSelector, useDispatch } from 'react-redux'

export default function FollowingPage() {
    const history = useHistory()
    const logedUser = useSelector(state => state.logedUser)
    const followingUsers = useSelector(state => state.followingUsers)
    const dispatch = useDispatch()
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = `Who follows ${username}`
        getFollowing()
    }, [])

    const getFollowing = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            dispatch(getFollowingUsers(username))
            setQuantity(user.data.following)
        } catch (error) {
            alert(error.response.data.message)
        }
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