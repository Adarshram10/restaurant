import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-utensils"></i>
           {' '}
            Restro Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header