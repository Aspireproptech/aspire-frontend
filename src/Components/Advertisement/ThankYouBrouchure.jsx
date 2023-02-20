import React, { createElement, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ThankYouBrouchure = ({ festinquiry }) => {
  console.log(festinquiry?.brouchure);
  const navigate = useNavigate();
  const [isDownload, setIsdownload] = useState(true);
  // useEffect(() => {
  //   if (isDownload) {
  //     setTimeout(handleDownload, 2000);
  //     setIsdownload(false);
  //   }
  // }, [isDownload]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = festinquiry?.brouchure;
    a.download = festinquiry?.brouchure.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div>
      <div className="thank-you-container">
        <Row className="thank-you-row">
          {/* <Col lg={5}>
                                <div className="pass-img" id="pass">
                                    <img src={projectImg} style={{ width: "100%", height: "100%" }} alt="" />
                                    <div className="user-id">
                                        <h3>#{CustomerSeq}</h3>
                                    </div>
                                </div>
                            </Col> */}
          <Col lg={12} className="thank-you-desc">
            <h3>Thank You for Contacting Us</h3>
            <div className="thank-you-message">
              <p className="mt-4">We Have Recieved your Message.</p>
              <p className="mt-4">We Will Reach You Immediately.</p>
            </div>
            {festinquiry?.brouchure && (
              <div onClick={handleDownload} className="pass-download-btn mt-4">
                <button>
                  {" "}
                  {/* <i class="fa-solid fa-download"></i>
                   */}
                  Download Brouchure
                </button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ThankYouBrouchure;
