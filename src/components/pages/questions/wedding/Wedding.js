import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import WhoIsTheCoupleQ from "./individual-questions/WhoIsTheCoupleQ"

function Wedding({tools: { setSection, wedding, setWedding, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ weddingPage, setWeddingPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const [ whoIsTheCouple, setWhoIsTheCouple ] = useState(wedding.whoIsTheCouple)

    const futureWedding = {
        whoIsTheCouple
    }

    let Question, tools

    switch(weddingPage) {
        case 0:
            Question = WhoIsTheCoupleQ;
            tools = { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, whoIsTheCouple, setWhoIsTheCouple };
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