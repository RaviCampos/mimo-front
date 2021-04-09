import { useEffect, useState } from "react"

function ReasonQ({tools: { setWorkPage, reason, setReason, giftedName }}) {

    let protoReason

    if(reason) {
        protoReason = reason.split(" -- ")
        if(protoReason.length === 1) {
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
    }, [inReason, complement])
    
    function changeInReason(input) {
        setInReason(input);
        setComplement("")
    } 

    return (
        <div>
            <h2>Me conta, porque estamos dando um presente para {giftedName}?</h2>
            <div>
                <input type="radio" name="reason" id="reason_firstjob" checked={inReason === "Primeiro emprego"} onChange={() => changeInReason("Primeiro emprego")} />
                <label htmlFor="reason_firstjob">Primeiro emprego</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_newjob" checked={inReason === "Conseguiu um emprego que queria ou precisava muito"} onChange={() => changeInReason("Conseguiu um emprego que queria ou precisava muito")} />
                <label htmlFor="reason_newjob">Conseguiu um emprego que queria ou precisava muito</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_promotionjob" checked={inReason === "Foi promovido no emprego"} onChange={() => changeInReason("Foi promovido no emprego")} />
                <label htmlFor="reason_promotionjob">Foi promovido no emprego</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_changejob" checked={inReason === "Mudando de emprego"} onChange={() => changeInReason("Mudando de emprego")} />
                <label htmlFor="reason_changejob">Mudando de emprego</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_aproved" checked={inReason === "Aprovado na faculdade, mestrado ou doutorado"} onChange={() => changeInReason("Aprovado na faculdade, mestrado ou doutorado")} />
                <label htmlFor="reason_aproved">Aprovado na faculdade, mestrado ou doutorado</label>
            </div>

            {inReason === "Aprovado na faculdade, mestrado ou doutorado" && 
                <div>
                    <h3>Qual dos três?</h3>
                    <div>  
                        <input type="radio" name="reason-begining" id="reason-complement_begining-graduation" checked={complement === "Faculdade"} onChange={() => setComplement("Faculdade")} />
                        <label htmlFor="reason-complement_begining-graduation">Faculdade</label>
                    </div>
                    <div>  
                        <input type="radio" name="reason-begining" id="reason-complement_begining-master" checked={complement === "Mestrado"} onChange={() => setComplement("Mestrado")} />
                        <label htmlFor="reason-complement_begining-master">Mestrado</label>
                    </div>
                    <div>  
                        <input type="radio" name="reason-begining" id="reason-complement_begining-phd" checked={complement === "Doutorado"} onChange={() => setComplement("Doutorado")} />
                        <label htmlFor="reason-complement_begining-phd">Doutorado</label>
                    </div>
                    <br/>

                </div>
            }
            <div>
                <input type="radio" name="reason" id="reason_ending" checked={inReason === "Finalizando faculdade, mestrado ou doutorado"} onChange={() => changeInReason("Finalizando faculdade, mestrado ou doutorado")} />
                <label htmlFor="reason_ending">Finalizando faculdade, mestrado ou doutorado</label>
            </div>

            {inReason === "Finalizando faculdade, mestrado ou doutorado" && 
                <div>
                    <h3>Qual dos três?</h3>
                    <div>  
                        <input type="radio" name="reason-ending" id="reason-complement_ending-graduation" checked={complement === "Faculdade"} onChange={() => setComplement("Faculdade")} />
                        <label htmlFor="reason-complement_ending-graduation">Faculdade</label>
                    </div>
                    <div>  
                        <input type="radio" name="reason-ending" id="reason-complement_ending-master" checked={complement === "Mestrado"} onChange={() => setComplement("Mestrado")} />
                        <label htmlFor="reason-complement_ending-master">Mestrado</label>
                    </div>
                    <div>  
                        <input type="radio" name="reason-ending" id="reason-complement_ending-phd" checked={complement === "Doutorado"} onChange={() => setComplement("Doutorado")} />
                        <label htmlFor="reason-complement_ending-phd">Doutorado</label>
                    </div>
                    <br/>
                </div>
            }

            <div>
                <input type="radio" name="reason" id="reason_newpath" checked={inReason === "Decidiu seguir um novo caminho profissional"} onChange={() => changeInReason("Decidiu seguir um novo caminho profissional")} />
                <label htmlFor="reason_newpath">Decidiu seguir um novo caminho profissional</label>
            </div>

            {inReason === "Decidiu seguir um novo caminho profissional" && 
                <div>
                    <input type="text" id="reason-complement_newpath" value={complement} onChange={e => setComplement(e.target.value)}/>
                    <label htmlFor="reason-complement_newpath">Qual o novo caminho?</label>
                </div>
            }

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                if(inReason === "Aprovado na faculdade, mestrado ou doutorado" || inReason === "Finalizando faculdade, mestrado ou doutorado" || inReason === "Decidiu seguir um novo caminho profissional") {
                    setReason(`${inReason} -- ${complement}`);
                    setWorkPage(0)
                } else {
                    setReason(inReason);
                    setWorkPage(0)
                }
            }}>Anterior</button>
            <button onClick={() => {
                if(inReason) {
                    if(inReason === "Aprovado na faculdade, mestrado ou doutorado" || inReason === "Finalizando faculdade, mestrado ou doutorado" || inReason === "Decidiu seguir um novo caminho profissional") {
                        if(complement) {
                            setReason(`${inReason} -- ${complement}`);
                            setWorkPage(2)
                        } else {
                            setWarning("Por favor, responda ao campo de resposta complementar")
                        }
                    } else {
                        setReason(inReason);
                        setWorkPage(2)
                    }
                } else {
                    setWarning("Por favor, escolha uma das opções")
                }
            }}>Próxima</button>

        </div>
    )
}

export default ReasonQ
