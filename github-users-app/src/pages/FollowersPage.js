import React, { useState } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/style'
import { UserCard } from '../components/UserCard'
import { UsersListHeader } from '../components/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { goToProfile } from '../coordinator/Coordinator'
import { setFollowers } from '../redux/actions/followers/setFollowers'
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
        getFollowers()
    }, [])

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            dispatch(setFollowers(followers.data))
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