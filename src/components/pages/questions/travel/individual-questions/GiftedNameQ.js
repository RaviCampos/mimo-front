import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ, setTravelPage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Como é o nome da pessoa sortuda que vai embarcar em uma aventura e receber um presente para celebrar?</h2>
                    <input type="text" value={inName} onChange={e => setInName(e.target.value)} autoComplete="off"/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for go-bit-down when-mobile">
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

                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ