import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Popover, OverlayTrigger } from 'react-bootstrap'
import './index.css';

import * as serviceWorker from './serviceWorker';
import App from './App';
import Home from './components/Home';
// import Footer from './components/Footer';
// import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import logo from './images/nadaasi/Nadaasioriginal.png';
import invertlogo from './images/nadaasi/Nadaasi-white.png'
import UserLogo from './images/home/icons/user.svg';
import SearchLogo from './images/home/icons/search.svg';
import CartLogo from './images/home/icons/shopping-cart.svg';
import TelephoneLogo from './images/footer/telephone-white.svg';
import EnvvelopeLogo from './images/footer/envelope-white.svg';
import MenuToggle from './images/navigation/icon-menu.svg';

const searchInput = (
    <Popover id="popover-basic">
        <Popover.Content>
            <FormControl
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </Popover.Content>
    </Popover>
);

const routing = (
    <Router>
        <header className="navigation">
            <Navbar expand="lg" className="navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home" className="logo">
                    <a className="logo"><img src={logo} alt="logo" width="200" /></a>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="menu-collapse">
                    <Nav className="menu">
                        <NavLink className="menu-item" to="/" exact>Home</NavLink>
                        <NavLink className="menu-item" to="/shop">Shop</NavLink>
                        <NavLink className="menu-item" to="/about">About</NavLink>
                        <NavLink className="menu-item" to="/Contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" className="tool-collapse">
                    <Nav className="tools">
                        <a href="#" className="tool-item"><img src={UserLogo} alt="User" width="20" /></a>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={searchInput}>
                            <a href="#" className="tool-item"><img src={SearchLogo} alt="Search" width="20" /></a>
                        </OverlayTrigger>
                        <a href="#" className="tool-item"><img src={CartLogo} alt="Cart" width="20" /></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={App} />
            {/* <Route path="/:id" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/> */}
        </Switch>
        {/* <Footer /> */}
        <div className="footer">
            <div className="footer-company">
                <p>
                    <a href="#" className="footer-logo">
                        <img src={invertlogo} width="200px" alt="logo" />
                    </a>
                </p>
                <p>
                    <img src={TelephoneLogo} width="25px" alt="Phone" />
                    0469375029
                </p>
                <p>
                    <img src={EnvvelopeLogo} width="25px" alt="Mail" />
                    info@nadaasi.com
                </p>
            </div>
            <div className="footer-info">
                <h2>Information</h2>
                <br />
                <p><a href="#">Secure Payment</a></p>
                <p><a href="#">Size Chart</a></p>
                <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Refund Polocy</a></p>
            </div>
            <div className="footer-personal">
                <h2>Your Account</h2>
                <br />
                <p><a href="#" className="card-link">Personal info</a></p>
                <p><a href="#" className="card-link">Merchandise Returns</a></p>
                <p><a href="#" className="card-link">Orders</a></p>
                <p><a href="#" className="card-link">Credit slips</a></p>
                <p><a href="#" className="card-link">Addresses</a></p>
            </div>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
