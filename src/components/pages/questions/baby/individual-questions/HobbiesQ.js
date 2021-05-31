import { useState } from "react";

function HobbiesQ({tools: {hobbies, setHobbies, setBabyPage, parentType, setBaby, setGoToOccasionLastQ, setSection, setPage, futureBaby, isBorn}}) {

    const [inHobbies, setInHobbies] = useState(hobbies ? hobbies : "")

    if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
        if(isBorn) {
            return (
                <div>
                    <h2>Hobby</h2>
        
                    <br/>
        
                    <button onClick={() => {
                        setHobbies(inHobbies);
                        setBabyPage(7)
                    }}>Anterior</button>
                    <button onClick={() => {
                        const baby = {
                            ...futureBaby,
                            hobbies: inHobbies
                        }
                        setBaby(baby)
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    }}>Próxima</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Hobby</h2>
        
                    <br/>
        
                    <button onClick={() => {
                        setHobbies(inHobbies);
                        setBabyPage(6)
                    }}>Anterior</button>
                    <button onClick={() => {
                        const baby = {
                            ...futureBaby,
                            hobbies: inHobbies
                        }
                        setBaby(baby)
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    }}>Próxima</button>
                </div>
            )
        }
    } else {
        if(isBorn) {
            return (
                <div>
                    <h2>Hobby</h2>
        
                    <br/>
        
                    <button onClick={() => {
                        setHobbies(inHobbies);
                        setBabyPage(9)
                    }}>Anterior</button>
                    <button onClick={() => {
                        const baby = {
                            ...futureBaby,
                            hobbies: inHobbies
                        }
                        setBaby(baby)
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    }}>Próxima</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Hobby</h2>
        
                    <br/>
        
                    <button onClick={() => {
                        setHobbies(inHobbies);
                        setBabyPage(8)
                    }}>Anterior</button>
                    <button onClick={() => {
                        const baby = {
                            ...futureBaby,
                            hobbies: inHobbies
                        }
                        setBaby(baby)
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    }}>Próxima</button>
                </div>
            )
        }
    }
}

export default HobbiesQ
