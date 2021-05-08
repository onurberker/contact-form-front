import React, { useState } from "react";

import { Container, Button, Row, Col, Form } from "react-bootstrap";

import Swal from "sweetalert2";
import axios from "axios";

function Contact() {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //send func
  const sendUserData = (e) => {
    e.preventDefault();

    //send data
    axios
      .post("http://localhost:8000/api/form", {
        name,
        email,
        message,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");

        Swal.fire({
          icon: "success",
          title: "Your message has been received.",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong.",
        });

        console.log(err);
      });

    /*
    console.log("Name : ", name)
    console.log("Email : ", email)
    console.log("Message : ", message) */
  };
  return (
    <Container>
      <h2 className="text-center">Contact Form</h2>
      <Row className="d-flex justify-content-center align-items-center mt-4">
        <Col md={6}>
          <Form>
            <Form.Group className="mt-2 mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name || ""}
                onChange={(e) => {
                  //console.log(e.target.value)
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Your name"
              />
            </Form.Group>

            <Form.Group className="mt-2 mb-2">
              <Form.Label>Email</Form.Label>

              <Form.Control
                value={email || ""}
                onChange={(e) => {
                  //console.log(e.target.value)
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Your email"
              />
            </Form.Group>

            <Form.Group className="mt-2 mb-2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message || ""}
                onChange={(e) => {
                  //console.log(e.target.value)
                  setMessage(e.target.value);
                }}
                as="textarea"
                placeholder="Your message"
                rows={3}
              />
            </Form.Group>

            <Button
              onClick={(e) => sendUserData(e)}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
