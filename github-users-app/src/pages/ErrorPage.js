import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer } from '../style/mainContainerStyle'
import { StyledButton, ErrorContainer } from '../style/errorStyle'
import { goToLogin } from '../coordinator/Coordinator'
import { githubLogo } from '../images/images'

export default function ErrorPage() {
    const history = useHistory()

    useEffect(() => {
        document.title = `Ops! There is nothing here!`
    }, [])

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