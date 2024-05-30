import React, { useEffect } from 'react';
import './App.css'
import {Button, Container, Form, Nav,  Navbar} from 'react-bootstrap';
import Logo from './assets/image/logo.jpg'
import Time from './pages/Time';
import Home from './pages/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CilentData from './pages/CilentData';



function App() {

const navigate = useNavigate()

  return (
    <div className='app'>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/cilentdata' element={<CilentData/>}/>
       </Routes>
       <div className="navbar-div">
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={()=>navigate('/')}>
        <img
              alt=""
              src={Logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Dairy Dev & Aayu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto nav">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/cilentdata')}>Client Data</Nav.Link>
            <Nav.Link >Prices</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
       {/* <Time/> */}
       {/* <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/cilentdata' element={<CilentData/>}/>
       </Routes> */}
    </div>
  )
}

export default App