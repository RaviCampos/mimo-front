import { useEffect, useState } from "react";

function CoolnessQ({tools: { travelPage, setTravelPage, coolness, setCoolness, giftedName }}) {
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
                setTravelPage(travelPage - 1)
            }}>Anterior</button>
            <button onClick={() => {
                setCoolness(inCoolness);
                setTravelPage(travelPage + 1)
            }}>Próxima</button>
        </div>
    )
}

export default CoolnessQ
