import React from 'react';
import {Link, BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Features from "./Features";
import Error from "./Error";

function Navbar(props) {
    return (
        <Router>
            <div className='navbar justify-content-between align-content-center'>
                <h3 className='logo'>
                    Cover
                </h3>
                <div className='nav-link'>
                    <NavLink activeClassName='selected active' to='/'>Home</NavLink>
                    <NavLink activeClassName='selected' to='/Features'>Features</NavLink>
                    <NavLink activeClassName='selected' to='/Contact'>Contact</NavLink>
                </div>
            </div>
            <div className='rout-content'>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/Features' component={Features}></Route>
                    <Route exact path='/Contact' component={Contact}></Route>
                    <Route exact component={Error}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navbar;



<Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/Features' component={Features}></Route>
    <Route exact path='/Contact' component={Contact}></Route>
    <Route exact component={Error}></Route>
</Switch>