import { useEffect, useState } from "react";

function HobbiesQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, hobbies, setHobbies, giftedName, intimacy }}) {

    const [ inHobbies, setInHobbies ] = useState(hobbies ? hobbies.split(" [Time]: ")[0] : "")
    const [ team, setTeam ] = useState(hobbies ? hobbies.split(" [Time]: ")[1] ? hobbies.split(" [Time]: ")[1]: "" : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inHobbies])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Não é só de trabalho que se vive, não é mesmo? Qual das opções abaixo combina mais com o que {giftedName} faria em um final de semana?</h2>
                    
                    <div>
                        <label className="radio-option small-radio long-option">
                            {giftedName} gosta de tirar um tempo para si, uma yoga, uma meditação, cuidar de suas plantas, essas coisas, sabe?
                            <input type="radio" name="hobbies" id="hobbies_easy" checked={inHobbies === `${giftedName} gosta de tirar um tempo para si, uma yoga, uma meditação, cuidar de suas plantas, essas coisas, sabe?`} onChange={() => setInHobbies(`${giftedName} gosta de tirar um tempo para si, uma yoga, uma meditação, cuidar de suas plantas, essas coisas, sabe?`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio long-option">
                            Onde tiver uma festa, é lá que {giftedName} estará
                            <input type="radio" name="hobbies" id="hobbies_party" checked={inHobbies === `Onde tiver uma festa, é lá que ${giftedName} estará`} onChange={() => setInHobbies(`Onde tiver uma festa, é lá que ${giftedName} estará`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio long-option">
                            Colocar as séries e os filmes em dia, com certeza
                            <input type="radio" name="hobbies" id="hobbies_films" checked={inHobbies === `Colocar as séries e os filmes em dia, com certeza`} onChange={() => setInHobbies(`Colocar as séries e os filmes em dia, com certeza`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio long-option">
                            Apreciar um bom vinho e uma boa comida, esse é um programa que combina com {giftedName}
                            <input type="radio" name="hobbies" id="hobbies_wine" checked={inHobbies === `Apreciar um bom vinho e uma boa comida, esse é um programa que combina com ${giftedName}`} onChange={() => setInHobbies(`Apreciar um bom vinho e uma boa comida, esse é um programa que combina com ${giftedName}`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio long-option">
                            Finais de semana são para a família e para a cozinha, duas coisas que {giftedName} adora
                            <input type="radio" name="hobbies" id="hobbies_wine" checked={inHobbies === `Finais de semana são para a família e para a cozinha, duas coisas que ${giftedName} adora`} onChange={() => setInHobbies(`Finais de semana são para a família e para a cozinha, duas coisas que ${giftedName} adora`)} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio long-option">
                            Final de semana tem jogo, não é mesmo? Então é isso que {giftedName} estará fazendo, assistindo e torcendo
                            <input type="radio" name="hobbies" id="hobbies_game" checked={inHobbies === `Final de semana tem jogo, não é mesmo? Então é isso que ${giftedName} estará fazendo, assistindo e torcendo`} onChange={() => setInHobbies(`Final de semana tem jogo, não é mesmo? Então é isso que ${giftedName} estará fazendo, assistindo e torcendo`)} />
                            <span className="checkmark"></span>
                        </label>
                        {inHobbies === `Final de semana tem jogo, não é mesmo? Então é isso que ${giftedName} estará fazendo, assistindo e torcendo` && <div>
                            <p>Qual o esporte e qual time?</p>
                            <input type="text" placeholder="time" value={team} onChange={e => setTeam(e.target.value)}/>
                        </div>}
                        <label className="radio-option small-radio long-option">
                            “Não é só de trabalho que se vive, não é mesmo?” {giftedName} com certeza nunca ouviu isso, final de semana é só um dia normal com uma pausa maior para o almoço
                            <input type="radio" name="hobbies" id="hobbies_work" checked={inHobbies === `“Não é só de trabalho que se vive, não é mesmo?” ${giftedName} com certeza nunca ouviu isso, final de semana é só um dia normal com uma pausa maior para o almoço`} onChange={() => setInHobbies(`“Não é só de trabalho que se vive, não é mesmo?” ${giftedName} com certeza nunca ouviu isso, final de semana é só um dia normal com uma pausa maior para o almoço`)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            let finalHobbies
                            if(inHobbies === `Final de semana tem jogo, não é mesmo? Então é isso que ${giftedName} estará fazendo, assistindo e torcendo`) {
                                finalHobbies = inHobbies + " [Time]: " + team;
                            } else {
                                finalHobbies = inHobbies;
                            }
                            setHobbies(finalHobbies);
                            setWorkPage(intimacy ? 6 : 4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inHobbies) {
                                setWarning("Por favor, preencha a área")
                            } else {
                                let finalHobbies
                                if(inHobbies === `Final de semana tem jogo, não é mesmo? Então é isso que ${giftedName} estará fazendo, assistindo e torcendo`) {
                                    finalHobbies = inHobbies + " [Time]: " + team;
                                } else {
                                    finalHobbies = inHobbies;
                                }
                                const work = {
                                    ...futureWork,
                                    hobbies: finalHobbies
                                }
                                setWork(work);
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