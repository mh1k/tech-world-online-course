import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useCourse from '../hooks/useCourse';
import './Courses.css'

const Courses = () => {
    /* const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./techWorld.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, []) */
    const [courses] = useCourse();

    return (
        <div>
            {
                !courses.length ? <div style={{ marginBottom: "650px" }}></div> : <Container className="mt-5">

                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.map(course => <Col key={course.courseId}>
                                <Card className="h-100">
                                    <Card.Img className="card-img" variant="top" src={course.image} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{course.courseTitle}</Card.Title>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-bold">Course Price : {course.price} BDT</p>
                                            <p>{course.courseLevel}</p>
                                        </div>
                                        <Card.Text>
                                            {course.courseDescription.slice(0, 120)}...
                                        </Card.Text>
                                        <div className="mt-auto ">
                                            <Link to={`/course/${course.courseId}`}><button className="btn w-100 btn-secondary">Details</button></Link>
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

export default Courses;