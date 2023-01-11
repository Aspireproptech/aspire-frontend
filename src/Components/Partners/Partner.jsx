import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Assets/Partner/partner.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import CarouselComponent from "./Carousel";
import Perfect from "../HomePage/Perfect";
import Graphcards from "./Graphcards";
import Graphs from "./Graphs";
import { faker } from "@faker-js/faker";
import img1 from "../../Assets/Images/partner1.gif";
import partner from "../../Assets/Images/Company1.png";
import alpine from "../../Assets/Images/alpine_housing.png";
import assetz from "../../Assets/Images/assetz_logo.png";
import bennet from "../../Assets/Images/bennett-coleman-and-co-ltd.jpg";
import brigade from "../../Assets/Images/bennett-coleman-and-co-ltd.jpg";
import prestige from "../../Assets/Images/prestige_group.jpg";
import Purple from "../../Assets/Images/Purple_construction.png";
import Pyramid from "../../Assets/Images/Pyramid_Builders.png";
import roshan from "../../Assets/Images/roshan_builders.png";
import slv from "../../Assets/Images/slv_developers.png";
import Sobha from "../../Assets/Images/Sobha_Ltd_Logo.jpg";
import speckles from "../../Assets/Images/speckles.jpg";

import img2 from "../../Assets/Images/partner2.gif";
import HomeFest from "../Common/HomeFest";

function Partner() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const [graphData, setgraphData] = useState({});
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <>
      {/* prepare */}
      <HomeFest />
      <div className="container  partner-front my-lg-5 ">
        <div className="row">
          <div className="col-lg-6  ">
            <h1 className="mt-4">Under Construction</h1>
            <div className="row my-4 partner-front-subhead ">
              <h5>
                Inspired by a vision to empower agents and developers to make
                the most of their data and close more deals, we've built a
                smarter way for real estate companies to connect with their
                customers. Aspire brings together technology, expertise, and
                resources to deliver all your sales and marketing needs.
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <figure>
              <img src={img1} alt="" />
            </figure>
          </div>
        </div>
      </div>

      {/* pick tools */}

      {/* <div className="container-fluid partner-dark-bg">
        <div className="container my-lg-5 partner-picktool">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 ">
              <h4>Pick your tools</h4>
              <p>
                voluptatum eum dolorum odit cupiditate nihil molestiae ab!
                Perspiciatis, suscipit recusandae!
              </p>
            </div>

            <div className="col-lg-4">
              <h4> Work smart not hard</h4>
              <p>
                voluptatum eum dolorum odit cupiditate nihil molestiae ab!
                Perspiciatis, suscipit recusandae!
              </p>
            </div>
            <div className="col-lg-3">
              <h4>We've got you</h4>
              <p>
                voluptatum eum dolorum odit cupiditate nihil molestiae ab!
                Perspiciatis, suscipit recusandae!
              </p>
            </div>
          </div>
        </div>

       

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-5 mt-lg-0 px-lg-5 pt-lg-3 pb-lg-5 partner-leading">
              <h2>Leading the way in Real Estate</h2>
              <div className="row">
                <div className="col-lg-8 py-lg-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem tempore, temporibus qui voluptas ducimus sint at
                    provident obcaecati magni ipsa.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center  partner-leading-star ">
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>{" "}
                <h5>
                  4.5/5 on <a href="/"> Lorem</a>/900+
                </h5>{" "}
                <p>Reviews</p>{" "}
              </div>
              <div className="d-flex align-items-center  partner-leading-star ">
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>{" "}
                <h5>
                  4.5/5 on <a href="/"> Lorem</a>/900+
                </h5>{" "}
                <p>Reviews</p>{" "}
              </div>
              <div className="d-flex align-items-center  partner-leading-star ">
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>{" "}
                <h5>
                  4.5/5 on <a href="/"> Lorem</a>/900+
                </h5>{" "}
                <p>Reviews</p>{" "}
              </div>
            </div>

            <div className="col-lg-4">
              <figure>
                <img src={img2} className="w-100" alt="" />
              </figure>
            </div>
          </div>
        </div>

      

        <div className="container partner-doitall py-lg-5">
          <div className="row d-flex mt-5 mt-lg-0 flex-column partner-doitall-head justify-content-center ">
            <h2>Do it all with aspire</h2>
            <p className="text-center  my-lg-2 ">
              Lorem Lorem, ipsum dolor. ipsum dolor sit amet.
            </p>
          </div>
          <div className="d-flex flex-wrap my-4 justify-content-between">
            <Graphcards
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, pariatur possimus! Porro eos incidunt cupiditate libero! Maiores maxime corrupti natus quia mollitia voluptatem impedit sed? Tempore architecto eveniet facilis itaque deserunt minima explicabo saepe dicta minus! Cumque et praesentium at voluptate in, harum dolore ab voluptatem error officia assumenda deleniti?"
              }
            />
            <Graphcards
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, pariatur possimus! Porro eos incidunt cupiditate libero! Maiores maxime corrupti natus quia mollitia voluptatem impedit sed? Tempore architecto eveniet facilis itaque deserunt minima explicabo saepe dicta minus! Cumque et praesentium at voluptate in, harum dolore ab voluptatem error officia assumenda deleniti?"
              }
            />
            <Graphcards
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, pariatur possimus! Porro eos incidunt cupiditate libero! Maiores maxime corrupti natus quia mollitia voluptatem impedit sed? Tempore architecto eveniet facilis itaque deserunt minima explicabo saepe dicta minus! Cumque et praesentium at voluptate in, harum dolore ab voluptatem error officia assumenda deleniti?"
              }
            />
          </div>
        </div>

        <div className="container">
          <div className="row partner-doit-graph d-flex flex-lg-row flex-column">
            <div className="col px-4 py-3 me-0 me-lg-4 mb-5 bg-white">
              <Graphs label={labels} data={data} />{" "}
            </div>
            <div className="col d-flex partner-doit-graph mb-3 align-items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, et minima saepe natus facere accusantium illo
                eligendi. Non soluta deserunt fugiat mollitia, labore inventore
                incidunt et in velit? Cupiditate, commodi.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* our parteners */}
      {/* <div className="container-fluid homeloan-ourpartner-container py-5">
        <div className="container d-flex flex-column homeloan-ourpartner ">
          <h3>Our Partners</h3>
          <h5 className="pb-5">
            Get in-depth knowledge about all things related to loans and your
            finances
          </h5>

          <div className="row my-2">
            <div className="d-flex justify-content-between homeloan-brandscroll overflowY-hidden">
              <img src={alpine} alt="" />
              <img src={assetz} alt="" />
              <img src={bennet} alt="" />
              <img src={brigade} alt="" />
              <img src={prestige} alt="" />
              <img src={Purple} alt="" />
              <img src={roshan} alt="" />
              <img src={slv} alt="" />
              <img src={Sobha} alt="" />
              <img src={speckles} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      {/* feature project */}

      {/* <div className="container partner-feature-projects my-lg-5">
        <div className="row">
          <div className="col-lg-5 mt-4 mt-lg-0">
            {" "}
            <h3>View Featured Projects</h3>{" "}
          </div>
        </div>
        <div className="row h-100 my-lg-5">
          <CarouselComponent />
        </div>
      </div> */}

      {/* reviews */}

      {/* <div className="container my-lg-5">
        <div className="row partner-reviews">
          <h4>Reviews</h4>
        </div>
        <div className="row">
          <div className="col-lg-8 partner-reviews-subtitle">
            <h3>Here’s What Other Dealers and Owners have to Say......</h3>
          </div>
        </div>
        <div className="row partner-reviews-container flex-lg-row flex-column">
          <div className="col-lg-4 col-sm-12 my-3 my-lg-0 partner-reviews-card p-lg-4">
            <div className="row pb-lg-2">
              <h5>Xyz</h5>
            </div>
            <div className="row pb-lg-2">
              <h6>Owners City</h6>
            </div>
            <div className="row pb-lg-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eius, amet.
              </p>
            </div>
          </div>

          <div className="col-lg-4 my-3 my-lg-0 partner-reviews-card p-lg-4">
            <div className="row  pb-lg-2">
              <h5>Xyz</h5>
            </div>
            <div className="row pb-lg-2">
              <h6>Owners City</h6>
            </div>
            <div className="row pb-lg-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eius, amet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-3 my-lg-0 partner-reviews-card p-lg-4">
            <div className="row pb-lg-2">
              <h5>Xyz</h5>
            </div>
            <div className="row pb-lg-2">
              <h6>Owners City</h6>
            </div>
            <div className="row pb-lg-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eius, amet.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid partner-elite">
        <h2 className="px-2">Join The Elite Club</h2>
      </div> */}
      {/* <div className="container-fluid px-0  mb-lg-5 ">
        <Perfect />
      </div> */}
    </>
  );
}

export default Partner;
