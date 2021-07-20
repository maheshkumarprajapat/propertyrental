import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Header.style.css'
import { Navdata } from './data'
import { NavLink } from 'react-router-dom'
import TopHeader from '../TopHeader/TopHeader'

export default function Header() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
    }, [])
     return (
        <React.Fragment>
            <header>
                <TopHeader />
                {/* Header  */}
                <div className={`header-main-section ${show && 'active'}`}>
                    <Container>
                        <Navbar expand="md">
                           <NavLink to='/'>
                           <Navbar.Brand>
                                <img src="/images/logo.png" className="img-fluid" alt="logo" />
                            </Navbar.Brand>
                           </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    {
                                        Navdata.map((item, index) => {
                                            return (
                                                <NavLink className='nav-link' exact activeClassName="active" to={item.navitem} key={index}>{item.title}</NavLink>
                                            )
                                        })
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>

                {/* Stayce */}
                <div className="innerheader">
                    <Container>
                        <Navbar expand="md">
                           <NavLink to='/'>
                           <Navbar.Brand>
                                <img src="/images/logo.png" className="img-fluid" alt="logo" />
                            </Navbar.Brand>
                           </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    {
                                        Navdata.map((item, index) => {
                                            return (
                                                <NavLink className='nav-link' exact activeClassName="active" to={item.navitem} key={index}>{item.title}</NavLink>
                                            )
                                        })
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </div>
                </div>
                {/* ./Styke */}
                {/* ./Header  */}
            </header>
        </React.Fragment>



    )
}
