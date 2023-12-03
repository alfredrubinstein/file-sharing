import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import {Posts} from "./Posts";
import {Albums} from "./Albums";
import {Todos} from "./Todos";
import {Nothing} from "./Nothing";


import '../styles/LogIn.css';


const initialForm={
name:"",
password:"",
id:null,
}
let flag=false;

export const LogIn=()=>{
const[form,setForm]=useState({})

const handleChange=(e)=>{
}
const handleSubmit=(e)=>{



 flag=true;
}
const handlePost=(e)=>{
}
const handleReset=(e)=>{
}

  return (
flag?
<>
<h1>LogIn</h1>
<form onSubmit={handleSubmit}>
  <input 
  type='text'
   name='name'
    placeholder='הכנס את השם שלך'
     onChange={handleChange}
     value={form.name}
     />
<br/>
  <input type='text'
   name='password'
   value={form.password}
   onChange={handleChange}
    placeholder='הכנס את הסיסמה'/>
    <br/>
<input type="submit" value="שלח"/>
<input type= "reset" value="מחק" onClick={handleReset}/>
</form>;
</>

:

<>
  <BrowserRouter>
  <nav>
  <Link to="/logIn">LogOut</Link>
  <br/>
  <Link to="/">Home</Link>
  <br/>
  <Link to="/posts">Posts</Link>
  <br/>
  <Link to="/albums">Albums</Link>
  <br/>
  <Link to="/todos">Todos</Link>
  
  </nav>
  <Routes>
  <Route path="/login" element={<LogIn/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/albums" element={<Albums/>}/>
    <Route path="/todos" element={<Todos/>}/>
    <Route path="*" element={<Nothing/>}/>
  </Routes>
  </BrowserRouter>
 </>
 ) 
}
