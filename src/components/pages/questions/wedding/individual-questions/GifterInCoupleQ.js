import { useEffect, useState } from "react"

function GifterInCoupleQ({ tools: { setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, setWeddingPage, weddingPage, gifterInCouple, setGifterInCouple }}) {

    const [ inCouple, setInCouple ] = useState(gifterInCouple === undefined ? "" : gifterInCouple)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCouple])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Me tira uma dúvida? Vocês são um casal e é aniversário de vocês ou você está presenteando um casal amigo por um marco no relacionamento deles?</h2>

                    <label className="radio-option">
                        Eu faço parte do casal, vamos comemorar nossa união
                        <input type="radio" name="couple" id="couple_in" checked={inCouple === true} onChange={e => setInCouple(true)}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        Conheço esse casal que está comemorando aniversário em seu relacionamento e não posso deixar de presenteá-los
                        <input type="radio" name="couple" id="couple_out" checked={inCouple === false} onChange={e => setInCouple(false)}/>
                        <span className="checkmark"></span>
                    </label>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            const isInCouple =  inCouple ? "Sim" : "Não"
                            const wed = {
                                ...futureWedding,
                                gifterInCouple: isInCouple
                            }
                            if(inCouple) {
                                delete wed.reasonToGift
                            } else {
                                delete wed.commonHobbies
                            }
                            setWedding(wed);
                            setGoToOccasionLastQ(false)
                            setSection("common")
                            setPage(2);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inCouple !== "") {
                                setGifterInCouple(inCouple);
                                setWeddingPage( weddingPage + 1)
                            } else {
                                setWarning("Por favor, selecione uma das opções")
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GifterInCoupleQ
