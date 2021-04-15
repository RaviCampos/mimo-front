import Landing from "./components/pages/Landing";
import GroupGift from "./components/pages/GroupGift";
import SeasonGift from "./components/pages/SeasonGift";
import SelfGift from "./components/pages/SelfGift";
import MimoForm from "./components/pages/MimoForm";
import './css/App.scss';
// import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/mimo-form">
          <MimoForm />
        </Route>      
        
        <Route path="/group-gift">
          <GroupGift />
        </Route>
        
        <Route path="/season-gift">
          <SeasonGift />
        </Route>
        
        <Route path="/self-gift">
          <SelfGift />
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
