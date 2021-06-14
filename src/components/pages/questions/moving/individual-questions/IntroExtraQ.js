import { useEffect, useState } from "react";

function radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra) {
    if(intimacy > 5) {
        return (
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
        )
    } else {
        return (
            <h3>No option right now</h3>
        )
    }
}

function IntroExtraQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Como você acha que serão os primeiros momentos de {giftedName} em seu novo espaço?</h2>
                    
                    {radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra)}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            if(intimacy > 5) {
                                setIntroExtra(inIntroExtra);
                                setMovingPage(6)
                            } else {
                                setIntroExtra(inIntroExtra);
                                setMovingPage(5)
                            }
                        }}>Anterior</button>
                        <button onClick={() => {
                            const moving = {
                                ...futureMoving,
                                introExtra: inIntroExtra
                            }
                            if(intimacy <= 5) delete moving.mood
                            setMoving(moving);
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
