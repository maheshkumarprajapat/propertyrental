import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleRight} from "react-icons/fa";
import "./About.style.css"
import Heading from '../../../view/Heading/Heading'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className='section-padding clearfix' id='About-section'>
            <Container>
                <Heading ttls='ABOUT' ttl="OUR COMPANY" desc='Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro
                consequatur aliquam, incidunt eius magni provident' />
                <Row>
                    <Col lg={6} md={6} className='about-tab' data-aos={"fade-right"} data-aos-duration={3000}>
                        <div className="about-sec">
                            <p>Grids is a responsive Multipurpose Template. Lorem ipsum dolorsit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                            <ul className="circle-list">
                            <li><span><FaAngleRight/></span>Lorem ipsum dolor sit amet</li>
                            <li><span><FaAngleRight/></span>Lorem ipsum dolor sit amet</li>
                            <li><span><FaAngleRight/></span>Lorem ipsum dolor sit amet</li>
                            <li><span><FaAngleRight/></span>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                            <Link to='/about' className='btn btn-lime'>Learn More</Link>
                        
                    </Col>
                    <Col lg={6} md={6} className='about-img-tab' data-aos={"fade-left"} data-aos-duration={3000}>
                        <div className="img-wrap full">
                            <img className="img-fluid" src="images/about.jpg" alt="about" />
                            <div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
