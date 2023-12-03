import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Posts} from "./pages/Posts";
import {Albums} from "./pages/Albums";
import {Todos} from "./pages/Todos";
import {NotFound} from "./pages/NotFound";
import { LogIn } from './pages/LogIn';

import "./styles/Routingim.css"

export function Routingim() {
  return (
    <div>


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
<Route path="*" element={<NotFound/>}/>
<Route path="/login" element={<LogIn/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/posts" element={<Posts/>}/>
  <Route path="/albums" element={<Albums/>}/>
  <Route path="/todos" element={<Todos/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}
