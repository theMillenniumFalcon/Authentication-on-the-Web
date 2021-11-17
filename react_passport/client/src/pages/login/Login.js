import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppleIcon from '@material-ui/icons/Apple';
import GitHubIcon from '@material-ui/icons/GitHub';

const LoginContainer = styled.div`
height: calc(100vh - 50px);
display: flex;
align-items: center;
justify-content: center;
`;

const LoginTitle = styled.h1`
position: absolute;
top: 150px;
color: gray;
`;

const LoginWrapper = styled.div`
width: 60%;
height: 75%;
-webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
display: flex;
align-items: center;
border-radius: 20px;
`;

const LeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`;

const CenterContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

const Line = styled.div`
width: 0.5px;
height: 70%;
background-color: lightgray;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
z-index: -1;
`;

const OR = styled.div`
border: 2px solid lightgray;
border-radius: 50%;
padding: 10px;
color: gray;
background-color: white;
font-weight: bold;
`;

const RightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
input {
    width: 200px;
    padding: 15px 20px;
    margin-bottom: 20px;
}
`;

const LoginButton = styled.div`
width: 150px;
padding: 15px 25px;
border: 2px solid black;
border-radius: 5px;
color: black;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
cursor: pointer;
`;

const Icon = styled.div`
margin-right: 7px;
`;

const Name = styled.h4`
font-size: 20px;
font-weight: 700;
`;

const Button = styled.div`
width: 190px;
padding: 15px 25px;
border: 2px solid black;
border-radius: 5px;
color: black;
font-size: 25px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

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
                        <Name>Facebook</Name>
                    </LoginButton>
                    <LoginButton>
                        <Icon>
                            <AppleIcon/>
                        </Icon>
                        <Name>Apple</Name>
                    </LoginButton>
                    <LoginButton>
                        <Icon>
                            <LinkedInIcon/>
                        </Icon>
                        <Name>LinkedIn</Name>
                    </LoginButton>
                    <LoginButton>
                        <Icon>
                            <GitHubIcon/>
                        </Icon>
                        <Name>Github</Name>
                    </LoginButton>
                </LeftContainer>
                <CenterContainer>
                    <Line/>
                    <OR>OR</OR>
                </CenterContainer>
                <RightContainer>
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='Password' />
                    <Button>Submit</Button>
                </RightContainer>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login
