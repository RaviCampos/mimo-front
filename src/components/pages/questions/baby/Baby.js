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
import HobbiesQ from "./individual-questions/HobbiesQ"
 

function Baby({tools: { setSection, baby, setBaby, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

    const [ giftedName, setGiftedName ] = useState(baby.giftedName); /* string */
    const [ relation, setRelation ] = useState(baby.relation)
    const [ reasonToGift, setReasonToGift ] = useState(baby.reasonToGift)
    const [ intimacy, setIntimacy ] = useState(baby.intimacy);
    const [ isBorn, setIsBorn ] = useState(baby.isBorn);
    const [ whenWasBorn, setWhenWasBorn ] = useState(baby.whenWasBorn);
    const [ whenWillBeBorn, setWhenWillBeBorn ] = useState(baby.whenWillBeBorn);
    const [ firstSon, setFirstSon ] = useState(baby.firstSon);
    const [ childName, setChildName ] = useState(baby.childName)
    const [ age, setAge ] = useState(baby.age);
    const [ babySex, setBabySex ] = useState(baby.babySex);
    const [ mood, setMood ] = useState(baby.mood);
    const [ hobbies, setHobbies ] = useState(baby.hobbies);

    const [ babyPage, setBabyPage ] = useState(goToOccasionLastQ ? pickLastPage() : 0);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [babyPage])

    function pickLastPage() {
        if(giftedName.parentType === "Um casal querido que está esperando um filho" || giftedName.parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
            if(isBorn === "Já nasceu") {
                return 10
            } else {
                return 9
            }
        } else {
            if(isBorn === "Já nasceu") {
                return 8
            } else {
                return 7
            }
        }
    }

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
        mood,
        hobbies
    }

    let Question, tools;

    if(babyPage === 0) {
        Question = GiftedNameQ;
        tools = { setPage, babyPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ };
    } else {
        if(giftedName.parentType === "Um casal querido que está esperando um filho" || giftedName.parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
            switch(babyPage) {
                case 1:
                    Question = RelationQ;
                    tools = { babyPage, setBabyPage, setRelation, relation, parentType: giftedName.parentType }
                    break;
                case 2:
                    Question = IntimacyQ;
                    tools = { babyPage, setBabyPage, setIntimacy, intimacy, parentType: giftedName.parentType }
                    break;
                case 3:
                    Question = IsBornQ;
                    tools = { babyPage, setBabyPage, setIsBorn, isBorn, name: giftedName.name, parentType: giftedName.parentType }
                    break;
                case 4:
                    if(isBorn === "Já nasceu") {
                        Question = WhenWasBornQ;
                        tools = { babyPage, setBabyPage, setWhenWasBorn, whenWasBorn, name: giftedName.name, parentType: giftedName.parentType }
                    } else {
                        Question = WhenWillBeBornQ;
                        tools = { babyPage, setBabyPage, setWhenWillBeBorn, whenWillBeBorn, name: giftedName.name, parentType: giftedName.parentType }
                    }
                    break
                case 5:
                    if(isBorn === "Já nasceu") {
                        Question = ChildNameQ;
                        tools = { babyPage, setBabyPage, setChildName, childName, parentType: giftedName.parentType }
                    } else {
                        Question = FirstSonQ;
                        tools = { babyPage, setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn }
                    }
                    break
                case 6:
                    if(isBorn === "Já nasceu") {
                        Question = FirstSonQ;
                        tools = { babyPage, setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn }
                    } else {
                        Question = AgeQ;
                        tools = { babyPage, setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    }
                    break
                case 7:
                    if(isBorn === "Já nasceu") {
                        Question = AgeQ;
                        tools = { babyPage, setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn, gifterName }
                    } else {
                        Question = BabySexQ;
                        tools = { babyPage, setBabyPage, setBabySex, babySex, parentType: giftedName.parentType }
                    }
                    break
                case 8:
                    Question = MoodQ;
                    tools = { babyPage, setBabyPage, setMood, mood, parentType: giftedName.parentType, isBorn: findIfIsBorn(isBorn), isFirstSon: findIfIsFirstSon(firstSon), name: giftedName.name, gifterName, childName }
                    break
                case 9:
                    Question = HobbiesQ;
                    tools = {hobbies, setHobbies, babyPage, setBabyPage, parentType: giftedName.parentType, setBaby, setGoToOccasionLastQ, setSection, setPage, futureBaby, isBorn: findIfIsBorn(isBorn), name: giftedName.name}
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
                    tools = { babyPage, babyPage, setBabyPage, setReasonToGift, reasonToGift, name: giftedName.name }
                    break
                case 2:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = WhenWasBornQ;
                        tools = { babyPage, setBabyPage, setWhenWasBorn, whenWasBorn, name: giftedName.name, parentType: giftedName.parentType }
                    } else {
                        Question = WhenWillBeBornQ;
                        tools = { babyPage, setBabyPage, setWhenWillBeBorn, whenWillBeBorn, name: giftedName.name, parentType: giftedName.parentType }
                    }
                    break
                case 3:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = ChildNameQ;
                        tools = { babyPage, setBabyPage, setChildName, childName, parentType: giftedName.parentType }
                    } else {
                        Question = FirstSonQ;
                        tools = { babyPage, setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn: findIfIsBorn(reasonToGift) }
                    }
                    break
                case 4:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = FirstSonQ;
                        tools = { babyPage, setBabyPage, setFirstSon, firstSon, name: giftedName.name, parentType: giftedName.parentType, isBorn: findIfIsBorn(reasonToGift) }
                    } else {
                        Question = AgeQ;
                        tools = { babyPage, setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn: findIfIsBorn(reasonToGift), gifterName }
                    }
                    break
                case 5:
                    if(findIfIsBorn(reasonToGift)) {
                        Question = AgeQ;
                        tools = { babyPage, setBabyPage, setAge, age, parentType: giftedName.parentType, name: giftedName.name, isBorn: findIfIsBorn(reasonToGift), gifterName }
                    } else {
                        Question = BabySexQ;
                        tools = { babyPage, setBabyPage, setBabySex, babySex, parentType: giftedName.parentType }
                    }
                    break
                case 6:
                    Question = MoodQ;
                    tools = { babyPage, setBabyPage, setMood, mood, parentType: giftedName.parentType, isBorn: findIfIsBorn(reasonToGift), isFirstSon: findIfIsFirstSon(firstSon), name: giftedName.name, gifterName, childName }
                    break
                case 7:
                    // Hobbies
                    Question = HobbiesQ;
                    tools = {hobbies, setHobbies, babyPage, setBabyPage, parentType: giftedName.parentType, setBaby, setGoToOccasionLastQ, setSection, setPage, futureBaby, isBorn: findIfIsBorn(reasonToGift), name: giftedName.name}
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