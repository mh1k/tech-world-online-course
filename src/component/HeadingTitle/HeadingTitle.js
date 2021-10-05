import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourse from '../hooks/useCourse';
import './HeadingTitle.css'

const HeadingTitle = () => {

    const [courses] = useCourse();
    return (
        <div>
            <div className="heading-title d-flex align-items-center justify-content-center">
                <div className="heading-text ">
                    <h1 className="text-head" >LEARN FROM THE BEST</h1>
                    <h1>Get Ahead, Improve Your Skill with Tech World</h1>
                    <h5>Get Hands On Experience in Real World Software Development from Industry Experts <br /> Through Practical and Real World Courses.</h5>
                </div>
            </div>
            <Container className="mt-5">

                <Row xs={1} md={2} className="g-4">
                    {
                        courses.slice(0, 4).map(course => <Col  key={course.courseId}>
                            <Card className="courseCard h-100">

                                <Card.Img className="card-img2" variant="top" src={course.image} />

                                <Card.Body className="course-body d-flex flex-column">
                                    <h3 className="h2">{course.courseTitle}</h3>
                                    <div className="d-md-flex justify-content-between mt-3 mb-3 ">
                                        <h5>Course Price : {course.price} BDT</h5>
                                        <h5>{course.courseLevel} | {course.courseType}</h5>
                                    </div>
                                    <Card.Text className="course-Des">
                                        {course.courseDescription.slice(0, 320)}...
                                    </Card.Text>
                                    <div className="mt-auto ">
                                        <Link to={`/course/${course.courseId}`}><button className="btn  p-2 w-100 btn-primary">Details</button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>
            <div className="text-center mt-5">
                <Link className="bg-light px-3 py-2 text-dark" to='/courses'>See all Course</Link>
            </div>
        </div>



    );
};

export default HeadingTitle;