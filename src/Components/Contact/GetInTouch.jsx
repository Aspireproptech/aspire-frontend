import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Contact/GetInTouch.css";
import img1 from "../../Assets/Images/getintouch.svg";
import { PostGetintouchData } from "../API/Api";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import SpinLoader from "../Common/SpinLoader";

function GetInTouch() {
    const [isLoading, setIsLoading] = useState(false);
    const [Getintouch, setGetintouch] = useState({
        phone: "",
        name: "",
        email: "",
        message: "",
    });
    const [disable, setdisable] = useState([]);
    const location = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        setGetintouch({ ...Getintouch, [name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (
            !Getintouch.name ||
            !Getintouch.phone ||
            !Getintouch.email ||
            !Getintouch.message
        ) {
            toast.error("Please fill all the fields!");
            setIsLoading(false);
            return;
        }
        try {
            const data = await PostGetintouchData(Getintouch);
            setGetintouch({
                phone: "",
                name: "",
                email: "",
                message: "",
            });
            if (data?.status === 200) {
                toast.success(" We Will Contact you soon!", {
                    position: "bottom-left",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
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
            setGetintouch({
                phone: "",
                name: "",
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
            <Container fluid className=" GetInTouch">
                <Row lg={12}>
                    <Col lg={7} className=" GetInTouch-imgsection ">
                        <img src={img1} alt="no img" />
                    </Col>
                    <Col
                        lg={5}
                        className="d-flex flex-column justify-content-center"
                    >
                        <Row className="my-3 GetInTouch-head">
                            <h3>We're here for you</h3>
                        </Row>
                        <Row className=" GetInTouch-subhead">
                            <Col xs={11}>
                                <h5>
                                    If you have any questions about our services
                                    or just want to say hello, we're all ears!
                                    We're here to help with whatever you need.
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <div className=" GetInTouch-inputs">
                                <span>
                                    <input
                                        type="text"
                                        value={Getintouch?.name}
                                        onChange={handleChange}
                                        name="name"
                                        placeholder="Name"
                                    />
                                </span>
                                <span>
                                    <input
                                        type="tel"
                                        value={Getintouch?.phone}
                                        onChange={handleChange}
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </span>
                                <span>
                                    <input
                                        type="email"
                                        value={Getintouch?.email}
                                        onChange={handleChange}
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </span>
                                <span>
                                    <textarea
                                        type="text"
                                        value={Getintouch?.message}
                                        onChange={handleChange}
                                        name="message"
                                        placeholder="Enter your message here..."
                                        rows={5}
                                        required
                                    />
                                </span>
                            </div>
                        </Row>
                        <Row className=" GetInTouch-btn">
                            <button
                                className={isLoading && "pt-0"}
                                disabled={isLoading}
                                onClick={handlesubmit}
                            >
                                {isLoading ? <SpinLoader /> : "Contact"}
                            </button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GetInTouch;
