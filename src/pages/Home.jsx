import React from 'react'
import Banner from './Banner'
import WhyChooseUs from './WhyChooseUs'
import MissionVision from './MissionVision'
import WhoWeAre from './WhoWeAre'
import ThirtyForty from './ThirtyForty'
import StayFinder from './StayFinder'
import SellMyTime from './SellMyTime'
import FaQ from './FAQ'
import AppsSection from './AppsSection'
import EnquiryForm from './EnquiryForm'

function Home() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
        <WhyChooseUs />
       <MissionVision />
       <ThirtyForty />
     <StayFinder />
      <SellMyTime />
       <FaQ />
      <AppsSection />
       <EnquiryForm />
    </div>
  )
}

export default Home
