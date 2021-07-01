import { useEffect, useState } from "react"

function radioOption(text, name, inEx, setInEx) {
    return (
        <label className="radio-option long-option">
            {text}
            <input type="radio" name="inex" id={`inex_${name}`} checked={inEx === text} onChange={() => setInEx(text)}/>
            <span className="checkmark"></span>
        </label>
    )
}

function IntroExtraQ({tools: { setWeddingPage, setIntroExtra, gifterInCouple, introExtra, giftedName, setSection, futureWedding, setWedding, setPage, setGoToOccasionLastQ, }}) {

    const [ inEx, setInEx ] = useState(introExtra ? introExtra : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inEx])

    const [ nameA, nameB ] = giftedName.split(" -- ")

    if(gifterInCouple) {
        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2 className="small-title">E vai rolar uma festa ou pelo menos um jantarzinho para comemorar o amor de vocês nessa data tão importante?</h2>
                        <div>
                            {radioOption("Estou planejando uma surpresa!!", "two", inEx, setInEx)}
                            {radioOption("Se não fosse a pandemia fariamos uma mega festa com vários amigos queridos, mas com o mundo como está vamos de playlist animada e bons drinks em casa mesmo", "one", inEx, setInEx)}
                            {radioOption("Vamos passar o dia juntos que é o que importa", "three", inEx, setInEx)}
                            {radioOption("Vamos fazer uma comida especial e ficar juntinhos, talvez ver um filme dançar um pouco", "four", inEx, setInEx)}
                            {radioOption("Eu não tinha pensado nisso ainda", "five", inEx, setInEx)}
                            {radioOption("Infelizmente não vamos conseguir estar juntos, vou precisar que o presente transmita o meu amor", "six", inEx, setInEx)}
                        </div>
                        
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
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2>Pensando em como {nameA} e {nameB} são quando vocês se encontram, marque a opção que mais combina com o casal:</h2>

                        <div>
                            {radioOption(`${nameA} e ${nameB} fazem amigos com muita facilidade, por isso são ótimas pessoas para convidar para festas e rolês sempre muito comunicativos`, "talk", inEx, setInEx)}
                            {radioOption(`${nameA} e ${nameB} são a prova de que opostos se atraem, um dos dois é alma da festa e o outro venderia a sua alma para nunca ir a uma`, "oposites", inEx, setInEx)}
                            {radioOption(`${nameA} e ${nameB} definitivamente são um casal old fashion, nada de demonstração pública de afeto e estão sempre juntos`, "nolove", inEx, setInEx)}
                            {radioOption(`${nameA}, ${nameB} e eu estamos no mesmo grupo de amigos há anos, somos todos muito unidos`, "friends", inEx, setInEx)}
                            {radioOption(`${nameA} e ${nameB} são caseiros, não saem muito. Passam todo o tempo que podem em seu mundo particular que construiram juntos`, "home", inEx, setInEx)}
                        </div>

                        {warning && <p className="validation-warning">{warning}</p>}
                        
                        <div className="prev-for">
                            <button onClick={() => {
                                setIntroExtra(inEx)
                                setWeddingPage(6)
                            }}>Anterior</button>
                            <button onClick={() => {
                                if(!inEx) {
                                    setWarning(`Por favor, escolha uma das opções` )
                                } else {
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
                                }
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroExtraQ
