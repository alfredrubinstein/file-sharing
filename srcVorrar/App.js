import logo from './logo.svg';
import {useState}from "react";
import './styles/App.css';
import {Home} from "./pages/Home";
import {LogIn} from "./pages/LogIn";
import {Posts} from "./pages/Posts";
import {Albums} from "./pages/Albums";
import {Todos} from "./pages/Todos";
import {FakeFetch} from "./FakeFetch"


function App() {
  return (
    <div className="App">
      <header className="App-header">
<LogIn/>
{/* <FakeFetch/> */}
</header>
    </div>
  );
}

export default App;


