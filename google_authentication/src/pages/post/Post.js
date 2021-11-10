import React from 'react'
import styled from "styled-components"

const Post = () => {
    return (
        <PostContainer>
            <PostImage>
                <img src="" alt="" />
            </PostImage>
            <PostTitle>

            </PostTitle>
            <PostDesc>

            </PostDesc>
            <PostLongDesc>

            </PostLongDesc>
        </PostContainer>
    )
}

const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const PostImage = styled.div`
img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
}
`;

const PostTitle = styled.h2`

`;

const PostDesc = styled.div`
padding: 0 100px;
foont-size: 24px;
font-weight: 300;
color: gray;
margin-top: 50px;
`;

const PostLongDesc = styled.div`
padding: 100px;
padding-top: 50px;
font-size: 18px;
line-height: 24px;
`;

export default Post
