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
                <h1>Ops! There is nothing here.</h1>
                <p>
                    It looks like this URL doesn't exist. However, you may go to our home page! There you will find all the information you need.
                 </p>
                <StyledButton
                    color="secondary"
                    variant="contained"
                    onClick={() => goToLogin(history)}
                >
                    Home Page
                </StyledButton>
            </ErrorContainer>
        </MainContainer>
    )
}