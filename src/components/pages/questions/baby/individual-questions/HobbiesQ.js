import { useState } from "react";

function HobbiesQ({tools: {hobbies, setHobbies, setBabyPage, parentType, setBaby, setGoToOccasionLastQ, setSection, setPage, futureBaby, isBorn, name}}) {

    const [inHobbies, setInHobbies] = useState(hobbies ? hobbies : "")
    const [team, setTeam] = useState(hobbies ? hobbies : "")

    if(parentType === "Um casal querido que está esperando um filho") {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">Qual desses cenários você acha que é possível para {name.nameA} e {name.nameB}  e seu novo bebê?</h2>
                        <div>
                            <label className="radio-option long-option">
                                Eu sei que eles mal podem esperar para levar o bebê em suas viagens e lhe apresentar o mundo
                                <input type="radio" name="hobbies" id="hobbies_travel" value={`Eu sei que eles mal podem esperar para levar o bebê em suas viagens e lhe apresentar o mundo`} checked={inHobbies === `Eu sei que eles mal podem esperar para levar o bebê em suas viagens e lhe apresentar o mundo`} onChange={e=> setInHobbies(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option long-option">
                                Pode ter certeza que essa será a criança mais assídua do parquinho do Beirute! Todos os finais de semana {name.nameA} e {name.nameB} estão por lá sem falta e sei que vão continuar essa tradição mesmo com o bebê
                                <input type="radio" name="hobbies" id="hobbies_eat" value={`Pode ter certeza que essa será a criança mais assídua do parquinho do Beirute! Todos os finais de semana ${name.nameA} e ${name.nameB} estão por lá sem falta e sei que vão continuar essa tradição mesmo com o bebê`} checked={inHobbies === `Pode ter certeza que essa será a criança mais assídua do parquinho do Beirute! Todos os finais de semana ${name.nameA} e ${name.nameB} estão por lá sem falta e sei que vão continuar essa tradição mesmo com o bebê`} onChange={e => setInHobbies(e.target.value) }/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option long-option">
                                Eles são bem família, sabe? Família grande, todo final semana no churrasco de um tio, casamento de um primo, aniversário de uma avó, o bebê é uma adição linda para esse cenário
                                <input type="radio" name="hobbies" id="hobbies_family" value="Eles são bem família, sabe? Família grande, todo final semana no churrasco de um tio, casamento de um primo, aniversário de uma avó, o bebê é uma adição linda para esse cenário" checked={inHobbies === "Eles são bem família, sabe? Família grande, todo final semana no churrasco de um tio, casamento de um primo, aniversário de uma avó, o bebê é uma adição linda para esse cenário"} onChange={e=> setInHobbies(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option long-option">
                                O bebê vai nascer em um lar nerd, video games, tudo de Star Wars, filmes da Marvel. Não irão faltar estímulos para ele se apaixonar pela cultura pop
                                <input type="radio" name="hobbies" id="hobbies_pop" value={`O bebê vai nascer em um lar nerd, video games, tudo de Star Wars, filmes da Marvel. Não irão faltar estímulos para ele se apaixonar pela cultura pop`} checked={inHobbies === `O bebê vai nascer em um lar nerd, video games, tudo de Star Wars, filmes da Marvel. Não irão faltar estímulos para ele se apaixonar pela cultura pop`} onChange={e=> setInHobbies(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option long-option">
                                Se você conhece {name.nameA} e {name.nameB} sabe que não tem jeito, desde a barriga da mãe a criança já torcia para o time da casa
                                <input type="radio" name="hobbies" id="hobbies_team" value={`Se você conhece ${name.nameA} e ${name.nameB} sabe que não tem jeito, desde a barriga da mãe a criança já torcia para o time da casa`} checked={inHobbies === `Se você conhece ${name.nameA} e ${name.nameB} sabe que não tem jeito, desde a barriga da mãe a criança já torcia para o time da casa`} onChange={e=> setInHobbies(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                            {inHobbies === `Se você conhece ${name.nameA} e ${name.nameB} sabe que não tem jeito, desde a barriga da mãe a criança já torcia para o time da casa` && 
                                <div>
                                    <p>Qual o time da casa?</p>
                                    <input type="text" placeholder="time" onChange={e => setTeam(e.target.value)}/>
                                </div>
                            }
                        </div>
                        {warning && <p className="validation-warning">{warning}</p>}
                        <br/>
                        <div className="prev-for">
                            <button onClick={() => {
                                let final
                                if(inHobbies === `Se você conhece ${name.nameA} e ${name.nameB} sabe que não tem jeito, desde a barriga da mãe a criança já torcia para o time da casa`) {
                                    final = inHobbies + " [Time]: " + team
                                    setHobbies(final);
                                } else {
                                    setHobbies(inHobbies);
                                }
                                setBabyPage(isBorn ? 9 : 8)
                            }}>Anterior</button>
                            <button onClick={() => {
                                const baby = {
                                    ...futureBaby,
                                    hobbies: inHobbies
                                }
                                setBaby(baby)
                                setGoToOccasionLastQ(true)
                                setSection("common")
                                setPage(4);
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if(parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
        return (
            <div>
                <h2>Hobby</h2>
    
                <br/>
    
                <button onClick={() => {
                    setHobbies(inHobbies);
                    setBabyPage(isBorn ? 9 : 8)
                }}>Anterior</button>
                <button onClick={() => {
                    const baby = {
                        ...futureBaby,
                        hobbies: inHobbies
                    }
                    setBaby(baby)
                    setGoToOccasionLastQ(true)
                    setSection("common")
                    setPage(4);
                }}>Próxima</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Hobby</h2>
    
                <br/>
    
                <button onClick={() => {
                    setHobbies(inHobbies);
                    setBabyPage(isBorn ? 7 : 6)
                }}>Anterior</button>
                <button onClick={() => {
                    const baby = {
                        ...futureBaby,
                        hobbies: inHobbies
                    }
                    setBaby(baby)
                    setGoToOccasionLastQ(true)
                    setSection("common")
                    setPage(4);
                }}>Próxima</button>
            </div>
        )
    }
}

export default HobbiesQ
