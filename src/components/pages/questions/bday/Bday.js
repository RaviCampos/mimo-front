import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"
import RelationQ from "./individual-questions/RelationQ"
import IntimacyQ from "./individual-questions/IntimacyQ"

function Bday({tools: { occasion, gifterName, setSection, bDay, setBDay, setPage }}) {

    const [ bDayPage, setBDayPage ] = useState(0); /* integer */
    const [ giftedName, setGiftedName ] = useState(bDay.giftedName); /* string */
    const [ age, setAge ] = useState(bDay.age)  /* string */
    const [ relation, setRelation ] = useState(bDay.relation ? bDay.relation : "amigos")
    const [ intimacy, setIntimacy ] = useState(bDay.intimacy)

    const futureBDay = {
        gifterName,
        occasion,
        giftedName,
        age,
        relation
    }

    let Question, tools

    switch(bDayPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setPage, setBDayPage, setGiftedName, giftedName, setSection, futureBDay, setBDay};
            break;
        case 1:
            Question = YearsQ;
            tools = { setBDayPage, setAge, age};
            break;
        case 2:
            Question = RelationQ;
            tools = { setBDayPage, setRelation, relation }
            break;
        case 3:
            Question = IntimacyQ;
            tools = { setBDayPage, setIntimacy, giftedName, intimacy }
            break;
        default:
            Question = NotFoundQ;
            tools = { setPage, setSection }
            break
    }
 
    return (
            // <TransitionGroup>
            //     <CSSTransition
            //         key={bDayPage}
            //         timeout={200}
            //         classNames="name"
            //         unmountOnExit
            //     >
            <div>
                {<Question tools={tools}/>}
            </div>
            //     </CSSTransition>
            // </TransitionGroup>

    )
}

export default Bday 