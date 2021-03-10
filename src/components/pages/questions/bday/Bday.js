import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"

function Bday({tools: { occasion, gifterName, setSection}}) {

    const [ page, setPage ] = useState(0);
    const [ giftedName, setGiftedName ] = useState("");
    const [ age, setAge ] = useState("")
    
    let Question, tools

    switch(page) {
        case 0:
            Question = GiftedNameQ;
            tools = { setPage, setGiftedName, giftedName, setSection };
            break;
        case 1:
            Question = YearsQ;
            tools = {setPage, setAge, age};
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