import React from 'react'
import './Banner.style.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Banner() {

    return (
        <section className="banner clearfix">
            <OwlCarousel id="banner-slider" className='owl-theme'
                margin={0}
                loop={true}
                dots={false}
                nav={true}
                autoplay={true}
                autoplayTimeout={3000}
                autoplayHoverPause={false}
                items={1}
                navText={["<img src='images/icons/left-arrow.png'>", "<img src='images/icons/right-arrow.png'>"]}>

                <div className="item banner-style" style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 49%),rgb(0 0 0 / 49%)), url(images/Slider/banner1.jpg)" }}>
                    {/* Home Caption  */}
                    <div className="banner-caption ">
                        <div className="container">
                            <div className="inner-container ">
                                <h1 className="banner-heading">Gated & Villas</h1>
                            </div>
                        </div>
                    </div>
                    {/*  ./Home Caption  */}
                </div>
                <div className="item banner-style" style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 49%),rgb(0 0 0 / 49%)), url(images/Slider/banner2.jpg)" }}>
                    {/* Home Caption  */}
                    <div className="banner-caption">
                        <div className="container">
                            <div className="inner-container">
                                <h1 className="banner-heading">Gated & Villas</h1>
                            </div>
                        </div>
                    </div>
                    {/*  ./Home Caption  */}
                </div>
                <div className="item banner-style" style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 49%),rgb(0 0 0 / 49%)), url(images/Slider/banner3.jpg)" }}>
                    {/* Home Caption  */}
                    <div className="banner-caption">
                        <div className="container">
                            <div className="inner-container">
                                <h1 className="banner-heading">Gated & Villas</h1>
                            </div>
                        </div>
                    </div>
                    {/*  ./Home Caption  */}
                </div>

            </OwlCarousel >
        </section >
    )
}
