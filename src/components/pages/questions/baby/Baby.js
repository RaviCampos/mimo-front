import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import RelationQ from "./individual-questions/RelationQ"
import ReasonToGiftQ from "./individual-questions/ReasonToGiftQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import IsBornQ from "./individual-questions/IsBornQ"
import WhenWasBornQ from "./individual-questions/WhenWasBornQ"
import WhenWillBeBornQ from "./individual-questions/WhenWillBeBornQ"
import FirstSonQ from "./individual-questions/FirstSonQ"
import ChildNameQ from "./individual-questions/ChildNameQ"
import AgeQ from "./individual-questions/AgeQ"
// import IntroExtraQ from "./individual-questions/IntroExtraQ"
// import HobbiesQ from "./individual-questions/HobbiesQ"
// import CoolnessQ from "./individual-questions/CoolnessQ"

function Baby({tools: { setSection, baby, setBaby, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ babyPage, setBabyPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */
    const [ giftedName, setGiftedName ] = useState(baby.giftedName); /* string */
    const [ relation, setRelation ] = useState(baby.relation)
    const [ reasonToGift, setReasonToGift ] = useState(baby.ReasonToGift)
    const [ intimacy, setIntimacy ] = useState(baby.intimacy);
    const [ isBorn, setIsBorn ] = useState(baby.isBorn);
    const [ whenWasBorn, setWhenWasBorn ] = useState(baby.whenWasBorn);
    const [ whenWillBeBorn, setWhenWillBeBorn ] = useState(baby.whenWillBeBorn);
    const [ firstSon, setFirstSon ] = useState(baby.firstSon);
    const [ childName, setChildName ] = useState(baby.childName)
    const [ age, setAge ] = useState(baby.age);
    // const [ introExtra, setIntroExtra ] = useState(baby.intraExtra);
    // const [ hobbies, setHobbies ] = useState(baby.hobbies);
    // const [ coolness, setCoolness ] = useState(baby.intimacy);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [babyPage])

    function findIfIsBorn(str) {
        if(str === "Nosso filho acaba de nascer e quero celebrar esse momento") {
            return true;
        } else {
            return false;
        }
    }
    
    const futureBaby = {
        giftedName,
        relation,
        reasonToGift,
        intimacy,
        isBorn,
        whenWasBorn,
        whenWillBeBorn,
        age,
        // introExtra,
        // hobbies,
        // coolness
    }

    let Question, tools;

    if(babyPage === 0) {
        Question = GiftedNameQ;
        tools = { setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ };
    } else {
        if(giftedName.parentType === "Um casal querido que está esperando um filho" || giftedName.parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
            switch(babyPage) {
                case 1:
                    Question = RelationQ;
                    tools = { setBabyPage, setRelation, relation, parentType: giftedName.parentType }
                    break;
                case 2:
                    Question = IntimacyQ;
                    tools = { setBabyPage, setIntimacy, intimacy, parentType: giftedName.parentType }
                    break;
                case 3:
                    Question = IsBornQ;
                    tools = { setBabyPage, setIsBorn, isBorn, name: giftedName.name, parentType: giftedName.parentType }
                    break;
                case 4:
                    if(isBorn === "Já nasceu") {
                        Question = WhenWasBornQ;
                        tools = { setBabyPage, setWhenWasBorn, whenWasBorn, name: giftedName.name, parentType: giftedName.parentType }
                    } else {
                        Question = WhenWillBeBornQ;
                        tools = { setBabyPage, setWhenWillBeBorn, whenWillBeBorn, name: giftedName.name, parentType: giftedName.parentType }
                    }
                    break
                case 5:
                    if(isBorn === "Já nasceu") {
                        Question = ChildNameQ;
                        tools = { setBabyPage, setChildName, childName }
                    } else {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType }
                    }
                    break
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        } else if(giftedName.parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
            switch(babyPage) {
                case 1:
                    Question = ReasonToGiftQ;
                    tools = { setBabyPage, setReasonToGift, reasonToGift, name: giftedName.name }
                    break
                case 2:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = WhenWasBornQ;
                        tools = { setBabyPage, setWhenWasBorn, whenWasBorn, name: giftedName.name, parentType: giftedName.parentType }
                    } else {
                        Question = WhenWillBeBornQ;
                        tools = { setBabyPage, setWhenWillBeBorn, whenWillBeBorn, name: giftedName.name, parentType: giftedName.parentType }
                    }
                    break
                case 3:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = ChildNameQ;
                        tools = { setBabyPage, setChildName, childName }
                    } else {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType }
                    }
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