import { useEffect, useState } from "react";

function DestinyQ({tools: { travelPage, setTravelPage, destiny, setDestiny, giftedName }}) {

    const [ inDestiny, setInDestiny] = useState(destiny ? destiny : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inDestiny])
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Show! Agora conta para a gente, para onde vai ser essa incrível viagem?</h2>
                    <p>Se houver mais de um, pode colocar quantos você preferir ou só um destino principal</p>
                    <input type="text" value={inDestiny} onChange={e => setInDestiny(e.target.value)} autoComplete="off"/>
                
                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                
                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            setDestiny(inDestiny);
                            setTravelPage(travelPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inDestiny) {
                                setWarning("Por favor, preencha o destino da viagem")
                            } else {
                                setDestiny(inDestiny);
                                setTravelPage(travelPage + 1)
                            }
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DestinyQ
