import { useState, useEffect } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function IntimacyQ({tools: { setTravelPage, intimacy, setIntimacy, giftedName }}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : 5);
    
    useEffect(() => {
        sliderbarInteractivity(inIntimacy, setInIntimacy)
    }, [])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Agora me conta uma coisa, só entre a gente, o quão bem você conhece {giftedName}</h2>
                    <p className="subtitle no-space-down">Sendo <span>1</span> não conheço muito bem {giftedName}, e <span>10</span> conheço tudo de {giftedName}! Se bobiar consigo até ler a mente dessa pessoa</p>

                    <span className="intimacy-num">{inIntimacy}</span>
                    <div className="slider-house">
                        <div className="shade"></div>
                        <div className="slider">
                            <div className="slider-bar"></div>
                            <div className="slider-ball"></div>
                        </div>
                    </div>
                    <br/>
                    
                    <br/>

                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setIntimacy(inIntimacy);
                            setTravelPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setIntimacy(inIntimacy);
                            setTravelPage(5)
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IntimacyQ