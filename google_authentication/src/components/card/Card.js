import React from 'react'
import styled from "styled-components"

const CardContainer = styled.div`
width: 30%;
padding: 10px;
-webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
`;

const CardTitle = styled.h2`

`;

const CardImage = styled.div`
img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 20px 0px;
}
`;

const CardDesc = styled.div`
color: #333;
margin-bottom: 20px;
line-height: 25px;
`;

const CardButton = styled.button`
border: none;
border-radius: 10px;
background-color: rgba(53, 16, 102, 0.678);
padding: 10px;
color: white;
font-weight: bold;
cursor: pointer;
`;

const Card = ({ post }) => {
    return (
        <CardContainer>
            <CardTitle>{post.title}</CardTitle>
            <CardImage>
                <img src={post.img} alt="" />
            </CardImage>
            <CardDesc>{post.desc}</CardDesc>
            <CardButton>Read More</CardButton>
        </CardContainer>
    )
}

export default Card
