import { useEffect, useState } from "react";

function IntroExtraQ({tools: { setTravelPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])

    return (
        <div>

            <h2>Intro Extra</h2>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setTravelPage(4)
            }}>Anterior</button>
            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setTravelPage(6)
            }}>Próxima</button>
        </div>
    )
}

export default IntroExtraQ
