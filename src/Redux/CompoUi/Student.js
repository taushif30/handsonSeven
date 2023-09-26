import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';

const Student = () => {
    const data = useSelector((state)=> state.Stu_Data)
    const Navi = useNavigate()
    // console.log(data[0].name);
  return (
    <>
    <div className='topStudent'>
    <h2>Student Detail</h2>
    <button onClick={()=>Navi('/newstudent')}>Add New Student</button>
    </div>

<div className='table'>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
    </thead>

    <tbody>
        {data.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td><NavLink to='/editStudent' state={{index}}>Edit</NavLink></td>
                </tr>
            )
        })}
    </tbody>
</table>
</div>
    </>
  )
}

export default Student