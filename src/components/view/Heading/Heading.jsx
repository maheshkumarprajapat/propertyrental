import React from 'react'
export default function Heading({ ttl, desc,ttls }) {
    return (
        <div className="heading-tab">
            <h2 className="heading"><span>{ttls}</span> {ttl} </h2>
            <p className="ttl">{desc}</p>

        </div>

    )
}
