import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../Slice/Slice';

const NewStudent = () => {
  const dispatch = useDispatch();
  const backN = useNavigate();

   const [info,setInfo] = useState({
    name:'',
    age:'',
    course:'',
    batch:''
   })

  
  const handleChange=(e)=>{
    setInfo({...info,[e.target.name] : e.target.value})
  }

  const handleUpdate=()=>{
   dispatch(addStudent(info))
   backN('/student')
  }


  return (
    <>
    <div className='editStuTop'>
        <div>
       <label>Name : </label>
       <input name='name' placeholder='Enter name' type='text' onChange={handleChange}/>
       </div>
       <div>
       <label>Age : </label>
       <input name='age' placeholder='Enter Age' type='Number' onChange={handleChange}/>
       </div>
       </div>
       

       <div className='editStudown'>
       <div>
       <label>Course : </label>
       <input name='course' placeholder='Enter Course' type='text' onChange={handleChange}/>
       </div>

       <div>
       <label>Batch : </label>
       <input name='batch' placeholder='Enter Batch' type='text' onChange={handleChange}/><br/>
       </div>
       </div>

       <div className='editStudentbtn'>
       <button  onClick={()=>backN('/student')}>Cancel</button>
       <button onClick={handleUpdate}>Update </button>
       </div>
    </>
  )
}

export default NewStudent