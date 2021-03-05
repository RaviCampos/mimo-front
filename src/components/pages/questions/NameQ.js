import { useState } from "react";

function GifterNameQ(
    { 
        tools: {
            setPage, 
            setGifterName,
            gifterName
        }
    }
) {
    
    const [ inGifter, setInGifter ] = useState(gifterName)

    return (
        <div>
            <h1>{inGifter}</h1>
            
            <h2>Qual é o seu nome?</h2>
            <input type="text" value={inGifter} onChange={e => setInGifter(e.target.value)}/>
            <br/>
            <button onClick={() => {
                setGifterName(inGifter)
                setPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                setGifterName(inGifter)
                setPage(2)
            }}>Próxima</button>
        </div>
    )
}

export default GifterNameQ;
