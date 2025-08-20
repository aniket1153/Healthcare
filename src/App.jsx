import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import HospitalList from './componets/HospitalList'

// Common layout
import Header from './componets/Header'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import HospitalDetails from './componets/HospitalDetails'
import AuthPage from './pages/AuthPage'
import AboutUs from './pages/AboutUs'
import HealthGuide from './pages/HealthGuide'
import HealthGuideDetails from './pages/HealthGuideDetails'
import JobUpdates from './pages/JobUpdates'
import JobApplicationForm from './icons/JobApplicationForm'

const App = () => {
  return (
    <Router>
      {/* Common Header & Navbar */}
      <Header />
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<HospitalList />} />
            <Route path="/hospital-details" element={<HospitalDetails />} />
                  <Route path="" element={<HospitalDetails />} />
                  <Route path='/auth' element={<AuthPage/>}/>
                  <Route path='/AboutUs' element={<AboutUs/>}/>
                    <Route path='/healthGuide' element={<HealthGuide/>}/>
                     <Route path="/health-guide/:id" element={<HealthGuideDetails />} />
                       <Route path="/JobUpdates" element={<JobUpdates />} />
                        <Route path="/JobApplication" element={<JobApplicationForm />} />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </Router>
  )
}

export default App
