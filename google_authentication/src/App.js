import Navbar from "./components/navbar/Navbar";
import styled from "styled-components"
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";

function App() {
  return (
    <Container>
      <Navbar/>
      {/* <Home/> */}
      <Post/>
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
