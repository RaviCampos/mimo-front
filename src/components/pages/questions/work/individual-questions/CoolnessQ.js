import { useEffect, useState } from "react";

function CoolnessQ({tools: { setWorkPage, coolness, setCoolness, giftedName, intimacy }}) {
    const [ inCoolness, setInCoolness ] = useState(coolness)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Passamos a maior parte da nossa vida no trabalho e com o tempo passamos a desenvolver certos papéis que vão além da descrição do nosso cargo, marque todas as opções em que você achar que {giftedName} se encaixa</h2>
                    
                    <div>
                        <label className="checkbox-option small-checkbox long-option">
                            A pessoa responsável por organizar todas festas de aniversário e happy hours
                            <input type="checkbox" name="coolness" id="coolness_easy" checked={inCoolness === `A pessoa responsável por organizar todas festas de aniversário e happy hours`} onChange={() => setInCoolness(`A pessoa responsável por organizar todas festas de aniversário e happy hours`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se {giftedName} não tiver sabe com quem conseguir
                            <input type="checkbox" name="coolness" id="coolness_party" checked={inCoolness === `Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se ${giftedName} não tiver sabe com quem conseguir`} onChange={() => setInCoolness(`Precisando de qualquer coisa, procure por essa pessoa. De uma cor específica de marca texto a um remédio para dor de cabeça, se ${giftedName} não tiver sabe com quem conseguir`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Perdeu a novela ontem? {giftedName} te conta tudo
                            <input type="checkbox" name="coolness" id="coolness_films" checked={inCoolness === `Perdeu a novela ontem? ${giftedName} te conta tudo`} onChange={() => setInCoolness(`Perdeu a novela ontem? ${giftedName} te conta tudo`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Meio perdido no catálogo da Netflix? {giftedName} te ajuda a encontrar a melhor série imperdível
                            <input type="checkbox" name="coolness" id="coolness_wine" checked={inCoolness === `Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a melhor série imperdível`} onChange={() => setInCoolness(`Meio perdido no catálogo da Netflix? ${giftedName} te ajuda a encontrar a melhor série imperdível`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? {giftedName} já está usando há duas semanas e te passa todas as dicas
                            <input type="checkbox" name="coolness" id="coolness_wine" checked={inCoolness === `Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? ${giftedName} já está usando há duas semanas e te passa todas as dicas`} onChange={() => setInCoolness(`Descobriu uma ferramenta nova, mas está com algumas dúvidas de como usar? ${giftedName} já está usando há duas semanas e te passa todas as dicas`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            {giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa
                            <input type="checkbox" name="coolness" id="coolness_game" checked={inCoolness === `${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`} onChange={() => setInCoolness(`${giftedName} sempre responde tudo com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            Dar conselhos é praticamente o seu segundo emprego
                            <input type="checkbox" name="coolness" id="coolness_work" checked={inCoolness === `Dar conselhos é praticamente o seu segundo emprego`} onChange={() => setInCoolness(`Dar conselhos é praticamente o seu segundo emprego`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                        <label className="checkbox-option small-checkbox long-option">
                            {giftedName} é a pessoa dos esportes, praticamente um comentárista profissional
                            <input type="checkbox" name="coolness" id="coolness_work" checked={inCoolness === `${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`} onChange={() => setInCoolness(`${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`)} />
                            <span className="checkbox-mark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setWorkPage(intimacy === 2 ? 5 : 4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setWorkPage(intimacy === 2 ? 7 : 6)
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoolnessQ
