import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
// import YearsQ from "./individual-questions/YearsQ"
// import RelationQ from "./individual-questions/RelationQ"
// import IntimacyQ from "./individual-questions/IntimacyQ"
// import IntroExtraQ from "./individual-questions/IntroExtraQ"
// import HobbiesQ from "./individual-questions/HobbiesQ"
// import CoolnessQ from "./individual-questions/CoolnessQ"

function Baby({tools: { setSection, baby, setBaby, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ babyPage, setBabyPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */
    const [ giftedName, setGiftedName ] = useState(baby.giftedName); /* string */
    // const [ age, setAge ] = useState(baby.age)  
    // const [ relation, setRelation ] = useState(baby.relation)
    // const [ intimacy, setIntimacy ] = useState(baby.intimacy);
    // const [ introExtra, setIntroExtra ] = useState(baby.intraExtra);
    // const [ hobbies, setHobbies ] = useState(baby.hobbies);
    // const [ coolness, setCoolness ] = useState(baby.intimacy);

    const futureBaby = {
        giftedName,
        // age,
        // relation,
        // intimacy,
        // introExtra,
        // hobbies,
        // coolness
    }

    let Question, tools

    switch(babyPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ};
            break;
        // case 1:
        //     Question = YearsQ;
        //     tools = { setBabyPage, setAge, age, giftedName};
        //     break;
        // case 2:
        //     Question = RelationQ;
        //     tools = { setBabyPage, setRelation, relation }
        //     break;
        // case 3:
        //     Question = IntimacyQ;
        //     tools = { setBabyPage, setIntimacy, giftedName, intimacy }
        //     break;
        // case 4:
        //     Question = IntroExtraQ;
        //     tools = { setBabyPage, setIntroExtra, introExtra, giftedName, intimacy }
        //     break;
        // case 5:
        //     Question = HobbiesQ;
        //     tools = { setBabyPage, setHobbies, hobbies, giftedName, intimacy }
        //     break;
        // case 6:
        //     Question = CoolnessQ;
        //     tools = { setPage, setBabyPage, setCoolness, coolness, intimacy, setSection, futureBaby, setBaby, setGoToOccasionLastQ }
        //     break;
        default:
            Question = NotFoundQ;
            tools = { setPage, setSection }
            break
    }
 
    return (
            <TransitionGroup>
                <CSSTransition
                    key={babyPage}
                    timeout={200}
                    classNames="name"
                    unmountOnExit
                >
                    {<Question tools={tools}/>}
                </CSSTransition>
            </TransitionGroup>

    )
}

export default Baby 