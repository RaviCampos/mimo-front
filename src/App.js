import Landing from "./components/pages/Landing";
import HowTo from "./components/pages/Landing";
import MimoForm from "./components/pages/MimoForm";
import './css/App.css';

function App() {
  const [page, setPage] = useState("landing");

  switch(page) {
    case "landing":
      return <Landing />
    
    case "howTo":
      return <HowTo />

    case "form":
      return <MimoForm /> 

    default:    
      return <h1>No such page found</h1>;
  }
}

export default App;
