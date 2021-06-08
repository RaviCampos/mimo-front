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
                setCoolness(inCoolness);
                setMovingPage(intimacy > 5 ? 5 : 4)
            }}>Anterior</button>
            <button onClick={() => {
                setCoolness(inCoolness);
                setMovingPage(intimacy > 5 ? 7 : 6)
            }}>Próxima</button>
        </div>
    )
}

export default CoolnessQ
