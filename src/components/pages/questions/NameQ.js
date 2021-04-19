import { useState, useEffect } from "react";

function GifterNameQ({ tools: { setPage, setGifterName, gifterName }}) {
    
    const [ inGifter, setInGifter ] = useState(gifterName);

    const [ showWarning, setShowWarning ] = useState(false);

    useEffect(() => {
        if(inGifter) {
            setShowWarning(false);
        }
    }, [inGifter])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Qual é o seu nome?</h2>
                    <input className="bit-down" type="text" value={inGifter} onChange={e => setInGifter(e.target.value)} placeholder="nome" autoComplete="off"/>
                    {showWarning && <p className="validation-warning">preencha o nome para seguir em frente</p>}
                    
                    <br/>

                    <div className="prev-for go-down">
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
                </div>
            </div>
        </div>
    )
}

export default GifterNameQ;
