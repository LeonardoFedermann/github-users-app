import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import axios from 'axios'
import { MainContainer } from '../style/mainContainerStyle'
import { ProfileImage } from '../style/profileStyle'
import { BASE_URL } from '../base url/BaseURL'
import { FirstProfileHeader } from '../components/profile/FirstProfileHeader'
import { goToLogin } from '../coordinator/Coordinator'
import { ProfilePresentation } from '../components/profile/ProfilePresentation'
import { ProfileNumbers } from '../components/profile/ProfileNumbers'
import { ProfileBio } from '../components/profile/ProfileBio'
import { changeUser } from '../redux/actions/changeUser'
import { useSelector, useDispatch } from 'react-redux'

export default function FirstProfilePage() {
    const [user, setUser] = useState({})
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const { username } = useParams()

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = user.login ? `${user.login}'s profile` : 'loading'
        getUser()
    }, [user])

    const getUser = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setUser(user.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const logout = () => {
        dispatch(changeUser())
        goToLogin(history)
    }

    return (
        <MainContainer>
            <>
                <FirstProfileHeader
                    login={user.login}
                    function={logedUser.login === user.login ? logout : () => dispatch(changeUser(user.login))}
                    buttonWord={logedUser.login === user.login ? 'Log out' : 'Save'}
                    buttonColor={logedUser.login === user.login ? 'red' : 'green'}
                />
                <ProfileImage alt={user.login} src={user.avatar_url} />
                <ProfilePresentation
                    name={user.login && user.name ?
                        user.name :
                        user.login}
                    email={user.email}
                    location={user.location}
                />
                <ProfileNumbers
                    login={user.login}
                    followers={user.followers}
                    following={user.following}
                    repos={user.public_repos}
                />
                <ProfileBio
                    bio={user.bio}
                />
            </>
        </MainContainer>
    )
}