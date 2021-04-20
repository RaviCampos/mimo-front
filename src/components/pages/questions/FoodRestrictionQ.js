import { useEffect, useState } from "react"

function FoodRestrictionQ({tools: {setPage, setFoodRestriction, foodRestriction, giftedName}}) {

    let preRestriction;

    if(foodRestriction) {
        preRestriction = foodRestriction.split(" & ")
    } else {
        preRestriction = ["", ""]
    }

    let have
    let ondiet
    let prename = giftedName.split(" -- ")

    if(prename.length > 1) {
        prename = prename.join(" e ")
        ondiet = `${prename} fazem`
        have = `${prename} têm`
    } else {
        ondiet = `${prename} faz`
        have = `${prename} tem`
    }

    const [ inRestriction, setInRestriction ] = useState(preRestriction[0])
    const [ complement, setComplement ] = useState(preRestriction[1])

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false);
    }, [inRestriction])
    useEffect(() => {
        setWarning(false)
    }, [complement])

    return (
        <div className="all-margin">
            <div className="all-center">
                <h2 className="title">Só por via das dúvidas você sabe se {have} alguma alergia ou restrição alimentar?</h2>
                <div>
                    <label className="radio-option">
                        Não que eu saiba
                        <input type="radio" name="food" id="food_nop" value="não que eu saiba" checked={inRestriction === "não que eu saiba"} onChange={e=>{ setInRestriction(e.target.value); setComplement("")}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option">
                        {ondiet} dieta e por isso não come algumas coisas
                        <input type="radio" name="food" id="food_diet" value="faz dieta e por isso não come algumas coisas" checked={inRestriction === "faz dieta e por isso não come algumas coisas"} onChange={e=> { setInRestriction(e.target.value); setComplement("")}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option">
                        Sim, {have} alergia ou não come algumas comidas de jeito nenhum
                        <input type="radio" name="food" id="food_alergy" value="tem alergia ou não come de jeito nenhum" checked={inRestriction === "tem alergia ou não come de jeito nenhum"} onChange={e=> { setInRestriction(e.target.value); setComplement("")}}/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="space-up-down">
                        {inRestriction === "tem alergia ou não come de jeito nenhum" && <input type="text" value={complement} onChange={e => setComplement(e.target.value)} placeholder="Quais?" autoComplete="off"/>}
                    </div>
                    <label className="radio-option">
                        Não acho que vem ao caso. Acho que comida de presente não combina muito com a ocasião e/ou a pessoa
                        <input type="radio" name="food" id="food_dontwant" value="Acho que comida de presente não combina muito com a ocasião e/ou a pessoa" checked={inRestriction === "Acho que comida de presente não combina muito com a ocasião e/ou a pessoa"} onChange={e=> { setInRestriction(e.target.value); setComplement("")}}/>
                        <span className="checkmark"></span>
                    </label>

                    {warning && <p className="validation-warning">{warning}</p>}

                </div>

                <div className="prev-for go-bit-down">

                    <button onClick={() => {
                        if(complement) {
                            const answer = `${inRestriction}& ${complement}`
                            setFoodRestriction(answer);
                        } else {
                            setFoodRestriction(inRestriction);
                        }
                        setPage(4);
                    }}>Anterior</button>
                    <button onClick={() => {
                        if(!inRestriction) {
                            setWarning("Por favor, selecione alguma das opções")
                        } else if(inRestriction === "tem alergia ou não come de jeito nenhum" && !complement) {
                            setWarning(`Por favor, preencha que alimento(s) ${giftedName} não pode comer`)
                        } else {
                            if(complement) {
                                const answer = `${inRestriction} & ${complement}`
                                setFoodRestriction(answer);
                            } else {
                                setFoodRestriction(inRestriction);
                            }
                            setPage(6);
                        }
                    }}>Próxima</button>
                </div>
            </div>
        </div>
    )
}

export default FoodRestrictionQ
