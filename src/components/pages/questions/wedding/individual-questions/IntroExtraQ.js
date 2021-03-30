import { useEffect, useState } from "react"

function IntroExtraQ({tools: { setWeddingPage, setIntroExtra, gifterInCouple, introExtra }}) {

    const [ inEx, setInEx ] = useState(introExtra ? introExtra : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inEx])


    if(gifterInCouple) {
        return (
            <div>
                <h2>E vai rolar uma festa ou pelo menos um jantarzinho para comemorar o amor de vocês nessa data tão importante?</h2>
                
                <div>
                    <input type="radio" name="inex" id="inex_one" checked={inEx === "Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo"} onChange={() => setInEx("Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo")}/>
                    <label htmlFor="inex_one">Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo</label>
                </div>
                <div>
                    <input type="radio" name="inex" id="inex_two" checked={inEx === "Estou planejando uma surpresa!!"} onChange={() => setInEx("Estou planejando uma surpresa!!")}/>
                    <label htmlFor="inex_two">Estou planejando uma surpresa!!</label>
                </div>
                <div>
                    <input type="radio" name="inex" id="inex_three" checked={inEx === "Vamos passar o dia juntos que é o que importa"} onChange={() => setInEx("Vamos passar o dia juntos que é o que importa")}/>
                    <label htmlFor="inex_three">Vamos passar o dia juntos que é o que importa</label>
                </div>
                <div>
                    <input type="radio" name="inex" id="inex_four" checked={inEx === "Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco"} onChange={() => setInEx("Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco")}/>
                    <label htmlFor="inex_four">Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco</label>
                </div>
                <div>
                    <input type="radio" name="inex" id="inex_five" checked={inEx === "Eu não tinha pensado nisso ainda"} onChange={() => setInEx("Eu não tinha pensado nisso ainda")}/>
                    <label htmlFor="inex_five">Eu não tinha pensado nisso ainda</label>
                </div>
                <div>
                    <input type="radio" name="inex" id="inex_six" checked={inEx === "Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor"} onChange={() => setInEx("Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor")}/>
                    <label htmlFor="inex_six">Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor</label>
                </div>

                {warning && <p className="validation-warning">{warning}</p>}

                <button onClick={() => {
                    setIntroExtra(inEx)
                    setWeddingPage(4)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inEx) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setIntroExtra(inEx)
                        setWeddingPage(6)
                    // }
                }}>Próxima</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Permance vazia</h2>
                <button onClick={() => {
                    setIntroExtra(inEx)
                    setWeddingPage(4)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inEx) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setIntroExtra(inEx)
                        setWeddingPage(6)
                    // }
                }}>Próxima</button>
            </div>
        )
    }
}

export default IntroExtraQ
