import { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import ReasonQ from "./individual-questions/ReasonQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import AgeQ from "./individual-questions/AgeQ"
import MoodQ from "./individual-questions/MoodQ"
import CoolnessQ from "./individual-questions/CoolnessQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import RelationQ from "./individual-questions/RelationQ"

function Moving({tools: { setSection, moving, setMoving, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

    const [ movingPage, setMovingPage ] = useState(goToOccasionLastQ ? intimacyCalc(moving.intimacy) === 2 ? 7 : 6 : 0); /* integer */

    const [ giftedName, setGiftedName ] = useState(moving.giftedName)
    const [ reason, setReason ] = useState(moving.reason)
    const [ intimacy, setIntimacy ] = useState(moving.intimacy)
    const [ age, setAge ] = useState(moving.age)
    const [ mood, setMood ] = useState(moving.mood)
    const [ coolness, setCoolness ] = useState(moving.coolness)
    const [ introExtra, setIntroExtra ] = useState(moving.introExtra)
    const [ relation, setRelation ] = useState(moving.relation)

    const futureMoving = {
        giftedName,
        reason,
        intimacy,
        age,
        mood,
        coolness,
        introExtra,
        relation
    }

    let Question, tools

    function intimacyCalc(string) {
        if(string === "Somos muito amigos" || /é da família/.test(string)) {
            return 2
        } else if(/é meu\/minha chefe/.test(string)) {
            return 0
        } else {
            return 1
        }
    } 

    switch(movingPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, giftedName, setGiftedName };
            break
        case 1:
            Question = ReasonQ;
            tools = { setMovingPage, reason, setReason, giftedName };
            break
        case 2:
            Question = AgeQ;
            tools = { setMovingPage, age, setAge, giftedName };
            break
        case 3:
            Question = RelationQ;
            tools = { setMovingPage, relation, setRelation, giftedName };
            break
        case 4:
            Question = IntimacyQ;
            tools = { setMovingPage, intimacy, setIntimacy, giftedName };
            break
        case 5:
            if(intimacy <= 5) {
                Question = CoolnessQ;
                tools = { setMovingPage, coolness, setCoolness, giftedName, intimacy }
            } else {
                Question = IntroExtraQ;
                tools = { setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }
            }
            break
        case 6:
            if(intimacy <= 5) {
                Question = IntroExtraQ;
                tools = { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }
            } else {
                Question = MoodQ;
                tools = { setMovingPage, mood, setMood, giftedName}
            }
            break
        case 7:
            Question = CoolnessQ;
            tools = { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, coolness, setCoolness, giftedName, intimacy }
            break
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={movingPage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default Moving