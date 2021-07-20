import React from 'react'
import { Card} from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Route, Link } from 'react-router-dom'

export default function CardItem({title,img,desc,btn,id}) {
    return (
        <Card>
            <div className="img-wrap zoom">
          <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
            <Link to={`/details/${id}`} > <Card.Title>{title}</Card.Title></Link>
                <Card.Text>{desc}
                </Card.Text>
                <Route>
                    <Link to={`/details/${id}`} >{btn} <span><FaLongArrowAltRight/></span></Link>
                </Route>
            </Card.Body>
        </Card>
    )
}
