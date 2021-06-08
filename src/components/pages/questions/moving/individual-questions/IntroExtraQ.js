import { useEffect, useState } from "react";

function IntroExtraQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
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
                if(intimacy > 5) {
                    setIntroExtra(inIntroExtra);
                    setMovingPage(6)
                } else {
                    setIntroExtra(inIntroExtra);
                    setMovingPage(5)
                }
            }}>Anterior</button>
            <button onClick={() => {
                const moving = {
                    ...futureMoving,
                    introExtra: inIntroExtra
                }
                if(intimacy <= 5) delete moving.mood
                setMoving(moving);
                setGoToOccasionLastQ(true)
                setSection("common")
                setPage(4);
            }}>Próxima</button>
        </div>
    )
}

export default IntroExtraQ
