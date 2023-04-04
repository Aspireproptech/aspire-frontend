import React, { useEffect, useState } from "react";

import { FetchSingleCareer, PostApplicationForm } from "../API/Api";
import { useParams } from "react-router-dom";
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinIcon,
    LinkedinShareButton,
} from "react-share";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeFest from "../Common/HomeFest";
import { ToastContainer, toast } from "react-toastify";

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

function CareerIndividual() {
    const [isLoading, setIsLoading] = useState(false);
    const [SingleCareer, setSingleCareer] = useState();
    const param = useParams();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchCareer = async () => {
        try {
            const careerId = {
                id: param?.id,
            };
            const data = await FetchSingleCareer(careerId);
            setSingleCareer(data?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCareer();
    }, []);

    const path = window.location.href;

    // appplication form

    const [ApplicationData, setApplicationData] = useState({
        name: "",
        position: "",
        number: "",
        email: "",
        cv: "",
        experience: "",
        previousIndustry: "",
    });

    useEffect(() => {
        setApplicationData({
            ...ApplicationData,
            position: SingleCareer?.name,
        });
    }, [SingleCareer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({ ...ApplicationData, [name]: value });
    };

    const PostData = async () => {
        setIsLoading(true);
        if (
            !ApplicationData.name ||
            !ApplicationData.number ||
            !ApplicationData.email ||
            !ApplicationData.cv ||
            !ApplicationData.experience ||
            !ApplicationData.previousIndustry
        ) {
            setIsLoading(false);
            toast.error("Please fill all the fields!");
            return;
        }

        try {
            const data = await PostApplicationForm(ApplicationData);
            if (data?.status === 200) {
                setIsLoading(false);
                handleClose();

                toast.success("We will contact you soon!");
                setApplicationData({
                    ...ApplicationData,
                    name: "",
                    number: "",
                    email: "",
                    cv: "",
                    experience: "",
                    previousIndustry: "",
                });
            }
        } catch (error) {
            toast.error("Something is wrong!");
            console.log(error);
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
            <HomeFest />
            <div
                className="container-fluid "
                style={{ backgroundColor: "#ebebeb" }}
            >
                {/* title */}
                <div className="container d-flex py-5 flex-lg-row flex-column flex-md-row">
                    <div className="container  d-flex   flex-column  pt-3">
                        <div className=" d-flex flex-column justify-content-between job-title pb-5  ">
                            <figure className="CareeBanner ">
                                <img src={SingleCareer?.bannerUrl} alt="" />
                            </figure>

                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <h1>{SingleCareer?.name}</h1>
                                <button onClick={handleOpen}>Apply Now</button>
                            </div>
                        </div>

                        <div className="px-3">
                            <p style={{ wordBreak: "break-word" }}>
                                {SingleCareer?.description}
                            </p>
                        </div>
                    </div>

                    <div className=" mt-5 mt-lg-0 px-4 col-lg-4 col-md-4 col-12 jobdetails pt-3">
                        <h3>Job Details</h3>
                        <hr />

                        <div className="d-flex jobdetails-feature">
                            <h4>Experience - </h4>
                            <p>{SingleCareer?.experience}</p>
                        </div>
                        {/* <br /> */}

                        {/* <div  className='d-flex jobdetails-feature'>
                  <h4>Salary - </h4>
                  <p>{SingleCareer?.salary}</p>
                </div> */}
                        <br />

                        <div className="d-flex jobdetails-feature">
                            <h4>Location - </h4>
                            <p>{SingleCareer?.location}</p>
                        </div>
                        <br />

                        <h3>Share This Post</h3>
                        <hr />
                        <div className="d-flex jobdetails-share">
                            <span className="my-2 d-flex">
                                <WhatsappShareButton
                                    title="Loved This Post"
                                    url={path}
                                >
                                    <WhatsappIcon
                                        size={42}
                                        round={false}
                                        borderRadius={10}
                                    />
                                </WhatsappShareButton>
                            </span>

                            <span className="my-2">
                                <TwitterShareButton
                                    title="Loved This Post"
                                    url={path}
                                >
                                    <TwitterIcon
                                        size={42}
                                        round={false}
                                        borderRadius={10}
                                    />
                                </TwitterShareButton>
                            </span>

                            <span className="my-2">
                                <LinkedinShareButton
                                    title="Loved This Post"
                                    url={path}
                                >
                                    <LinkedinIcon
                                        size={42}
                                        round={false}
                                        borderRadius={10}
                                    />
                                </LinkedinShareButton>
                            </span>

                            <span className="my-2">
                                <FacebookShareButton
                                    title="Loved This Post"
                                    url={path}
                                >
                                    <FacebookIcon
                                        size={42}
                                        round={false}
                                        borderRadius={10}
                                    />
                                </FacebookShareButton>
                            </span>
                        </div>
                        <br />
                    </div>
                </div>
            </div>

            {/* modal */}
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
                        <h4>Caree Form</h4>
                        <hr />
                        <form className="d-flex flex-wrap col-12 justify-content-between">
                            <div class="form-group col-5 mb-4">
                                <label for="exampleInputEmail1"> Name </label>
                                <input
                                    type="text"
                                    value={ApplicationData.name}
                                    class="form-control"
                                    name="name"
                                    onChange={handleChange}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="form-group col-5">
                                <label for="exampleInputEmail1">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    value={ApplicationData.number}
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    onChange={handleChange}
                                    name="number"
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div class="form-group col-5">
                                <label for="exampleInputEmail1">Email</label>
                                <input
                                    type="email"
                                    value={ApplicationData.email}
                                    class="form-control"
                                    onChange={handleChange}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                />
                            </div>

                            <div class="form-group col-5 mb-4">
                                <label for="exampleInputEmail1">
                                    Upload CV (Drive Link)
                                </label>
                                <input
                                    type="text"
                                    value={ApplicationData.cv}
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="cv"
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div class="form-group col-5 mb-4">
                                <label for="exampleInputEmail1">
                                    Total Years of experience{" "}
                                </label>
                                <input
                                    type="text"
                                    value={ApplicationData.experience}
                                    class="form-control"
                                    name="experience"
                                    id="exampleInputEmail1"
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div class="form-group col-5 mb-4">
                                <label for="exampleInputEmail1">
                                    Previous Industry
                                </label>
                                <input
                                    type="text"
                                    value={ApplicationData.previousIndustry}
                                    class="form-control"
                                    name="previousIndustry"
                                    id="exampleInputEmail1"
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </form>
                        <button
                            onClick={PostData}
                            className="career-single-btn"
                        >
                            {isLoading ? "Submitting" : "Submit"}
                        </button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default CareerIndividual;
