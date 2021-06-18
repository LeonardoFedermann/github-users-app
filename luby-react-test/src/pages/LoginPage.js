import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { LoginContainer, LoginForm, StyledTextField, StyledButton } from '../style/style'
import { githubLogo } from '../images/images'
import { useForm } from '../custom hooks/useForm'
import {BASE_URL} from '../base url/BaseURL'
import { goToProfile } from '../coordinator/Coordinator'
import {GlobalContext} from '../global/GlobalContext'

export default function LoginPage() {

    const [form, setForm, handleValues, resetForm] = useForm({ username: "" })
    const history = useHistory()
    const {user, setUser} = useContext(GlobalContext)

    const login = async(e) =>{
        e.preventDefault()
        try{
            const user = await axios.get(`${BASE_URL}/users/${form.username}`)
            setUser(user.data)
            goToProfile(history, form.username)
        }catch(error){
            alert(error.response.data.message)
        }
    }

    return (
        <LoginContainer>
            <img alt="GitHub Logo" src={githubLogo} />
            <LoginForm onSubmit={login}>
                <StyledTextField
                    required
                    label="Usuário"
                    color="black"
                    variant="filled"
                    onChange={handleValues}
                    name="username"
                    value={form.username}
                />
                <StyledButton
                    color="secondary"
                    variant="contained"
                    onClick={login}
                >
                    Entrar
                </StyledButton>
            </LoginForm>
        </LoginContainer>
    )
}