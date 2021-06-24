import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, StyledButton, ErrorContainer } from '../style/style'
import { goToLogin } from '../coordinator/Coordinator'
import { githubLogo } from '../images/images'

export default function ErrorPage() {
    const history = useHistory()
    return (
        <MainContainer>
            <ErrorContainer>
                <img alt="GitHub Logo" src={githubLogo} />
                <h1>Ops! Não há nada aqui</h1>
                <p>Parece que esse link não existe. De qualquer forma, você pode ir para nossa página inicial. Lá você encontrará todas as orientações de que precisa.</p>
                <StyledButton
                    color="secondary"
                    variant="contained"
                    onClick={() => goToLogin(history)}
                >
                    Página inicial
                </StyledButton>
            </ErrorContainer>
        </MainContainer>
    )
}