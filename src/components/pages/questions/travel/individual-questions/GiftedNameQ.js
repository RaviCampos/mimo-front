import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ, setTravelPage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div>
            <h2>Como é o nome da pessoa sortuda que vai embarcar em uma aventura e receber um presente para celebrar?</h2>
            <input type="text" value={inName} onChange={e => setInName(e.target.value)}/>

            <br/>

            {warning && <p className="validation-warning">{warning}</p>}
            
            <button onClick={() => {
                const travel = {
                    ...futureTravel,
                    giftedName: inName
                }
                setTravel(travel);
                setGoToOccasionLastQ(false)
                setSection("common")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                if(inName !== "") {
                    setGiftedName(inName);
                    setTravelPage(1)
                } else {
                    setWarning("Por favor, preencha o nome da pessoa que vai ganhar o presente")
                }
            }}>Próxima</button>
            
        </div>
    )
}

export default GiftedNameQ