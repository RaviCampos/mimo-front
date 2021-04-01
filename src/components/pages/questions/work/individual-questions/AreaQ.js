import { useEffect, useState } from "react";

function AreaQ({tools: { setWorkPage, area, setArea, giftedName }}) {

    const [ inArea, setInArea ] = useState(area)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inArea])

    return (
        <div>

            <h2>Área de atuação</h2>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setArea(inArea);
                setWorkPage(3)
            }}>Anterior</button>
            <button onClick={() => {
                setArea(inArea);
                setWorkPage(5)
            }}>Próxima</button>
        </div>
    )
}

export default AreaQ
