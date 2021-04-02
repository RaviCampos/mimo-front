import { useEffect, useState } from "react";

function MoodQ({tools: { setMovingPage, mood, setMood, giftedName}}) {
    const [ inMood, setInMood ] = useState(mood)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inMood])

    return (
        <div>

            <h2>Ânimo</h2>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setMood(inMood);
                setMovingPage(5)
            }}>Anterior</button>
            <button onClick={() => {
                setMood(inMood);
                setMovingPage(7)
            }}>Próxima</button>
        </div>
    )
}

export default MoodQ
