import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import NotFoundQ from "./questions/NotFoundQ";
import Hello from "./questions/Hello";
import NameQ from "./questions/NameQ";
import AdditionsQ from "./questions/AdditionsQ";
import OccasionQ from "./questions/OccasionQ";
import Bday from "./questions/bday/Bday"

function MimoForm() {

    // const [ page, setPage ] = useState({section: "bday", index: 0}); 

    // const [ names, setNames ] = useState({gifter: "", gifted: ""});
    // const [ occasion, setOccasion ] = useState("não preciso de ocasiões");

    const [ page, setPage ] = useState(0);

    // section can be start or occasion 
    const [ section, setSection ] = useState("common");

    const [ occasion, setOccasion ] = useState("aniversario");
    const [ gifterName, setGifterName ] = useState("Alexei");
    const [ additions, setAdditions ] = useState("")

    const [ goToOccasionLastQ, setGoToOccasionLastQ ] = useState(false);
    const [ bDay, setBDay] = useState({})

    let Question;
    let tools;
    useEffect(() => {
        console.log(bDay);
    }, [bDay])

    switch(section) {
        case "common":
            switch(page) {
                case 0:
                    Question = Hello;
                    tools = { setPage };
                    break
                case 1:
                    Question = NameQ;
                    tools = { setPage, setGifterName, gifterName};
                    break
                case 2:
                    Question = OccasionQ;
                    tools = { setPage, setSection, setOccasion, occasion }
                    break    
                case 4:
                    Question = AdditionsQ;
                    tools = { setPage, setSection, setAdditions, additions, occasion }
                    break    
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break                
            }
        break
        case "occasion":
            switch(occasion) {
                case "aniversario":
                    Question = Bday;
                    tools = { occasion, gifterName, setSection, bDay, setBDay, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        break
        default:
            Question = NotFoundQ;
            tools = { setPage, setSection }
            break
    }

    return (
        <TransitionGroup>
            <CSSTransition
                key={page}
                timeout={200}
                classNames="hello"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>
    );

       
}

export default MimoForm;