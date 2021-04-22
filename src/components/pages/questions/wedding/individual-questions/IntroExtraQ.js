import { useEffect, useState } from "react"

function IntroExtraQ({tools: { setWeddingPage, setIntroExtra, gifterInCouple, introExtra, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, }}) {

    const [ inEx, setInEx ] = useState(introExtra ? introExtra : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inEx])


    if(gifterInCouple) {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">E vai rolar uma festa ou pelo menos um jantarzinho para comemorar o amor de vocês nessa data tão importante?</h2>
                        
                        <label className="radio-option">
                            Estou planejando uma surpresa!!
                            <input type="radio" name="inex" id="inex_two" checked={inEx === "Estou planejando uma surpresa!!"} onChange={() => setInEx("Estou planejando uma surpresa!!")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo
                            <input type="radio" name="inex" id="inex_one" checked={inEx === "Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo"} onChange={() => setInEx("Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option">
                            Vamos passar o dia juntos que é o que importa
                            <input type="radio" name="inex" id="inex_three" checked={inEx === "Vamos passar o dia juntos que é o que importa"} onChange={() => setInEx("Vamos passar o dia juntos que é o que importa")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco
                            <input type="radio" name="inex" id="inex_four" checked={inEx === "Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco"} onChange={() => setInEx("Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option">
                            Eu não tinha pensado nisso ainda
                            <input type="radio" name="inex" id="inex_five" checked={inEx === "Eu não tinha pensado nisso ainda"} onChange={() => setInEx("Eu não tinha pensado nisso ainda")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option long-option">
                            Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor
                            <input type="radio" name="inex" id="inex_six" checked={inEx === "Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor"} onChange={() => setInEx("Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor")}/>
                            <span className="checkmark"></span>
                        </label>

                        {warning && <p className="validation-warning">{warning}</p>}

                        <div className="prev-for">
                            <button onClick={() => {
                                setIntroExtra(inEx)
                                setWeddingPage(4)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(!inEx) {
                                    setWarning(`Por favor, escolha uma das opções` )
                                }  else {
                                    setIntroExtra(inEx)
                                    setWeddingPage(6)
                                }
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Intro Extra</h2>
                <button onClick={() => {
                    setIntroExtra(inEx)
                    setWeddingPage(6)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inEx) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        const wed = {
                            ...futureWedding,
                            gifterInCouple: "Não",
                            introExtra: inEx
                        }
                        delete wed.commonHobbies

                        setWedding(wed);
                        setGoToOccasionLastQ(true)
                        setSection("common")
                        setPage(4);
                    // }
                }}>Próxima</button>
            </div>
        )
    }
}

export default IntroExtraQ
