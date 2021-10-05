import React from 'react';
import './Instructor.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, []);

    return (
        <div>
            <Container>
                <div className="row d-flex align-items-center justify-content-center  ">
                    <div className="mt-md-0 mt-3 col-md-8 text-center ">
                        <h1 className="text-primary instructor">Start learning from
                            the World best instructors
                        </h1>

                    </div>
                    <div className="col-md-4 text-center text-md-start">
                        <img className="w-75" src="https://i.ibb.co/VjbxPwJ/undraw-professor-8lrt.png" alt="" />
                    </div>
                </div>
                <hr className="mt-0" />

            </Container>
            {
                !instructors.length ? <div style={{ marginBottom: "650px" }}></div> : <Container className="mt-5">

                    <Row xs={1} md={3} className="g-4">
                        {
                            instructors.map(instructor => <Col key={instructor.courseId}>
                                <Card className="text-center instructor-card h-100">
                                    <div className="mt-2">
                                        <img className="inst-img" src={instructor.image} alt="" />
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{instructor.name}</Card.Title>
                                        <p>{instructor.profession}</p>
                                        <hr />
                                        <Card.Text>
                                            {instructor.description}
                                        </Card.Text>
                                        <div className="mt-auto ">

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>

                </Container>
            }
        </div>
    );
};

export default Instructor;