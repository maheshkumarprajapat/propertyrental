import React from 'react'
import './InnerBanner.style.css'
import {Breadcrumb} from 'react-bootstrap'
export default function InnerBanner({ttl,name,subname,img}) {
    return (
        <div className='innerBanner-section' style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 70%),rgb(0 0 0 / 70%)), url(${img})`}}>
            <div className="inner-tab">
            <h1 className='ttl'>{ttl}</h1>
            <Breadcrumb>
                <Breadcrumb.Item href="#">{name}</Breadcrumb.Item>
                <Breadcrumb.Item active>{subname}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
        </div>
    )
}
