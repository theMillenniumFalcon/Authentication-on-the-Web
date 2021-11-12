import Navbar from "./components/navbar/Navbar";
import styled from "styled-components"
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Login from "./pages/login/Login";

function App() {
  return (
    <Container>
      <Navbar/>
      {/* <Home/> */}
      {/* <Post/> */}
      <Login/>
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
