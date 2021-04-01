import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div>
            <h2>Qual nome da pessoa que está de mudança e vai ganhar um presente para celebrar esse momento?</h2>
            <input type="text" value={inName} onChange={e => setInName(e.target.value)}/>

            <br/>

            {warning && <p className="validation-warning">{warning}</p>}
            
            <button onClick={() => {
                const moving = {
                    ...futureMoving,
                    giftedName: inName
                }
                setMoving(moving);
                setGoToOccasionLastQ(false)
                setSection("common")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                if(inName !== "") {
                    setGiftedName(inName);
                    setMovingPage(1)
                } else {
                    setWarning("Por favor, preencha o nome da pessoa que vai ganhar o presente")
                }
            }}>Próxima</button>
            
        </div>
    )
}

export default GiftedNameQ