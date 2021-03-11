import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"

function Bday({tools: { occasion, gifterName, setSection, bDay, setBDay}}) {

    const [ page, setPage ] = useState(0); /* integer */
    const [ giftedName, setGiftedName ] = useState(""); /* string */
    const [ age, setAge ] = useState("")  /* string */

    // when this component is ummounting set bDay in mimoform
    useEffect(() => {
        return () => {
            console.log(giftedName)
            setBDay({
                giftedName,
                age
            })
        }
    })

    // setting the constants above depending on a previous state saved in mimoform
    if(bDay) {
        if(bDay.giftdedName) {
            setGiftedName(bDay.giftedName);
        }
    }


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