import React, { useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import { RegisterProperty } from '../components/RegisterProperty'
import propertyList from '../components/pages/PropertyListing'
import PropertyItem from '../components/PropertyItem'
import '../components/App.css'
import Commercial from '../components/Commercial';
import NonCommercial from '../components/NonCommercial';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'
import PageNotFound from '../components/pages/PageNotFound';



function RouteConfig() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div >
            <Router>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route exact path="/RegisterProperty" component={RegisterProperty} />
                    <Route exact path="/property" component={propertyList} />
                    <Route exact path="/commercial" component={Commercial} />
                    <Route exact path="/residential" component={NonCommercial} />
                    <Route path="/property/:id" component={PropertyItem} />
                    <Route path="*" component={PageNotFound} />

                </Switch>
                <Footer />
            </Router>

        </div>

    )

}
export default RouteConfig;