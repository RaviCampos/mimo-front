import { useState, useEffect } from "react"

function CoolnessQ({tools: { setWeddingPage, setCoolness, gifterInCouple, coolness }}) {
    const [ inCoolness, setInCoolness ] = useState(coolness ? coolness : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])


    if(gifterInCouple) {
        return (
            <div>
                <h2>CommonHobbies</h2>
                
               

                {warning && <p className="validation-warning">{warning}</p>}

                <button onClick={() => {
                    setCoolness(inCoolness)
                    setWeddingPage(6)
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
    } else {
        return (
            <div>
                <h2>CommonHobbies</h2>
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
