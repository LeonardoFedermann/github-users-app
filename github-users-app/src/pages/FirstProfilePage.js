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
import { changeLogedUser } from '../redux/actions/logedUser/changeLogedUser'
import { getRenderedProfile } from '../redux/actions/renderedProfile/getRenderedProfile'
import { useSelector, useDispatch } from 'react-redux'

export default function FirstProfilePage() {
    const renderedProfile = useSelector(state => state.renderedProfile)
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const { username } = useParams()

    useProtectedPage(history, logedUser)

    useEffect(() => {
        document.title = renderedProfile.login ? `${renderedProfile.login}'s profile` : 'loading'
        dispatch(getRenderedProfile(username))
    }, [renderedProfile])

    const logout = () => {
        dispatch(changeLogedUser())
        goToLogin(history)
    }

    return (
        <MainContainer>
            <>
                <FirstProfileHeader
                    login={renderedProfile.login}
                    function={
                        logedUser.login === renderedProfile.login ?
                            logout :
                            () => dispatch(changeLogedUser(renderedProfile.login))
                    }
                    buttonWord={logedUser.login === renderedProfile.login ? 'Log out' : 'Save'}
                    buttonColor={logedUser.login === renderedProfile.login ? 'red' : 'green'}
                />
                <ProfileImage alt={renderedProfile.login} src={renderedProfile.avatar_url} />
                <ProfilePresentation
                    name={renderedProfile.login && renderedProfile.name ?
                        renderedProfile.name :
                        renderedProfile.login}
                    email={renderedProfile.email}
                    location={renderedProfile.location}
                />
                <ProfileNumbers
                    login={renderedProfile.login}
                    followers={renderedProfile.followers}
                    following={renderedProfile.following}
                    repos={renderedProfile.public_repos}
                />
                <ProfileBio
                    bio={renderedProfile.bio}
                />
            </>
        </MainContainer>
    )
}