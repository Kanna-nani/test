import React from 'react'

const Todolist = ({todoli,deletehandle}) => {
  return (
    <div  >
      {todoli.map((todo,index)=> 
      <div key={index}>
         <h5 style={{width:'95%',height:'40px',marginRight:'10px',borderRadius:'10px',marginTop:'20px',border:'2px solid lightgray',fontSize:'15px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>{todo}&nbsp;
             <button onClick={()=>deletehandle(index)} style={{height:'30px',borderRadius:'10px',padding:'5px',border:'2px solid lightgray',backgroundColor:'red'}}>Delete</button></h5>
    </div>
    )}
      

    </div> 
  )
}

export default Todolist
