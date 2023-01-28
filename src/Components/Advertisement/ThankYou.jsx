import React, { createElement, useEffect, useState } from 'react'
import html2canvas from "html2canvas";
import { Col, Container, Row, Modal } from 'react-bootstrap'

import PatioPass from "../../Assets/Ads/patio-pass.png"
import RoashanPass from "../../Assets/Ads/roshan-pass.png"
import TerrazaPass from "../../Assets/Ads/terraza-pass.png"
import AlpinePass from "../../Assets/Ads/alpine-pass.png"
import BilberryPass from "../../Assets/Ads/bilberry-pass.png"
import EstellaPass from "../../Assets/Ads/estella-pass.png"
import GreenFieldsPass from "../../Assets/Ads/greenfields-pass.png"
import PinnaclePass from "../../Assets/Ads/pinnacle-pass.png"
import WatsoniaPass from "../../Assets/Ads/watsonia-pass.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TagManager from 'react-gtm-module'

const ThankYou = ({ festinquiry, setFestInquiry }) => {

    const [projectImg, setProjectImg] = useState()
    const { festCustomer, CustomerSeq } = festinquiry
    const navigate = useNavigate()

    const priorityPass = () => {
        if (festCustomer.projectName.toLowerCase().includes("speckles patio")) {
            setProjectImg(PatioPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("roshan gardenia")) {
            setProjectImg(RoashanPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("terraza")) {
            setProjectImg(TerrazaPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("pyramid bilberry")) {
            setProjectImg(BilberryPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("greenfields")) {
            setProjectImg(GreenFieldsPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("amigo estella")) {
            setProjectImg(EstellaPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("alpine pyramid")) {
            setProjectImg(AlpinePass)
        } else if (festCustomer?.projectName.toLowerCase().includes("watsonia")) {
            setProjectImg(WatsoniaPass)
        } else if (festCustomer?.projectName.toLowerCase().includes("pinnacle")) {
            setProjectImg(PinnaclePass)
        }
        setTimeout(() => {
            if (festinquiry) {
                handleDownload()
            } else {
                navigate("/")
            }
        }, 2000);
    }

    const handleDownload = () => {
        var nodePass = document.getElementById("pass")
        html2canvas(nodePass).then(async function (canvas) {
            var img = canvas.toDataURL(`image/png`);
            var link = document.createElement("a");
            link.download = "pass." + "png";
            link.href = img;
            var file = dataURLtoFile(link.href, 'pass.png');

            const formData = new FormData()
            formData.append('image', file)
            formData.append('email', festCustomer.email)
            formData.append('phone', festCustomer.number)
            formData.append('project', festCustomer.projectName)
            formData.append('name', festCustomer.firstName + " " + festCustomer.lastName || "")

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            axios.post("https://aspire-kappa.vercel.app/cn/emailpass", formData, config).then((response) => {
                console.log(response)
            });

            link.click();
        });
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

    useEffect(() => {
        if (festinquiry?.festCustomer) {
            priorityPass()
        }
    }, [])


    const tagManagerArgs = {
        gtmId: 'GTM-5JW7F9W'
    }
    TagManager.initialize(tagManagerArgs)

    return (
        <>
            {
                festinquiry?.festCustomer ? <>
                    <div className="thank-you-container">
                        <Row className='thank-you-row'>
                            <Col lg={5}>
                                <div className="pass-img" id="pass">
                                    <img src={projectImg} style={{ width: "100%", height: "100%" }} alt="" />
                                    <div className="user-id">
                                        <h3>#{CustomerSeq}</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} className="thank-you-desc">

                                <h3>Thank You for Registering <br /> For Aspire Home Fest 2023</h3>
                                <div className='thank-you-message'>
                                    <p>Please save your Priority Pass and show it at the time of your Site Visit.</p>
                                    <p>Feel free to reach out to us for any queries. </p>
                                    <div className="d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
                                        <span className='text-white m-1'>Call : 98866 60229</span>
                                        <span className='text-white m-1'>Email : hello@aspireprop.com</span>
                                    </div>
                                </div>
                                <div onClick={handleDownload} className="pass-download-btn">
                                    <span className='download-message'>Download your Priority Pass here</span>
                                    <button> <i class="fa-solid fa-download"></i> Download</button>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </> : <>
                    <div className="thank-you-container">
                        <Row className='thank-you-row'>
                            <Col lg={12} className="thank-you-desc">

                                <h3>Register <br /> For Aspire Home Fest 2023</h3>
                                <div className='thank-you-message'>
                                    <p>Feel free to reach out to us for any queries. </p>
                                    <div className="d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
                                        <span className='text-white m-1'>Call : 98866 60229</span>
                                        <span className='text-white m-1'>Email : hello@aspireprop.com</span>
                                    </div>
                                </div>
                                <div onClick={() => navigate("/aspire-homefest2023")} className="pass-download-btn mt-4">
                                    <button> Aspire Home Fest</button>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </>
            }



        </>
    )
}

export default ThankYou