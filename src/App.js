import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './App.css';
import About from './About/About.js'
import ContentDetail from './Content/Content.js'
import { slide as Menu } from 'react-burger-menu'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
       <div id="page-wrap">
       <Navbar collapseOnSelect navbar-default>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Aditya Diagnostics and Research Laboratory</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Get Directions
              </NavItem>
              <NavItem eventKey={2} href="#">
                Call Now
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <About />
        <ContentDetail />
       </div>
      </div>
    );
  }
}

export default App;
