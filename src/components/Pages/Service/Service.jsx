import React, { useState } from "react";
import { Col, Container, Row,Card } from 'react-bootstrap'
import './Service.style.css'
import {Helmet} from "react-helmet";
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import Heading from '../../view/Heading/Heading'
import Pagination from "react-js-pagination";
import data from './data'


export default function Service() {
    const todosPerPage = 9;
    const [activePage, setCurrentPage] = useState(1);

    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((item, index) => {
        return (
            <Col lg={4} md={6} className='ServiceBox-tab d-flex' key={index}>
                <Card>
                    <div className="img-icon">
                        <Card.Img variant="top" className='img-fuild' src={item.img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{item.ttl}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                    </Card.Body>
                    </Card>                            

            </Col>
        )
    }
    )

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Service - Rental </title>
                <meta name="description" content="Service Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner ttl='Service' name="Home" subname="Service" img='./images/innerBanner.jpg' />
            <div id='Service-section' className='section-padding clearfix'>
                <Heading ttls='Our All' ttl="Services" />
                <Container>
                    <Row className='pagination-section justify-content-md-center'>
                        {renderTodos}
                    </Row>
                    <div className="col-12 col-md-12">
                        <div className="styled-pagination text-center mt-5">
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={3}
                                totalItemsCount={data.length}
                                pageRangeDisplayed={3}
                                onChange={handlePageChange}
                                firstPageText={false}
                                lastPageText={false}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}
