import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

import Footer from './components/Footer'; 

import Home from './pages/HomePage'; 
import About from './pages/AboutPage'; 
import Contact from './pages/ContactPage'; 


import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title : 'Batzorig/E',
      headerLinks:[
        {title: 'Home', path: 'codevol/'},
        {title: 'About', path: 'codevol/about'},
        {title: 'Contact', path: 'codevol/contact'}
      ],
      home:{
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'this is home'
      },
      about:{
        title:'About'
      },
      contact:{
        title:'Let`s Talk'
      }
    }
  }
 
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>PortFolio</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                 
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path="/about" exact render={() => <About title={this.state.about.title} /> } />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} /> } />
          
          

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
