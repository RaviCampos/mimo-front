import { useState, useEffect, useReducer } from "react"
import { init, reducer, checkboxes, sliderbarInteractivity } from "../../utils/utils"

const baseState = (giftedName) => ({
    party: {
        value: `${giftedName} é pessoa responsável por organizar todas festas de aniversário e happy hours, é a(o) relações púbicas do casal`,
        checked: false
    },
    purse: {
        value: `${giftedName} é pior que mãe, tem te tudo em sua bolsa da Hermione e se não tiver sabe com quem conseguir`,
        checked: false
    },
    novela: {
        value: `Perdeu a novela ontem? ${giftedName} te conta tudo`,
        checked: false
    },
    series: {
        value: `Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a mais nova série imperdível`,
        checked: false
    },
    gadget: {
        value: `Quando descubro uma ferramenta ou gadget novo, certeza que ${giftedName} já está usando há duas semanas e me passa todas as dicas`,
        checked: false
    },
    unknown: {
        value: `${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`,
        checked: false
    },
    advice: {
        value: `Dar conselhos é praticamente o segundo emprego de ${giftedName}`,
        checked: false
    },
    sports: {
        value: `${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`,
        checked: false
    }
})

function CoolnessQ({tools: { setWeddingPage, weddingPage, setCoolness, gifterInCouple, coolness, giftedName, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ  }}) {
    const [ inCoolnessCheckbox, dispatch ] = useReducer(reducer, {prevStateFromFatherComponent: coolness, baseState: baseState(giftedName)}, init)
    
    const [ inCoolnessSlider, setInCoolnessSlider ] = useState(typeof coolness == "number" ? coolness : 5)

    useEffect(() => {
        if(!gifterInCouple) {
            sliderbarInteractivity(inCoolnessSlider, setInCoolnessSlider)
        }
    }, [])

    const [ nameA, nameB ] = giftedName.split(" -- ")
        
    if(gifterInCouple) {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2>Para conhecermos {giftedName} um pouco melhor, marque todas as opções abaixo em que você acredita que {giftedName} se encaixa</h2>
                        <div>
                            {checkboxes("coolness", inCoolnessCheckbox, dispatch)}
                        </div>
                        <div className="prev-for">
                            <button onClick={() => {
                                setCoolness(inCoolnessCheckbox)
                                setWeddingPage( weddingPage - 1)
                            }}>Anterior</button>
                            <button onClick={() => {
                                const wed = {
                                    ...futureWedding,
                                    gifterInCouple: "Sim",
                                    coolness: inCoolnessCheckbox
                                }
                                delete wed.reasonToGift
                                setWedding(wed);
                                setGoToOccasionLastQ(true)
                                setSection("common")
                                setPage(4);
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="intimacyQ all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Em uma escala de 1 a 10, sendo 1 super careta e 10 o casal mais descolado que você conhece, como você classificaria {nameA} e {nameB}?</h2>

                        <span className="intimacy-num">{inCoolnessSlider}</span>
                        {/* <span>1</span> */}
                        <div className="slider-house">
                            <div className="shade" />
                            <div className="slider">
                                <div className="slider-bar" />
                                <div className="slider-ball" />
                            </div>
                        </div>
                        {/* <span>10</span> */}
                        
                        <br/>
                        <div className="prev-for">
                            <button onClick={() => {
                                setCoolness(inCoolnessSlider)
                                setWeddingPage(5)
                            }}>Anterior</button>
                            <button onClick={() => {
                                setCoolness(inCoolnessSlider)
                                setWeddingPage(7)
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoolnessQ
