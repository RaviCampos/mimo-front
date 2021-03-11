import { useState } from "react"

function GiftedNameQ({tools: {setPage, setBDayPage, setGiftedName, giftedName, setSection, futureBDay, setBDay}}) {

    const [ inGifted, setInGifted ] = useState(giftedName ? giftedName : "");    

    return (
        <div>
            <h1>{inGifted}</h1>
            
            <h2>Qual é o nome da pessoa que vai ganhar o presente?</h2>
            <input type="text" value={inGifted} onChange={e => setInGifted(e.target.value)}/>
            <br/>
            <button onClick={() => {
                const bday = {
                    ...futureBDay,
                    giftedName: inGifted
                }
                setBDay(bday)
                setSection("start")
                setPage(2);
            }}>Anterior</button>
            <button onClick={() => {
                setGiftedName(inGifted)
                setBDayPage(1)
            }}>Próxima</button>
        </div>
    )
}

export default GiftedNameQ
