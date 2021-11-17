import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
height: 50px;
background-color: rgb(13, 17, 19);
color: white;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Logo = styled.div`
font-size: 20px;
font-weight: bold;
`;

const List = styled.ul`
display: flex;
align-items: center;
list-style: none;
`;

const ListItem = styled.li`
margin-right: 20px;
font-weight: 500;
cursor: pointer;
`;

const Avatar = styled.div`
img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>
                {/* <Link to="/">React App</Link> */}
                React App 
            </Logo>
            <List>
                <ListItem>
                        <Avatar>
                            <img src="https://media.istockphoto.com/vectors/portrait-of-a-shorthaired-girl-androgin-lookingwith-asidelongglance-vector-id1190626181?k=20&m=1190626181&s=612x612&w=0&h=cqzcsUXp3pPDeFYJqspZY7amsnGzv9X9ZGQatwUeKEo=" 
                            alt="" />
                        </Avatar>
                </ListItem>
                <ListItem>Rebecca</ListItem>
                <ListItem>Logout</ListItem>
            </List>
        </NavbarContainer>
    )
}

export default Navbar
