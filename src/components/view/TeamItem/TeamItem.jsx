import React from 'react'
import {Card } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype } from "react-icons/fa";

export default function TeamItem({name,subname,img}) {
    return (
        <div className="team-sec">
            <Card>
                <div className="img-wrap zoom">
                    <Card.Img variant="top" src={img} />
                </div>  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="text-muted">{subname}</Card.Subtitle>
                    <ul className="social list-inline mt-3">
                        <li className="list-inline-item"><a href="https://www.facebook.com/" className="social-link" target="_new"><i><FaFacebookF /></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/" className="social-link" target="_new"><i><FaInstagram /></i></a></li>
                        <li className="list-inline-item"><a href="https://www.twitter.com/" className="social-link" target="_new"><i><FaTwitter /></i></a></li>
                        <li className="list-inline-item"><a href="https://skype.com/" className="social-link" target="_new"><i><FaSkype /></i></a></li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    )
}
