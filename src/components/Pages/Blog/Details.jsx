import React from 'react'
import { Container, Card, Row } from 'react-bootstrap'
import data from './data'
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'

export default function Details(props) {
    let getId = props.match.params.id;
    const getData = data.cardData[getId - 1];
    return (
        <React.Fragment>
            <InnerHeader />
            <InnerBanner ttl='Blog' name="Home" subname="Blog" img='../images/innerBanner.jpg' />
            <div id='Blog-details-section' className='section-padding clearfix'>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Card>
                            <Card.Img variant="top" src={getData.img} />
                            <Card.Body>
                                <Card.Title>{getData.title}</Card.Title>
                                <Card.Text>
                                    {getData.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    )
}
