import React from 'react'
import './Checkout.style.css'
import { Helmet } from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap'
import InnerHeader from '../../view/InnerHeader/InnerHeader'
import InnerBanner from '../../view/InnerBanner/InnerBanner'
import Newsletter from '../../view/Newsletter/Newsletter'
import Heading from '../../view/Heading/Heading'
import { useForm } from "react-hook-form";

export default function Checkout() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <React.Fragment>
            <Helmet>
                <title>Checkout - Rental </title>
                <meta name="description" content="Checkout Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner ttl='Payment' name="Home" subname="Payment" img='./images/innerBanner.jpg' />
            <section className="checkout-section section-padding">
                <Container>
                    <Heading ttls='Make Your ' ttl="Checkout Here" desc='Please register in order to checkout more quickly' />
                    <Row>
                        <Col lg={12}>
                            <div className="checkout-form">
                                {/* <!-- Form --> */}
                                <form className="form row" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>First Name<span>:</span></label>
                                                    <input type="text" {...register("firstName")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Last Name<span>:</span></label>
                                                    <input type="text" {...register("lastName")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Email Address<span>:</span></label>
                                                    <input type="email" {...register("email")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Phone Number<span>:</span></label>
                                                    <input type="text" {...register("phone")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Country<span>:</span></label>
                                                    <div className="nice-select" tabindex="0">
                                                        <select {...register("country")} id="country">
                                                            <option value="IN">India</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>State / Divition<span>:</span></label>
                                                    <div className="nice-select" tabindex="0">
                                                        <select {...register("state")} id="state-province">
                                                            <option value="RJ">Rajasthan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Address Line 1<span>:</span></label>
                                                    <input type="text" {...register("address1")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Address Line 2<span>:</span></label>
                                                    <input type="text" {...register("address2")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Postal Code<span>:</span></label>
                                                    <input type="text" {...register("postalCode")} />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} col={12}>
                                                <div className="form-group">
                                                    <label>Company<span>:</span></label>
                                                    <div className="nice-select" tabindex="0">
                                                        <select {...register("companyName")} id="company">
                                                            <option value="company" selected="selected">Microsoft</option>
                                                            <option>Apple</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <div className="col-12">
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="formlink" />
                                                    <label className="form-check-label" htmlFor="formlink">Create an account?</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="order-details">
                                            <div className="single-widget">
                                                <h2>CART TOTALS</h2>
                                                <div className="content">
                                                    <ul>
                                                        <li>Sub Total<span>$330.00</span></li>
                                                        <li>(+) Shipping<span>$10.00</span></li>
                                                        <li className="last"> <span className='price'>Total</span> <span>$340.00</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-widget">
                                                <h2>Payments</h2>
                                                <div className="content">
                                                    <div className="checkbox">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">Check Payments</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio2">Cash On Delivery</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio3">PayPal</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-widget payement">
                                                <div className="content">
                                                    <img src="images/payment.png" className='img-fluid' alt="payment" />
                                                </div>
                                            </div>
                                            <div className="single-widget get-button">
                                                <div className="content">
                                                    <button href="/" className="btn btn-lime">proceed to checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </React.Fragment>
    )
}
