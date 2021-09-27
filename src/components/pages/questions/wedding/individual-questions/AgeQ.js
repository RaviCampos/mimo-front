import { useEffect, useState } from "react"

function AgeQ({tools: { setWeddingPage, weddingPage, setAge, gifterInCouple, age, gifterName, giftedName }}) {

    // "ana: 24 / vladimir: 26"

    let protoAge
    if(age) {
        protoAge = age.split(" / ").map(x => x.split(": ")[1])
    } else {
        protoAge = [ "", "" ]
    }

    const [ firstAge, setFirstAge ] = useState(protoAge[0]);
    const [ secondAge, setSecondAge ] = useState(protoAge[1]);

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [firstAge, secondAge])

    if(gifterInCouple) {

        return(
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="bigger-subtitle">Desculpa a indiscrição, mas quantos anos de idade vocês tem? Cada um dos dois. Não precisa ser exato, só uma aproximação já nos ajudará a encontrar o presente perfeito para {giftedName}</h2>
                        <div className="width-280">
                            <div className="flex-between-middle">
                                <label htmlFor="age_first">{gifterName}:</label>
                                <input type="number" id="age_first" min="1" max="120" value={firstAge} onChange={e => setFirstAge(e.target.value)}/>
                            </div>
                            <div className="flex-between-middle small-space-top">
                                <label htmlFor="age_second">{giftedName}:</label>
                                <input type="number" id="age_second" min="1" max="120" value={secondAge} onChange={e => setSecondAge(e.target.value)}/>
                            </div>
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}

                        <div className="prev-for bit-down">
                            <button onClick={() => {
                                setAge(`${gifterName}: ${firstAge} / ${giftedName}: ${secondAge}`);
                                setWeddingPage( weddingPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {

                                if(!firstAge) {
                                    setWarning(`Por favor preencha a idade de ${gifterName}`)
                                } else if(firstAge < 1) {
                                    setWarning(`A idade de ${gifterName} precisa ser positiva`)
                                } else if(firstAge > 120) {
                                    setWarning(`A idade de ${gifterName} precisa ser menor do que 120`)
                                } else if(!secondAge) {
                                    setWarning(`Por favor preencha a idade de ${giftedName}`)
                                } else if(secondAge < 1) {
                                    setWarning(`A idade de ${giftedName} precisa ser positiva`)
                                } else if(secondAge > 120) {
                                    setWarning(`A idade de ${giftedName} precisa ser menor do que 120`)
                                } else {
                                    setAge(`${gifterName}: ${firstAge} / ${giftedName}: ${secondAge}`);
                                    setWeddingPage( weddingPage + 1)
                                }

                            }}>Próxima</button>
                        </div>

                    </div>
                </div>
            </div>
        )

    } else {

        const firstName = giftedName.split(" -- ")[0]
        const secondName = giftedName.split(" -- ")[1]

        return(
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Você sabe a idade deles? Não precisa ser exato, só uma aproximação já nos ajuda a encontrar o presente perfeito para o casal</h2>
                        <div className="width-280">
                            <div className="flex-between-middle">
                                <label className="bigger-subtitle space-right" htmlFor="age_first">{firstName}:</label>
                                <input type="number" id="age_first" min="1" max="99" value={firstAge} onChange={e => setFirstAge(e.target.value)}/>
                            </div>
                            <div className="flex-between-middle small-space-top">
                                <label className="bigger-subtitle space-right" htmlFor="age_second">{secondName}:</label>
                                <input type="number" id="age_second" min="1" max="99" value={secondAge} onChange={e => setSecondAge(e.target.value)}/>
                            </div>
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}

                        <div className="prev-for go-bit-down when-mobile">
                            <button onClick={() => {
                                setAge(`${firstName}: ${firstAge} / ${secondName}: ${secondAge}`);
                                setWeddingPage(2)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(!firstAge) {
                                    setWarning(`Por favor preencha a idade de ${firstName}`)
                                } else if(firstAge < 1) {
                                    setWarning(`A idade de ${firstName} precisa ser positiva`)
                                } else if(firstAge > 120) {
                                    setWarning(`A idade de ${firstName} precisa ser menor do que 120`)
                                } else if(!secondAge) {
                                    setWarning(`Por favor preencha a idade de ${secondName}`)
                                } else if(secondAge < 1) {
                                    setWarning(`A idade de ${secondName} precisa ser positiva`)
                                } else if(secondAge > 120) {
                                    setWarning(`A idade de ${secondName} precisa ser menor do que 120`)
                                } else {
                                    setAge(`${firstName}: ${firstAge} / ${secondName}: ${secondAge}`);
                                    setWeddingPage(4)
                                }
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default AgeQ
