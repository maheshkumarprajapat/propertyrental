import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.style.css'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-4 col-md-6 footer-tab">
                        <div className="footer-sec">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="footer logo" />
                            </div>
                            <address>
                                MyHome Inc<br />
                                Demo Road, Near Silnile 123456<br /> NewYork US.<br /><br />
                                (123) 456-789 - 1234-54678<br />
                                email@domainname.com
                            </address>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-tab">
                        <div className="footer-sec">
                            <h6 className="ttl">Company</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/">Locations Map</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-tab">
                        <div className="footer-sec">
                            <h6 className="ttl">Services</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/">Order tracking</Link></li>
                                <li><Link to="/">Wish List</Link></li>
                                <li><Link to="/">Login</Link></li>
                                <li><Link to="/">My account</Link></li>
                                <li><Link to="/">Terms & Conditions</Link></li>
                                <li><Link to="/">Promotional Offers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-tab">
                        <div className="footer-sec">
                            <h6 className="ttl">Newsletter</h6>
                            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                            <form className="footer-form clearfix">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
