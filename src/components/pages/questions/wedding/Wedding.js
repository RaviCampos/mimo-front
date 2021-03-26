import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GifterInCoupleQ from "./individual-questions/GifterInCoupleQ"

function Wedding({tools: { setSection, wedding, setWedding, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ weddingPage, setWeddingPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const [ gifterInCouple, setGifterInCouple ] = useState(wedding.gifterInCouple)

    const futureWedding = {
        gifterInCouple
    }

    let Question, tools

    switch(weddingPage) {
        case 0:
            Question = GifterInCoupleQ;
            tools = { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, gifterInCouple, setGifterInCouple };
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