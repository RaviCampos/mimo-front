import { useEffect, useState } from "react";

function CoolnessQ({tools: { setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ, setTravelPage, coolness, setCoolness, giftedName, intimacy }}) {
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
                setTravelPage(4)
            }}>Anterior</button>
            <button onClick={() => {
                setCoolness(inCoolness);
                setTravelPage(6)
            }}>Próxima</button>
        </div>
    )
}

export default CoolnessQ
