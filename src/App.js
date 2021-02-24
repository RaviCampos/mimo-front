import Landing from "./components/pages/Landing";
import HowTo from "./components/pages/HowTo";
import MimoForm from "./components/pages/MimoForm";
import './css/App.css';
import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");

  switch(page) {
    case "landing":
      return <Landing setPage={setPage}/>
    
    case "howTo":
      return <HowTo setPage={setPage}/>

    case "mimoForm":
      return <MimoForm setPage={setPage}/> 

    default:    
      return <h1>No such page found</h1>;
  }
}

export default App;
