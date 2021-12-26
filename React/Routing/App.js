import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js';
import About from './components/About.js';
import People from './components/People.js';
import Demo from './components/Demo.js';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import reactDom from 'react-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <About />
      <People />
      <Demo />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <h1>음악 컨퍼런스</h1> */}
        {/* <ul class="navbar__menu">
          <li><NavLink exact to="/about">About</NavLink></li>
          <li><NavLink exact to="/people">People</NavLink></li>
          <li><NavLink exact to="/demo">Demo</NavLink></li>
        </ul> */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={"Not Found"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
