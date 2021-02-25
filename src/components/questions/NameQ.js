import { useState } from "react";

function GifterNameQ({ tools: {setPage, setNames, names}}) {
    const [ gifter, setGifter ] = useState(names.gifter);
    const [ gifted, setGifted ] = useState(names.gifted)
    return (
        <div>
            <h1>{gifter}</h1>
            <h1>{gifted}</h1>
            <h2>Qual é o seu nome?</h2>
            <input type="text" value={gifter} onChange={e => setGifter(e.target.value)}/>
            
            <h2>E o nome da pessoa sortuda para quem você quer dar um presente?</h2>
            <input type="text" value={gifted} onChange={e => setGifted(e.target.value)}/>

            <button onClick={() => {
                setNames({gifter, gifted})
                setPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                setNames({gifter, gifted})
                setPage(2)
            }}>Próxima</button>
        </div>
    )
}

export default GifterNameQ;
