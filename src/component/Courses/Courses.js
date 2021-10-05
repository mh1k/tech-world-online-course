import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourse from '../hooks/useCourse';
import './Courses.css'

const Courses = () => {
    
    const [courses] = useCourse();// use from useCourse hooks ,fetch data
    

    return (
        <div>
            <Container>
                <div className="row d-flex align-items-center ">
                <div className="mt-md-0 mt-3 col-md-6 text-center text-md-end  ">
                    <h1 className="instructor text-primary">Our Courses</h1>
                    
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <img className="w-50" src="https://i.ibb.co/qBGB0zM/undraw-Online-learning-re-qw08.png" alt="" />
                </div>
                </div>
                <hr className="mt-0" />
            </Container>
            {
                !courses.length ? <div style={{ marginBottom: "650px" }}></div> : <Container className="mt-5">

                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.map(course => <Col key={course.courseId}>
                                <Card className="courseCard course-card h-100">
                                    <Card.Img className="card-img" variant="top" src={course.image} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{course.courseTitle}</Card.Title>
                                        <div className="d-flex justify-content-between">
                                            <p>{course.courseType}</p>
                                            <p>{course.courseLevel}</p>
                                        </div>
                                            <p className="text-bold">Course Price : {course.price} BDT</p>
                                        <Card.Text>
                                            {course.courseDescription.slice(0, 120)}...
                                        </Card.Text>
                                        <div className="mt-auto ">
                                            <Link to={`/course/${course.courseId}`}><button className="btn w-100 btn-primary">Details</button></Link>
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