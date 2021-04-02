import { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFoundQ from "../NotFoundQ"
import GiftedNameQ from "./individual-questions/GiftedNameQ"
import IntimacyQ from "./individual-questions/IntimacyQ"
import CoolnessQ from "./individual-questions/CoolnessQ"
import IntroExtraQ from "./individual-questions/IntroExtraQ"
import RelationQ from "./individual-questions/RelationQ"
import AgeQ from "./individual-questions/AgeQ"
import HobbiesQ from "./individual-questions/HobbiesQ"

function None({tools: { setSection, none, setNone, setPage, goToOccasionLastQ, setGoToOccasionLastQ }}) {

    const [ nonePage, setNonePage ] = useState(goToOccasionLastQ ? 6 : 0); /* integer */

    const [ giftedName, setGiftedName ] = useState(none.giftedName)
    const [ intimacy, setIntimacy ] = useState(none.intimacy)
    const [ coolness, setCoolness ] = useState(none.coolness)
    const [ introExtra, setIntroExtra ] = useState(none.introExtra)
    const [ relation, setRelation ] = useState(none.relation)
    const [ age, setAge ] = useState(none.age)
    const [ hobbies, setHobbies ] = useState(none.hobbies)

    const futureNone = {
        giftedName,
        intimacy,
        coolness,
        introExtra,
        relation,
        age,
        hobbies
    }

    let Question, tools

    switch(nonePage) {
        case 0:
            Question = GiftedNameQ;
            tools = { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, giftedName, setGiftedName };
            break
        case 1:
            Question = AgeQ;
            tools = { setNonePage, age, setAge, giftedName };
            break
        case 2:
            Question = RelationQ;
            tools = { setNonePage, relation, setRelation };
            break
        case 3:
            Question = IntimacyQ;
            tools = { setNonePage, intimacy, setIntimacy, giftedName };
            break
        case 4:
            Question = IntroExtraQ;
            tools = { setNonePage, introExtra, setIntroExtra, giftedName, intimacy }
            break
        case 5:
            Question = CoolnessQ;
            tools = { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, coolness, setCoolness, giftedName, intimacy }
            break
        case 6:
            Question = HobbiesQ;
            tools = { setNonePage, hobbies, setHobbies, giftedName };
            break
        default:
            Question = NotFoundQ;
            tools = {  }
            break
    }
 
    return (
        <TransitionGroup>
            <CSSTransition
                key={nonePage}
                timeout={200}
                classNames="name"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>

    )
}

export default None