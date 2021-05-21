import { useState, useEffect } from "react"

function ChildNameQ({tools: { setBabyPage, setChildName, childName }}) {

    const [ name, setName ] = useState(childName ? childName : "")

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [name])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">E qual é o nome da criança que estamos celebrando?</h2>

                    <div>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </div>

                    { warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            setChildName(name)
                            setBabyPage(4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!name) {
                                setWarning("Por favor, preencha o campo")
                            } else {
                                setChildName(name)
                                setBabyPage(6)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChildNameQ
