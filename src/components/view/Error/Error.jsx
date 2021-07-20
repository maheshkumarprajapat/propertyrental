import React from 'react'
import './style.css'
import InnerHeader from '../../view/InnerHeader/InnerHeader'
function Error() {
    return (

        <React.Fragment>
            <InnerHeader />
             <section className="not-found-header pt-0 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="head-inner text-center">
                                <div className="head-txt">
                                    <div className="text-effect" data-tip="404"></div>
                                    <h1 className="text-uppercase">Page Not Found</h1>
                                    <p className="text-dark">Sorry, We can't find the page you're looking for.</p>
                                    <div className="head-bttn">
                                        <a href="/" className="bttn dblue">Back To Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-shapes">
                    <div className="box1"></div>
                    <div className="box3"></div>
                    <div className="dot1"></div>
                    <div className="heart1"></div>
                    <div className="dot2"></div>
                    <div className="circle2"></div>
                </div>
            </section>
        </React.Fragment>


    )
}

export default Error
