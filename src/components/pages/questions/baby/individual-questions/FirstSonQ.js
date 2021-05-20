import { useState } from "react";

function FirstSonQ({tools: { setBabyPage, setFirstSon, firstSon, name, parentType }}) {

    const [ inFirstSon, setInFirstSon ] = useState(firstSon ? firstSon.yesOrNo : "")
    const [ howMany, setHowMany ] = useState(firstSon ? firstSon.howMany : "")

    const inQuestionNames = parentType === "Um casal querido que está esperando um filho" ? `${name.nameA} e ${name.nameB}` : name
    const negativeOption = parentType === "Um casal querido que está esperando um filho" ? `Não, ${name.nameA} e ${name.nameB} já têm filho(s)` : `Não, ${name} já tem filho(s)`

    function setBoth(val) {
        setInFirstSon(val)
        setHowMany("")
    }
    
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">
                       É o primeiro filho de {inQuestionNames}?
                    </h2>
                    <div>
                        <label className="radio-option small-option">
                            Sim
                            <input type="radio" name="firstSon" id="firstSon_yes" value="Sim" checked={ inFirstSon === "Sim"} onChange={e => setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-option">
                            {negativeOption}
                            <input type="radio" name="firstSon" id="firstSon_no" value={negativeOption} checked={ inFirstSon === negativeOption} onChange={e => setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    { inFirstSon === negativeOption && 
                        <div className="bit-down">
                            <input type="number" name="howMany" id="firstSon_howMany" min="1" max="30" value={howMany} placeholder="quantos?" onChange={e => setHowMany(e.target.value)}/>
                        </div>
                    }

                    <div className="prev-for">
                        <button onClick={() => {
                            // setFirstSon(inDate)
                            setBabyPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            // setFirstSon(inDate)
                            setBabyPage(4)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSonQ
