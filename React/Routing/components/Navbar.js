import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import About from "./About.js"

const navBar = () => {
    return (
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand className="nav-title" href="home">음악 컨퍼런스</Navbar.Brand>
                    <Nav className="me_auto">
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="people">People</Nav.Link>
                        <Nav.Link href="demo">Demo</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
    )
}

export default navBar;