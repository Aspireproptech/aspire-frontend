import React, { useState } from "react";
import "../../Assets/HomePage/Perfect.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import Checkbox from "@mui/material/Checkbox";
import { PostrequirementData } from "../API/Api";
import { ToastContainer, toast } from "react-toastify";

function Perfect() {
  const [show, setShow] = useState(false);
  const [requirement, setrequirement] = useState({
    name: "",
    email: "",
    number: "",
    area: [],
    price: [],
    interest: [],
    otherSpecification: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange1 = (e) => {
    let name = e.target.name;
    setrequirement({ ...requirement, [name]: e.target.value });
  };
  const handleAreaCheck = (e) => {
    if (requirement.area.includes(e.target.value)) {
      let temp = requirement.area.indexOf(e.target.value);
      let temp2 = requirement.area;
      temp2.splice(temp, 1);
      setrequirement({ ...requirement, area: temp2?.length == 0 ? [] : temp2 });
    } else {
      setrequirement({
        ...requirement,
        area: [...requirement.area, e.target.value],
      });
    }
  };

  const handlePriceCheck = (e) => {
    if (requirement.price.includes(e.target.value)) {
      let temp = requirement.price.indexOf(e.target.value);
      let temp2 = requirement.price;
      temp2.splice(temp, 1);
      setrequirement({
        ...requirement,
        price: temp2?.length == 0 ? [] : temp2,
      });
    } else {
      setrequirement({
        ...requirement,
        price: [...requirement.price, e.target.value],
      });
    }
  };

  const handleBHKCheck = (e) => {
    if (requirement.interest.includes(e.target.value)) {
      let temp = requirement.interest.indexOf(e.target.value);
      let temp2 = requirement.interest;
      temp2.splice(temp, 1);
      setrequirement({
        ...requirement,
        interest: temp2?.interest == 0 ? [] : temp2,
      });
    } else {
      setrequirement({
        ...requirement,
        interest: [...requirement.interest, e.target.value],
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const data = await PostrequirementData(requirement);
      console.log(data);
      debugger;
      if (data?.data?.success === true) {
        debugger;
        toast.success(" Request Send Successfully!", {
          position: "bottom-left",

          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "light",
        });
      }
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("Something is wrong!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="perfectSection perfectBg homechoiceSection">
        <div className="perfectWriteDiv">
          <h2 className="homeChoiceHead">Find your perfect home</h2>
          <br />
          <p className="perfectPara">
            How much can you afford? Which is the best location to buy a home?
            What do you need to get your loan approved? Are these thoughts
            running through your mind right now? Relax. Let us take the hassle
            out of finding your dream home. Just tell us what you're looking for
            and we'll handle the rest.
          </p>
          <br />
          <div
            className="Link-special-banner link-width"
            onClick={handleShow}
            style={{ margin: "auto", padding: "10px 0px" }}
          >
            Post your requirements
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        style={{ zIndex: "100000000" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Your Requirement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <Form.Group
                className="mb-3  px-2"
                controlId="outlined-password-input1"
              >
                <TextField
                  id="outlined-password-input"
                  name="name"
                  onChange={handleChange1}
                  size="small"
                  label="Full Name"
                  type="text"
                  autoComplete="current-password"
                  controlId="formBasicName"
                />
              </Form.Group>
              <Form.Group
                className="mb-3  px-2"
                controlId="outlined-password-input2"
              >
                <TextField
                  id="outlined-password-input"
                  name="number"
                  onChange={handleChange1}
                  size="small"
                  label="Phone no."
                  type="tel"
                  controlId="formBasicName"
                  autoComplete="current-password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3  px-2"
                controlId="outlined-password-input3"
              >
                <TextField
                  id="outlined-password-input"
                  name="email"
                  onChange={handleChange1}
                  size="small"
                  label="Email Address"
                  controlId="formBasicName"
                  type="email"
                  autoComplete="current-password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 my-3 px-3 d-flex flex-column"
                controlId="formBasicName"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  className="my-2"
                >
                  Area
                </span>
                <span>
                  <Checkbox
                    size="sm"
                    onChange={handleAreaCheck}
                    value="North Banglore"
                  />{" "}
                  North Banglore{" "}
                </span>
                <span>
                  <Checkbox
                    size="sm"
                    onChange={handleAreaCheck}
                    value="South Banglore"
                  />{" "}
                  South Banglore{" "}
                </span>
                <span>
                  <Checkbox
                    size="sm"
                    onChange={handleAreaCheck}
                    value="West Banglore"
                  />{" "}
                  West Banglore{" "}
                </span>
                <span>
                  <Checkbox
                    size="sm"
                    onChange={handleAreaCheck}
                    value="Easy Banglore"
                  />{" "}
                  Easy Banglore{" "}
                </span>
                <span>
                  <Checkbox
                    size="sm"
                    onChange={handleAreaCheck}
                    value="Central Banglore"
                  />{" "}
                  Central Banglore{" "}
                </span>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group
                className="mb-3 my-3 px-3 d-flex flex-column"
                controlId="formBasicName1"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  className="my-2"
                >
                  Price Range
                </span>
                <div className="d-flex flex-wrap">
                  <span>
                    <Checkbox
                      size="sm"
                      onChange={handlePriceCheck}
                      value="up to 50"
                    />{" "}
                    Upto 50 lacs{" "}
                  </span>
                  <span>
                    <Checkbox
                      size="sm"
                      onChange={handlePriceCheck}
                      value="50 to 70"
                    />{" "}
                    50 to 70 lacs{" "}
                  </span>
                  <span>
                    <Checkbox
                      size="sm"
                      onChange={handlePriceCheck}
                      value="75 to 1cr"
                    />{" "}
                    75 lacs to 1 crore{" "}
                  </span>
                  <span>
                    <Checkbox
                      size="sm"
                      onChange={handlePriceCheck}
                      value="1cr to 2cr"
                    />{" "}
                    1 crore to 2 crore{" "}
                  </span>
                  <span>
                    <Checkbox
                      size="sm"
                      onChange={handlePriceCheck}
                      value="more than 2cr"
                    />{" "}
                    more than 2 crore{" "}
                  </span>
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 my-3 px-3 d-flex flex-column"
                controlId="formBasicName2"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  className="my-2"
                >
                  Interested In :{" "}
                </span>
                <div className="d-flex flex-wrap">
                  <span>
                    <Checkbox
                      onChange={handleBHKCheck}
                      value="1 BHK"
                      size="sm"
                    />{" "}
                    1 BHK{" "}
                  </span>
                  <span>
                    <Checkbox
                      onChange={handleBHKCheck}
                      value="2 BHK"
                      size="sm"
                    />{" "}
                    2 BHk{" "}
                  </span>
                  <span>
                    <Checkbox
                      onChange={handleBHKCheck}
                      value="2.5 BHK"
                      size="sm"
                    />{" "}
                    2.5 BHK{" "}
                  </span>
                  <span>
                    <Checkbox
                      onChange={handleBHKCheck}
                      value="3 BHK"
                      size="sm"
                    />{" "}
                    3 BHK{" "}
                  </span>
                  <span>
                    <Checkbox
                      onChange={handleBHKCheck}
                      value="4 BHK"
                      size="sm"
                    />{" "}
                    4 BHK{" "}
                  </span>
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 my-3 px-3 d-flex flex-column"
                controlId="formBasicName"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  className="my-2"
                >
                  Other Specification :{" "}
                </span>
                <div className="d-flex flex-wrap">
                  <Form.Control
                    type="text"
                    name="otherSpecification"
                    id="inputPassword5"
                    size="lg"
                    onChange={handleChange1}
                    controlId="others"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </Form.Group>
            </div>
          </div>
          <Button
            variant="primary"
            className="ms-2 my-3 p-2"
            onClick={handleSubmit}
            style={{ backgroundColor: "var(--orangeColor)", border: "none" }}
          >
            Request Info
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Perfect;
