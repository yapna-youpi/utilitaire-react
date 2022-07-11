import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/header/Header.jsx'
import Home from '../components/home/Home.jsx'
// import Calco from '../components/calco/Calco'
import Chrono from '../components/chronometre/Chrono'
import Footer from '../components/footer/Footer.jsx'

function Navigation() {
   
    return (
        <div>
            <Router>
                <Header />
                <Switch >
                    <Route exact path='/'  component={Home} />
                    {/* <Route exact path='/Calco'  component={Calco} /> */}
                    <Route exact path='/Chrono'  component={Chrono} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Navigation
