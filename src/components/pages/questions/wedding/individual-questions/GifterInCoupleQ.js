import { useEffect, useState } from "react"

function GifterInCoupleQ({ tools: { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, gifterInCouple, setGifterInCouple }}) {

    const [ inCouple, setInCouple ] = useState(gifterInCouple ? gifterInCouple : gifterInCouple === "" ? "" : false)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCouple])

    return (
        <div>
            <h2>Me tira uma dúvida? Vocês são um casal e é aniversário de vocês ou você está presenteando um casal amigo por um marco no relacionamento deles?</h2>

            <div>
                <input type="radio" name="couple" id="couple_in" checked={inCouple === true} onChange={e => setInCouple(true)}/>
                <label htmlFor="couple_in">Eu faço parte do casal, vamos comemorar nossa união</label>
            </div>
            <div>
                <input type="radio" name="couple" id="couple_out" checked={inCouple === false} onChange={e => setInCouple(false)}/>
                <label htmlFor="couple_out">Conheço esse casal que está comemorando aniversário em seu relacionamento e não posso deixar de presenteá-los</label>
            </div>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                const isInCouple =  inCouple ? "Sim" : "Não"
                const wed = {
                    ...futureWedding,
                    gifterInCouple: isInCouple
                }
                setWedding(wed);
                setGoToOccasionLastQ(false)
                setSection("common")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                if(inCouple) {
                    setWeddingPage(1)
                    setGifterInCouple(inCouple);
                } else {
                    setWarning("Por favor, selecione uma das opções")
                }
            }}>Próxima</button>

        </div>
    )
}

export default GifterInCoupleQ
