import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './TopHeader.style.css'
export default function TopHeader() {
    return (
        <React.Fragment>
            {/* Header Top */}
            <div className="header-icons">
                <div className="container">
                    <div className="header-icons-left">
                        <a href='/'><i><FaMapMarkerAlt /></i> 420 Love Sreet 133/2 flx City</a>
                        <a href='/'><i><FaPhoneAlt /></i> +(01)123 456 789</a>
                        <a href='/'><i><FaEnvelope /></i> info.contact@gmail.com</a>
                    </div>
                    <div className="header-icons-right">
                        <a href='/'>Register</a>
                        <a href='/'>Login</a>
                        <a href="https://www.facebook.com/" target="_new"><i><FaFacebookF /></i></a>
                        <a href="https://www.instagram.com/" target="_new"><i><FaInstagram /></i></a>
                        <a href="https://www.twitter.com/" target="_new"><i><FaTwitter /></i></a>
                        <a href="https://skype.com/" target="_new"><i><FaSkype /></i></a>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            {/* ./Header Top */}
        </React.Fragment>
    )
}
