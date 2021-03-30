import { useState, useEffect } from "react"
function ReasonToGiftQ({tools: { setWeddingPage, setReasonToGift, reasonToGift }}) {

    const [ inReason, setInReason ] = useState(reasonToGift) 
    
    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inReason])

    return (
        <div>
            <h2>Desculpa perguntar, mas o que te fez querer presentear esse casal? (bodas é uma parada meio antiquada e não se costuma dar presentes a não ser que seja uma ocasião especifica)</h2>
            <div>
                <input type="radio" name="reasonTo" id="reasonTo_parents" checked={inReason === "Eles são meus pais e eu quero celebrar com eles esse amor"} onChange={() => setInReason("Eles são meus pais e eu quero celebrar com eles esse amor")}/>
                <label htmlFor="reasonTo_parents">Eles são meus pais e eu quero celebrar com eles esse amor</label>
            </div>
            <div>
                <input type="radio" name="reasonTo" id="reasonTo_family" checked={inReason === "São meus familiares que vão celebrar a data e o presente me parece apropriado"} onChange={() => setInReason("São meus familiares que vão celebrar a data e o presente me parece apropriado")}/>
                <label htmlFor="reasonTo_family">São meus familiares que vão celebrar a data e o presente me parece apropriado</label>
            </div>
            <div>
                <input type="radio" name="reasonTo" id="reasonTo_friends" checked={inReason === "São amigos queridos que estão sempre comigo cuja história eu acho linda e gostaria de homenagear e aproveitar para agradecer pela amizade"} onChange={() => setInReason("São amigos queridos que estão sempre comigo cuja história eu acho linda e gostaria de homenagear e aproveitar para agradecer pela amizade")}/>
                <label htmlFor="reasonTo_friends">São amigos queridos que estão sempre comigo cuja história eu acho linda e gostaria de homenagear e aproveitar para agradecer pela amizade</label>
            </div>
            <div>
                <input type="radio" name="reasonTo" id="reasonTo_party" checked={inReason === "São amigos que estão celebrando a data com uma festa ou reunião e eu não acho de bom tom chegar de mãos vazias"} onChange={() => setInReason("São amigos que estão celebrando a data com uma festa ou reunião e eu não acho de bom tom chegar de mãos vazias")}/>
                <label htmlFor="reasonTo_party">São amigos que estão celebrando a data com uma festa ou reunião e eu não acho de bom tom chegar de mãos vazias</label>
            </div>
            <div>
                <input type="radio" name="reasonTo" id="reasonTo_known" checked={inReason === "São conhecidos e gostaria de lhes dar um presente"} onChange={() => setInReason("São conhecidos e gostaria de lhes dar um presente")}/>
                <label htmlFor="reasonTo_known">São conhecidos e gostaria de lhes dar um presente</label>
            </div>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setReasonToGift(inReason)
                setWeddingPage(4)
            }}>Anterior</button>
            <button onClick={() => {
                if(!inReason) {
                    setWarning(`Por favor, escolha uma das opções` )
                }  else {
                    setReasonToGift(inReason)
                    setWeddingPage(6)
                }
            }}>Próxima</button>

        </div>
    )
}

export default ReasonToGiftQ
