import { useState } from "react";

function CoolSquareQ({tools: {setPage, coolness, intimacy, setCoolness, setBDayPage, setSection, futureBDay, setBDay, setGoToOccasionLastQ}}) {

    const [inCoolness, setInCoolness] = useState(coolness ? coolness : "");
    
    return (        
        <div>
            <h2>Coolness</h2>
            <br/>

            <button onClick={() => {
                setCoolness(inCoolness);
                setBDayPage(5)
            }}>Anterior</button>
            <button onClick={() => {
                const bday = {
                    ...futureBDay,
                    coolness: inCoolness
                }
                setBDay(bday)
                setGoToOccasionLastQ(true)
                setSection("common")
                setPage(4);
            }}>Próxima</button>
        </div>
    )
}

export default CoolSquareQ
