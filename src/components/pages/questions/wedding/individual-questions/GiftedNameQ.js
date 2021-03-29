import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setWeddingPage, setGiftedName, giftedName, gifterInCouple, gifterName }}) {
    let protoName
    if(giftedName) {
        protoName = giftedName.split(" -- ")
        if(gifterInCouple) {
            if(protoName.length > 1) {
                protoName = [ "", "" ]
            } else {
                protoName.push("")
            }
        } else {
            if(protoName.length < 2) {
                protoName = [ "", "" ]
            }
        }

    } else {
        protoName = [ "", "" ];
    }

    const [ firstName, setFirstName ] = useState(protoName[0])
    const [ secondName, setSecondName ] = useState(protoName[1])

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false);
    }, [firstName, secondName])

    return (
        <div>
            {
                gifterInCouple ?
                    <div>
                        <h2>Que legal, {gifterName}! Me conta o nome da pessoa com quem você está construindo essa história de amor?</h2>
                        <div>
                            <label htmlFor="gifter_firstName"></label>
                            <input type="text" name="firstName" id="gifter_firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    :
                    <div>
                        <h2>Muito atencioso da sua parte! Qual o nome do feliz casal que vamos homenagear?</h2>
                        <div>
                            <label htmlFor="gifter_firstName"></label>
                            <input type="text" name="firstName" id="gifter_firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="gifter_secondName"></label>
                            <input type="text" name="secondName" id="gifter_secondName" value={secondName} onChange={e => setSecondName(e.target.value)}/>
                        </div>
                    </div>
            }

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                if(gifterInCouple) {
                    setGiftedName(firstName)
                } else {
                    setGiftedName(`${firstName} -- ${secondName}`);
                }
                setWeddingPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                if(gifterInCouple) {
                    if(firstName) {
                        setGiftedName(firstName)
                        setWeddingPage(2)
                    } else {
                        setWarning("Por favor preencha o nome da outra pessoa")
                    }
                } else {
                    if(!firstName) {
                        setWarning("Por favor preencha o nome do primeiro membro do casal")
                    } else if(!secondName) {
                        setWarning("Por favor preencha o nome do segundo membro do casal")
                    } else {
                        setGiftedName(`${firstName} -- ${secondName}`);
                        setWeddingPage(2)
                    }
                }
            }}>Próxima</button>
        </div>
    )
}

export default GiftedNameQ
