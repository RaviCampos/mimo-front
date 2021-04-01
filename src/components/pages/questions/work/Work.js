import { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import ReasonQ from "./individual-questions/ReasonQ"
import IntimacyQ from "./individual-questions/IntimacyQ"

function Work({tools: { setSection, work, setWork, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

    const [ workPage, setWorkPage ] = useState(goToOccasionLastQ ? 7 : 0); /* integer */

    const [ giftedName, setGiftedName ] = useState(work.giftedName)
    const [ reason, setReason ] = useState(work.reason)
    const [ intimacy, setIntimacy ] = useState(work.intimacy)

    const futureWork = {
        giftedName,
        reason,
        intimacy
    }

    let Question, tools

    switch(workPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, giftedName, setGiftedName };
            break
        case 1:
            Question = ReasonQ;
            tools = { setWorkPage, reason, setReason, giftedName };
            break
        case 2:
            Question = IntimacyQ;
            tools = { setWorkPage, intimacy, setIntimacy, giftedName };
            break
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={workPage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default Work