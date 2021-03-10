import { useState, useEffect } from "react";

function GifterNameQ({ tools: { setPage, setGifterName, gifterName }}) {
    
    const [ inGifter, setInGifter ] = useState(gifterName);

    const [ showWarning, setShowWarning ] = useState(false);

    useEffect(() => {
        if(inGifter) {
            setShowWarning(false);
        }
    })

    return (
        <div>
            <h1>{inGifter}</h1>
            
            <h2>Qual é o seu nome?</h2>
            <input type="text" value={inGifter} onChange={e => setInGifter(e.target.value)}/>
            {showWarning && <p className="validation-warning">preencha o nome para seguir em frente</p>}
            
            <br/>
            <button onClick={() => {
                // if(inGifter) {
                    setGifterName(inGifter)
                    setPage(0)
                // } else {
                //     setShowWarning(true);
                // }
            }}>Anterior</button>
            <button onClick={() => {
                if(inGifter) {
                    setGifterName(inGifter)
                    setPage(2)    
                } else {
                    setShowWarning(true)
                }
            }}>Próxima</button>
        </div>
    )
}

export default GifterNameQ;
