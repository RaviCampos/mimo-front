import { useEffect, useState } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function radioOptions(intimacy, giftedName, destiny, inIntroExtra, setInIntroExtra) {
    if(intimacy > 5) {
        return (
            <div>
                <h2 className="small-title">Pensando em como {giftedName} age quando vocês se encontram, e em quão extrovertido(a) {giftedName} é marque a opção que mais combina com ele(a):</h2>

                <div>
                    <label className="radio-option long-option">
                        {giftedName} faz amigos com muita facilidade, com certeza vai voltar de {destiny} com um lugar para ficar da próxima vez
                        <input type="radio" name="introExtra" id="introExtra_friendly" checked={inIntroExtra === `${giftedName} faz amigos com muita facilidade, com certeza vai voltar de ${destiny} com um lugar para ficar dá próxima vez`} onChange={() => setInIntroExtra(`${giftedName} faz amigos com muita facilidade, com certeza vai voltar de ${destiny} com um lugar para ficar dá próxima vez`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        {giftedName} não fala muito e é por isso que eu sei que ele(a) está empolgado com essa viagem, não cala a boca ou muda de assunto desde que começou a planejá-la
                        <input type="radio" name="introExtra" id="introExtra_laconic" checked={inIntroExtra === `${giftedName} não fala muito e é por isso que eu sei que ele(a) está empolgado com essa viagem, não cala a boca ou muda de assunto desde que começou a planejá-la`} onChange={() => setInIntroExtra(`${giftedName} não fala muito e é por isso que eu sei que ele(a) está empolgado com essa viagem, não cala a boca ou muda de assunto desde que começou a planejá-la`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        {giftedName} é tímido(a), não pediria ajuda nem o avião estivesse caindo. Mas são muitos próximos e gosto de lhe lembrar que estamos juntos nessa
                        <input type="radio" name="introExtra" id="introExtra_shy" checked={inIntroExtra === `${giftedName} é tímido(a), não pediria ajuda nem o avião estivesse caindo. Mas são muitos próximos e gosto de lhe lembrar que estamos juntos nessa`} onChange={() => setInIntroExtra(`${giftedName} é tímido(a), não pediria ajuda nem o avião estivesse caindo. Mas são muitos próximos e gosto de lhe lembrar que estamos juntos nessa`)} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="small-title">De acordo com o que você nos contou até agora, você e {giftedName} não são muito próximos, certo? Mas pensando em como {giftedName} age quando vocês se encontram e em quão extrovertido(a) {giftedName} é, marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
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

function IntroExtraQ({tools: { travelPage, setTravelPage, introExtra, setIntroExtra, giftedName, intimacy, destiny, setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ }}) {
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

                    {radioOptions(intimacy, giftedName, destiny, inIntroExtra, setInIntroExtra)}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            // if(intimacy > 5) {
                            //     setIntroExtra(inIntroExtra);
                            //     setTravelPage(4)
                            // } else {
                                setIntroExtra(inIntroExtra);
                                setTravelPage(travelPage - 1)
                            // }
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inIntroExtra) {
                                setWarning("Por favor, escolha uma das opções")
                            } else {
                                if(intimacy > 5) {
                                    setIntroExtra(inIntroExtra);
                                    setTravelPage(travelPage + 1)
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
