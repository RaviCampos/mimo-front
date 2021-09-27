import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GifterInCoupleQ from "./individual-questions/GifterInCoupleQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import TimeTogetherQ from "./individual-questions/TimeTogetherQ"
import AgeQ from "./individual-questions/AgeQ"
import CoupleRelationLevelQ from "./individual-questions/CoupleRelationLevelQ"
import ReasonToGiftQ from "./individual-questions/ReasonToGiftQ"
import HobbiesQ from "./individual-questions/HobbiesQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import CoolnessQ from "./individual-questions/CoolnessQ"

function Wedding({tools: { setSection, wedding, setWedding, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }}) {

    const [ weddingPage, setWeddingPage ] = useState(goToOccasionLastQ ? 7 : 0); /* integer */

    const [ gifterInCouple, setGifterInCouple ] = useState(wedding.gifterInCouple === "Sim" ? true : wedding.gifterInCouple === undefined ? undefined : false)
    const [ giftedName, setGiftedName ] = useState(wedding.giftedName ? wedding.giftedName : "Rodya -- Sonya")
    const [ timeTogether, setTimeTogether ] = useState(wedding.timeTogether)
    const [ age, setAge ] = useState(wedding.age)
    const [ coupleRelationLevel, setCoupleRelationLevel ] = useState(wedding.coupleRelationLevel)
    const [ introExtra, setIntroExtra ] = useState(wedding.introExtra)
    const [ reasonToGift, setReasonToGift ] = useState(wedding.reasonToGift)
    const [ hobbies, setHobbies ] = useState(wedding.hobbies)
    const [ coolness, setCoolness ] = useState(wedding.coolness)

    useEffect(() => {
        window.scrollTo(0,0);
    }, [weddingPage])
    useEffect(() => {
        console.log("GifterInCouple: ", gifterInCouple);
    })

    const futureWedding = {
        gifterInCouple,
        giftedName,
        timeTogether,
        age,
        coupleRelationLevel,
        introExtra,
        reasonToGift,
        hobbies,
        coolness
    }

    let Question, tools

    switch(weddingPage) {
        case 0:
            Question = GifterInCoupleQ;
            tools = { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, weddingPage, gifterInCouple, setGifterInCouple };
            break;
        case 1:
            Question = GiftedNameQ;
            tools = { setWeddingPage, weddingPage, setGiftedName, giftedName, gifterInCouple, gifterName }
            break
        case 2:
            Question = TimeTogetherQ;
            tools = { setWeddingPage, weddingPage, setTimeTogether, gifterInCouple, timeTogether, gifterName }
            break
        case 3:
            Question = AgeQ;
            tools = { setWeddingPage, weddingPage, setAge, gifterInCouple, age, gifterName, giftedName }
            break
        case 4:
            Question = CoupleRelationLevelQ;
            tools = { setWeddingPage, weddingPage, setCoupleRelationLevel, gifterInCouple, coupleRelationLevel, giftedName }
            break
        case 5:
            if(gifterInCouple) {
                Question = IntroExtraQ;
                tools = { setWeddingPage, weddingPage, setIntroExtra, gifterInCouple, introExtra, giftedName }
            } else {
                Question = ReasonToGiftQ;
                tools = { setWeddingPage, weddingPage, setReasonToGift, reasonToGift }
            }
            break
        case 6:
            if(gifterInCouple) {
                Question = HobbiesQ;
                tools = { setWeddingPage, weddingPage, setHobbies, hobbies, giftedName}
            } else {
                Question = CoolnessQ;
                tools = { setWeddingPage, weddingPage, setCoolness, gifterInCouple, coolness, giftedName}
            }
            break
        case 7:
            if(gifterInCouple) {
                Question = CoolnessQ;
                tools = { setWeddingPage, weddingPage, setCoolness, gifterInCouple, coolness, giftedName, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ }
            } else {
                Question = IntroExtraQ;
                tools = { setWeddingPage, weddingPage, setIntroExtra, gifterInCouple, introExtra, giftedName, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, }
            }
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