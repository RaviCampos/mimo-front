import { useEffect, useState } from "react";

function IntroExtraQ({tools: { setNonePage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])

    if(intimacy > 5) {
        return (
            <div>
    
                <h2>É sábado à noite e o mundo está 100% normal, nada de pandemia, onde eu poderia encontrar você e a pessoa a ser presenteada juntos? </h2>

                <div>
                    <input type="radio" name="relation" id="introextra-none_music" checked={ inIntroExtra === "Em bar com música ao vivo e bons drinks!"} onChange={() => setInIntroExtra("Em bar com música ao vivo e bons drinks!")}/>
                    <label htmlFor="introextra-none_music">Em bar com música ao vivo e bons drinks!</label>
                </div>

                <div>
                    <input type="radio" name="relation" id="introextra-none_movie" checked={ inIntroExtra === "Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood"} onChange={() => setInIntroExtra("Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood")}/>
                    <label htmlFor="introextra-none_movie">Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood</label>
                </div>

                <div>
                    <input type="radio" name="relation" id="introextra-none_shopping"  checked={ inIntroExtra === "No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos."} onChange={() => setInIntroExtra("No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos.")}/>
                    <label htmlFor="introextra-none_shopping">No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos.</label>
                </div>

                <div>
                    <input type="radio" name="relation" id="introextra-none_different" checked={ inIntroExtra === "Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo."} onChange={() => setInIntroExtra("Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo.")}/>
                    <label htmlFor="introextra-none_different">Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo.</label>
                </div>

                <div>
                    <input type="radio" name="relation" id="introextra-none_nope" checked={ inIntroExtra === "Não costumamos fazer nada juntos no final de semana"} onChange={() => setInIntroExtra("Não costumamos fazer nada juntos no final de semana")}/>
                    <label htmlFor="introextra-none_nope">Não costumamos fazer nada juntos no final de semana</label>
                </div>
        
                {warning && <p className="validation-warning">{warning}</p>}
    
                <button onClick={() => {
                    setIntroExtra(inIntroExtra);
                    setNonePage(3)
                }}>Anterior</button>
                <button onClick={() => {
                    if(!inIntroExtra) {
                        setWarning("Por favor, selecione uma das opções")
                    } else {
                        setIntroExtra(inIntroExtra);
                        setNonePage(5)
                    }
                }}>Próxima</button>
            </div>
        )
    } else {

        return (
            <div>
    
                <h2>Intro Extra</h2>
    
                {warning && <p className="validation-warning">{warning}</p>}
    
                <button onClick={() => {
                    setIntroExtra(inIntroExtra);
                    setNonePage(3)
                }}>Anterior</button>
                <button onClick={() => {
                    setIntroExtra(inIntroExtra);
                    setNonePage(5)
                }}>Próxima</button>
            </div>
        )
    }

}

export default IntroExtraQ
