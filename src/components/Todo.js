// for date we can try implementing react-date npm module 

import React, { useState , useRef} from 'react'
import "./Todo.css"
// we can use material UI icon
import { Button } from '@material-ui/core';
import DateRange from './DateRange';

// in order to access the dom element in react directly we can use useRef
function Todo({addTodoList}) {
  
  const task = useRef()
  const discription = useRef()

  const [showDate, setShowDate] = useState(false)

  const handleCancel = () =>{
    task.current.value = ""
    discription.current.value =""
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();// to prevent any default behaviour
    // crreat an object 
    const todoList = {
      task: task.current.value,
      discription: discription.current.value,
      id: Math.floor(Math.random() * 1000)
    }
    // console.log("todo object", todoList)
    addTodoList(todoList)
    handleCancel()

  }

  return (
    <div className='todo'>
        <form action="" onSubmit={handleSubmit}>
          <label><input type="text" placeholder='task' ref={task}/></label>
          <label><input type="text" placeholder='discription' ref={discription}/></label>
          <div className='todo_bottom '>
            <Button onClick={()=>setShowDate(!showDate)}>{showDate? "Hide":"Show"}</Button>
           {/* <label><input type="datetime-local" /></label> */}
           <div className='todo_date'>
          
            {showDate && <DateRange/>}
           </div> 
           <div className='todo_button '>
            <Button onClick={handleCancel}>cancel</Button> {/**it should clear all the insdie param */}
            <Button type='submit'>add task</Button>  {/**this should add list into todo list  */}
           </div>
          </div>
        
        </form>
    </div>
  )
}

export default Todo