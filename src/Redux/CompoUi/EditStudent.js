import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';

const EditStudent = () => {
    const back = useNavigate();
    const index = useLocation().state.index;
    const data = useSelector((state)=>state.Stu_Data);
    const dispatch = useDispatch();
    // console.log(index);
    // console.log(data);

    const [info,setInfo] = useState({
      name:data[index].name,
      age:data[index].age,
      course:data[index].course,
      batch:data[index].batch 
    })
    
    const handleChange=(e)=>{
      setInfo({...info,[e.target.name] : e.target.value})

    }
    const handleUpdate=()=>{
      dispatch(editStudent({info,index}))
      back('/student')
      console.log(info);
    }

  return (
    <>
       <div className='editStuTop'>
        <div>
       <label>Name : </label>
       <input name='name' placeholder='Enter name' type='text'  onChange={handleChange}/>
       </div>
       <div>
       <label>Age : </label>
       <input name='age' placeholder='Enter Age' type='Number' onChange={handleChange}/>
       </div>
       </div>
       

       <div className='editStudown'>
       <div>
       <label>Course</label>
       <input name='course' placeholder='Enter Course' type='text' onChange={handleChange}/>
       </div>

       <div>
       <label>Batch</label>
       <input name='batch' placeholder='Enter Batch' type='text' onChange={handleChange}/><br/>
       </div>
       </div>

       <div className='editStudentbtn'>
       <button onClick={()=>back('/student')}>Cancel</button>
       <button onClick={handleUpdate}>Update </button>
       </div>
    </>
  )
}

export default EditStudent