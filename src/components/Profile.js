import React from 'react'

import "./Profile.css"
// import avatar compoent 
import {Avatar} from '@material-ui/core';
import {Button}from '@material-ui/core';
import { useState } from 'react';
function Profile({setShowProfile}) {
  
  const[userName, setUserName ] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  const handleSubmit = () =>{
    setShowProfile(false)
  }
  return (
    <div className='profile'>
        <h4>Welcome to myToDo App</h4>
        <div className='profile_data'>
            <p>Your Profile</p>
            <Avatar style={{width: "100px", height:"100px"} } src={imgSrc}/>
            <Button onClick={()=>setImgSrc("https://avatars.githubusercontent.com/u/123463210?v=4")}>Upload photo</Button>
            <form  onSubmit={handleSubmit}>
              <label><input type="text" placeholder='Name' required className='name' onChange={(e)=> setUserName(e.target.value)}/></label>
              <Button type='submit'>
                  continue
              </Button>
            </form>
        </div>
    </div>
  )
}

export default Profile