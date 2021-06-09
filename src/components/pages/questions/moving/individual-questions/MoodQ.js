import { useEffect, useState } from "react";

function MoodQ({tools: { setMovingPage, mood, setMood, giftedName}}) {
    const [ inMood, setInMood ] = useState(mood)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inMood])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Uma mudança mesmo que boa sempre provoca um frio na barriga, não é mesmo? Como você acha que {giftedName} está se sentido com relação a isso agora?</h2>
                    <div>
                        <label className="radio-option long-option">
                            Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz
                            <input type="radio" name="mood" id="mood_happy" checked={inMood === `Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz`} onChange={() => setInMood(`Com certeza bastante animado(a), não para de falar nisso e parece estar bastante feliz`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Com ou sem frio na barriga {giftedName} está pronto(a) para essa mudança, tanto psicologicamente quanto prática mente, nunca vi caixa tão organizadas e bem etiquetadas
                            <input type="radio" name="mood" id="mood_organized" checked={inMood === `Com ou sem frio na barriga ${giftedName} está pronto(a) para essa mudança, tanto psicologicamente quanto prática mente, nunca vi caixa tão organizadas e bem etiquetadas`} onChange={() => setInMood(`Com ou sem frio na barriga ${giftedName} está pronto(a) para essa mudança, tanto psicologicamente quanto prática mente, nunca vi caixa tão organizadas e bem etiquetadas`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Acho que {giftedName} está um pouco nervoso, confesso que eu também ficaria, mas {giftedName} tem todo o meu apoio e espero que ele(a) saiba disso
                            <input type="radio" name="mood" id="mood_nervous" checked={inMood === `Acho que ${giftedName} está um pouco nervoso, confesso que eu também ficaria, mas ${giftedName} tem todo o meu apoio e espero que ele(a) saiba disso`} onChange={() => setInMood(`Acho que ${giftedName} está um pouco nervoso, confesso que eu também ficaria, mas ${giftedName} tem todo o meu apoio e espero que ele(a) saiba disso`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option long-option">
                            Difícil dizer, {giftedName} é muito discreto(a). Mas como diz na pergunta, uma mudança sempre provoca um frio na barriga
                            <input type="radio" name="mood" id="mood_shy" checked={inMood === `Difícil dizer, ${giftedName} é muito discreto(a). Mas como diz na pergunta, uma mudança sempre provoca um frio na barriga`} onChange={() =>setInMood(`Difícil dizer, ${giftedName} é muito discreto(a). Mas como diz na pergunta, uma mudança sempre provoca um frio na barriga`)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            setMood(inMood);
                            setMovingPage(4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inMood) {
                                setMood(inMood);
                                setMovingPage(6)
                            } else {
                                setWarning("Por favor, escolha uma das opções")
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoodQ
