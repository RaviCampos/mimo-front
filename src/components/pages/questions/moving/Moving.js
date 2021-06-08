import { useState, useEffect } from 'react';
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

function Moving({tools: { setSection, moving, setMoving, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ movingPage, setMovingPage ] = useState(goToOccasionLastQ ? moving.intimacy > 5 ? 7 : 6 : 0); /* integer */

    const [ giftedName, setGiftedName ] = useState(moving.giftedName)
    const [ reason, setReason ] = useState(moving.reason)
    const [ intimacy, setIntimacy ] = useState(moving.intimacy)
    const [ age, setAge ] = useState(moving.age)
    const [ mood, setMood ] = useState(moving.mood)
    const [ coolness, setCoolness ] = useState(moving.coolness)
    const [ introExtra, setIntroExtra ] = useState(moving.introExtra)
    const [ relation, setRelation ] = useState(moving.relation)

    useEffect(() => {
        window.scrollTo(0,0);
    }, [movingPage])

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
            tools = { setMovingPage, relation, setRelation };
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
                Question = MoodQ;
                tools = { setMovingPage, mood, setMood, giftedName}
            }
            break
        case 6:
            if(intimacy <= 5) {
                Question = IntroExtraQ;
                tools = { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }
            } else {
                Question = CoolnessQ;
                tools = { setMovingPage, coolness, setCoolness, giftedName, intimacy }
            }
            break
        case 7:
            Question = IntroExtraQ;
            tools = { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }
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