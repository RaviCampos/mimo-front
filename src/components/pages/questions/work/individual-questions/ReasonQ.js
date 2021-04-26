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
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Me conta, porque estamos dando um presente para {giftedName}?</h2>
                    <label className="radio-option small-radio">
                        Primeiro emprego
                        <input type="radio" name="reason" id="reason_firstjob" checked={inReason === "Primeiro emprego"} onChange={() => changeInReason("Primeiro emprego")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Conseguiu um emprego que queria ou precisava muito
                        <input type="radio" name="reason" id="reason_newjob" checked={inReason === "Conseguiu um emprego que queria ou precisava muito"} onChange={() => changeInReason("Conseguiu um emprego que queria ou precisava muito")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Foi promovido no emprego
                        <input type="radio" name="reason" id="reason_promotionjob" checked={inReason === "Foi promovido no emprego"} onChange={() => changeInReason("Foi promovido no emprego")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Mudando de emprego
                        <input type="radio" name="reason" id="reason_changejob" checked={inReason === "Mudando de emprego"} onChange={() => changeInReason("Mudando de emprego")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Aprovado na faculdade, mestrado ou doutorado
                        <input type="radio" name="reason" id="reason_aproved" checked={inReason === "Aprovado na faculdade, mestrado ou doutorado"} onChange={() => changeInReason("Aprovado na faculdade, mestrado ou doutorado")} />
                        <span className="checkmark"></span>
                    </label>

                    {inReason === "Aprovado na faculdade, mestrado ou doutorado" && 
                        <div>
                            <h3 className="subtitle no-space-down bit-down">Qual dos três?</h3>
                            <label className="radio-option tinny-radio">  
                                Faculdade
                                <input type="radio" name="reason-begining" id="reason-complement_begining-graduation" checked={complement === "Faculdade"} onChange={() => setComplement("Faculdade")} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option tinny-radio">  
                                Mestrado
                                <input type="radio" name="reason-begining" id="reason-complement_begining-master" checked={complement === "Mestrado"} onChange={() => setComplement("Mestrado")} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option tinny-radio">  
                                Doutorado
                                <input type="radio" name="reason-begining" id="reason-complement_begining-phd" checked={complement === "Doutorado"} onChange={() => setComplement("Doutorado")} />
                                <span className="checkmark"></span>
                            </label>
                            <br/>

                        </div>
                    }
                    <label className="radio-option small-radio">
                        Finalizando faculdade, mestrado ou doutorado
                        <input type="radio" name="reason" id="reason_ending" checked={inReason === "Finalizando faculdade, mestrado ou doutorado"} onChange={() => changeInReason("Finalizando faculdade, mestrado ou doutorado")} />
                        <span className="checkmark"></span>
                    </label>

                    {inReason === "Finalizando faculdade, mestrado ou doutorado" && 
                        <div>
                            <h3 className="subtitle no-space-down bit-down">Qual dos três?</h3>
                            <label className="radio-option tinny-radio">  
                                Faculdade
                                <input type="radio" name="reason-ending" id="reason-complement_ending-graduation" checked={complement === "Faculdade"} onChange={() => setComplement("Faculdade")} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option tinny-radio">  
                                Mestrado
                                <input type="radio" name="reason-ending" id="reason-complement_ending-master" checked={complement === "Mestrado"} onChange={() => setComplement("Mestrado")} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option tinny-radio">  
                                Doutorado
                                <input type="radio" name="reason-ending" id="reason-complement_ending-phd" checked={complement === "Doutorado"} onChange={() => setComplement("Doutorado")} />
                                <span className="checkmark"></span>
                            </label>
                            <br/>
                        </div>
                    }

                    <label className="radio-option small-radio">
                        Decidiu seguir um novo caminho profissional
                        <input type="radio" name="reason" id="reason_newpath" checked={inReason === "Decidiu seguir um novo caminho profissional"} onChange={() => changeInReason("Decidiu seguir um novo caminho profissional")} />
                        <span className="checkmark"></span>
                    </label>

                    {inReason === "Decidiu seguir um novo caminho profissional" && 
                        <div className="small-space-top">
                            <label htmlFor="reason-complement_newpath">Qual o novo caminho?</label>
                            <input type="text" id="reason-complement_newpath" value={complement} onChange={e => setComplement(e.target.value)}/>
                        </div>
                    }

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
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

                </div>
            </div>
        </div>
    )
}

export default ReasonQ
