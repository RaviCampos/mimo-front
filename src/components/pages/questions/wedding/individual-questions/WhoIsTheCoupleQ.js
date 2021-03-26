import { useState } from "react"

function WhoIsTheCoupleQ({ tools: { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, whoIsTheCouple, setWhoIsTheCouple }}) {

    const [ inCouple, setInCouple ] = useState(whoIsTheCouple ? whoIsTheCouple : "")

    return (
        <div>
            <h2>Me tira uma dúvida? Vocês são um casal e é aniversário de vocês ou você está presenteando um casal amigo por um marco no relacionamento deles?</h2>

            <div>
                <label htmlFor="couple_in">Eu faço parte do casal, vamos comemorar nossa união</label>
                <input type="radio" name="couple" value="presenteado é do casal" id="couple_in" checked={inCouple === "presenteado é do casal"} onChange={e => setInCouple(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="couple_out">Conheço esse casal que está comemorando aniversário em seu relacionamento e não posso deixar de presenteá-los</label>
                <input type="radio" name="couple" value="presenteado não é do casal" id="couple_out" checked={inCouple === "presenteado não é do casal"} onChange={e => setInCouple(e.target.value)}/>
            </div>

            <button onClick={() => {
                const wed = {
                    ...futureWedding,
                    whoIsTheCouple: inCouple
                }
                setWedding(wed);
                setGoToOccasionLastQ(false)
                setSection("common")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                setWeddingPage(1)
                setWhoIsTheCouple(inCouple);
            }}>Próxima</button>

        </div>
    )
}

export default WhoIsTheCoupleQ
