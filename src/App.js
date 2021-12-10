import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Login/Index';
import Cadastro from './components/Cadastro';
import Home from './components/Home';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Link className="navbar-brand" to="/">CS Esportes</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastre-se agora</Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
        </Router>
    </>
  );
}

export default App;