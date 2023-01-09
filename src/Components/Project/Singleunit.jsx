import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../../Assets/Project/property.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PostPriceData } from "../API/Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Singleunit(props) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [ApplicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [disable, setdisable] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setApplicationData({ ...ApplicationData, [name]: value });
  };

  const PostData = async () => {
    try {
      await PostPriceData(ApplicationData);
      setdisable(true);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Property-singleunit">
        <div className="Property-singleunit-img">
          <figure>
            <img
              src={props?.data?.floorPlan}
              onClick={handleOpen1}
              className="w-100"
              alt=""
            />
          </figure>
        </div>
        <div className="Property-singleunit-desc"> {props?.data?.range}</div>
        <div className="Property-singleunit-desc">{props?.data?.size}</div>
        <div className="Property-singleunit-desc">
          <button
            disabled={disable}
            className="getprice-btn"
            onClick={handleOpen}
          >
            Get Price
          </button>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="career-modal-single">
            <h4>Price Inquiry Form</h4>
            <hr />
            <form className="d-flex flex-wrap col-12 justify-content-between">
              <div class="form-group col-5 mb-4">
                <label for="exampleInputEmail1"> Name </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group col-5">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail1"
                  onChange={handleChange}
                  name="phone"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="form-group col-5">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
              </div>
            </form>
            <button onClick={PostData} className="career-single-btn mt-3">
              Submit
            </button>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <div className="career-modal-single">
            <img src={props?.data?.floorPlan} className="w-100" alt="no img" />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Singleunit;
