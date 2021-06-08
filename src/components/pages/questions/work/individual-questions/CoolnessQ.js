import { useEffect, useReducer, useState } from "react";

function coolReducer(state, action) {
    return ({
        ...state,
        [action.type]: !state[action.type]
    })
}

function makeCoolStr(obj) {
    let finalStr = ""
    for(const key in obj) {
        if(obj[key]) {
            finalStr += !finalStr ? key : ("/ " + key)
        }
    }
    return finalStr;
}

function CoolnessQ({tools: { setWorkPage, coolness, setCoolness, giftedName, intimacy }}) {
    function init(prevCoolness) {
        const initialState = {
            [`A pessoa responsável por organizar todas festas de aniversário e happy hours`]: false,
            [`Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se ${giftedName} não tiver sabe com quem conseguir`]: false,        
            [`Perdeu a novela ontem? ${giftedName} te conta tudo`]: false,
            [`Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a melhor série imperdível`]: false,        
            [`Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? ${giftedName} já está usando há duas semanas e te passa todas as dicas`]: false,        
            [`${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`]: false,        
            [`Dar conselhos é praticamente o seu segundo emprego`]: false,        
            [`${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`]: false
        }
        if(!prevCoolness) return initialState;

        const coolArr = coolness.split("/ ");
        for (const phrase of coolArr) {
            initialState[phrase] = true
        }
        return initialState
    }
    
    const [ inCoolness, dispatch ] = useReducer(coolReducer, coolness, init)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
        console.log(inCoolness)
    }, [inCoolness])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Passamos a maior parte da nossa vida no trabalho e com o tempo passamos a desenvolver certos papéis que vão além da descrição do nosso cargo</h2>
                    <p className="subtitle">marque todas as opções em que você achar que {giftedName} se encaixa</p>
                    
                    <div className="bit-down checkboxes-mother">
                        <label className="checkbox-option small-checkbox long-option">
                            A pessoa responsável por organizar todas festas de aniversário e happy hours
                            <input type="checkbox" name="coolness" id="coolness_party" checked={inCoolness[`A pessoa responsável por organizar todas festas de aniversário e happy hours`]} onChange={() => dispatch({type: `A pessoa responsável por organizar todas festas de aniversário e happy hours`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se {giftedName} não tiver sabe com quem conseguir
                            <input type="checkbox" name="coolness" id="coolness_find" checked={inCoolness[`Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se ${giftedName} não tiver sabe com quem conseguir`]} onChange={() => dispatch({type: `Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se ${giftedName} não tiver sabe com quem conseguir`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Perdeu a novela ontem? {giftedName} te conta tudo
                            <input type="checkbox" name="coolness" id="coolness_novela" checked={inCoolness[`Perdeu a novela ontem? ${giftedName} te conta tudo`]} onChange={() => dispatch({type: `Perdeu a novela ontem? ${giftedName} te conta tudo`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Meio perdido no catálogo da Netflix? {giftedName} te ajuda a encontrar a melhor série imperdível
                            <input type="checkbox" name="coolness" id="coolness_series" checked={inCoolness[`Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a melhor série imperdível`]} onChange={() => dispatch({type: `Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a melhor série imperdível`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? {giftedName} já está usando há duas semanas e te passa todas as dicas
                            <input type="checkbox" name="coolness" id="coolness_tool" checked={inCoolness[`Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? ${giftedName} já está usando há duas semanas e te passa todas as dicas`]} onChange={() => dispatch({type: `Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? ${giftedName} já está usando há duas semanas e te passa todas as dicas`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            {giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa
                            <input type="checkbox" name="coolness" id="coolness_emoji" checked={inCoolness[`${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`]} onChange={() => dispatch({type: `${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Dar conselhos é praticamente o seu segundo emprego
                            <input type="checkbox" name="coolness" id="coolness_advice" checked={inCoolness[`Dar conselhos é praticamente o seu segundo emprego`]} onChange={() => dispatch({type: `Dar conselhos é praticamente o seu segundo emprego`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            {giftedName} é a pessoa dos esportes, praticamente um comentárista profissional
                            <input type="checkbox" name="coolness" id="coolness_sports" checked={inCoolness[`${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`]} onChange={() => dispatch({type: `${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`})} />
                            <span className="checkbox-mark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setCoolness(makeCoolStr(inCoolness));
                            setWorkPage(intimacy === 2 ? 5 : 4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const final = makeCoolStr(inCoolness);
                            if(!final) {
                                return setWarning("Por favor, selecione pelo menos uma opção")
                            }
                            setCoolness(final);
                            setWorkPage(intimacy === 2 ? 7 : 6)
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoolnessQ
