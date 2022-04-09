import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to ="/books">Books</Nav.Link>
            <Nav.Link as={Link} to ="/login">Login</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
