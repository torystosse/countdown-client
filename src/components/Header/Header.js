import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#my-prompts">My Prompts</Nav.Link>
    <Nav.Link href="#create-prompt">Create A Prompt</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="https://torystosse.github.io/writerly-client/#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="dark" expand="xl" className='nav'>
    <img src={'https://i.ya-webdesign.com/images/writing-png-icon-4.png'} />
    <Navbar.Brand href="#" className='heading'>
      writer.ly
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
