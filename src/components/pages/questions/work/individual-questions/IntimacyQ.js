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
        <div>
            <h2>O quão próximos você e {giftedName} são?</h2>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_friends" checked={inIntimacy === "Somos muito amigos"} onChange={() => changeInIntimacy("Somos muito amigos")} />
                <label htmlFor="work-intimacy_friends">Somos muito amigos</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_mates" checked={inIntimacy === "Eramos colegas de trabalho"} onChange={() => changeInIntimacy("Eramos colegas de trabalho")} />
                <label htmlFor="work-intimacy_mates">Eramos colegas de trabalho</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_together" checked={inIntimacy === "Trabalhamos juntos"} onChange={() => changeInIntimacy("Trabalhamos juntos")} />
                <label htmlFor="work-intimacy_together">Trabalhamos juntos</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_boss" checked={inIntimacy === `${capitalize(giftedName)} é meu/minha chefe`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} é meu/minha chefe`)} />
                <label htmlFor="work-intimacy_boss">{capitalize(giftedName)} é meu/minha chefe</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_employe" checked={inIntimacy === `${capitalize(giftedName)} trabalha para mim`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} trabalha para mim`)} />
                <label htmlFor="work-intimacy_employe">{capitalize(giftedName)} trabalha para mim</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_study" checked={inIntimacy === "Estudamos juntos"} onChange={() => changeInIntimacy("Estudamos juntos")} />
                <label htmlFor="work-intimacy_study">Estudamos juntos</label>
            </div>
            <div>
                <input type="radio" name="intimacy" id="work-intimacy_family" checked={inIntimacy === `${capitalize(giftedName)} é da família`} onChange={() => changeInIntimacy(`${capitalize(giftedName)} é da família`)} />
                <label htmlFor="work-intimacy_family">{capitalize(giftedName)} é da família</label>
            </div>
            {inIntimacy === `${capitalize(giftedName)} é da família` && 
                <div>
                    <label htmlFor="work-intimacy_complement">Qual membro</label>
                    <input type="text" id="work-intimacy_complement" value={complement} onChange={e => setComplement(e.target.value)}/>
                </div>
            }

            {warning && <p className="validation-warning">{warning}</p>}

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
    )
}

export default IntimacyQ
