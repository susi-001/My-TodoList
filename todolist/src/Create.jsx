import React, { useState } from 'react'
import axios from 'axios'
function Create() {
    const [task,setTask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:3000/add',{task:task})
        .then(result=>{
          location.reload()
        })
        .catch(err=>console.error(err))
    }
  return (
    <div className='create_form input'>
        <input type='text'  placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button className='create_form button' type="button" onClick={handleAdd}>Add</button> 
    </div>
  )
}

export default Create