import { useEffect, useState } from "react";

function IntroExtraQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
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
                setWorkPage(intimacy === 2 ? 6 : 5)
            }}>Anterior</button>
            <button onClick={() => {
                const work = {
                    ...futureWork,
                    introExtra: inIntroExtra
                }
                setWork(work);
                setGoToOccasionLastQ(true)
                setSection("common")
                setPage(4);
            }}>Próxima</button>
        </div>
    )
}

export default IntroExtraQ
