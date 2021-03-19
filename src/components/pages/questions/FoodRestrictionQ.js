import { useState } from "react"

function FoodRestrictionQ({tools: {setPage, setFoodRestriction, foodRestriction, giftedName}}) {

    const [ inRestriction, setInRestriction ] = useState(foodRestriction ? foodRestriction : "não que eu saiba" )

    return (
        <div>
            <h2>Falar algo como: A gente as vezes gosta de dar gostosuras comestíveis nos nossos presentes, mas a gente sabe que as comidinhas não funcionam para todas as ocasiões</h2>
            <h2>Só por via das dúvidas você sabe se {giftedName} tem alguma alergia ou restrição alimentar?</h2>
            <div>
                <div>
                    <input type="radio" name="food" id="food_nop" value="não que eu saiba" checked={inRestriction === "não que eu saiba"} onChange={e=> setInRestriction(e.target.value)}/>
                    <label htmlFor="food_nop">Não que eu saiba</label>
                </div>
                <div>
                    <input type="radio" name="food" id="food_diet" value="faz dieta e por isso não come algumas coisas" checked={inRestriction === "faz dieta e por isso não come algumas coisas"} onChange={e=> setInRestriction(e.target.value)}/>
                    <label htmlFor="food_diet">{giftedName} faz dieta e por isso não come algumas coisas</label>
                </div>
                <div>
                    <input type="radio" name="food" id="food_alergy" value="tem alergia ou não come de jeito nenhum" checked={inRestriction === "tem alergia ou não come de jeito nenhum"} onChange={e=> setInRestriction(e.target.value)}/>
                    <label htmlFor="food_alergy">Sim, {giftedName} tem alergia ou não come de jeito nenhum (espaço para escrever)</label>
                    <input type="text"/>
                </div>
                <div>
                    <input type="radio" name="food" id="food_dontwant" value="Acho que comida de presente não combina muito com a ocasião e/ou a pessoa" checked={inRestriction === "Acho que comida de presente não combina muito com a ocasião e/ou a pessoa"} onChange={e=> setInRestriction(e.target.value)}/>
                    <label htmlFor="food_dontwant">Não acho que vem ao caso. Acho que comida de presente não combina muito com a ocasião e/ou a pessoa</label>
                </div>
            </div>
            <button onClick={() => {
                setFoodRestriction(inRestriction);
                setPage(4);
            }}>Anterior</button>
            <button onClick={() => {
                setFoodRestriction(inRestriction);
                setPage(6);
            }}>Próxima</button>
        </div>
    )
}

export default FoodRestrictionQ
