import Todos from "./Todos";
import Posts from "./Posts";
import Albums from "./Albums";
import PagesMenu from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    // <div className="App">
    //   {/* <Home /> */}
    //   {/* <Todos /> */}
    //   {/* <Posts /> */}
    //   <Albums />
    // </div>

    // נסיון לכתוב עם ראוטרים
    <Router>
      <div>
        <PagesMenu />
        <Routes>
          <Route path="/todos" component={Todos} />
          <Route path="/posts" component={Posts} />
          <Route path="/albums" component={Albums} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

