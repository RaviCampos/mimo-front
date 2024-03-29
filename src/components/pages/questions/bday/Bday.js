import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import YearsQ from "./individual-questions/YearsQ"
import RelationQ from "./individual-questions/RelationQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import HobbiesQ from "./individual-questions/HobbiesQ"
import CoolnessQ from "./individual-questions/CoolnessQ"

function ageToLifeStage(accuracyAndAge) {
    const age = accuracyAndAge.split(" : ")[1]
    if(age <= 11) {
        return "criança"
    } else if (age <= 18) {
        return "adolescente"
    } else {
        return "adulto"
    }
}

function Bday({tools: { setSection, bDay, setBDay, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ bDayPage, setBDayPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */
    const [ giftedName, setGiftedName ] = useState(bDay.giftedName); /* string */
    const [ age, setAge ] = useState(bDay.age)  /* string */
    const [ relation, setRelation ] = useState(bDay.relation)
    const [ intimacy, setIntimacy ] = useState(bDay.intimacy);
    const [ introExtra, setIntroExtra ] = useState(bDay.intraExtra);
    const [ hobbies, setHobbies ] = useState(bDay.hobbies);
    const [ coolness, setCoolness ] = useState(bDay.intimacy);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [bDayPage])
    
    const futureBDay = {
        giftedName,
        age,
        relation,
        intimacy,
        introExtra,
        hobbies,
        coolness
    }

    let Question, tools

    switch(bDayPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setPage, setBDayPage, setGiftedName, giftedName, setSection, futureBDay, setBDay, setGoToOccasionLastQ, bDayPage};
            break;
        case 1:
            Question = YearsQ;
            tools = { setBDayPage, setAge, age, giftedName, bDayPage};
            break;
        case 2:
            Question = RelationQ;
            tools = { setBDayPage, setRelation, relation, bDayPage }
            break;
        case 3:
            Question = IntimacyQ;
            tools = { setBDayPage, setIntimacy, giftedName, intimacy, bDayPage }
            break;
        case 4:
            Question = IntroExtraQ;
            tools = { setBDayPage, setIntroExtra, introExtra, giftedName, intimacy, bDayPage }
            break;
        case 5:
            Question = HobbiesQ;
            tools = { setBDayPage, setHobbies, hobbies, giftedName, intimacy, bDayPage }
            break;
        case 6:
            Question = CoolnessQ;
            tools = { setPage, setBDayPage, setCoolness, coolness, intimacy, setSection, futureBDay, setBDay, setGoToOccasionLastQ, bDayPage }
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