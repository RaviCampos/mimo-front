import { useEffect, useState } from "react"

function HobbiesQ({tools: { travelPage, setTravelPage, hobbies, setHobbies, giftedName, setSection, futureTravel, setTravel, setPage, setGoToOccasionLastQ }}) {

    const [ inHobbies, setInHobbies ] = useState(hobbies ? hobbies : "");

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [inHobbies])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Uma viagem não importa o seu motivo pode se transformar em uma aventura, qual das opções abaixo mais combina com o que {giftedName} gosta de fazer quando viaja</h2>

                    <div>
                        <label className="radio-option long-option">
                            No caso de {giftedName} a aventura é literal. Esportes radicais, trilhas gigantescas, não importa onde esteja ou qual seja o motivo de sua viagem, {giftedName} acha um tempo para fazer o que gosta
                            <input type="radio" name="hobbies" id="hobbies_adventure" checked={inHobbies === `No caso de ${giftedName} a aventura é literal. Esportes radicais, trilhas gigantescas, não importa onde esteja ou qual seja o motivo de sua viagem, ${giftedName} acha um tempo para fazer o que gosta`} onChange={() => setInHobbies(`No caso de ${giftedName} a aventura é literal. Esportes radicais, trilhas gigantescas, não importa onde esteja ou qual seja o motivo de sua viagem, ${giftedName} acha um tempo para fazer o que gosta`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Esqueça os pontos turísticos, {giftedName} está mais interessado nos restaurantes do lugar um(a) expert em turismo gastronômico
                            <input type="radio" name="hobbies" id="hobbies_food" checked={inHobbies === `Esqueça os pontos turísticos, ${giftedName} está mais interessado nos restaurantes do lugar um(a) expert em turismo gastronômico`} onChange={() => setInHobbies(`Esqueça os pontos turísticos, ${giftedName} está mais interessado nos restaurantes do lugar um(a) expert em turismo gastronômico`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Não me pergunte qual o seu segredo, mas {giftedName} tem um talento para descobrir os mais incríveis e escondidos lugares não importa onde esteja. Um pub secreto em Londres, a melhor barraquinha de siri de Maragogi, um museu em Ouro Preto que não fica lotado de turistas, conheço todos porque {giftedName} me contou sobre eles
                            <input type="radio" name="hobbies" id="hobbies_hidden" checked={inHobbies === `Não me pergunte qual o seu segredo, mas ${giftedName} tem um talento para descobrir os mais incríveis e escondidos lugares não importa onde esteja. Um pub secreto em Londres, a melhor barraquinha de siri de Maragogi, um museu em Ouro Preto que não fica lotado de turistas, conheço todos porque ${giftedName} me contou sobre eles`} onChange={() => setInHobbies(`Não me pergunte qual o seu segredo, mas ${giftedName} tem um talento para descobrir os mais incríveis e escondidos lugares não importa onde esteja. Um pub secreto em Londres, a melhor barraquinha de siri de Maragogi, um museu em Ouro Preto que não fica lotado de turistas, conheço todos porque ${giftedName} me contou sobre eles`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Para {giftedName} uma viagem é uma oportunidade de desfilar para uma nova audiência, os looks vão prontos na mala e chegando lá são incrementados com itens especiais comprados no local
                            <input type="radio" name="hobbies" id="hobbies_fashion" checked={inHobbies === `Para ${giftedName} uma viagem é uma oportunidade de desfilar para uma nova audiência, os looks vão prontos na mala e chegando lá são incrementados com itens especiais comprados no local`} onChange={() => setInHobbies(`Para ${giftedName} uma viagem é uma oportunidade de desfilar para uma nova audiência, os looks vão prontos na mala e chegando lá são incrementados com itens especiais comprados no local`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Não importa para onde {giftedName} vá ou qual seja o motivo da viagem, tenho certeza que as fotos serão incríveis
                            <input type="radio" name="hobbies" id="hobbies_pictures" checked={inHobbies === `Não importa para onde ${giftedName} vá ou qual seja o motivo da viagem, tenho certeza que as fotos serão incríveis`} onChange={() => setInHobbies(`Não importa para onde ${giftedName} vá ou qual seja o motivo da viagem, tenho certeza que as fotos serão incríveis`)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                        
                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            setHobbies(inHobbies);
                            setTravelPage(travelPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inHobbies) {
                                setWarning("Por favor, escolha uma das opções")
                            } else {
                                const travel = {
                                    ...futureTravel,
                                    hobbies: inHobbies
                                }
                                delete travel.coolness
                                setTravel(travel);
                                setGoToOccasionLastQ(true)
                                setSection("common")
                                setPage(4);
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HobbiesQ
