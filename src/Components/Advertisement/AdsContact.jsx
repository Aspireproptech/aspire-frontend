import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Contact/GetInTouch.css";
import img1 from "../../Assets/Images/adscontact.png";
import { PostGetintouchData, FestEnquiry } from "../API/Api";
import { useNavigate } from "react-router";

const AdsContact = () => {
    const [Getintouch, setGetintouch] = useState({
        phone: "",
        name: "",
        email: "",
        comments: ""
    });
    const [disable, setdisable] = useState([]);
    const location = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        setGetintouch({ ...Getintouch, [name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await FestEnquiry(Getintouch);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Container fluid className=" GetInTouch">
                <Row lg={12}>
                    <Col lg={7} className=" GetInTouch-imgsection ">
                        <img src={img1} alt="no img" />
                    </Col>
                    <Col lg={5} className="d-flex flex-column justify-content-center">
                        <Row className="my-3 GetInTouch-head">
                            <h3>Having questions? No worries. Call us today!</h3>
                        </Row>
                        <Row className=" GetInTouch-subhead">
                            <Col xs={11}>
                                <h5>
                                    Are you wondering how to get the most out of Grand Diwali Home Festival 2023?  We've got you covered.
                                    <br /><br />
                                    Just call us and we've got a team of experts ready to answer any questions you might have. From general inquiries to specific questions about the event, we'll be happy to help you out.
                                    <br /><br />
                                    So what are you waiting for? Give us a call today!
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <div className=" GetInTouch-inputs">
                                <span>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        placeholder="Name"
                                    />
                                </span>
                                <span>
                                    <input
                                        type="tel"
                                        onChange={handleChange}
                                        name="phone"
                                        placeholder="Phone Number *"
                                        required
                                    />
                                </span>
                                <span>
                                    <input
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        placeholder="Email *"
                                        required
                                    />
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="comments"
                                        placeholder="Comments"
                                    />
                                </span>
                            </div>
                        </Row>
                        <Row className=" GetInTouch-btn">
                            <button onClick={handlesubmit}>Contact</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdsContact