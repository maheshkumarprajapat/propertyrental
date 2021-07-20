import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './BlogListing.style.css'
import {Helmet} from "react-helmet";

import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import RightSection from './RightSection'
import data from '../Blog/data';
import { Link } from 'react-router-dom'
import Heading from '../../view/Heading/Heading'
import { FaEyeSlash, FaUserAlt } from "react-icons/fa";
export default function BlogListing(props) {
    let getId = props.match.params.id;
    const getData = data.cardData[getId - 1];

    return (
        <React.Fragment>
          <Helmet>
                <title>Blog Listing - Rental </title>
                <meta name="description" content="Blog Listing Page" />
            </Helmet> 
            <InnerHeader />
            <InnerBanner ttl='Blog Listing' name="Home" subname="Blog Listing" img='../images/innerBanner.jpg' />
            <div id='BlogListing-section' className='clearfix'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='left-section clearfix'>
                                <Heading ttl="Define World Best IT Solution Technology" />
                                <div className="user-tab">
                                    <div className="user-sec">
                                        <ul>
                                            <li><span><FaUserAlt /></span> Admin</li>
                                            <li><span><FaEyeSlash /></span> 33</li>
                                        </ul>
                                    </div>
                                </div>
                                <Col lg={12} className='ServiceBox-tab d-flex'>
                                    <div className="card mb-4 text-left">
                                        <div className="img-wrap">
                                            <img src={getData.img} className='img-fluid' alt={getData.alt} />
                                        </div>
                                        <div className="card-body p-0">
                                            <h5 className="card-title">{getData.title}</h5>
                                            <p className="card-text"><small className="text-muted">{getData.date}</small></p>
                                            <p className="card-text">{getData.desc}</p>
                                        </div>
                                    </div>
                                </Col>
                                <div className="goback">
                                <Link to='/blog'>Back</Link>
                            </div></div>
                           
                        </Col>
                        <Col lg={4}>
                            <RightSection />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
