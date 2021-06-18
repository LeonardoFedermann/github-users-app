import React, {useState, useEffect, useContext} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useProtectedPage} from '../custom hooks/useProtectedPage'
import axios from 'axios'
import {MainContainer, ProfileImage} from '../style/style'
import {BASE_URL} from '../base url/BaseURL'
import {GlobalContext} from '../global/GlobalContext'

export default function ProfilePage (){
    const {user, setUser} = useContext(GlobalContext)
    const history = useHistory()

    useProtectedPage(history)

    return (
        <MainContainer>
             <ProfileImage alt={user.login} src={user.avatar_url}/>
        </MainContainer>
    )
}