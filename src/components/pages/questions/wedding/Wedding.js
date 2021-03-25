import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"

function Wedding({tools: { occasion, gifterName, setSection, bDay, setBDay, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ weddingPage, setWeddingPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const futureBDay = {
    }

    let Question, tools

    switch(weddingPage) {
        case 0:
            // Question = GiftedNameQ;
            tools = { };
            break;
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={weddingPage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default Wedding