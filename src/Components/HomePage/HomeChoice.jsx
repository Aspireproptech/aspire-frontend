import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/HomePage/Perfect.css";
import HomeChoiceImg from "../../Assets/Images/HomeChoiceImg.svg";
import { Link } from "react-router-dom";

function HomeChoice() {
    return (
        <div className="perfectSection homechoiceSection">
            <div className="homeChoiceImageDiv">
                <img src={HomeChoiceImg} alt="" />
            </div>
            <div className="perfectWriteDiv">
                <h2 className="homeChoiceHead">Your Home - Your Choice</h2>
                <br />
                <p className="homechoice-p">
                    We bring to you the most desirable projects in the city, so
                    you can choose your new home with 100% confidence.
                </p>
                <br />
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col
                            lg={6}
                            className=" d-flex justify-content-evenly banner-btn"
                        >
                            <Row
                                className=" mx-md-0"
                                style={{ display: "flex" }}
                            >
                                <Link to="/projects">
                                    <button className="Link-special-banner">
                                        View Projects in Bangalore
                                    </button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomeChoice;
