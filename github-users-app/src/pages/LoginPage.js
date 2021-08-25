import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContainer, LoginForm, StyledTextField, StyledButton } from '../style/loginStyle'
import { githubLogo } from '../images/images'
import { useForm } from '../custom hooks/useForm'
import { goToFirstProfile } from '../coordinator/Coordinator'
import { useUnprotectedPage } from '../custom hooks/useUnprotectedPage'
import { changeLogedUser } from '../redux/actions/logedUser/changeLogedUser'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginPage() {
    const logedUser = useSelector(state => state.logedUser)
    const dispatch = useDispatch()
    const [form, setForm, handleValues] = useForm({ username: "" })
    const history = useHistory()

    useUnprotectedPage(history, logedUser)

    useEffect(() => {
        document.title = 'Welcome to GitHub Users App!'
        logedUser.login && goToFirstProfile(history, form.username)
    }, [logedUser])

    const login = (e) => {
        e.preventDefault()
        dispatch(changeLogedUser(form.username))
    }

    return (
        <LoginContainer>
            <img alt="GitHub Logo" src={githubLogo} />
            <LoginForm onSubmit={login}>
                <StyledTextField
                    required
                    label="User"
                    color="secondary"
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