import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"
import RelationQ from "./individual-questions/RelationQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import HobbieQ from "./individual-questions/HobbieQ"
import CoolnessQ from "./individual-questions/CoolnessQ"

function Bday({tools: { occasion, gifterName, setSection, bDay, setBDay, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ bDayPage, setBDayPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */
    const [ giftedName, setGiftedName ] = useState(bDay.giftedName ? bDay.giftedName : "Dmitri"); /* string */
    const [ age, setAge ] = useState(bDay.age)  /* string */
    const [ relation, setRelation ] = useState(bDay.relation)
    const [ intimacy, setIntimacy ] = useState(bDay.intimacy);
    const [ introExtra, setIntroExtra ] = useState(bDay.intraExtra);
    const [ hobbie, setHobbie ] = useState(bDay.hobbie);
    const [ coolness, setCoolness ] = useState(bDay.intimacy);

    const futureBDay = {
        giftedName,
        age,
        relation,
        intimacy,
        introExtra,
        hobbie,
        coolness
    }

    let Question, tools

    switch(bDayPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setPage, setBDayPage, setGiftedName, giftedName, setSection, futureBDay, setBDay, setGoToOccasionLastQ};
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
        case 4:
            Question = IntroExtraQ;
            tools = { setBDayPage, setIntroExtra, introExtra, giftedName, intimacy }
            break;
        case 5:
            Question = HobbieQ;
            tools = { setBDayPage, setHobbie, hobbie, giftedName, intimacy }
            break;
        case 6:
            Question = CoolnessQ;
            tools = { setPage, setBDayPage, setCoolness, coolness, intimacy, setSection, futureBDay, setBDay, setGoToOccasionLastQ }
            break;
        default:
            Question = NotFoundQ;
            tools = { setPage, setSection }
            break
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