import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './BannerService.style.css'
import CardBox from './CardBox'
import Cardata from './data'
export default function BannerService() {
    return (
        <section className="banner-service clearfix">
            <Container fluid>
                <Row className="justify-content-md-center">
                    {
                        Cardata.map((Cardata, index) => {
                            return (
                                <Col lg={3} md={6} className="card-tab"  data-aos={"fade-up"} key={index}>
                                    <CardBox {...Cardata} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
