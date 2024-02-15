import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Assets/HomePage/Home.css'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/HomePage/navigate-logo.png"

function HomeBuying() {
  return (
    <div className='perfectSection homeBuyTop'>
      <div className='perfectWriteDiv'>
       
        <h2 className='homeBuyingHead'>Home Buying Simplified</h2>
        <br />
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={6} className=" d-flex justify-content-evenly banner-btn">
              <Row className=" mx-md-0" style={{ display: "flex" }}>
                <Link to="/projects">
                  <button className='Link-special-banner'>View Projects</button>
                </Link>
              </Row>
              <Row style={{ display: "flex", }}>
                <Link to="/homeloan">
                  <button className='Link-special-banner-second'>Easy Home Loan</button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>


      </div>

    </div>
  )
}

export default HomeBuying