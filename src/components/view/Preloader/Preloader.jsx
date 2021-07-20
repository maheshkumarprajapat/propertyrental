import React from 'react'
import './Preloader.style.css'
export default function Preloader() {
    return (
        <div className="preloader-section">
            <div className="preloader-sec">
              <div className="wrapper">
                <div className="loader"><div className="dot"></div></div>
                <div className="loader"><div className="dot"></div></div>
                <div className="loader"><div className="dot"></div></div>
                <div className="loader"><div className="dot"></div></div>
                <div className="loader"><div className="dot"></div></div>
                <div className="loader"><div className="dot"></div></div>
              </div>
              <div className="text">Please wait</div>
            </div>
          </div>
    )
}
