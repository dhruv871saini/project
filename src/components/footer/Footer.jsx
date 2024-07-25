import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f" />facebook</a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter" />twitter</a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram" />instagram</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Subscribe to Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="footer-copyright">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;