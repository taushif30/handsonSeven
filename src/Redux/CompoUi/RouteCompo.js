import React from 'react';
import '../CompoUi/Style.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import EditStudent from './EditStudent'
import NewStudent from './NewStudent'

const RouteCompo = () => {
  return (
    <>
    <BrowserRouter>

    <div className='link'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/student'>Student</NavLink>
    <NavLink to ='/contact'>Contact</NavLink>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
        <Route path='/newstudent' element={<NewStudent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteCompo