import React from "react"
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap"
import imgSrc from "../assets/icons8-heart-24.png"
import cartSrc from "../assets/icons8-shopping-cart-50.png"
import logo from "../assets/logo.jpg"
import { useHistory } from "react-router-dom"
export default function AppNavbar() {
  let history = useHistory()
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="builderz logo"
              className="d-inline-block align-middle pt-3"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto nav-links">
              <Nav.Link href="#home">
                <span className="active-link">Home</span>
              </Nav.Link>
              <Nav.Link href="#courses">
                <span className="nav-text">Courses</span>
              </Nav.Link>
              <Nav.Link href="#activities">
                {" "}
                <span className="nav-text">Activities </span>
              </Nav.Link>
              <Nav.Link href="#testimonials">
                {" "}
                <span className="nav-text">Testimonials </span>
              </Nav.Link>
              <Nav.Link href="#blog">
                <span className="nav-text">Blog</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className="nav-text">Contact </span>
              </Nav.Link>
            </Nav>
            <Navbar.Text className="mx-4 ">
              <img
                alt="like"
                src={imgSrc}
                width="21.87px"
                height="21.87px"
                className="d-inline-block align-middle"
              />
              <span className="cart-icon">
                <img
                  alt="Shopping cart"
                  src={cartSrc}
                  width="21.87px"
                  height="21.87px"
                  className="d-inline-block align-middle navbar-right"
                />
                <Badge pill bg="danger" className="align-text-top badge">
                  2
                </Badge>
              </span>
              <Button
                className="btn navbar-right"
                onClick={() => history.push("/signup")}
              >
                Log in
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
