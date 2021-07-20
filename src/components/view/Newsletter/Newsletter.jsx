import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Newsletter.style.css'
export default function Newsletter() {
    return (
        <section className="shop-newsletter section-padding">
            <Container>
                <div className="inner-top">
                    <Row>
                        <div className="col-lg-10 mx-auto">
                            <div className="inner">
                                <h4>Newsletter</h4>
                                <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                <div className="col-lg-7 col-md-10 mx-auto">
                                <form className="newsletter-inner clearfix">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email Address" />
                                    </div>
                                    <button type="submit" className="btn">Subscribe</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
