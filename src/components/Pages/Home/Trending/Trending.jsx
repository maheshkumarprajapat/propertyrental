import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Trending.style.css"
import CardItem from '../../../view/Card/CardItem'
import Heading from '../../../view/Heading/Heading'
import { CardData } from './data'

export default function Trending() {
    return (
        <div className='section-padding clearfix' id='Trending-section'>
            <Container>
                <Heading ttls='TRENDING' ttl="PROJECTS" desc='Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro
                consequatur aliquam, incidunt eius magni provident' />
                <Row className='justify-content-md-center'>
                    {
                        CardData.map((CardData, index) => {
                            return (
                                <Col lg={3} md={6} className='intro-tab' key={index}  data-aos={"fade-up"} data-aos-duration={2000}>
                                    <CardItem {...CardData} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
