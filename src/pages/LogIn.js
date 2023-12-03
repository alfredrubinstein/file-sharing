import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import {Posts} from "./Posts";
import {Albums} from "./Albums";
import {Todos} from "./Todos";
import {NotFound} from "./NotFound";


import '../styles/LogIn.css';


const initialForm={
name:"",
password:"",
id:null,
}

export const LogIn=()=>{
const[form,setForm]=useState({})

const handleChange=(e)=>{
}
const handleSubmit=(e)=>{
}
const handlePost=(e)=>{
}
const handleReset=(e)=>{
}

  return (
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
</form>
</>
) 
}
