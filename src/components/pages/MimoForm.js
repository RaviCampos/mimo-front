import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import NotFoundQ from "../questions/NotFoundQ";
import Hello from "../questions/Hello";
import NameQ from "../questions/NameQ";
import OcassionQ from "../questions/OccasionQ";

function MimoForm() {

    const [ page, setPage ] = useState(0);

    const [ names, setNames ] = useState({gifter: "", gifted: ""});

    let Question;
    let tools;
    // helper, input: object {stateName: what to become}
    // const obj = {
    //     names: {gifter: "Maria", gifted: "Ana"},
    //     page: 3
    // }
    // const stateSetter = (changes) => {
    //     const cheatSheet = {
    //         page: (pageNumber) => {
    //             setPage(pageNumber)
    //         },
    //         names: ({gifter, gifted}) => {
    //             setNames({gifter, gifted})
    //         }
    //     }
    //     const keys = Object.keys(changes);
    //     for (const key of keys) {
    //         cheatSheet[key](changes[key]);
    //     }

    // };
    // stateSetter(obj);
    // console.log(page, names);

    switch(page) {
        case 0:
            Question = Hello;
            tools = { setPage };
            break
        case 1:
            Question = NameQ;
            tools = { setPage, setNames, names};
            break
        case 2:
            Question = OcassionQ;
            
            break
        default:
            Question = NotFoundQ;
            tools = { setPage }
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