import { useState, useEffect } from "react"
function IntimacyQ({tools: { setWorkPage, intimacy, setIntimacy, giftedName }}) {

    let protoIntimacy

    if(intimacy) {
        protoIntimacy = intimacy.split(" -- ")
        if(protoIntimacy.length === 1) {
            protoIntimacy.push("")
        }
    } else {
        protoIntimacy = [ "", "" ]
    }

    const [ inIntimacy, setInIntimacy ] = useState(protoIntimacy[0])
    const [ complement, setComplement ] = useState(protoIntimacy[1])

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [inIntimacy, complement])
    
    function changeInIntimacy(input) {
        setInIntimacy(input);
        setComplement("")
    } 

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">O quão próximos você e {giftedName} são?</h2>
                    <label className="radio-option small-radio">
                        Somos muito amigos
                        <input type="radio" name="intimacy" id="work-intimacy_friends" checked={inIntimacy === "Somos muito amigos"} onChange={() => changeInIntimacy("Somos muito amigos")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Eramos colegas de trabalho
                        <input type="radio" name="intimacy" id="work-intimacy_mates" checked={inIntimacy === "Eramos colegas de trabalho"} onChange={() => changeInIntimacy("Eramos colegas de trabalho")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Trabalhamos juntos
                        <input type="radio" name="intimacy" id="work-intimacy_together" checked={inIntimacy === "Trabalhamos juntos"} onChange={() => changeInIntimacy("Trabalhamos juntos")} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        {capitalize(giftedName)} é meu/minha chefe
                        <input type="radio" name="intimacy" id="work-intimacy_boss" checked={inIntimacy === `${capitalize(giftedName)} é meu/minha chefe`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} é meu/minha chefe`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        {capitalize(giftedName)} trabalha para mim
                        <input type="radio" name="intimacy" id="work-intimacy_employe" checked={inIntimacy === `${capitalize(giftedName)} trabalha para mim`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} trabalha para mim`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        Estudamos juntos
                        <input type="radio" name="intimacy" id="work-intimacy_study" checked={inIntimacy === `Estudamos juntos`} onChange={() => changeInIntimacy(`Estudamos juntos`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        {capitalize(giftedName)} é da família
                        <input type="radio" name="intimacy" id="work-intimacy_family" checked={inIntimacy === `${capitalize(giftedName)} é da família`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} é da família`)} />
                        <span className="checkmark"></span>
                    </label>
                    {inIntimacy === `${capitalize(giftedName)} é da família` && 
                        <div>
                            <label htmlFor="work-intimacy_complement">Qual membro</label>
                            <input type="text" id="work-intimacy_complement" value={complement} onChange={e => setComplement(e.target.value)}/>
                        </div>
                    }

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            if(inIntimacy === `${capitalize(giftedName)} é da família`) {
                                setIntimacy(`${inIntimacy} -- ${complement}`);
                                setWorkPage(1)
                            } else {
                                setIntimacy(inIntimacy);
                                setWorkPage(1)
                            }
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inIntimacy === `${capitalize(giftedName)} é da família` && !complement) {
                                setWarning("Por favor, escreve qual o membro da família")
                            } else if(!inIntimacy) {
                                setWarning("Por favor, selecione uma das opções")
                            } else if(inIntimacy === `${capitalize(giftedName)} é da família`) {
                                setIntimacy(`${inIntimacy} -- ${complement}`);
                                setWorkPage(3)
                            } else {
                                setIntimacy(inIntimacy);
                                setWorkPage(3)
                            }
                        }}>Próxima</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default IntimacyQ
