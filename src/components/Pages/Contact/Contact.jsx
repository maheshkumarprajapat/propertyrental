import React from 'react'
import './Contact.style.css'
import {Helmet} from "react-helmet";
import { Container, Row, Col, Form } from 'react-bootstrap'
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import Heading from '../../view/Heading/Heading'
import ServiceBox from '../../view/ServiceBox/ServiceBox'
import Contactdata from './Contactdata'
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
        <React.Fragment>
         <Helmet>
                <title>Contact Us - Rental </title>
                <meta name="description" content="Contact Us Page" />
            </Helmet>
               <InnerHeader />
            <InnerBanner ttl='Contact Us' name="Home" subname="Contact" img='./images/innerBanner.jpg' />
            <div id='Contact-section' className='clearfix section-padding'>
                <Container>
                    <div className="inner-container contact_card">
                        <Row className="justify-content-md-center">
                            {Contactdata.map((Contactdata, index) => {
                                return (
                                    <Col lg={4} md={6} className='ServiceBox-tab' key={index}>
                                        <ServiceBox {...Contactdata} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    <div className="inner-container contact-form section-padding">
                        <Container>
                            <Row>
                                <Col lg={10} className='mx-auto'>
                                    <Heading ttls='Get A' ttl="Quote" />
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md='6' controlId="formGridtext">
                                                <Form.Control {...register("firstName")} type="text" placeholder="Enter Your First Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} md='6'  controlId="formGridtext">
                                                <Form.Control {...register("lastName")} type="text" placeholder="Enter Your Last Name" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md='6'  controlId="formGridEmail">
                                                <Form.Control {...register("email")} type="email" placeholder="Enter Your email" />
                                            </Form.Group>

                                            <Form.Group as={Col} md='6'  controlId="formGridtext">
                                                <Form.Control {...register("number")} type="text" placeholder="Enter Your Phone" />
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control {...register("message")} as="textarea" rows={3} placeholder='Enter Your Message' />
                                        </Form.Group>
                                        <div className="text-center mt-5">
                                            <button href="/" className="btn btn-lime lg-btn">Submit</button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}
