import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Embed from 'react-embed'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar fixed='top' bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='https://imagensemoldes.com.br/wp-content/uploads/2020/07/Man-Memes-PNG-941x1024.png'
              width='35'
              height='35'
              className="d-inline-block align-top" /> {''}
            <strong>Memesitos</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link fw-bolder" to="/meme"> Listagem Meme </Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu