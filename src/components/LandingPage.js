import React from 'react'
import "./LandingPage.css"
import Header from './Header'
import Profile from './Profile'
import { useState } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
function LandingPage() {
  
  const [showProfile, setShowProfile] = useState(true) 

  const [todoList, setTodoList ] = useState([])

  const addTodoList = (list)=>{
    setTodoList((prevList)=>{
      return [...prevList, list]
    })
  }
  return (
    <div className='landingPage'>
        {/* <h1>This is landing page</h1> */}
        {/* header */}
        <Header/>
        <div className='todo_body'>
          {/* profile */}
          {showProfile && <Profile setShowProfile={setShowProfile}/>}
          {!showProfile && <TodoList todoList={todoList} setTodoList = {setTodoList} />}
          {!showProfile && <Todo addTodoList = {addTodoList} />}        
        </div>
    </div>
  )
}

export default LandingPage