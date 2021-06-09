import { useEffect, useState } from "react";

function CoolnessQ({tools: { setMovingPage, coolness, setCoolness, giftedName, intimacy }}) {
    const [ inCoolness, setInCoolness ] = useState(coolness)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Uma mudança exige muita preparação, qual você acredita que sejam as prioridades de {giftedName} nesse processo?</h2>
                    <div>
                        <label className="radio-option long-option">
                            Um colchão, um cooler e a internet instalada já estaria ótimo para {giftedName}, o que importa é ter conquistado esse espaço para si
                            <input type="radio" name="coolness" id="coolness_cooler" checked={inCoolness === `Um colchão, um cooler e a internet instalada já estaria ótimo para ${giftedName}, o que importa é ter conquistado esse espaço para si`} onChange={() => setInCoolness(`Um colchão, um cooler e a internet instalada já estaria ótimo para ${giftedName}, o que importa é ter conquistado esse espaço para si`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Se as pastas no Pinterest e todos os instagram de decoração de {giftedName} vem seguindo dizem alguma coisa é que esse lugar vai ter a sua cara e isso é muito importante para ele(a)
                            <input type="radio" name="coolness" id="coolness_pinterest" checked={inCoolness === `Se as pastas no Pinterest e todos os instagram de decoração de ${giftedName} vem seguindo dizem alguma coisa é que esse lugar vai ter a sua cara e isso é muito importante para ele(a)`} onChange={() => setInCoolness(`Se as pastas no Pinterest e todos os instagram de decoração de ${giftedName} vem seguindo dizem alguma coisa é que esse lugar vai ter a sua cara e isso é muito importante para ele(a)`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            A cozinha com certeza será o ambiente sagrado, talvez até o primeiro a ser arrumado. {giftedName} adora cozinhar e deve estar ansioso(a) para ter esse espaço novo para si
                            <input type="radio" name="coolness" id="coolness_kitchen" checked={inCoolness === `A cozinha com certeza será o ambiente sagrado, talvez até o primeiro a ser arrumado. ${giftedName} adora cozinhar e deve estar ansioso(a) para ter esse espaço novo para si`} onChange={() => setInCoolness(`A cozinha com certeza será o ambiente sagrado, talvez até o primeiro a ser arrumado. ${giftedName} adora cozinhar e deve estar ansioso(a) para ter esse espaço novo para si`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option long-option">
                            {giftedName} é muito pragmático e não vai descansar enquanto não estiver tudo no lugar
                            <input type="radio" name="coolness" id="coolness_norest" checked={inCoolness === `${giftedName} é muito pragmático e não vai descansar enquanto não estiver tudo no lugar`} onChange={() =>setInCoolness(`${giftedName} é muito pragmático e não vai descansar enquanto não estiver tudo no lugar`)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setMovingPage(intimacy > 5 ? 5 : 4);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inCoolness) {
                                setCoolness(inCoolness);
                                setMovingPage(intimacy > 5 ? 7 : 6);
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

export default CoolnessQ
