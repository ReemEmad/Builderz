import React from "react"
import logo from "../assets/logo.jpg"
import {
  Button,
  Form,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap"

export default function Signup() {
  return (
    <div className="d-flex signup-form">
      <div className="side-img"></div>
      <div className="side-form mx-auto text-center ">
        <img src={logo} alt="logo" className="mx-auto mt-5" />
        <h1>Sign UP</h1>
        <div className="d-flex justify-content-evenly pt-3">
          <Button variant="info" className="form-student">
            Student
          </Button>
          <Button variant="outline-info" className="form-parents mx-3">
            Parents
          </Button>
          <Button variant="outline-info" className="form-teacher mr-3">
            Lecturer
          </Button>
        </div>

        <Form className="pt-4">
          <Form.Group
            className="d-flex justify-content-between"
            controlId="formBasicEmail"
          >
            <div className="text-start">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" className="input-form py-3" />
            </div>
            <div className="text-start mb-3">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" className="input-form py-3" />
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <div className="text-start mb-3">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control type="text" className="input-form py-3" />
            </div>
          </Form.Group>

          <InputGroup>
            <div className="input-group mb-3 py-1">
              <Dropdown className="">
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  <span className="dropdown-phone">+20</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="dropdown-america">
                    +1
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="dropdown-japan">
                    +81
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="py-3"
              />
            </div>
          </InputGroup>

          <Form.Group controlId="formBasicEmail">
            <div className=" text-start mb-3">
              <Form.Label>Date Of Birth*</Form.Label>
              <Form.Control
                type="date"
                className="input-form py-3"
                placeholder="dd/mm/yy"
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <div className=" text-start mb-3">
              <Form.Label>Password*</Form.Label>
              <span className="password-input">
                <Form.Control
                  type="password"
                  className="input-form py-3"
                  // placeholder="dd/mm/yy"
                />
                {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
              </span>
            </div>
          </Form.Group>
        </Form>

        <Button className="w-100 mt-3 mb-4" variant="info">
          Sign Up
        </Button>
        <p className="login-form">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  )
}
