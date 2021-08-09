import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { LoginContainer, LoginForm, StyledTextField, StyledButton } from '../style/style'
import { githubLogo } from '../images/images'
import { useForm } from '../custom hooks/useForm'
import { BASE_URL } from '../base url/BaseURL'
import { goToFirstProfile } from '../coordinator/Coordinator'
import { useUnprotectedPage } from '../custom hooks/useUnprotectedPage'
import { saveUser } from '../redux/actions/logedUser/saveUser'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginPage() {
    const [user, setUser] = useState({})
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const [form, setForm, handleValues] = useForm({ username: "" })
    const history = useHistory()

    useUnprotectedPage(history, logedUser)

    useEffect(() => {
        dispatch(saveUser(user))
    }, [user])

    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.get(`${BASE_URL}/users/${form.username}`)
            setUser(user.data)
            goToFirstProfile(history, form.username)
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