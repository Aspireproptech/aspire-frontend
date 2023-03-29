import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "../../Assets/Common/TopNav.css"
import logo from "../../Assets/Images/logo.png"

function TopNav() {
  const location = useLocation();
  console.log(location)
  return (
    <Navbar className="navbar" expand="lg">
  <Container>
    <Navbar.Brand >
      <NavLink to={'/'}>
      <img
        src={logo}
        width="70px"
        alt="React Bootstrap logo"
      />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "end"}}>
      <Nav style={{display: "flex", alignItems: "center"}}>
        <NavLink className={ location.pathname=='/projects' ?('active'):('inactive') } to={"/projects"} >Projects</NavLink>
        <NavLink className={ location.pathname=='/about' ?('active'):('inactive') } to={"/about"} >About Us</NavLink>
        {/* <NavLink className={ location.pathname=='/home' ?('active'):('inactive') } to={"/home"} >Home Loan</NavLink> */}
        <NavLink className={ location.pathname=='/blogs' ?('active'):('inactive') } to={"/blogs"} >Resources</NavLink>
        <NavLink className={ location.pathname=='/career' ?('active'):('inactive') } to={"/careers"} >Careers</NavLink>
         {/* <NavLink  to={'/partners'}>
          <div style={{backgroundColor: "#F47E20", fontWeight: "600", borderRadius: "20px", padding: "10px 18px", color:"white"}}>Partners</div>
        </NavLink> */}
        <NavLink to={"/contact"} className={ location.pathname=='/contact' ?('active'):('inactive') } >
          <div style={{backgroundColor: "#F47E20", fontWeight: "600", borderRadius: "20px", padding: "10px 18px", color:"white"}}>Contact Us</div>
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default TopNav