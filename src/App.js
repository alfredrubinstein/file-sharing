import React from 'react';
import './styles/App.css';
import { LogIn } from "./pages/LogIn";
import { Routingim } from "./Routingim";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {

  let flag = true;

  return (
    flag ? (
      <div className="App">
  
        <Header />
        <Routingim />
        <Footer />
      </div>
    ) : (
      <div className="App">
        <Header />
        <LogIn />
        <Footer />
      </div>
    )
  );
}

export default App;
