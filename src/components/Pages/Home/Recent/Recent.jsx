import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Recent.style.css"
import CardItem from '../../../view/Card/CardItem'
import Heading from '../../../view/Heading/Heading'
import { CardData } from './data'

export default function Recent() {
    return (
        <div className='section-padding clearfix' id='Recent-section'>
            <Container>
                <Heading ttls='RECENT ' ttl="PROPERTIES" desc='Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro
                consequatur aliquam, incidunt eius magni provident' />
                <Row>
                    {
                        CardData.map((CardData, index) => {
                            return (
                                <Col lg={4} md={6} className='intro-tab' key={index} data-aos={"fade-up"} data-aos-duration={2000}>
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
