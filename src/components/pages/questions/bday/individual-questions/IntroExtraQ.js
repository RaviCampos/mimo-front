import { useState } from "react";

function IntroExtraQ({tools: {introExtra, intimacy, setIntroExtra, setBDayPage, giftedName}}) {
    
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra ? introExtra : "")
    
    return (
        <div>
            <h2>IntroExtra</h2>

            <br/>

            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setBDayPage(3)
            }}>Anterior</button>
            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setBDayPage(5)
            }}>Próxima</button>
        </div>
    )
}

export default IntroExtraQ
