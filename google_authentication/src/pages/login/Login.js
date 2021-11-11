import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppleIcon from '@material-ui/icons/Apple';
import GitHubIcon from '@material-ui/icons/GitHub';

const Login = () => {
    return (
        <LoginContainer>
            <LoginTitle>Choose a Login Method</LoginTitle>
            <LoginWrapper>
                <LeftContainer>
                    <LoginButton>
                        <Icon>
                            <FacebookIcon/>
                        </Icon>
                    </LoginButton>
                    <LoginButton>
                        <Icon>
                            <AppleIcon/>
                        </Icon>
                    </LoginButton>
                    <LoginButton>
                        <Icon>
                            <GitHubIcon/>
                        </Icon>
                    </LoginButton>
                </LeftContainer>
                <RightContainer></RightContainer>
            </LoginWrapper>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`

`;

const LoginTitle = styled.h1`

`;

const LoginWrapper = styled.div`

`;

const LeftContainer = styled.div`

`;

const RightContainer = styled.div`

`;

const LoginButton = styled.div`

`;

const Icon = styled.div`

`;

export default Login
