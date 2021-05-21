import { useEffect, useState } from "react";

function FirstSonQ({tools: { setBabyPage, setFirstSon, firstSon, name, parentType, isBorn }}) {

    const [ inFirstSon, setInFirstSon ] = useState(firstSon ? firstSon.yesOrNo : "")
    const [ howMany, setHowMany ] = useState(firstSon ? firstSon.howMany : "")

    const [ warning, setWarning] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [inFirstSon, howMany])   

    const inQuestionNames = parentType === "Um casal querido que está esperando um filho" ? `${name.nameA} e ${name.nameB}` : name
    const negativeOption = parentType === "Um casal querido que está esperando um filho" ? `Não, ${name.nameA} e ${name.nameB} já têm filho(s)` : parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" ? `Não, eu e ${name} já temos filho(s).` : `Não, ${name} já tem filho(s)`
    
    let question;
    if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
        question = `É o primeiro filho de vocês?`
    } else {
        question = `É o primeiro filho de ${inQuestionNames}?`
    }

    function setBoth(val) {
        setInFirstSon(val)
        setHowMany("")
    }
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">{question}</h2>
                    <div>
                        <label className="radio-option small-radio">
                            Sim
                            <input type="radio" name="firstSon" id="firstSon_yes" value="Sim" checked={ inFirstSon === "Sim"} onChange={e => setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            {negativeOption}
                            <input type="radio" name="firstSon" id="firstSon_no" value={negativeOption} checked={ inFirstSon === negativeOption} onChange={e => setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    { inFirstSon === negativeOption && 
                        <div className="bit-down">
                            <h3>Quantos?</h3>
                            <input type="number" name="howMany" id="firstSon_howMany" min="1" max="30" value={howMany} onChange={e => setHowMany(e.target.value)}/>
                        </div>
                    }

                    { warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            setFirstSon({
                                yesOrNo: inFirstSon,
                                howMany
                            })
                            if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
                                setBabyPage(isBorn ? 3 : 2)
                            } else {
                                setBabyPage(isBorn ? 5: 4)
                            }
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inFirstSon) {
                                setWarning("Por favor, escolha uma das opções")
                            } else if(inFirstSon === negativeOption && !howMany) {
                                setWarning("Por favor, diga-nos quantas crianças")
                            } else {
                                setFirstSon({
                                    yesOrNo: inFirstSon,
                                    howMany
                                })
                                if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
                                    setBabyPage(isBorn ? 5: 4)
                                } else {
                                    setBabyPage(isBorn ? 7: 6)
                                }   
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSonQ
