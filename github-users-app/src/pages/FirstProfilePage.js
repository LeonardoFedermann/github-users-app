import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { MainContainer } from '../style/mainContainerStyle'
import { ProfileImage } from '../style/profileStyle'
import { FirstProfileHeader } from '../components/profile/FirstProfileHeader'
import { goToLogin } from '../coordinator/Coordinator'
import { ProfilePresentation } from '../components/profile/ProfilePresentation'
import { ProfileNumbers } from '../components/profile/ProfileNumbers'
import { ProfileBio } from '../components/profile/ProfileBio'
import { changeLogedUser } from '../redux/actions/changeLogedUser'
import { getRenderedUser } from '../redux/actions/getRenderedUser'
import { useSelector, useDispatch } from 'react-redux'

export default function FirstProfilePage() {
    const renderedUser = useSelector(state => state.renderedUser)
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const { username } = useParams()

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = renderedUser.login ? `${renderedUser.login}'s profile` : 'loading'
        dispatch(getRenderedUser(username))
    }, [renderedUser])

    const logout = () => {
        dispatch(changeLogedUser())
        goToLogin(history)
    }

    return (
        <MainContainer>
            <>
                <FirstProfileHeader
                    login={renderedUser.login}
                    function={
                        logedUser.login === renderedUser.login ?
                            logout :
                            () => dispatch(changeLogedUser(renderedUser.login))
                    }
                    buttonWord={logedUser.login === renderedUser.login ? 'Log out' : 'Save'}
                    buttonColor={logedUser.login === renderedUser.login ? 'red' : 'green'}
                />
                <ProfileImage alt={renderedUser.login} src={renderedUser.avatar_url} />
                <ProfilePresentation
                    name={renderedUser.login && renderedUser.name ?
                        renderedUser.name :
                        renderedUser.login}
                    email={renderedUser.email}
                    location={renderedUser.location}
                />
                <ProfileNumbers
                    login={renderedUser.login}
                    followers={renderedUser.followers}
                    following={renderedUser.following}
                    repos={renderedUser.public_repos}
                />
                <ProfileBio
                    bio={renderedUser.bio}
                />
            </>
        </MainContainer>
    )
}