import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css'

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tastyy Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem
                non magni eveniet
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 delivery__time-item  ">
                <span> Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6"> <ListGroup className="deliver__time-list">
          <h5 className="footer__title">Contact</h5>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location:Mohali,Chandigarh,India</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0166743767734</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 delivery__time-item  ">
                <span>Email:example@gmail.com </span>
              </ListGroupItem>
            </ListGroup></Col>
          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <span><i className="ri-send-plane-line"></i></span>
          </div>
          </Col>
         
        </Row>
        <Row className="mt-5">
        <Col lg="6" md="6">
            <p className='copyright__text'>Copyright - 2022,website made by Vipin Chandra.All Rights Reserved.</p>
          </Col>
        <Col lg="6" md="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className="m-0">Follow</p>
            <span><Link to='https://www.facebook.com/'><i className="ri-facebook-line"></i></Link></span>
            <span><Link to='https://github.com'><i className="ri-github-line"></i></Link></span>
            <span><Link to='https://youtube.com'><i className="ri-youtube-line"></i></Link></span>
            <span><Link to='https://linkedin.com'><i className="ri-linkedin-line"></i></Link></span>

          </div>
        </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;