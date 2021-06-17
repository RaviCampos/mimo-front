import { useEffect, useState } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra) {
    if(intimacy > 5) {
        return (
            <div>
                <h2 className="small-title">Como você acha que serão os primeiros momentos de {giftedName} em seu novo espaço?</h2>

                <div>
                    <label className="radio-option long-option">
                        Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho
                        <input type="radio" name="coolness" id="coolness_cooler" checked={inIntroExtra === `Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho`} onChange={() => setInIntroExtra(`Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para {giftedName}
                        <input type="radio" name="coolness" id="coolness_pinterest" checked={inIntroExtra === `Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para ${giftedName}`} onChange={() => setInIntroExtra(`Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para ${giftedName}`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        {giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá
                        <input type="radio" name="coolness" id="coolness_kitchen" checked={inIntroExtra === `${giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá`} onChange={() => setInIntroExtra(`${giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option long-option">
                        Para {giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa
                        <input type="radio" name="coolness" id="coolness_norest" checked={inIntroExtra === `Para ${giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa`} onChange={() =>setInIntroExtra(`Para ${giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa`)} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    } else {
        return (
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

function IntroExtraQ({tools: { setTravelPage, introExtra, setIntroExtra, giftedName, intimacy, setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(pickInitialValue(intimacy, introExtra))

    useEffect(() => {
        if(intimacy <= 5) {
            sliderbarInteractivity(inIntroExtra, setInIntroExtra)
        }
    })

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>

                    {radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra)}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            if(intimacy > 5) {
                                setIntroExtra(inIntroExtra);
                                setTravelPage(4)
                            } else {
                                setIntroExtra(inIntroExtra);
                                setTravelPage(5)
                            }
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inIntroExtra) {
                                setWarning("Por favor, escolha uma das opções")
                            } else {
                                if(intimacy > 5) {
                                    setIntroExtra(inIntroExtra);
                                    setTravelPage(6)
                                } else {
                                    const travel = {
                                        ...futureTravel,
                                        introExtra: inIntroExtra
                                    }
                                    delete travel.hobbies
                                    setTravel(travel);
                                    setGoToOccasionLastQ(true)
                                    setSection("common")
                                    setPage(4);
                                }
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroExtraQ
