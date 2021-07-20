import React from 'react'
import {Helmet} from "react-helmet";
import Header from '../../view/Header/Header'
import About from './About/About'
import Banner from './Banner/Banner'
import BannerService from './BannerService/BannerService'
import Recent from './Recent/Recent'
import Trending from './Trending/Trending'
import Team from './Team/Team'
function Home() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home - Rental </title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Header />
            <Banner />
            <BannerService />
            <Trending />
            <Recent />
            <About />
            <Team/>
        </React.Fragment>
    )
}

export default Home
