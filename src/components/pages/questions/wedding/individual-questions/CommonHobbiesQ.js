import { useState, useEffect } from "react"

function CommonHobbiesQ({tools: { setWeddingPage, setCommonHobbies, commonHobbies }}) {

    const [ inHobbies, setInHobbies ] = useState(commonHobbies ? commonHobbies : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inHobbies])

    return (
        <div>
            <h2>CommonHobbies</h2>
            
            

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setCommonHobbies(inHobbies)
                setWeddingPage(5)
            }}>Anterior</button>
            <button onClick={() => {
                // if(!inHobbies) {
                //     setWarning(`Por favor, escolha uma das opções` )
                // }  else {
                    setCommonHobbies(inHobbies)
                    setWeddingPage(7)
                // }
            }}>Próxima</button>
        </div>
    )

}

export default CommonHobbiesQ
