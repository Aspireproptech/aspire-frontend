import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import HomePageFest from "../../Assets/Ads/Aspire Home FestAsset 3@4x.png"

const HomeFest = () => {
    return (
        <>
            <NavLink to="/aspire-homefest2023">
                <div className="fest-icon">
                    <img src={HomePageFest} alt="" />
                </div>
            </NavLink>
        </>
    )
}

export default HomeFest