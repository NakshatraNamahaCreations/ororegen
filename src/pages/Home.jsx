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
import AppDownloadSection from './AppDownloadSection'
import Masterji from './Masterji'

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
      <Masterji />
       <FaQ />
      <AppsSection />
       <EnquiryForm />
       <AppDownloadSection />
    </div>
  )
}

export default Home
