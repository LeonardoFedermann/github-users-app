import styled from 'styled-components'
import { darkColor, primary } from './colors'

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
    color: ${props => props.buttonColor};
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