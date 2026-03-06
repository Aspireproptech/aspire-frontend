import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardBg from "../../Assets/Images/CardBg.png";
import LowEmi from "../../Assets/Images/LowEmi.jpg";
import Blogs from "../../Assets/Images/Blogs.jpg";
import "../../Assets/HomePage/Home.css";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <Container className=" EmiContainer   ">
      <Row
        xs={12}
        className=" d-flex justify-content-around flex-column flex-lg-row flex-md-row"
      >
        <Col
          lg={5}
          xs={12}
          md={12}
          className=" d-flex justify-content-center pb-lg-0 pb-5"
        >
          <Row className="emiRow  pt-5 pb-5 ps-3">
            <Col className="d-flex flex-column justify-content-center ">
              <h4 className="emiHead">EMI Calculator</h4>
              <br />
              <Link to="/homeloan">
                <button className="emiBtn">View EMI</button>
              </Link>
            </Col>
            <Col>
              <img src={LowEmi} alt="" style={{ width: "80%" }} />
            </Col>
          </Row>
        </Col>
        <Col lg={5} xs={12} md={12} className="d-flex justify-content-center">
          <Row className="emiRow   pt-5 pb-5 ps-3">
            <Col className="d-flex flex-column justify-content-center">
              <h4 className="emiHead">Blogs</h4>
              <br />
              {/* <Link className="text-decoration-none" to={"/blogs"}>
                <button className="emiBtn">View Articles</button>
              </Link> */}
            </Col>
            <Col>
              <img src={Blogs} alt="" style={{ width: "80%" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
