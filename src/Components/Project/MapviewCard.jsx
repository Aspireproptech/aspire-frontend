import React, { useState, useEffect } from "react";
import "../../Assets/Project/Project.css";
import PortfolioImage from "../../Assets/Images/PortfolioImage.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import Map2 from "../Contact/Map2";

import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link } from "react-router-dom";
import "../../Assets/HomePage/portfolio.css";
import Loader from "../Common/Loader";
function MapviewCard({ data }) {
  const [heightmap, setheightmap] = useState("450px");

  return (
    <>
      <div
        onMouseOver={() => console.log("hi")}
        className="col map-viewimg d-flex flex-column"
        style={{ position: "relative" }}
      >
        {data?.pictures[0]?.length > 0 ? (
          <img
            src={data?.pictures}
            className={` property-img property-img-height border-none`}
            alt=""
            style={{ width: "95%", height: "40vh" }}
          />
        ) : (
          <Loader />
        )}
        <div className="propertyDescription-map-view">
          <div className="description">
            <h3>{data?.name}</h3>
            <h5>{data?.location}</h5>
            <div className="propertyFeatures">
              <span>
                {" "}
                <LocationOnIcon /> <h4>{data?.location}</h4>{" "}
              </span>
              <span>
                {" "}
                <LocalAtmIcon /> <h4>{data?.price} </h4>{" "}
              </span>
              <span>
                <HomeIcon />{" "}
                <h4>{data?.ready ? "Ready To move" : "Posession Soon"} </h4>
              </span>
              <span>
                {" "}
                <BedroomChildIcon /> <h4>{data?.BHK} BHK</h4>{" "}
              </span>
            </div>
          </div>

          <Link to={`/property/${data._id}`}>
            <button>View Property</button>
          </Link>
        </div>
        <div className="col px-lg-4 pt-5 pt-md-0 pt-lg-0">
          <Map2 height={heightmap} />
        </div>
      </div>
    </>
  );
}

export default MapviewCard;
