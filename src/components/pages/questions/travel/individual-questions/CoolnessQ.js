import { useEffect, useState } from "react";

function CoolnessQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, coolness, setCoolness, giftedName, intimacy }}) {
    const [ inCoolness, setInCoolness ] = useState(coolness)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])

    return (
        <div>

            <h2>Careta ou descolado</h2>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                if(intimacy > 5) {
                    setCoolness(inCoolness);
                    setMovingPage(6)
                } else {
                    setCoolness(inCoolness);
                    setMovingPage(4)
                }
            }}>Anterior</button>
            <button onClick={() => {
                if(intimacy > 5) {
                    const moving = {
                        ...futureMoving,
                        coolness: inCoolness
                    }
                    setMoving(moving);
                    setGoToOccasionLastQ(true)
                    setSection("common")
                    setPage(4);
                } else {
                    setCoolness(inCoolness);
                    setMovingPage(6)
                }
            }}>Próxima</button>
        </div>
    )
}

export default CoolnessQ
