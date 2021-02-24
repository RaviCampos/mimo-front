import Landing from "./components/pages/Landing";
import HowTo from "./components/pages/HowTo";
import MimoForm from "./components/pages/MimoForm";
import './css/App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/how-to">
          <HowTo />
        </Route>
        <Route path="/mimo-form">
          <MimoForm />
        </Route>      
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
  // const [page, setPage] = useState("landing");

  // switch(page) {
  //   case "landing":
  //     return <Landing setPage={setPage}/>
    
  //   case "howTo":
  //     return <HowTo setPage={setPage}/>

  //   case "mimoForm":
  //     return <MimoForm setPage={setPage}/> 

  //   default:    
  //     return <h1>No such page found</h1>;
  // }
}

export default App;
