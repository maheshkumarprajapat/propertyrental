import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './InnerHeader.style.css'
export default function InnerHeader() {
    return (
        <div className="inner-header">
            <Navbar expand="md">
                <Container>
                    <NavLink to='/'>
                        <Navbar.Brand><img src="/images/logo.png" className="img-fluid" alt="logo" /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" exact activeClassName="active" className='nav-link' >Home</NavLink>
                            <NavLink to="/about" activeClassName="active" className='nav-link' >About</NavLink>
                            <NavLink to="/blog" activeClassName="active" className='nav-link' >Blog</NavLink>
                            <NavLink to="/service" activeClassName="active" className='nav-link' >Service</NavLink>
                            <NavLink to="/contact" activeClassName="active" className='nav-link' >Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
