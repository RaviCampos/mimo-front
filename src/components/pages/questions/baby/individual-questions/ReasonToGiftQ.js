import { useState, useEffect } from "react"
function ReasonToGiftQ({tools: { setBabyPage, setReasonToGift, reasonToGift, name }}) {

    const [ inReason, setInReason ] = useState(reasonToGift) 
    
    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [inReason])

    return (
        <div className="all-margin small-space-top">
            <div className="all-center">
                <div>
                    <h2 className="small-title no-space-top">Posso imaginar o tamanho da sua felicidade e ficamos contentes em fazer parte desse momento tão importante para vocês! Me conta, qual é a circunstância do presente?</h2>

                    <label className="radio-option">
                        Acabei de descobrir que vamos ter um filho e quero contar para {name}
                        <input type="radio" name="reasonTo" id="reasonTo_tell" checked={inReason === `Acabei de descobrir que vamos ter um filho e quero contar para ${name}`} onChange={() => setInReason(`Acabei de descobrir que vamos ter um filho e quero contar para ${name}`)}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="radio-option long-option">
                        {name} acabou de me contar que vamos ter um filho e quero marcar a esse momento lindo com um presente
                        <input type="radio" name="reasonTo" id="reasonTo_justFindOut" checked={inReason === `${name} acabou de me contar que vamos ter um filho e quero marcar a esse momento lindo com um presente`} onChange={() => setInReason(`${name} acabou de me contar que vamos ter um filho e quero marcar a esse momento lindo com um presente`)}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="radio-option long-option">
                        Estamos esperando um filho juntos e apesar de não ser uma data ou motivo específico quero celebrar esse momento com {name}
                        <input type="radio" name="reasonTo" id="reasonTo_waiting" checked={inReason === `Estamos esperando um filho juntos e apesar de não ser uma data ou motivo específico quero celebrar esse momento com ${name}`} onChange={() => setInReason(`Estamos esperando um filho juntos e apesar de não ser uma data ou motivo específico quero celebrar esse momento com ${name}`)}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="radio-option long-option">
                        Nosso filho está para nascer e quero celebrar esse momento                    
                        <input type="radio" name="reasonTo" id="reasonTo_willBeBorn" checked={inReason === "Nosso filho está para nascer e quero celebrar esse momento"} onChange={() => setInReason("Nosso filho está para nascer e quero celebrar esse momento")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="radio-option">
                        Nosso filho acaba de nascer e quero celebrar esse momento
                        <input type="radio" name="reasonTo" id="reasonTo_justBorn" checked={inReason === "Nosso filho acaba de nascer e quero celebrar esse momento"} onChange={() => setInReason("Nosso filho acaba de nascer e quero celebrar esse momento")}/>
                        <span className="checkmark"></span>
                    </label>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            setReasonToGift(inReason)
                            setBabyPage(0)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inReason) {
                                setWarning(`Por favor, escolha uma das opções` )
                            }  else {
                                setReasonToGift(inReason)
                                setBabyPage(2)
                            }
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReasonToGiftQ
