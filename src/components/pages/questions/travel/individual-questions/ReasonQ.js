import { useEffect, useState } from "react"

function ReasonQ({tools: { travelPage, setTravelPage, reason, setReason, giftedName }}) {

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
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Me conta, qual o motivo da viagem de {giftedName}?</h2>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason-travel_work" checked={inReason === "Trabalho"} onChange={() => changeReason("Trabalho")} />
                        Trabalho
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_dream-work" checked={inReason === "Viagem dos sonhos"} onChange={() => changeReason("Viagem dos sonhos")} />
                        Viagem dos sonhos
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_vacation" checked={inReason === "Merecidas férias"} onChange={() => changeReason("Merecidas férias")} />
                        Merecidas férias
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_visiting-honey" checked={inReason === "Visitar alguém querido"} onChange={() =>changeReason("Visitar alguém querido")} />
                        Visitar alguém querido
                        <span className="checkmark"></span>
                    </label>

                    {inReason === "Visitar alguém querido" && 
                        <div>
                            <label htmlFor="reason-travel_who">Qual?</label>
                            <input type="text" id="reason-travel_who" value={complement} onChange={e => setComplement(e.target.value)} autoComplete="off"/>
                        </div>
                    }
                    

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for bit-down">
                        <button onClick={() => {
                            if(complement) {
                                setReason(`${inReason} -- ${complement}`)
                            } else {
                                setReason(inReason);
                            }
                                setTravelPage(travelPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inReason) {
                                setWarning("Por favor, escolha uma das opções")
                            } else if(inReason === "Visitar alguém querido" && !complement) {
                                setWarning("Por favor, preencha quem será visitado")
                            } else if(inReason === "Visitar alguém querido") {
                                setReason(`${inReason} -- ${complement}`)
                                setTravelPage(travelPage + 1)
                            } else {
                                setReason(inReason);
                                setTravelPage(travelPage + 1)
                            }
                        }}>Próxima</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ReasonQ
