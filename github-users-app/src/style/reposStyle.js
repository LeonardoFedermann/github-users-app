import styled from 'styled-components'
import { borderColor, darkColor } from './colors'

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
width: 100%;
margin-top: 5%;
border-bottom: 1px solid ${borderColor};
display: flex;
align-items: start;
justify-content: center;
div{
    width: 90%;
    h3{
        margin: 0;
    }
}
`