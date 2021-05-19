import { useState, useEffect } from "react";

function IsBorn({tools: { setBabyPage, setIsBorn, isBorn, name, parentType }}) {

    const [ inIsBorn, setInIsBorn ] = useState(isBorn)

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [inIsBorn])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">
                        {
                            parentType === "Um casal querido que está esperando um filho" ?
                            `Uma criança é uma esperada e celebrada do momento da descoberta da gravidez até depois de seu nascimento. O filho de ${name.nameA} e ${name.nameB} já nasceu ou ainda está sendo aguardado?`
                            :
                            `Uma criança é uma esperada e celebrada do momento da descoberta da gravidez até depois de seu nascimento. O filho de ${name} já nasceu ou ainda está sendo aguardado?`
                        }
                    </h2>

                    <div>
                        
                        <label className="radio-option">
                            Já nasceu
                            <input type="radio" name="isBorn" id="isBorne_yes" value="Já nasceu" checked={ inIsBorn === "Já nasceu"} onChange={e => setInIsBorn(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        
                        <label className="radio-option">
                            Ainda estamos aguardando sua chegada
                            <input type="radio" name="isBorn" id="isBorne_no" value="Ainda estamos aguardando sua chegada" checked={ inIsBorn === "Ainda estamos aguardando sua chegada"} onChange={e => setInIsBorn(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>

                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setIsBorn(inIsBorn)
                            setBabyPage(2)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inIsBorn) {
                                setWarning("Por favor, escolha uma das opções acima");
                            } else {
                                setIsBorn(inIsBorn)
                                setBabyPage(4)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IsBorn