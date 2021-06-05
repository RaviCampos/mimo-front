import { useEffect, useState } from "react";

function HobbiesQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, hobbies, setHobbies, giftedName, intimacy }}) {

    const [ inHobbies, setInHobbies ] = useState(hobbies ? hobbies : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inHobbies])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Não é só de trabalho que se vive, não é mesmo? Qual das opções abaixo combina mais com o que {giftedName} faria em um final de semana?</h2>
                    <input type="text" placeholder="área" value={inHobbies} onChange={e => setInHobbies(e.target.value)} autoComplete="off"/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setHobbies(inHobbies);
                            setWorkPage(intimacy ? 6 : 4)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inHobbies) {
                                setWarning("Por favor, preencha a área")
                            } else {
                                setHobbies(inHobbies);
                                const work = {
                                    ...futureWork,
                                    hobbies: inHobbies
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