import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import NotFoundQ from "./questions/NotFoundQ";
import Hello from "./questions/Hello";
import NameQ from "./questions/NameQ";
import AdditionsQ from "./questions/AdditionsQ";
import FoodRestrictionQ from "./questions/FoodRestrictionQ";
import ValueQ from "./questions/ValueQ";
import DateQ from "./questions/DateQ";
import AdressQ from "./questions/AdressQ";
import ContactQ from "./questions/ContactQ";

import OccasionQ from "./questions/OccasionQ";
import Bday from "./questions/bday/Bday"
import Wedding from "./questions/wedding/Wedding"
import Work from "./questions/work/Work"
import Moving from "./questions/moving/Moving"
import Travel from "./questions/travel/Travel"
import None from "./questions/none/None"

import EndQ from "./questions/EndQ"

function MimoForm() {

    const [ page, setPage ] = useState(0);

    // section can be start or occasion 
    const [ section, setSection ] = useState("common");

    const [ occasion, setOccasion ] = useState("casamento/namoro");
    const [ gifterName, setGifterName ] = useState("Alexei");
    
    const [ additions, setAdditions ] = useState("")
    const [ foodRestriction, setFoodRestriction ] = useState("")
    const [ value, setValue ] = useState("")
    const [ date, setDate ] = useState("")
    const [ deliveryBDay, setDeliveryBDay ] = useState("")
    const [ adress, setAdress ] = useState("")
    const [ contact, setContact ] = useState("")

    const [ goToOccasionLastQ, setGoToOccasionLastQ ] = useState(false);

    const [ bDay, setBDay] = useState({})
    const [ wedding, setWedding ] = useState({})
    const [ work, setWork ] = useState({})
    const [ moving, setMoving ] = useState({})
    const [ travel, setTravel ] = useState({})
    const [ none, setNone ] = useState({})

    useEffect(() => {
        console.log(moving)
    }, [moving])

    let Question;
    let tools;

    function chooseGiftedName(occ) {
        switch(occasion) {
            case "aniversario":
                return bDay.giftedName
            case "casamento/namoro":
                return wedding.giftedName
            case "trabalho":
                let gifted = work.giftedName;
                gifted = gifted.split(" -- ").join(" e ");
                return gifted;
            case "mudança":
                return moving.giftedName
            case "viagem":
                return travel.giftedName
            case "nenhuma":
                return none.giftedName
            default:
                return "o/a presenteado/a"
        }
    }

    function allInfo() {
        let specificQ
        switch(occasion) {
            case "aniversario":
                specificQ = bDay
                break
            case "casamento/namoro":
                specificQ = wedding
                break
            case "trabalho":
                specificQ = work;
                break
            case "mudança":
                specificQ = moving
                break
            case "viagem":
                specificQ = travel
                break
            case "nenhuma":
                specificQ = none
                break
            default:
                specificQ = "nenhuma pergunta específica"
        }
        let objInfo = {
            occasion,
            gifterName,
            additions,
            foodRestriction,
            value,
            date,
            deliveryBDay,
            adress, 
            contact,
            ... specificQ
        }
        if(!(occasion === "casamento/namoro" || occasion === "aniversario" )) {
            delete objInfo.deliveryBDay
        }
        return objInfo
    }

    switch(section) {
        case "common":
            switch(page) {
                case 0:
                    Question = Hello;
                    tools = { setPage };
                    break
                case 1:
                    Question = NameQ;
                    tools = { setPage, setGifterName, gifterName};
                    break
                case 2:
                    Question = OccasionQ;
                    tools = { setPage, setSection, setOccasion, occasion }
                    break    

                // it is as if the 3 question is the specific section => aniversario, namoro/casamento...

                case 4:
                    Question = AdditionsQ;
                    tools = { setPage, setSection, setAdditions, additions, occasion }
                    break    
                case 5:
                    Question = FoodRestrictionQ;
                    tools = { setPage, setFoodRestriction, foodRestriction, giftedName: chooseGiftedName(occasion) }
                    break    
                case 6:
                    Question = ValueQ;
                    tools = { setPage, setValue, value }
                    break    
                case 7:
                    Question = DateQ;
                    tools = { setPage, setDate, setDeliveryBDay, date, deliveryBDay, occasion }
                    break    
                case 8:
                    Question = AdressQ;
                    tools = { setPage, setAdress, adress, giftedName: chooseGiftedName(occasion) }
                    break    
                case 9:
                    Question = ContactQ;
                    tools = { setPage, setContact, contact }
                    break    
                case 10:
                    Question = EndQ;
                    tools = { setPage, formInfo: allInfo()}
                    break    
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break                
            }
        break
        case "occasion":
            switch(occasion) {
                case "aniversario":
                    Question = Bday;
                    tools = { setSection, bDay, setBDay, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                case "casamento/namoro":
                    Question = Wedding;
                    tools = { setSection, wedding, setWedding, setPage, goToOccasionLastQ, setGoToOccasionLastQ, gifterName }
                    break
                case "trabalho":
                    Question = Work;
                    tools = { setSection, work, setWork, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                case "mudança":
                    Question = Moving;
                    tools = { setSection, moving, setMoving, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                case "viagem":
                    Question = Travel;
                    tools = { setSection, travel, setTravel, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                case "nenhuma":
                    Question = None;
                    tools = { setSection, none, setNone, setPage, goToOccasionLastQ, setGoToOccasionLastQ }
                    break
                default:
                    Question = NotFoundQ;
                    tools = { setPage, setSection }
                    break
            }
        break
        default:
            Question = NotFoundQ;
            tools = { setPage, setSection }
            break
    }

    return (
        <TransitionGroup>
            <CSSTransition
                key={page}
                timeout={200}
                classNames="hello"
                unmountOnExit
            >
                {<Question tools={tools}/>}
            </CSSTransition>
        </TransitionGroup>
    );

       
}

export default MimoForm;