import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/Project/Project.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function BrowseTop() {
    return (
        <div className="browseTop">
            <div>
                <h2 style={{ color: "white" }}>Discover.Homes.Life.</h2>
                <div className='searchDiv'>
                    <Row>
                        <Col xs={1} style={{ display: "flex", alignItems: "center" }}>
                            <LocationOnOutlinedIcon sx={{ color: "#F47E20" }} />
                        </Col>
                        <Col xs={8} style={{ display: "flex", alignItems: "center" }}>
                            <input type="text" placeholder='Search location, Projects, residental group' style={{ outline: "none", border: "none", width: "100%", fontSize: 12 }} />
                        </Col>
                        <Col xs={3}>
                            <div style={{ backgroundColor: "#F47E20", padding: 10, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>Search</div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default BrowseTop