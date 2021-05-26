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
import BabySexQ from "./individual-questions/BabySexQ"
import MoodQ from "./individual-questions/MoodQ"
// import IntroExtraQ from "./individual-questions/IntroExtraQ"
// import HobbiesQ from "./individual-questions/HobbiesQ"

function Baby({tools: { setSection, baby, setBaby, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

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
    const [ babySex, setBabySex ] = useState(baby.babySex);
    const [ mood, setMood ] = useState(baby.mood);
    // const [ introExtra, setIntroExtra ] = useState(baby.intraExtra);
    // const [ hobbies, setHobbies ] = useState(baby.hobbies);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [babyPage])

    function findIfIsBorn(str) {
        if(str === "Nosso filho acaba de nascer e quero celebrar esse momento" || str === "Já nasceu") {
            return true;
        } else {
            return false;
        }
    }

    function findIfIsFirstSon(firstSon) {
        if(firstSon["yesOrNo"] === "Sim") {
            return true
        } else {
            return false
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
        firstSon,
        childName,
        age,
        babySex,
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
                        tools = { setBabyPage, setChildName, childName, parentType: giftedName.parentType }
                    } else {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn }
                    }
                    break
                case 6:
                    if(isBorn === "Já nasceu") {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn }
                    } else {
                        Question = AgeQ;
                        tools = { setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    }
                    break
                case 7:
                    if(isBorn === "Já nasceu") {
                        Question = AgeQ;
                        tools = { setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    } else {
                        Question = BabySexQ;
                        tools = { setBabyPage, setBabySex, babySex, parentType: giftedName.parentType }
                    }
                    break
                case 8:
                    if(isBorn === "Já nasceu") {

                    } else {
                        Question = MoodQ;
                        tools = { setBabyPage, setMood, mood, parentType: giftedName.parentType, isBorn: findIfIsBorn(isBorn), isFirstSon: findIfIsFirstSon(firstSon), name: giftedName.name, gifterName }
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
                        tools = { setBabyPage, setChildName, childName, parentType: giftedName.parentType }
                    } else {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn: findIfIsBorn(reasonToGift) }
                    }
                    break
                case 4:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = FirstSonQ;
                        tools = { setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn: findIfIsBorn(reasonToGift) }
                    } else {
                        Question = AgeQ;
                        tools = { setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    }
                    break
                case 5:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = AgeQ;
                        tools = { setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    } else {
                        Question = BabySexQ;
                        tools = { setBabyPage, setBabySex, babySex, parentType: giftedName.parentType }
                    }
                    break
                case 6:
                    if(findIfIsBorn(reasonToGift)) {
                        
                    } else {
                        Question = MoodQ;
                        tools = { setBabyPage, setMood, mood, parentType: giftedName.parentType, isBorn: findIfIsBorn(isBorn), isFirstSon: findIfIsFirstSon(firstSon), name: giftedName.name, gifterName }
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