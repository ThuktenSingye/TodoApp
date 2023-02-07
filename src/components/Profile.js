import React from 'react'
import "./Profile.css"
// import avatar compoent 
import {Avatar} from '@material-ui/core';
function Profile() {
  return (
    <div className='profile'>
        <h4>Welcome to myToDo App</h4>
        <div className='profile_data'>
            <p>Your Profile</p>
            <Avatar style={{width: "100px", height:"100px"}}/>
            <button>Upload photo</button>
            <form action="">
                <label><input type="text" placeholder='Name' className='name'/></label>
            </form>
        </div>
        <button>
            continue 
        </button>
    </div>
  )
}

export default Profile