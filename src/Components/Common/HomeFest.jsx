import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

const HomeFest = () => {
    return (
        <>
            <NavLink to="/aspire-homefest2023">
                <div className="fest-icon">
                    Fest
                </div>
            </NavLink>
        </>
    )
}

export default HomeFest