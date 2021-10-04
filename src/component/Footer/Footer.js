import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const url="https://res.cloudinary.com/ghorebazar/image/upload/v1593245283/ssl-payment-banner.webp?v1.2"
    return (
        <div className="footer mt-5 bg-dark text-light pt-5 pb-4">
            <Container>
                <Row>
                    <Col className="col-3">
                        <h3>Address</h3>
                        <p>Level-4, 34 <br />
                            Awal Centre <br />
                            Banani, Dhaka <br />
                            Phone : 01812223333</p>
                            
                    </Col>
                    <Col className="col-3">
                        <Link className="text-decoration-none text-light" to='/about'>About us</Link>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>

                    </Col>
                    <Col className="col-6 footer-img">
                        <img src={url} alt="" />
                    </Col>
                    

                </Row>
                <p className="text-center">Copyright © 2021 Tech-World.com</p>
            </Container>

        </div>
    );
};

export default Footer;