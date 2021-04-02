import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div>
            <h2>E qual nome da pessoa sortuda para quem você está procurando um presente?</h2>
            <input type="text" value={inName} onChange={e => setInName(e.target.value)}/>

            <br/>

            {warning && <p className="validation-warning">{warning}</p>}
            
            <button onClick={() => {
                const future = {
                    ...futureNone,
                    giftedName: inName
                }
                setNone(future);
                setGoToOccasionLastQ(false)
                setSection("common")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                if(inName !== "") {
                    setGiftedName(inName);
                    setNonePage(1)
                } else {
                    setWarning("Por favor, preencha o nome da pessoa que vai ganhar o presente")
                }
            }}>Próxima</button>
            
        </div>
    )
}

export default GiftedNameQ