import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row, Modal } from 'react-bootstrap'
import AdsImage from "../../Assets/Ads/Adds.jpeg"
import Portfolio from '../HomePage/Portfolio'
import "./ads.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link } from "react-router-dom";
import { FetchPropertyData, ImageEmailData, RegisterData } from "../API/Api";
import GetInTouch from '../Contact/GetInTouch'
import PatioPass from "../../Assets/Ads/patio-pass.png"
import RoashanPass from "../../Assets/Ads/roshan-pass.png"
import TerrazaPass from "../../Assets/Ads/terraza-pass.png"
import html2canvas from "html2canvas";
import { storage } from "../../firebase"
import axios from 'axios';
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";

const Ads = () => {


    const [portfolioItems, setportfolioItems] = useState([]);
    const [PortfolioDetail, setPortfolioDetail] = useState();
    const [propertyMap, setPropertyMap] = useState({});
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false)
    const [passSeq, setPassSeq] = useState({})
    const [projectImg, setProjectImg] = useState()
    const [projectName, setProjectName] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (projName) => {
        console.log(projName)
        setRegister({ ...register, projectName: projName })
        setShow(true);
    }

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        projectName: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }



    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                firstName: register.firstName,
                lastName: register.lastName,
                projectName: register.projectName,
                email: register.email,
                number: register.phone
            };

            if (register.projectName.toLowerCase().includes("speckles patio")) {
                setProjectImg(PatioPass)
            } else if (register.projectName.toLowerCase().includes("roshan gardenia")) {
                setProjectImg(RoashanPass)
            } else if (register.projectName.toLowerCase().includes("terraza")) {
                setProjectImg(TerrazaPass)
            } else {
                setProjectImg(TerrazaPass)
            }
            const data = await RegisterData(payload);
            setPassSeq(data)
            setShow(false)
            setShowPass(true)
            setTimeout(() => {
                handleDownload()
            }, 3000);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
        console.log(register)
    }

    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    const handleDownload = () => {
        var nodePass = document.getElementById("pass")
        html2canvas(nodePass).then(async function (canvas) {
            var img = canvas.toDataURL(`image/png`);
            var link = document.createElement("a");
            link.download = "pass." + "png";
            link.href = img;
            console.log(link)
            var file = dataURLtoFile(link.href, 'pass.png');
            // const storageRef = ref(storage, `files/pass.png`);

            // uploadBytes(storageRef, file).then((snapshot) => {
            //     console.log('Uploaded a blob or file!');
            // });
            // console.log(file);

            const formData = new FormData()
            formData.append('image', file)
            formData.append('email', register.email)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            axios.post("https://aspire-kappa.vercel.app/cn/emailpass", formData, config).then((response) => {
                console.log(response)
            });

            setRegister({
                firstName: "",
                lastName: "",
                projectName: "Please choose project name",
                phone: "",
                email: ""
            })
            link.click();
            // const data = await ImageEmailData(payload);
            // setPassSeq(data)
            // setShowPass(true)
            // console.log(data)

        });
    }
    const fetchPortfolio = async () => {
        try {
            const { data } = await FetchPropertyData();
            setportfolioItems(data?.data);
            setPortfolioDetail(data?.data[0]);

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    return (
        <>
            {/*-------- Banner ----------  */}
            <div className="banner-container">
                <img src={AdsImage} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            {/* ----------- Register Form ------- */}
            <Container fluid className='mt-5' style={{ padding: "0 30px" }}>
                <Row className='align-items-center'>
                    <Col lg={8}>
                        <div className="ad-sec2-left">
                            <h3>Brigade Year End Bonanza</h3>
                            <div className="head-underline"></div>
                            <div className="d-flex ad-sec2-list mt-4">
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                    </div>
                                    <h5>Homes From ₹30L - 4.6 Cr*</h5>
                                </div>
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-sharp fa-solid fa-gift"></i>
                                    </div>
                                    <h5>Exclusive Deals</h5>
                                </div>
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-solid fa-building"></i>
                                    </div>
                                    <h5>Over 35+ Projects</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="register-box">
                            <h5>Register Your Interest</h5>
                            <div className="register-field">
                                <form onSubmit={handleClick}>
                                    <input name="firstName" value={register.firstName} type="text" pattern="[a-zA-Z ]{2,30}" title="Only Character" onChange={handleChange} placeholder='First Name' />
                                    <input name="lastName" value={register.lastName} type="text" pattern="[A-Za-z]{2,30}" title="Only Character" onChange={handleChange} placeholder='last Name' />
                                    <select value={register.projectName} onChange={handleChange} name="projectName">
                                        <option selected>Please choose project name</option>
                                        {
                                            portfolioItems.map((e) => (
                                                <option>{e?.name}</option>
                                            ))
                                        }
                                    </select>
                                    <input type="phone" value={register.phone} maxLength={10} pattern="[0-9]{10}" title='Enter Valid Phone No.' name="phone" onChange={handleChange} placeholder='Phone' />
                                    <input type="email" value={register.email} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter Valid Email" onChange={handleChange} placeholder='Email' />
                                    <p>I Agree to the <a href="">Terms & Conditions.</a></p>
                                    <div className="register-btn ">
                                        <button>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="sec3-container mt-5">
                <h3>Integrated Townships • Apartments • Townhouses • Villas • Penthouses • Plots</h3>
                <div className="sec-list mt-3">
                    <ul className='m-0'>
                        <li>Projects across Bengaluru - Aerospace Park, Banashankari, Budigere Cross, Devanahalli, Hebbal, Jakkur, Jalahalli, Kanakapura Road, Kogilu Road, Mysore Road, Old Madras Road, Padmanabhanagar, Sarjapur Road & Whitefield-Sarjapur Road</li>
                        <li>Also in CHENNAI, HYDERABAD & MYSURU</li>
                    </ul>
                </div>
            </div>
            {/* ------------ Tiles ----------- */}
            <Container fluid className='mt-5'>
                <div className="sec5">
                    <h3>THE 6 PILLARS OF OUR SUCCESS</h3>
                </div>
                <Row className="mt-4">
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div>
                                <div className='d-flex align-items-center'>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <h5>QUALITY</h5>
                                </div>
                                <p>Delivering high quality projects forms the bedrock of whatever we do</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa-solid fa-location-dot"></i>
                                <h5>EFFICIENT SPACE PLANNING</h5>
                            </div>
                            <p>Our team ensures that the space planning is done in the most efficient way</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-pencil-square"></i>
                                <h5>EFFICIENT SPACE PLANNING</h5>
                            </div>
                            <p>Our team will constantly work on cost efficiency so that the end user will enjoy it.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div>
                                <div className='d-flex align-items-center'>
                                    <i class="fa fa-clock-o"></i>
                                    <h5>TIMELY DELIVERY</h5>
                                </div>
                                <p>Our team delivers quality and on time as per our promises</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-users"></i>
                                <h5>BUILDING WITH TRUST & HONESTY</h5>
                            </div>
                            <p>Our values our built on the foundation of trust and honesty</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-user-circle-o"></i>
                                <h5>EXPERTS AT WORK</h5>
                            </div>
                            <p>Our team comprises of exceptional construction & real estate experts</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* ----------- Project List ---------- */}
            <div className="sec4-container mt-5">
                <h3>Projects</h3>
                <div className="project-underline"></div>
                <div className="project-whole-card">
                    <Container fluid className='mt-5'>
                        {
                            portfolioItems.map((data) => (
                                <Row className='mt-4'>
                                    <Col lg={4}>
                                        <div className="site-img">
                                            <img src={data?.pictures} style={{ width: "100%", height: "100%", borderRadius: "10px" }} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="site-details">
                                            <h3>{data?.name}</h3>
                                            <div className="site-sub-details">
                                                <div className="d-flex sub-detail-container">
                                                    <LocationOnIcon className="detail-icon" />
                                                    <h4>{data?.location}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <LocalAtmIcon className="detail-icon" />
                                                    <h4>{data?.price}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <HomeIcon className="detail-icon" />
                                                    <h4>{data?.ready ? "Ready To move" : "Posession Soon"}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <BedroomChildIcon className="detail-icon" />
                                                    <h4>{data?.BHK},BHK</h4>
                                                </div>
                                            </div>
                                            <button onClick={() => handleShow(data?.name)} className='view-property-btn'>View Property</button>
                                            <Link to={`/property/${data?._id}`}>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="site-offer">
                                            <h3>Offers</h3>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Container>
                </div>
            </div>
            {/* --------------------- Contact Us ------------- */}
            <GetInTouch />

            {
                showPass && (
                    <div class="boq-service">
                        <div className="card-achv box-shadow justify-center box-shadow shadow-2xl">
                            <div className="priority-container" id="pass">
                                <img src={projectImg} style={{ width: "100%", height: "100%" }} alt="" />
                                <div className="user-id">
                                    <h3>#{passSeq?.data?.data}</h3>
                                </div>
                            </div>
                            <div onClick={handleDownload} className="download-button">
                                <button> <i class="fa-solid fa-download"></i> Download</button>
                            </div>
                            <i onClick={() => setShowPass(false)} class="fa-solid fa-circle-xmark close-pass-btn"></i>
                        </div>
                    </div>

                )
            }

            <Modal show={show} onHide={handleClose} centered>
                <div className="register-box">
                    <h5>Register Your Interest<i onClick={handleClose} class="fa-solid fa-circle-xmark close-cancel-btn"></i></h5>
                    <div className="register-field">
                        <form onSubmit={handleClick}>
                            <input name="firstName" value={register.firstName} type="text" pattern="[a-zA-Z ]{2,30}" title="Only Character" onChange={handleChange} placeholder='First Name' />
                            <input name="lastName" value={register.lastName} type="text" pattern="[a-zA-Z ]{2,30}" title="Only Character" onChange={handleChange} placeholder='last Name' />
                            <select value={register.projectName} onChange={handleChange} name="projectName">
                                <option selected>{register.projectName}</option>
                                {
                                    portfolioItems.map((e) => (
                                        <option>{e?.name}</option>
                                    ))
                                }
                            </select>
                            <input type="text" value={register.phone} name="phone" pattern="[0-9]{10}" title='Enter Valid Phone No.' onChange={handleChange} placeholder='Phone' />
                            <input type="text" value={register.email} name="email" onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter Valid Email" placeholder='Email' />
                            <p>I Agree to the <a href="">Terms & Conditions.</a></p>
                            <div className="register-btn ">
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Ads