import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Assets/HomePage/Perfect.css";

function ChangeGame() {
    const navigate = useNavigate();
    return (
        <div className="perfectSection changeGameSection">
            <div className="changeGameDiv">
                <div className="perfectWriteDiv changeGameContent">
                    <p>You are a builder/developer</p>
                    <br />
                    <h2 className="homeChoiceHead">
                        Change the game with Aspire
                    </h2>
                    <br />

                    <div className="inactive" style={{ margin: "auto" }}>
                        <button
                            onClick={() => navigate("/partners")}
                            className="Link-special-banner-second"
                        >
                            Become a partner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeGame;
