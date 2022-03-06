import React, { Component } from "react";
import { Container, Row, Colum, Col } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col>
            <Col>
              <span>E-commerce name</span>
            </Col>
            <Col>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis optio eos sed officia excepturi quas similique
                quisquam saepe? Consectetur tenetur alias officiis hic, pariatur
                libero accusamus dignissimos sint architecto? Animi!
              </span>
            </Col>
          </Col>
          <Col>
            <Col>
              <span>Your account</span>
            </Col>
            <Col>
              <a href="">Sign in</a>
            </Col>
          </Col>
          <Col>
            <Col>
              <span>Contact</span>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
