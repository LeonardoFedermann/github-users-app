import styled from 'styled-components'
import { borderColor, darkColor } from './colors'

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
