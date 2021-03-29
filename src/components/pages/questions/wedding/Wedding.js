import { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GifterInCoupleQ from "./individual-questions/GifterInCoupleQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import TimeTogetherQ from "./individual-questions/TimeTogetherQ"
import AgeQ from "./individual-questions/AgeQ"
import CoupleRelationLevelQ from "./individual-questions/CoupleRelationLevelQ"
import ReasonToGiftQ from "./individual-questions/ReasonToGiftQ"
import CommonHobbiesQ from "./individual-questions/CommonHobbiesQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import CoolnessQ from "./individual-questions/CoolnessQ"

function Wedding({tools: { setSection, wedding, setWedding, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

    const [ weddingPage, setWeddingPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const [ gifterInCouple, setGifterInCouple ] = useState(wedding.gifterInCouple === "Sim" ? true : wedding.gifterInCouple === undefined ? undefined : false)
    const [ giftedName, setGiftedName ] = useState(wedding.giftedName ? wedding.giftedName : "Rodya -- Sonya")
    const [ timeTogether, setTimeTogether ] = useState(wedding.timeTogether)
    const [ age, setAge ] = useState(wedding.age)

    const futureWedding = {
        gifterInCouple,
        giftedName,
        timeTogether,
        age
    }

    let Question, tools

    switch(weddingPage) {
        case 0:
            Question = GifterInCoupleQ;
            tools = { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, gifterInCouple, setGifterInCouple };
            break;
        case 1:
            Question = GiftedNameQ;
            tools = { setWeddingPage, setGiftedName, giftedName, gifterInCouple, gifterName }
            break
        case 2:
            Question = TimeTogetherQ;
            tools = { setWeddingPage, setTimeTogether, gifterInCouple, timeTogether, gifterName }
            break
        case 3:
            Question = AgeQ;
            tools = { setWeddingPage, setAge, gifterInCouple, age, gifterName, giftedName }
            break
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={weddingPage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default Wedding