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
      </Routes>

      {/* Common Footer */}
      <Footer />
    </Router>
  )
}

export default App
