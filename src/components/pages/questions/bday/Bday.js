import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"

function Bday({tools: { occasion, gifterName, setSection, bDay, setBDay, setPage }}) {

    const [ bDayPage, setBDayPage ] = useState(0); /* integer */
    const [ giftedName, setGiftedName ] = useState(bDay.giftedName); /* string */
    const [ age, setAge ] = useState(bDay.age)  /* string */

    const futureBDay = {
        gifterName,
        occasion,
        giftedName,
        age
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
    }
 
    return (
            <TransitionGroup>
                <CSSTransition
                    key={bDayPage}
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