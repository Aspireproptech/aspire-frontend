import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import HomePageFest from "../../Assets/Ads/Aspire Home FestAsset 3@4x.png"
import AOS from "aos";

const HomeFest = () => {

    AOS.init();

    return (
        <>
            <NavLink to="/aspire-homefest2023">
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="fest-icon">
                    <img src={HomePageFest} alt="" />
                </div>
            </NavLink>
        </>
    )
}

export default HomeFest