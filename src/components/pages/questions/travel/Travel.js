import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import ReasonQ from "./individual-questions/ReasonQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import CoolnessQ from "./individual-questions/CoolnessQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import RelationQ from "./individual-questions/RelationQ"
import DestinyQ from "./individual-questions/DestinyQ"
import HobbiesQ from "./individual-questions/HobbiesQ"

function Travel({tools: { setSection, travel, setTravel, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ travelPage, setTravelPage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const [ giftedName, setGiftedName ] = useState(travel.giftedName)
    const [ reason, setReason ] = useState(travel.reason)
    const [ intimacy, setIntimacy ] = useState(travel.intimacy)
    const [ coolness, setCoolness ] = useState(travel.coolness)
    const [ introExtra, setIntroExtra ] = useState(travel.introExtra)
    const [ relation, setRelation ] = useState(travel.relation)
    const [ destiny, setDestiny ] = useState(travel.destiny)
    const [ hobbies, setHobbies ] = useState(travel.hobbies)

    useEffect(() => {
        window.scrollTo(0,0);
    }, [travelPage])
    
    const futureTravel = {
        giftedName,
        reason,
        intimacy,
        coolness,
        introExtra,
        relation,
        destiny,
        hobbies
    }

    let Question, tools

    switch(travelPage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ, travelPage, setTravelPage, giftedName, setGiftedName };
            break
        case 1:
            Question = ReasonQ;
            tools = { travelPage, setTravelPage, reason, setReason, giftedName };
            break
        case 2:
            Question = DestinyQ;
            tools = { travelPage, setTravelPage, destiny, setDestiny, giftedName };
            break
        case 3:
            Question = RelationQ;
            tools = { travelPage, setTravelPage, relation, setRelation };
            break
        case 4:
            Question = IntimacyQ;
            tools = { travelPage, setTravelPage, intimacy, setIntimacy, giftedName };
            break
        case 5:
            if(intimacy <= 5) {
                Question = CoolnessQ;
                tools = { travelPage, setTravelPage, coolness, setCoolness, giftedName }
                break
            } else {
                Question = IntroExtraQ;
                tools = { travelPage, setTravelPage, introExtra, setIntroExtra, giftedName, intimacy, destiny }
                break
            }
        case 6:
            if(intimacy <= 5) {
                Question = IntroExtraQ;
                tools = { travelPage, setTravelPage, introExtra, setIntroExtra, giftedName, intimacy, destiny, setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ }
                break
            } else {
                Question = HobbiesQ;
                tools = { travelPage, setTravelPage, hobbies, setHobbies, giftedName, setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ }
                break
            }
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={travelPage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default Travel