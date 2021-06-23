import { useEffect, useState } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function makeQuestion(intimacy, inIntroExtra, setInIntroExtra, giftedName) {
    if(intimacy > 5) {
        return (
            <div>
                <h2 className="small-title">É sábado à noite e o mundo está 100% normal, nada de pandemia, onde eu poderia encontrar você e a pessoa a ser presenteada juntos? </h2>

                <label className="radio-option small-radio">
                    <input type="radio" name="relation" id="introextra-none_music" checked={ inIntroExtra === "Em bar com música ao vivo e bons drinks!"} onChange={() => setInIntroExtra("Em bar com música ao vivo e bons drinks!")}/>
                    Em bar com música ao vivo e bons drinks!
                    <span className="checkmark"></span>
                </label>

                <label className="radio-option small-radio long-option">
                    <input type="radio" name="relation" id="introextra-none_movie" checked={ inIntroExtra === "Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood"} onChange={() => setInIntroExtra("Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood")}/>
                    Em casa escolhendo o que assistir na Netflix e esperando uma comidinha que pedimos no Ifood
                    <span className="checkmark"></span>
                </label>

                <label className="radio-option small-radio long-option">
                    <input type="radio" name="relation" id="introextra-none_shopping"  checked={ inIntroExtra === "No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos."} onChange={() => setInIntroExtra("No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos.")}/>
                    No shopping com certeza! Talvez a gente vá ao cinema, talvez a gente compre uma blusinha, não sabemos ainda, mas o shopping nos dá todas as possibilidades que gostamos
                    <span className="checkmark"></span>
                </label>

                <label className="radio-option small-radio long-option">
                    <input type="radio" name="relation" id="introextra-none_different" checked={ inIntroExtra === "Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo."} onChange={() => setInIntroExtra("Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo.")}/>
                    Gostamos de programas diferentes, mas continuamos nos falando por WhatsApp e mandando fotos de tudo que estamos fazendo
                    <span className="checkmark"></span>
                </label>

                <label className="radio-option small-radio long-option">
                    <input type="radio" name="relation" id="introextra-none_nope" checked={ inIntroExtra === "Não costumamos fazer nada juntos no final de semana"} onChange={() => setInIntroExtra("Não costumamos fazer nada juntos no final de semana")}/>
                    Não costumamos fazer nada juntos no final de semana
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    } else {
        return(
            <div>
                <h2 className="small-title">De acordo com o que você nos contou até agora, você e {giftedName} não são muito próximos, certos? Mas pensando em como {giftedName} age quando vocês se encontram e em quão extrovertido(a) {giftedName} é, marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
                <p className="subtitle no-space-down">Sendo 1 "Sorria e acene é o lema de {giftedName}" e 10 "Díficil pensar em um assunto no {giftedName} não tenha opinião ou em um momento em que não se escute sua voz"</p>

                <span className="intimacy-num">{inIntroExtra}</span>
                {/* <span>1</span> */}
                <div className="slider-house">
                    <div className="shade"></div>
                    <div className="slider">
                        <div className="slider-bar"></div>
                        <div className="slider-ball"></div>
                    </div>
                </div>
                {/* <span>10</span> */}
                
                <br/>
            </div>
        )
    }  
}

function pickInitialValue(intimacy, introExtra) {
    if(intimacy <= 5) {
        if(Number.isInteger(introExtra)) {
            return introExtra
        } else {
            return 5
        }
    } else {
        if(Number.isInteger(introExtra)) {
            return ""
        } else {
            return introExtra
        }
    }
}

function IntroExtraQ({tools: { setNonePage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(pickInitialValue(intimacy, introExtra))

    useEffect(() => {
        if(intimacy <= 5) {
            sliderbarInteractivity(inIntroExtra, setInIntroExtra)
        }
    }, [])

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    {makeQuestion(intimacy, inIntroExtra, setInIntroExtra, giftedName)}
            
                    {warning && <p className="validation-warning">{warning}</p>}
        
                    <div className="prev-for">
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
                </div>
            </div>
        </div>
    )
}

export default IntroExtraQ
