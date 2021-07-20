import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import './Team.style.css'
import Heading from '../../../view/Heading/Heading'
import TeamItem from '../../../view/TeamItem/TeamItem';
import TeamData from './data'
export default function Team() {
    return (
        <div class='section-padding clearfix' id='Team-section'>
            <Container>
                <Heading ttls='Meet' ttl="Our Experts" />
                <Row>
                    {
                        TeamData.map((TeamData, index) => {
                            return (
                                <Col lg={3} md={6} className='team-tab' key={index}  data-aos={"fade-up"} data-aos-duration={2000}>
                                    <TeamItem {...TeamData} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
