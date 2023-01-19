import React, { useState, useEffect } from "react";
import BottomFoot from "../Common/BottomFoot";
import TopNav from "../Common/TopNav";
import "../../Assets/Blogs/BlogPage.css";
import { Row, Col, Container } from "react-bootstrap";
import BlogCard from "./BlogCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img2 from "../../Assets/Images/b1.svg";
import NewNav from "../Common/NewNav";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import moment from "moment";
import { FetchCategoryBlog } from "../API/Api";
import HomeFest from "../Common/HomeFest";

function BlogPage() {
  const [blogData, setblogData] = useState([]);
  const [category, setcategory] = useState([]);
  const [knowledgeBlog, setknowledgeBlog] = useState([]);
  const [newsBlog, setnewsBlog] = useState([]);
  const [localityBlog, setlocalityBlog] = useState([]);
  const [othersBlog, setothersBlog] = useState([]);

  const fetchblogData = async () => {
    try {
      const data = await axios.get(
        "https://aspire-kappa.vercel.app/blog/getAllBlog"
      );
      setblogData(data?.data?.data);
      console.log(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchknowledgeblogData = async () => {
    try {
      let categorydata = {
        category: "Knowledge Seriess",
      };
      const data = await FetchCategoryBlog(categorydata);
      setknowledgeBlog(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchNewsAndUpdatedblogData = async () => {
    try {
      let categorydata = {
        category: "News & Updates",
      };
      const data = await FetchCategoryBlog(categorydata);
      setnewsBlog(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLocalityblogData = async () => {
    try {
      let categorydata = {
        category: "Locality Bytes",
      };
      const data = await FetchCategoryBlog(categorydata);
      setlocalityBlog(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOthersblogData = async () => {
    try {
      let categorydata = {
        category: "Locality Bytes",
      };
      const data = await FetchCategoryBlog(categorydata);
      setothersBlog(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchblogData();
    fetchknowledgeblogData();
    fetchNewsAndUpdatedblogData();
    fetchLocalityblogData();
    fetchOthersblogData();
  }, []);

  console.log(blogData);
  return (
    <>
      <Container className="Blog-Maincontainer">
        <Row>
          <Col xs={12} lg={8}>
            <h2 className="Blog-heading">ALL BLOGS</h2>
            <h2 className="Blog-SubHeading">We Believe In Sharing Knowledge</h2>
            <img
              src={blogData[0]?.picture}
              className="Blog-Image"
              alt="no img"
            />
          </Col>
          <div className="blogTrend-overlay p-3 col-8 col-lg-4 ">
            <h5 className="mb-1"># Trending</h5>
            <h3>{blogData[0]?.title}</h3>
            <div className="d-flex align-items-center justify-content-between py-1 ">
              <div className=" blogTrend-overlay-footer  d-flex align-items-center">
                <img src={blogData[0]?.picture} alt="" />
                <h6>{blogData[0]?.authorName} | Marketing manager </h6>
              </div>
              <Link
                to={`/blogs/${blogData[0]?._id}`}
                className="blogTrend-overlay-footer-link"
              >
                Read <ArrowRightAltIcon />
              </Link>
            </div>
          </div>
        </Row>
      </Container>
      <HomeFest />
      <div id="knowledgeSeries" className="blogsDiv">
        <h3 className="blogMainHeading">Knowledge Series</h3>
        <Row className="d-flex justify-content-center">
          <Col xs={11} className="d-flex  BlogsRow   align-items-center">
            {knowledgeBlog.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  id={item?._id}
                  content={item?.content}
                  picture={item?.picture}
                  createdAt={item?.createdAt}
                  timeToRead={item?.timeToRead}
                  title={item?.title}
                />
              );
            })}
          </Col>
          {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
        </Row>

        <h3 id="newsUpdates" className="blogMainHeading">
          News & Updates
        </h3>
        <Row className="d-flex justify-content-center">
          <Col xs={11} className="d-flex  BlogsRow   align-items-center">
            {newsBlog.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  id={item?._id}
                  content={item?.content}
                  picture={item?.picture}
                  createdAt={item?.createdAt}
                  timeToRead={item?.timeToRead}
                  title={item?.title}
                />
              );
            })}
          </Col>
          {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
        </Row>

        <h3 id="localityBytes" className="blogMainHeading">
          Locality Bytes
        </h3>
        <Row className="d-flex justify-content-center">
          <Col xs={11} className="d-flex  BlogsRow   align-items-center">
            {localityBlog.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  id={item?._id}
                  content={item?.content}
                  picture={item?.picture}
                  createdAt={item?.createdAt}
                  timeToRead={item?.timeToRead}
                  title={item?.title}
                />
              );
            })}
          </Col>
        </Row>

        <h3 id="others" className="blogMainHeading">
          Others
        </h3>
        <Row className="d-flex justify-content-center">
          <Col xs={11} className="d-flex  BlogsRow   align-items-center">
            {othersBlog.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  id={item?._id}
                  content={item?.content}
                  picture={item?.picture}
                  createdAt={item?.createdAt}
                  timeToRead={item?.timeToRead}
                  title={item?.title}
                />
              );
            })}
          </Col>
        </Row>
        {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
      </div>
    </>
  );
}

export default BlogPage;
