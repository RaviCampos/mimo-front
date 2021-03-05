import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import NotFoundQ from "./questions/NotFoundQ";
import Hello from "./questions/Hello";
import NameQ from "./questions/NameQ";
import OccasionQ from "./questions/OccasionQ";
import Bday from "./questions/bday/Bday"

function MimoForm() {

    // const [ page, setPage ] = useState({section: "bday", index: 0}); 

    // const [ names, setNames ] = useState({gifter: "", gifted: ""});
    // const [ occasion, setOccasion ] = useState("não preciso de ocasiões");

    const [ page, setPage ] = useState(0);
    const [ section, setSection ] = useState("start");

    const [ occasion, setOccasion ] = useState(null);
    const [ gifterName, setGifterName ] = useState("")
    
    const [ bDay, setBDay] = useState(null)

    let Question;
    let tools;

    switch(section) {
        case "start":
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
            }
        break
        case "occasion":
            switch(occasion) {
                case "aniversario":
                    Question = Bday;
                    tools = {}
                    break
            }
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