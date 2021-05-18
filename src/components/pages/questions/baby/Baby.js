import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import RelationQ from "./individual-questions/RelationQ"
// import YearsQ from "./individual-questions/YearsQ"
// import IntimacyQ from "./individual-questions/IntimacyQ"
// import IntroExtraQ from "./individual-questions/IntroExtraQ"
// import HobbiesQ from "./individual-questions/HobbiesQ"
// import CoolnessQ from "./individual-questions/CoolnessQ"

function Baby({tools: { setSection, baby, setBaby, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ babyPage, setBabyPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */
    const [ giftedName, setGiftedName ] = useState(baby.giftedName); /* string */
    const [ relation, setRelation ] = useState(baby.relation)
    // const [ age, setAge ] = useState(baby.age)  
    // const [ intimacy, setIntimacy ] = useState(baby.intimacy);
    // const [ introExtra, setIntroExtra ] = useState(baby.intraExtra);
    // const [ hobbies, setHobbies ] = useState(baby.hobbies);
    // const [ coolness, setCoolness ] = useState(baby.intimacy);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [babyPage])

    const futureBaby = {
        giftedName,
        relation
        // age,
        // intimacy,
        // introExtra,
        // hobbies,
        // coolness
    }

    let Question, tools;

    if(babyPage === 0) {
        Question = GiftedNameQ;
        tools = { setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ};
    } else {
        if(giftedName.parentType === "Um casal querido que está esperando um filho") {
            switch(babyPage) {
                case 1:
                    Question = RelationQ;
                    tools = { setBabyPage, setRelation, relation, parentType: giftedName.parentType }
                    break;
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        } else if(giftedName.parentType === "Na verdade é um (a) futuro (a) Mãe / Pai Solo") {
            switch(babyPage) {
                case 1:
                    Question = RelationQ;
                    tools = { setBabyPage, setRelation, relation, parentType: giftedName.parentType }
                    break
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        } else if(giftedName.parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
            switch(babyPage) {
                case 1:
                    Question = RelationQ;
                    tools = { setBabyPage, setRelation, relation, parentType: giftedName.parentType }
                    break
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        } else {
            Question = NotFoundQ;
            tools = { setPage, setSection }
        }
    }





















    // switch(babyPage) {
    //     case 0:
    //         Question = GiftedNameQ;
    //         tools = { setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ};
    //         break;
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
    //     default:
    //         Question = NotFoundQ;
    //         tools = { setPage, setSection }
    //         break
    // }
 
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