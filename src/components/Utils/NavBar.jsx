import React from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{marginLeft:"20px", color:'rgb(137, 207, 240)'}}>wellness.me</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {}
            </Nav>
            <Nav className="nav-button" >
              <Nav.Link href="/form" style={{color:'rgb(137, 207, 240)'}}>Daily Check-In</Nav.Link>
              <Nav.Link href="/analytics" style={{color:'rgb(137, 207, 240)'}}>Analytics</Nav.Link>
              <Nav.Link href="/settings" style={{color:'rgb(137, 207, 240)'}}>Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    );
  }
}

export default NavBar;
