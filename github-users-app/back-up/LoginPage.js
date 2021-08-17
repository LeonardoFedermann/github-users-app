import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { LoginContainer, LoginForm, StyledTextField, StyledButton } from '../style/loginStyle'
import { githubLogo } from '../images/images'
import { useForm } from '../custom hooks/useForm'
import { BASE_URL } from '../base url/BaseURL'
import { goToFirstProfile } from '../coordinator/Coordinator'
import { useUnprotectedPage } from '../custom hooks/useUnprotectedPage'
import { saveUser } from '../redux/actions/logedUser/saveUser'
import { changeUser } from '../redux/actions/logedUser/changeUser'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginPage() {
    const [user, setUser] = useState({})
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const [form, setForm, handleValues] = useForm({ username: "" })
    const history = useHistory()

    useUnprotectedPage(history, logedUser)
    
    useEffect(() => {
        document.title = 'Welcome to GitHub Users App!'
        dispatch(saveUser(user))
        // user.login && goToFirstProfile(history, form.username)
    }, [user])

    const login = async (e) => {
        e.preventDefault()
        try {
            const userInfo = await axios.get(`${BASE_URL}/users/${form.username}`)
            // const userInfo = dispatch(saveUser(form.username))
            setUser(userInfo.data)
            goToFirstProfile(history, form.username)
            // dispatch(changeUser(form.username))
            // setUser(logedUser)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <LoginContainer>
            <img alt="GitHub Logo" src={githubLogo} />
            <LoginForm onSubmit={login}>
                <StyledTextField
                    required
                    label="User"
                    color="black"
                    variant="filled"
                    onChange={handleValues}
                    name="username"
                    value={form.username}
                />
                <StyledButton
                    color="secondary"
                    variant="contained"
                    type='submit'
                >
                    Sign in
                </StyledButton>
            </LoginForm>
        </LoginContainer>
    )
}