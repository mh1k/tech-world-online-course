import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="col-12  col-md-8"><h2>Working for the IT Industry</h2>
                    <p>Tech World has always been passionatly working for the betterment of IT industry. We want to grow skilled IT professionals who will rock the world with their extraordinary professionalism. As part of our mission, we arrange programming contest, software engineering events and seminars. We believe in hard core industry specialization to grow the top 10% IT professionals in the country and around the globe.</p>
                    <br />
                    <h2>Why Choose Tech World:</h2>
                    <h4>Real World Project Development</h4>
                    <p>Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.</p>
                    <br />
                    <h4>Follow Latest Industry Standard Tools and Techniques</h4>
                    <p>Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.</p>
                    <br />
                    <h4>Build Solid Foundations</h4>
                    <p>Successful Careers depend on a solid mastery of the fundamentals. Build a solid foundations on the essential programming skills and knowledge.</p>
                    <br />
                    <h4>Learn Teamwork and Collaboration</h4>
                    <p>Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.</p>
                </Col>
                <Col className="col-12 col-md-4 img-section">
                    <img className="my-5 w-100" src="https://elements-cover-images-0.imgix.net/790945c8-90f0-4ac9-b551-06fa26d4f597?auto=compress%2Cformat&fit=max&w=2038&s=24d36f0a1f023800b85db210496ed435" alt="" /><br />
                    <img className=" w-100" src="https://st3.depositphotos.com/32378672/33563/v/450/depositphotos_335637156-stock-illustration-programmer-flat-vector-hackathon-concept.jpgstration-free-commercial-use-its-very-unique-icon-196821158.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;