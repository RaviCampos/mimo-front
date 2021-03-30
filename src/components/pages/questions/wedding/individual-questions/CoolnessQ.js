import { useState, useEffect } from "react"

function CoolnessQ({tools: { setWeddingPage, setCoolness, gifterInCouple, coolness,  setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, }}) {
    const [ inCoolness, setInCoolness ] = useState(coolness ? coolness : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])


    if(gifterInCouple) {
        return (
            <div>
                <h2>Coolness in couple</h2>
                
               

                {warning && <p className="validation-warning">{warning}</p>}

                <button onClick={() => {
                    setCoolness(inCoolness)
                    setWeddingPage(6)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inCoolness) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        const wed = {
                            ...futureWedding,
                            gifterInCouple: "Sim",
                            coolness: inCoolness
                        }
                        delete wed.reasonToGift

                        setWedding(wed);
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    // }
                }}>Próxima</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>coolness outside couple</h2>
                <button onClick={() => {
                    setCoolness(inCoolness)
                    setWeddingPage(5)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inCoolness) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setCoolness(inCoolness)
                        setWeddingPage(7)
                    // }
                }}>Próxima</button>
            </div>
        )
    }
}

export default CoolnessQ
