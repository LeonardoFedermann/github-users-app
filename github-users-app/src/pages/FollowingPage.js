import React, { useState } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/style'
import { UserCard } from '../components/UserCard'
import { goToProfile } from '../coordinator/Coordinator'
import { UsersListHeader } from '../components/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useProtectedPage } from '../custom hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'

function FollowingPage(props) {
    const history = useHistory()
    const { logedUser, followingUsers, setFollowingUsers } = props
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)

    useProtectedPage(history, logedUser)

    useEffect(() => {
        getFollowingUsers()
    }, [])

    const getFollowingUsers = async () => {
        try {
            const followingUsers = await axios.get(`${BASE_URL}/users/${username}/following`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setFollowingUsers(followingUsers.data)
            setQuantity(user.data.following)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${username} segue ${quantity} usuários`}
            />
            {followingUsers && followingUsers.map((followingUser) => {
                return <UserCard
                    login={followingUser.login}
                    imageUrl={followingUser.avatar_url}
                    checkUser={() => goToProfile(history, followingUser.login)}
                />
            })}
        </MainContainer>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
const mapStateToProps = state => ({
    followingUsers: state.followingUsers,
    logedUser: state.logedUser
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowingPage)