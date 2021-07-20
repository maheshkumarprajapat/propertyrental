import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardBox({ title, desc, img }) {
    return (
        <Card>
            <div className="icon-img">
                <Card.Img src={img} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <div className="overlay">
            </div>
        </Card>
    )
}
