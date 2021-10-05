import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const url="https://res.cloudinary.com/ghorebazar/image/upload/v1593245283/ssl-payment-banner.webp?v1.2"
    return (
        <div  className="footer fixed mt-5 bg-primary text-light pt-5 pb-4">
            <Container>
                <Row>
                    <Col className="col-6 col-md-3">
                        <h3>Address</h3>
                        <p>Level-2, 04 <br />
                            MH Tower <br />
                            Gulshan, Dhaka <br />
                            Phone : 01812223333</p>
                            
                    </Col>
                    <Col className="col-6 col-md-3 mb-3">
                        <Link className="text-decoration-none text-light footer-btn" to='/about'>About us</Link>
                        <br />
                        <Link className="text-decoration-none text-light footer-btn" to='/contact'>Contact us</Link>
                        <br />
                        <Link to='/terms' className="text-decoration-none text-light footer-btn" >Terms and Conditions</Link>
                        <br />
                        <Link to='/privacy' className="text-decoration-none text-light footer-btn">Privacy Policy</Link>

                    </Col>
                    <Col className="col-12 col-md-6 footer-img mb-3">
                        <img className="img-fluid" src={url} alt="" />
                    </Col>
                    

                </Row>
                <p className="text-center">Copyright © 2021 Tech-World.com</p>
            </Container>

        </div>
    );
};

export default Footer;