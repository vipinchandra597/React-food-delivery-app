import React, {useRef} from "react";

import {Link} from 'react-router-dom'

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Col, Row } from "reactstrap";

const Register = () => {
 
  const signupNameRef = useRef()
  const signupPasswordRef= useRef()
  const signupEmailRef= useRef()

  const submitHandler = e=>{
    e.preventDefault()

  }



  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form  className="form mb-5" onClick={submitHandler} >
                <div className="form__group">
                  <input type="text" placeholder="Full name" required ref={signupNameRef} />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={signupEmailRef} />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Password" required  ref={signupPasswordRef}/>
                </div>
                <button type="submit" className="addToCart__btn">Sign Up</button>
              </form>
              <Link to='/login'>Already have an account?Login </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
