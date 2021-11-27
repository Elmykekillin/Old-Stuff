import './App.css';
import "./styles/App.css"
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Read from './Modules/Read/read';
import NavBar from './Modules/NavBar/NavBar';
import Create from './Modules/Create/Create';
import Update from './Modules/Update/Update';
import Deleate from './Modules/Deleate/Deleate';
import Home from './Modules/Home/Home';


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
       <Home />
      </Route>
     <Route exact path="/read">
    <Read />
    </Route>
    <Route exact path="/create">
     <Create />
    </Route>
    <Route exact path="/update">
      <Update />
    </Route>
    <Route exact path="/deleate">
      <Deleate />
    </Route>
    </Router>
  );
}

export default App;
