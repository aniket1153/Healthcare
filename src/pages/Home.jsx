import React from 'react'
import HeroSection from '../componets/HeroSection'
import Hospitals from '../componets/Hospitals'
import DoctorsMarquee from '../componets/DoctorsMarquee'
import WhatWeDo from '../componets/WhatWeDo'
import Register from '../componets/Register'
import JoinUs from '../componets/JoinUs'
import ContactUs from '../componets/ContactUs'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Hospitals />
      <DoctorsMarquee />
      <WhatWeDo />
      <Register />
      <JoinUs />
      {/* <ContactUs /> */}
    </div>
  )
}

export default Home
