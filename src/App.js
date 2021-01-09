import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Michael Cheung",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Welcome to my portfolio!",
        subTitle: "Based in Eugene, Oregon. I've been helping many clients with their startups and maintaining their online presence.",
        text: "Feel free to contact me with any questions you may have. My door (and email) are always open."
      },
      about: {
        title: "About me",
      },
      contact: {
          title: "Let's chat!"
      }
    }
  }

  render() {
    return (
      <Router>

        <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg"> 
          <Navbar.Brand>Michael Cheung</Navbar.Brand>
          
          <Navbar.Toggle className="border-0" aria-controls="Navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </Container>

      </Router>
      );
  }
  
}

export default App;
