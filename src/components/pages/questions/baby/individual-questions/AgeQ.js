import { useState, useEffect} from "react"

function AgeQ({tools: {babyPage, setBabyPage, setAge, age, parentType, isBorn, name, gifterName}}) {

    // if "Um casal querido..."
    const [ ageA, setAgeA ] = useState(age ? (age.ageA ? age.ageA : "") : "")
    const [ ageB, setAgeB ] = useState(age ? (age.ageB ? age.ageB : "") : "")

    // if "Na verdade é um(a)..."
    const [ inAge, setInAge ] = useState(age ? (age.age ? age.age : "") : "")

    // else
    const [ gifterAge, setGifterAge ] = useState(age ? (age.gifterAge ? age.gifterAge : "") : "")
    const [ giftedAge, setGiftedAge ] = useState(age ? (age.giftedAge ? age.giftedAge : "") : "")
    
    const [ warning, setWarning ] = useState(false)

    if(parentType === "Um casal querido que está esperando um filho") {        
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Você sabe a idade de {name.nameA} e {name.nameB}? Não precisa ser exato, só uma aproximação já nos ajuda a encontrar o presente perfeito para o casal</h2>
                                            
                        <div className="width-280 bebe">
                            <div className="flex-between-middle">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_from">{name.nameA}</label>
                                <input type="number" name="value" id="value_from" value={ageA} min={1} onChange={e => setAgeA(parseInt(e.target.value))} min="1" max="120" autocomplete="off" placeholder="idade"/>
                            </div>
                            <div className="flex-between-middle small-space-top">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_to">{name.nameB}</label>
                                <input type="number" name="value" id="value_to" value={ageB} min={1} onChange={e => setAgeB(parseInt(e.target.value))} min="1" max="120" autocomplete="off" placeholder="idade"/>
                            </div>
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}
                        <br/>

                        <div className="prev-for">
                            <button onClick={() => {
                                setAge({
                                    ageA,
                                    ageB
                                })
                                setBabyPage(babyPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(ageA && ageB) {
                                    setAge({
                                        ageA,
                                        ageB
                                    })
                                    setBabyPage(babyPage + 1)
                                } else {
                                    setWarning("Por favor, selecione as duas idades")
                                }
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if(parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {        
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Você sabe a idade de {name}? Não precisa ser exato, só uma aproximação já nos ajuda a encontrar o presente perfeito</h2>
                                            
                        <div className="width-280 bebe">
                            <div className="flex-between-middle">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_from">{name}</label>
                                <input type="number" name="value" id="value_from" value={inAge} min={1} onChange={e => setInAge(parseInt(e.target.value))} min="1" max="120" autocomplete="off" placeholder="idade"/>
                            </div>
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}
                        <br/>

                        <div className="prev-for">
                            <button onClick={() => {
                                setAge({
                                    age: inAge
                                })
                                setBabyPage(babyPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(inAge) {
                                    setAge({
                                        age: inAge
                                    })
                                    setBabyPage(babyPage + 1)
                                } else {
                                    setWarning("Por favor, selecione a idade")
                                }
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Quantos anos você e {name} têm? Não precisa ser exato, só uma aproximação já nos ajudará a encontrar o presente perfeito para {name}</h2>
                                            
                        <div className="width-280 bebe">
                            <div className="flex-between-middle">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_from">{gifterName}</label>
                                <input type="number" name="value" id="value_from" value={gifterAge} min={1} onChange={e => setGifterAge(parseInt(e.target.value))} min="1" max="120" autocomplete="off" placeholder="idade"/>
                            </div>
                            <div className="flex-between-middle small-space-top">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_to">{name}</label>
                                <input type="number" name="value" id="value_to" value={giftedAge} min={1} onChange={e => setGiftedAge(parseInt(e.target.value))} min="1" max="120" autocomplete="off" placeholder="idade"/>
                            </div>
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}
                        <br/>

                        <div className="prev-for">
                            <button onClick={() => {
                                setAge({
                                    gifterAge,
                                    giftedAge
                                })
                                setBabyPage(babyPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(gifterAge && giftedAge) {
                                    setAge({
                                        gifterAge,
                                        giftedAge    
                                    })
                                    setBabyPage(babyPage + 1)
                                } else {
                                    setWarning("Por favor, selecione as duas idadessss")
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
