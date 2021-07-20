import React from 'react'
import { Card } from 'react-bootstrap'
import './ServiceBox.style.css'
export default function ServiceBox({ img, ttl, desc,desc1 }) {
    return (
        <Card>
            <div className="img-wrap">
                <Card.Img variant="top" className='img-fuild' src={img} />
            </div>
            <Card.Body>
                <Card.Title>{ttl}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>{desc1}</Card.Text>
            </Card.Body>
        </Card>
    )
}
