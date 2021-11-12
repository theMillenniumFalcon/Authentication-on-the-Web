import React from 'react'
import styled from "styled-components"
import Card from '../../components/card/Card'
import { posts } from "../../data"


const Home = () => {
    return (
        <HomeContainer>
            {posts.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
display: flex;
padding: 50px 100px;
justify-content: space-between;
flex-wrap: wrap;
`;

export default Home
