import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">E qual nome da pessoa sortuda para quem você está procurando um presente?</h2>
                    <input className="small-space-top" type="text" value={inName} onChange={e => setInName(e.target.value)} autoComplete="off"/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for go-bit-down when-mobile">
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

                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ