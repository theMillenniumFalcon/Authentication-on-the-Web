import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/login" 
          element={ user ? <Navigate to="/"/> : <Login/> }/>
          <Route exact path="/post/:id" element={ user ? <Post/> : <Navigate to="/login" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
