import { useEffect, useState } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function IntroExtraQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra ? introExtra : 1)

    useEffect(() => {
        sliderbarInteractivity(inIntroExtra, setInIntroExtra)
    }, [])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Pensando em como X age normalmente quando está com colegas de trabalho, seja em um Happy Hour, em uma reunião ou em um momento normal no escritório, e em quão extrovertido (a) X é marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
                    <p className="subtitle">Sendo <span>1</span>: "sorria e acene" é o lema de {giftedName}, e <span>10</span>: Díficil pensar em um assunto no {giftedName} não tenha opinião ou em um momento em que não se escute sua voz</p>

                    <span className="intimacy-num">{inIntroExtra}</span>
                    <div className="slider-house">
                        <div className="shade"></div>
                        <div className="slider">
                            <div className="slider-bar"></div>
                            <div className="slider-ball"></div>
                        </div>
                    </div>

                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setIntroExtra(inIntroExtra);
                            setWorkPage(5)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const work = {
                                ...futureWork,
                                introExtra: inIntroExtra
                            }
                            delete work.mood
                            delete work.hobbies
                            setWork(work);
                            setGoToOccasionLastQ(true)
                            setSection("common")
                            setPage(4);
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroExtraQ
