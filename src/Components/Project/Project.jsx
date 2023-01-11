import React from 'react'
import TopNav from "../Common/TopNav"
import BottomFoot from "../Common/BottomFoot"
import BrowseTop from './BrowseTop'
import AspireAdvantage from './AspireAdvantage'
import SoldProject from './SoldProject'
import NewNav from '../Common/NewNav'
import ProjectPortfolio from './ProjectPortfolio'
import HomeFest from '../Common/HomeFest'

function Project() {
  return (
    <>
      <ProjectPortfolio />
      <HomeFest />
      {/* <BrowseTop/>
            <AspireAdvantage/>
            <SoldProject/> */}
    </>
  )
}

export default Project