import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import Hello from "../questions/Hello";
import NameQ from "../questions/NameQ";
import NotFoundQ from "../questions/NotFoundQ";

function MimoForm() {

    const [ page, setPage ] = useState(0);

    const [ names, setNames ] = useState({gifter: "", gifted: ""});

    let Question;
    let setters;
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
            setters = { setPage };
            break
        case 1:
            Question = NameQ;
            setters = { setPage, setNames, names};
            break
        default:
            Question = NotFoundQ;
    }

    return (
        <TransitionGroup>
            <CSSTransition
                key={page}
                timeout={200}
                classNames="hello"
                unmountOnExit
            >
                {<Question setters={setters}/>}
            </CSSTransition>
        </TransitionGroup>
    );

       
}

export default MimoForm;