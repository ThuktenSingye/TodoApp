// import Divider from '@material-ui/core/Divider';
// or
import { Divider } from '@material-ui/core'; // this is named expot
import {Button} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react'
import "./TodoList.css"

function TodoList({todoList, setTodoList}) {
  const [editInput, setEditInput] = useState(false)
  const [checked, setChecked] = useState(false)
  const handleChecked = (id)=>{
    setTodoList((prevList)=>{
      return prevList.filter((list)=>{
        return id !== list.id;
      })
          
    })

  }
  const handleEdit = ()=>{
    
    setEditInput(!editInput)
  
  }
//   The React error "Too many re-renders. React limits the number 
//   of renders to prevent an infinite loop" happens when you have
//    reached an infinite render loop. This may be due to several reasons. 

// Changing the state in the main body of the component.
// Invoking an event handler, instead of passing as a function.

  return (
    <div className='todoList'>
      {/* we have todo list store as an object */}
      <p>Todo List</p>
      {
        todoList.map((list, index)=>(
            <React.Fragment key={list.id}> 
            <div className='todo_info'>
              <div className='todo_check'>
              <label > <Checkbox
                size='small'
                checked={checked}
                onChange={()=>handleChecked(list.id)} 
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /> <input style={{
                  pointerEvents: editInput ? "auto":"none",
                  border:editInput ? "1px solid lightgray":"",
                  padding: editInput ? "5px":"",
                  outlineWidth:editInput? "0":"",
                  borderRadius:editInput? "10px":""
                }} 
                type="text" defaultValue={`${list.task}.${list.discription}`}  /> </label>
                <Button 
                 className='editButton' onClick={()=> handleEdit()}>{editInput? "update": "edit"}</Button>
              </div>
                <Divider light={true} />
            </div>
            </React.Fragment> 
           
        ))
      }
     
    </div>
  )
}

export default TodoList