import React, { useState } from 'react'
import Todolist from './Todolist'

const Todocart = () => {
    const[task,setTask]=useState('');
    const [todos,setTodos]=useState([]);
    const changename= e=>{
        setTask(e.target.value)
    }
    const submitform=e=>{
        e.preventDefault();
        console.log(task)
        const newtodos=[...todos,task]
        setTodos(newtodos)
        setTask('');
    }
    const deletehandle=(indexvalue)=>{
      const newtodos=todos.filter((todo,index)=>index !== indexvalue)
      setTodos(newtodos); 
    }
  return (
    <div className="card" style={{margin:'30px'}} >
    <div className="cardbody" style={{}}>
    <center><h3>Todo management Application</h3 ></center>
      <form onSubmit={submitform } style={{marginTop:'15px',display:'flex'}}>
        <input type="text" name='task' value={task}  onChange={changename} style={{width:'100%',flex:4,height:'40px',borderRadius:'10px', border:' 2px solid black' }} /> &nbsp;&nbsp;
        <input type="submit" name='Add' value='Add' style={{width:'100%',flex:1,borderRadius:'10px',height:'40px',border:' 2px solid black', fontSize:'large' }} />
      </form>
      <Todolist todoli={todos} deletehandle={deletehandle} />
    </div>
  </div>
  )
}

export default Todocart
