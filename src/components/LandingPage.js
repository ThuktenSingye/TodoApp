import React from 'react'
import "./LandingPage.css"
import Header from './Header'
import Profile from './Profile'
function LandingPage() {
  return (
    <div className='landingPage'>
        {/* <h1>This is landing page</h1> */}
        {/* header */}
        <Header/>
        {/* profile */}
        <Profile />
    </div>
  )
}

export default LandingPage