import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Qual nome da pessoa que está de mudança e vai ganhar um presente para celebrar esse momento?</h2>
                    <input type="text" value={inName} onChange={e => setInName(e.target.value)}/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for go-bit-down when-mobile">
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
            
                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ