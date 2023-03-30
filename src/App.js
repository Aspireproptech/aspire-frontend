import logo from "./logo.svg";
import React, { lazy, Suspense } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import ContactUs from "./Components/Contact/ContactUs";
import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import BlogPage from "./Components/Blogs/BlogPage";
import About from "./Components/About/About";
import Career from "./Components/Career/Career";
import CareerIndividual from "./Components/Career/CareerIndividual";
import Project from "./Components/Project/Project";
import Singleblog from "./Components/Blogs/Singleblog";
import Property from "./Components/Project/Property";
import NewNav from "./Components/Common/NewNav";
import BottomFoot from "./Components/Common/BottomFoot";
import Partner from "./Components/Partners/Partner";
import Loader from "./Components/Common/Loader";
import Homeloan from "./Components/Homeloan/Homeloan";
import "aos/dist/aos.css";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Ads from "./Components/Advertisement/Ads";
import HomeFest from "./Components/Common/HomeFest";
import CopyRight from "./Components/Common/CopyRight";
import Disclaimer from "./Components/Common/Disclaimer";
import PrivacyPolicy from "./Components/Common/PrivacyPolicy";
import ThankYou from "./Components/Advertisement/ThankYou";
import ThankYouBrouchure from "./Components/Advertisement/ThankYouBrouchure";
import WhatsApps from "./Components/Common/WhatsApps";

const RedirectHome = ({ festinquiry }) => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const isProfile = location.pathname.includes("/thank-you");
        if (isProfile && !festinquiry) {
            navigate("/");
        }
    }, []);
};

function App() {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setloading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const [festinquiry, setFestInquiry] = useState({});

    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="App">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <NewNav />
                            <WhatsApps />
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route
                                    exact
                                    path="/about"
                                    element={<About />}
                                />
                                <Route
                                    exact
                                    path="/loader"
                                    element={<Loader />}
                                />
                                <Route
                                    exact
                                    path="/homeloan"
                                    element={<Homeloan />}
                                />
                                <Route
                                    exact
                                    path="/project/:id"
                                    element={
                                        <Property
                                            festinquiry={festinquiry}
                                            setFestInquiry={setFestInquiry}
                                        />
                                    }
                                />
                                <Route
                                    exact
                                    path="/careers"
                                    element={<Career />}
                                />
                                <Route
                                    exact
                                    path="/careers/:id"
                                    element={<CareerIndividual />}
                                />
                                <Route
                                    exact
                                    path="/contact"
                                    element={<ContactUs />}
                                />
                                <Route
                                    exact
                                    path="/partners"
                                    element={<Partner />}
                                />
                                <Route
                                    exact
                                    path="/blogs"
                                    element={<BlogPage />}
                                />
                                <Route
                                    exact
                                    path="/blogs/:id"
                                    element={<Singleblog />}
                                />
                                <Route
                                    exact
                                    path="/projects"
                                    element={<Project />}
                                />
                                <Route
                                    exact
                                    path="/aspire-homefest2023"
                                    element={
                                        <Ads
                                            festinquiry={festinquiry}
                                            setFestInquiry={setFestInquiry}
                                        />
                                    }
                                />
                                <Route
                                    exact
                                    path="/disclaimer"
                                    element={<Disclaimer />}
                                />
                                <Route
                                    exact
                                    path="/privacy-policy"
                                    element={<PrivacyPolicy />}
                                />
                                <Route
                                    exact
                                    path="/thank-you"
                                    element={
                                        <ThankYouBrouchure
                                            festinquiry={festinquiry}
                                            setFestInquiry={setFestInquiry}
                                        />
                                    }
                                />
                                {/* <Route
                exact
                path="/thank-you"
                element={
                  <ThankYou
                    festinquiry={festinquiry}
                    setFestInquiry={setFestInquiry}
                  />
                }
              /> */}
                            </Routes>
                            <BottomFoot />
                            <CopyRight />
                        </>
                    )}
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
