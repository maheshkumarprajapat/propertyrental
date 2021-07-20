import React from 'react'
import './Blog.style.css'
import {Helmet} from "react-helmet";
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import Heading from '../../view/Heading/Heading'
import { Container, Row, Col } from 'react-bootstrap'
import data from './data'
import CardItem from '../../view/Card/CardItem'

export default function Blog() {
    return (
        <React.Fragment>
            <Helmet>
            <title>Blog - Rental </title>
            <meta name="description" content="Blog Page" />
        </Helmet>
        
        <InnerHeader />
            <InnerBanner ttl='Blog' name="Home" subname="Blog" img='./images/innerBanner.jpg' />
            <div id='Blog-section' className='section-padding clearfix'>
                <Heading ttls='Make Your ' ttl="Checkout Here" desc='Please register in order to checkout more quickly' />

                <Container>
                    <Row className='justify-content-md-center'>
                        {
                            data.cardData.map((data, index) => {
                                return (
                                    <Col lg={4} md={6} className='intro-tab' key={index}>
                                        <CardItem {...data} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
}
