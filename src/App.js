import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './App.css';
import About from './About/About.js'
import ContentDetail from './Content/Content.js'
class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
