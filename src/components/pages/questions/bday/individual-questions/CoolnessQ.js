import { useState } from "react";

function CoolSquareQ({tools: {coolness, intimacy, setCoolness, setBDayPage, giftedName}}) {

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
                setCoolness(inCoolness);
                setBDayPage(7)
            }}>Próxima</button>
        </div>
    )
}

export default CoolSquareQ
