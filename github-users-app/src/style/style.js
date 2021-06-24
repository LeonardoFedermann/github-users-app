import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/button'

// COLORS
export const primary = '#3b444b'
export const secondary = '#ffc425'
export const darkColor = '#232b2b'
export const borderColor = '#a7adba'

//MAIN CONTAINER
export const MainContainer = styled.main`
width: 100%;
height: 100vh;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${primary};
color: white;
font-family: 'Arial';
`

// LOGIN PAGE
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

// PROFILE PAGE
export const ProfileImage = styled.img`
width: 100px;
border-radius: 50%;
border: 5px solid white;
transform: translatey(-7.5vh);
`

export const ProfileHeaderContainer = styled.header`
width: 100%;
height: 15vh;
background-color: ${darkColor};
display: flex;
justify-content: space-between;
align-items: start;
h3{
    color: white;
    margin: 5%;
}
p{
    color: ${props=>props.buttonColor};
    margin: 5%;
    cursor: pointer;
}
h4{
    margin-left: 5%;
}
`

export const ProfilePresentationContainer = styled.section`
width: 100%;
height: 10vh;
margin-bottom: 3vh;
background-color: ${primary};
display: flex;
align-items: center;
justify-content: flex-end;
div{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    h1{
        margin-bottom: 0;
    }
    p{
        margin: 0;
    }
}
`

export const ProfileNumbersContainer = styled.section`
width: 100%;
height: 15vh;
background-color: ${darkColor};
display:flex;
align-items: center;
justify-content: space-around;
div{
    height: 100%;
    width: 33.33%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1{
        margin: 0;
        font-size: 3em;
    }
    p{
        margin: 0;
    }
}
`

export const ProfileBioContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
p{
    margin: 2% 10% 0 10%;
}
h1{
    margin: 5% 10% 0 10%;
}
`

// REPOS
export const ReposHeaderContainer = styled.header`
width: 100%;
height: 75px;
background-color: ${darkColor};
display: flex;
justify-content: flex-start;
align-items: center;
h4{
    color: white;
    margin: 5%;
}
p{
    color: red;
    margin: 5%;
    cursor: pointer;
}
`

export const ReposCardContainer = styled.section`
height: 90px;
width: 100%;
margin-top: 5%;
border-bottom: 1px solid ${borderColor};
display: flex;
align-items: start;;
justify-content: flex-end;
div{
    width: 90%;
    h3{
        margin: 0;
    }
}
`

//LIST OF FOLLOWERS AND FOLLOWING USERS
export const UserCardContainer = styled.section`
height: 90px;
width: 100%;
padding: 5% 0;
border-bottom: 1px solid ${borderColor};
display: flex;
align-items: center;
justify-content: space-between;
div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width:70%;
    h4{
        margin-left: 5%;
    }
}
img{
    margin-left: 5%;
    width: 60px;
    border-radius: 50%;
    border: 2px solid white;
}
h2{
    margin-right: 7%;
}
`

export const UsersListHeaderContainer = styled.header`
width: 100%;
height: 75px;
background-color: ${darkColor};
display: flex;
justify-content: flex-start;
align-items: center;
h4{
    color: white;
    margin: 5%;
}
p{
    color: red;
    margin: 5%;
    cursor: pointer;
}
`

// ERROR PAGE
export const ErrorContainer = styled.main`
width: 85%;
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