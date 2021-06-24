import React, { useState, useContext } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/style'
import { UserCard } from '../components/UserCard'
import { GlobalContext } from '../global/GlobalContext'
import { UsersListHeader } from '../components/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { goToProfile } from '../coordinator/Coordinator'

export default function FollowersPage() {
    const { followers, setFollowers } = useContext(GlobalContext)
    const history = useHistory()
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history)

    useEffect(() => {
        getFollowers()
    }, [])

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setFollowers(followers.data)
            setQuantity(user.data.followers)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${quantity} usuários seguem ${username}`}
            />
            {followers && followers.map((follower) => {
                return <UserCard
                    login={follower.login}
                    imageUrl={follower.avatar_url}
                    checkUser={() => goToProfile(history, follower.login)}
                />
            })}
        </MainContainer>
    )
}