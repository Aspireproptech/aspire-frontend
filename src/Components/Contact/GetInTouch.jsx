import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Contact/GetInTouch.css";
import img1 from "../../Assets/Images/getintouch.svg";
import { PostGetintouchData } from "../API/Api";
import { useNavigate } from "react-router";

function GetInTouch() {
  const [Getintouch, setGetintouch] = useState({
    phone: "",
    name: "",
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
      const data = await PostGetintouchData(Getintouch);
      console.log(data);
      location("/");
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
              <h3>We're here for you</h3>
            </Row>
            <Row className=" GetInTouch-subhead">
              <Col xs={11}>
                <h5>
                  If you have any questions about our services or just want to
                  say hello, we're all ears! We're here to help with whatever
                  you need.
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
                    placeholder="Phone Number"
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
  );
}

export default GetInTouch;
