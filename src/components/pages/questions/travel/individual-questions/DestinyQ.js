import { useEffect, useState } from "react";

function DestinyQ({tools: { setTravelPage, destiny, setDestiny, giftedName }}) {

    const [ inDestiny, setInDestiny] = useState(destiny ? destiny : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inDestiny])
    
    return (
        <div>

            <h2>Show! Agora conta para a gente, para onde vai ser essa incrível viagem?</h2>
            <p>Se houver mais de um, pode colocar quantos você preferir ou só um destino principal</p>
            <input type="text" value={inDestiny} onChange={e => setInDestiny(e.target.value)}/>
        
            {warning && <p className="validation-warning">{warning}</p>}

            <br/>
        
            <button onClick={() => {
                setDestiny(inDestiny);
                setTravelPage(1)
            }}>Anterior</button>
            <button onClick={() => {
                if(!inDestiny) {
                    setWarning("Por favor, preencha o destino da viagem")
                } else {
                    setDestiny(inDestiny);
                    setTravelPage(3)
                }
            }}>Próxima</button>
        </div>
    )
}

export default DestinyQ
