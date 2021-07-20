import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from "react-helmet";
import './About.style.css'
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import Team from '../Home/Team/Team'
import Heading from '../../view/Heading/Heading'
import ServiceBox from '../../view/ServiceBox/ServiceBox'
import ServiceBoxdata from '../../view/ServiceBox/data'

export default function About() {
    return (
        <React.Fragment>
            <Helmet>
                <title>About Us - Rental </title>
                <meta name="description" content="About Page" />
            </Helmet>

            <div id='About-section' className='clearfix'>
                <InnerHeader />
                <InnerBanner ttl='About Us' name="Home" subname="About" img='./images/innerBanner.jpg' />
                <div className="inner-container section-padding">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className='about_tab'>
                                <div className="about_sec">
                                    <h5>About Us</h5>
                                    <h2>We offer creative working environments that suit your business</h2>
                                </div>
                            </Col>
                            <Col lg={6} md={6} className='about_tab'>
                                <div className="about_sec mt-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Quis ipsum suspendisseultrices gravida. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="choose-section section-padding clearfix">
                    <Container>
                        <div className="inner-container">
                            <Heading ttls='CHOOSE ' ttl="US" />
                            <Row className="justify-content-md-center">
                                {ServiceBoxdata.map((ServiceBoxdata, index) => {
                                    return (
                                        <Col lg={4} md={6} className='ServiceBox-tab' key={index}>
                                            <ServiceBox {...ServiceBoxdata} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="mission-section clearfix">
                    <Container fluid>
                        <Row>
                            <Col lg={3} md={6} className='mission_tab'>
                                <div className="mission_img">
                                    <div className="img-wrap zoom">
                                        <img src="./images/mission-img1.jpg" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className='mission_tab'>
                                <div className="mission_sec">
                                    <div className="icon">
                                        <img src="./images/icons/gol.png" alt="" />
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                    <button href="/" className="btn btn-white">Learn More</button>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className='mission_tab'>
                                <div className="mission_img">
                                    <div className="img-wrap zoom">
                                        <img src="./images/mission-img2.jpg" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className='mission_tab'>
                                <div className="mission_sec">
                                    <div className="icon">
                                        <img src="./images/icons/Good-Neighborhood.png" className='img-fuild' alt="" />
                                    </div>
                                    <h3>Good Neighborhood</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                    <button href="/" className="btn btn-white">Learn More</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Team />
            </div>
        </React.Fragment>
    )
}
