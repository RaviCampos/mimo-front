import { useState, useEffect } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function pickBaseState(introExtra, intimacy) {
    if(intimacy <= 5) {
        if(Number.isInteger(introExtra)) {
            return introExtra
        } else {
            return 5
        }
    } else {
        return introExtra
    }
}

function IntroExtraQ({tools: {introExtra, intimacy, setIntroExtra, setBDayPage, giftedName, bDayPage}}) {
    
    const [ inIntroExtra, setInIntroExtra ] = useState(pickBaseState(introExtra, intimacy))

    useEffect(() => {
        if(intimacy <= 5 ) {
            sliderbarInteractivity(inIntroExtra, setInIntroExtra)
        }
    }, [])

    if(intimacy <= 5 ) {
        return (
            <div className="intimacyQ all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="tinny-title">De acordo com o que você nos contou até agora, você e {giftedName} não são muito próximos, certos? Mas pensando em como {giftedName} age quando vocês se encontram, e em quão extrovertido(a) {giftedName} é marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
                        <p className="subtitle no-space-down">Sendo <span>1</span> “Sorria e acene” é o lema de {giftedName}, e <span>10</span> difícil pensar em um assunto no {giftedName} não tenha opinião ou em um momento em que não se escute sua voz</p>

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

                        <div className="prev-for small-space-top">
                            <button onClick={() => {
                                setIntroExtra(inIntroExtra);
                                setBDayPage(bDayPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                setIntroExtra(inIntroExtra);
                                setBDayPage(bDayPage + 1)
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">IntroExtra de múltipla escolha</h2>

                        <div className="prev-for small-space-top">
                            <button onClick={() => {
                                setIntroExtra(inIntroExtra);
                                setBDayPage(bDayPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                setIntroExtra(inIntroExtra);
                                setBDayPage(bDayPage + 1)
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroExtraQ
