import React, { useState } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/mainContainerStyle'
import { UserCard } from '../components/users/UserCard'
import { UsersListHeader } from '../components/users/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { goToProfile } from '../coordinator/Coordinator'
import { getFollowers } from '../redux/actions/followers/getFollowers'
import { useSelector, useDispatch } from 'react-redux'

export default function FollowersPage() {
    const followers = useSelector(state => state.followers)
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)


    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = `${username}'s followers`
        getUserFollowers()
    }, [])

    const getUserFollowers = async () => {
        try {
            // const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
            dispatch(getFollowers(username))
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setQuantity(user.data.followers)
        } catch (error) {
            alert(error.response.data.message)
        }
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