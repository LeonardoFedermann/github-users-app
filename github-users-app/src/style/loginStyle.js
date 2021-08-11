import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { primary } from './colors'

export const LoginContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${primary};
color: white;
font-family: 'Arial';
img{
    width: 30%;
}
`

export const LoginForm = styled.form`
width: 60%;
height: 18%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const StyledTextField = styled(TextField)`
width: 100%;
color: white;
`

export const StyledButton = styled(Button)`
width: 100%;
`
