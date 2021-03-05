import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Test1 from "./individual-questions/Test1"
import Test2 from "./individual-questions/Test2"

function Bday() {

    const [ page, setPage ] = useState(0);
    
    let Question, tools

    switch(page) {
        case 0:
            Question = Test1;
            tools = {setPage};
            break;
        case 1:
            Question = Test2;
            tools = {setPage};
            break;
    }
 
    return (
            <TransitionGroup>
                <CSSTransition
                    key={page}
                    timeout={200}
                    classNames="name"
                    unmountOnExit
                >
                    {<Question tools={tools}/>}
                </CSSTransition>
            </TransitionGroup>

    )
}

export default Bday 