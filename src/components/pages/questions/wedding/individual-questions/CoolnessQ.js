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

function CoolnessQ({tools: { setWeddingPage, setCoolness, gifterInCouple, coolness, giftedName, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ  }}) {
    const [ inCoolnessCheckbox, dispatch ] = useReducer(reducer, {prevStateFromFatherComponent: coolness, baseState: baseState(giftedName)}, init)
    
    const [ inCoolness, setInCoolness ] = useState(coolness ? coolness : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])


    if(gifterInCouple) {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2>Coolness in couple</h2>
                        <div>
                            {checkboxes("coolness", inCoolnessCheckbox, dispatch)}
                        </div>
                        <div className="prev-for">
                            <button onClick={() => {
                                setCoolness(inCoolnessCheckbox)
                                setWeddingPage(6)
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
            <div>
                <h2>coolness outside couple</h2>
                <button onClick={() => {
                    setCoolness(inCoolness)
                    setWeddingPage(5)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inCoolness) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setCoolness(inCoolness)
                        setWeddingPage(7)
                    // }
                }}>Próxima</button>
            </div>
        )
    }
}

export default CoolnessQ
