import { useState } from "react"

function GiftedNameQ({tools: { setPage, setGiftedName, giftedName }}) {

    const [ inGifted, setInGifted ] = useState(giftedName);    
    
    return (
        <div>
            <h1>{inGifted}</h1>
            
            <h2>Qual é o nome da pessoa que vai ganhar o presente?</h2>
            <input type="text" value={inGifted} onChange={e => setInGifted(e.target.value)}/>
            <br/>
            <button onClick={() => {
                setGiftedName(inGifted)
                setPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                setGiftedName(inGifted)
                setPage(1)
            }}>Próxima</button>
        </div>
    )
}

export default GiftedNameQ
