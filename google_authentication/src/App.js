import Navbar from "./components/navbar/Navbar";
import styled from "styled-components"
import Home from "./pages/home/Home";

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
