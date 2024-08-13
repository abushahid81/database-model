import React from 'react'
import "./Contact.css";
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';





const Contact = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col className=' pt-5'>
                        <div className='ms-5'>
                            <h2 className='pine'>Contact Us</h2>
                        </div>
                        <div class="card border p-4 shadow contact-x">

                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control username" id="exampleFormControlInput1" placeholder="Enter Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control email" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Password</label>
                                <input type="password" class="form-control password" id="exampleFormControlInput1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    Terms & Condition
                                </label>
                            </div>
                            <div class="mt-4">
                                <Button variant="outline-secondary" className='rounded-pill btn-change'>Sign Up</Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>




        </>
    )
}

export default Contact;

