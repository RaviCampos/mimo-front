import { useEffect, useState } from "react"

function ReasonQ({tools: { setTravelPage, reason, setReason, giftedName }}) {

    let protoReason

    if(reason) {
        protoReason = reason.split(" -- ");
        if(protoReason.length !== 1) {
            protoReason.push("")
        }
    } else {
        protoReason = [ "", "" ]
    }

    const [ inReason, setInReason ] = useState(protoReason[0])
    const [ complement, setComplement ] = useState(protoReason[1])

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inReason])

    function changeReason(string) {
        setInReason(string);
        setComplement("")
    }
    
    return (
        <div>
            <h2>Me conta, qual o motivo da viagem de {giftedName}?</h2>
            <div>
                <input type="radio" name="reason" id="reason-travel_work" checked={inReason === "Trabalho"} onChange={() => changeReason("Trabalho")} />
                <label htmlFor="reason-travel_work">Trabalho</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_dream-work" checked={inReason === "Viagem dos sonhos"} onChange={() => changeReason("Viagem dos sonhos")} />
                <label htmlFor="reason_dream-work">Viagem dos sonhos</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_vacation" checked={inReason === "Merecidas férias"} onChange={() => changeReason("Merecidas férias")} />
                <label htmlFor="reason_vacation">Merecidas férias</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_visiting-honey" checked={inReason === "Visitar alguém querido"} onChange={() =>changeReason("Visitar alguém querido")} />
                <label htmlFor="reason_visiting-honey">Visitar alguém querido</label>
            </div>

            {inReason === "Visitar alguém querido" && 
                <div>
                    <label htmlFor="reason-travel_who">Qual?</label>
                    <input type="text" id="reason-travel_who" value={complement} onChange={e => setComplement(e.target.value)}/>
                </div>
            }
            

            {warning && <p className="validation-warning">{warning}</p>}
            
            <button onClick={() => {
                if(complement) {
                    setReason(`${inReason} -- ${complement}`)
                } else {
                    setReason(inReason);
                }
                    setTravelPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                if(!inReason) {
                    setWarning("Por favor, escolha uma das opções")
                } else if(inReason === "Visitar alguém querido" && !complement) {
                    setWarning("Por favor, preencha quem será visitado")
                } else if(inReason === "Visitar alguém querido") {
                    setReason(`${inReason} -- ${complement}`)
                    setTravelPage(2)
                } else {
                    setReason(inReason);
                    setTravelPage(2)
                }
            }}>Próxima</button>

        </div>
    )
}

export default ReasonQ
