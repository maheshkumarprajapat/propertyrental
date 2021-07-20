import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Error from './components/view/Error/Error'
import Home from './components/Pages/Home/Home'
import Footer from './components/view/Footer/Footer'
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Service from './components/Pages/Service/Service';
import Contact from './components/Pages/Contact/Contact';
import Checkout from './components/Pages/Checkout/Checkout';
import BlogListing from './components/Pages/BlogListing/BlogListing'
import Preloader from './components/view/Preloader/Preloader';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      {
        loading ?
          <Preloader />
          :
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
              <Route path='/service' component={Service} />
              <Route path='/contact' component={Contact} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/details/:id' render={props => (
                <BlogListing {...props} />
              )}>
              </Route>
              <Route component={Error} />
            </Switch>
            <Footer />
          </Router>
      }
    </React.Fragment>
  )
}

export default App
