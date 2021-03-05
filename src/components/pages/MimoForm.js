import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import NotFoundQ from "./questions/NotFoundQ";
import Hello from "./questions/Hello";
import NameQ from "./questions/NameQ";
import OccasionQ from "./questions/bday/individual-questions/OccasionQ";
import Bday from "./questions/bday/Bday"

function MimoForm() {

    // const [ page, setPage ] = useState({section: "bday", index: 0}); 

    // const [ names, setNames ] = useState({gifter: "", gifted: ""});
    // const [ occasion, setOccasion ] = useState("não preciso de ocasiões");

    const [ occasion, setOccasion ] = useState(null);
    const [ page, setPage ] = useState(0);

    const [ gifterName, setGifterName ] = useState("")
    
    const [ bDay, setBDay] = useState(null)

    let Question;
    let tools;

    switch(occasion) {
        case null:
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
                    tools = { setPage, setOccasion, occasion }
                    break                    
            }
        break
        case "bday":
            Question = Bday;
            tools = {}
            console.log("LUL")
            break
            // switch(page.index) {
            //     case 0:
            //         Question = YearsQ;
            //         tools = { setPage, setAge, age }
            //         break
            //     case 1:
            //         Question = RelationQ;
            //         tools = { setPage }
            //         break
            //     default:
            //         Question = NotFoundQ;
            //         tools = { setPage }
            // }
            // break
        default:
            Question = NotFoundQ;
            tools = { setPage }
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