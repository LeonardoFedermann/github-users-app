import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import axios from 'axios'
import { MainContainer, ProfileImage } from '../style/style'
import { BASE_URL } from '../base url/BaseURL'
import { GlobalContext } from '../global/GlobalContext'
import { ProfileHeader } from '../components/ProfileHeader'
import { goBack, goToLogin } from '../coordinator/Coordinator'
import { ProfilePresentation } from '../components/ProfilePresentation'
import { ProfileNumbers } from '../components/ProfileNumbers'
import { ProfileBio } from '../components/ProfileBio'

export default function ProfilePage() {
    const [user, setUser] = useState({})
    const { logedUser, setLogedUser } = useContext(GlobalContext)
    const history = useHistory()
    const { username } = useParams()

    useProtectedPage(history)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setUser(user.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const logout = () => {
        setLogedUser({})
        goToLogin(history)
    }

    const saveUser = () => {
        setLogedUser(user)
    }

    return (
        <MainContainer>
            <ProfileHeader
                login={user.login}
                function={logedUser.login === user.login ? logout : saveUser}
                buttonWord={logedUser.login === user.login ? 'Sair' : 'Salvar'}
                buttonColor={logedUser.login === user.login ? 'red' : 'green'}
                goToLastPage={() => goBack(history)}
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
        </MainContainer>
    )
}