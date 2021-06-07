import { useEffect, useState } from "react";

function MoodQ({tools: { setWorkPage, mood, setMood, giftedName }}) {
    const [ inMood, setInMood ] = useState(mood)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inMood])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Você que conhece {giftedName}, como acha que ele(a) está se sentido agora com essa mudança?</h2>
                    
                    <div>
                        <label className="radio-option long-option">
                            Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz
                            <input type="radio" name="mood" id="mood_nonstop" checked={inMood === `Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz`} onChange={() => setInMood(`Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Uma mudança mesmo que boa sempre provoca um frio na barriga, não é mesmo? Mas {giftedName} está preparado(a) e merece essa oportunidade
                            <input type="radio" name="mood" id="mood_party" checked={inMood === `Uma mudança mesmo que boa sempre provoca um frio na barriga, não é mesmo? Mas ${giftedName} está preparado(a) e merece essa oportunidade`} onChange={() => setInMood(`Uma mudança mesmo que boa sempre provoca um frio na barriga, não é mesmo? Mas ${giftedName} está preparado(a) e merece essa oportunidade`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Acho que {giftedName} está um pouco nervoso, confesso que eu também ficaria, mas {giftedName} tem todo o meu apoio e espero que ele(a) saiba disso
                            <input type="radio" name="mood" id="mood_films" checked={inMood === `Acho que ${giftedName} está um pouco nervoso, confesso que eu também ficaria, mas ${giftedName} tem todo o meu apoio e espero que ele(a) saiba disso`} onChange={() => setInMood(`Acho que ${giftedName} está um pouco nervoso, confesso que eu também ficaria, mas ${giftedName} tem todo o meu apoio e espero que ele(a) saiba disso`)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setMood(inMood);
                            setWorkPage(4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inMood) return setWarning("Por favor, escolha uma das opções")
                            setMood(inMood);
                            setWorkPage(6)
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MoodQ
