import styled from 'styled-components'
import { primary } from './colors'

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