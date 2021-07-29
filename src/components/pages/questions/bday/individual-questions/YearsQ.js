import { useState, useEffect } from "react";
import Bday from "../Bday";

function checkAccuracy(accuracy) {
    if(accuracy === "Sei exatamente a idade") {
        return false
    } else {
        return true
    }
}

function changeAccuracy(checkAccuracy, accuracy, setAccuracy) {
    if(checkAccuracy(accuracy)) {
        setAccuracy("Sei exatamente a idade")
    } else {
        setAccuracy("Não sei exatamente a idade")
    }
}

function YearsQ({tools: {setBDayPage, setAge, age, giftedName, bDayPage}}) {

    let protoAge
    if(age) {
        protoAge = age.split(" : ")
    } else {
        protoAge = ["Sei exatamente a idade", ""]
    }

    const [ accuracy, setAccuracy ] = useState(protoAge[0]);
    const [ inAge, setInAge ] = useState(protoAge[1]);

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [inAge, accuracy])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Então já sabemos que está na hora de {giftedName} apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
                    <div className="options-center">
                        <h3 className="bigger-subtitle bit-down">{giftedName} está fazendo:</h3>
                        <label className="age_checkbox checkbox-option small-checkbox long-option">
                            Eita, eu não sei extamente quanto anos X vai fazer <span role="img" aria-label="ivertedsmile">🙃</span>
                            <input type="checkbox" name="age_accuracy" id="age_accuracy" checked={checkAccuracy(accuracy)} onChange={() => 
                                changeAccuracy(checkAccuracy, accuracy, setAccuracy)
                            } />
                            <span className="checkbox-mark"></span>
                        </label>
                        <br/>
                        {checkAccuracy(accuracy) && <p className="age_comment">Tudo bem, não vamos contar para ninguém. Só nos dê uma estimativa, que tal? Mais ou menos quantos anos {giftedName} vai fazer?</p>}

                        <h3 className="bigger-subtitle">Quantos anos?</h3>
                        <input type="number" name="age" id="yearsq_age" min="1" max="200" value={inAge} placeholder="anos" onChange={e => setInAge(e.target.value)} autoComplete="off"/>
                        
                        { warning && <p className="validation-warning">{warning}</p> }
                    </div>

                    <br/>

                    <div className="prev-for">
                        <button onClick={() => {
                            setAge(`${accuracy} : ${inAge}`);
                            setBDayPage(bDayPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            // if(!inAge) {
                            //     setWarning(`Por favor, preencha quantos ${unit} ${giftedName} está fazendo` )
                            // } else if(unit === "anos" && inAge < 1) {
                            //     setWarning("Se a pessoa está fazendo menos de um ano selecione 'meses' e depois indique quantos meses")
                            // } else if(unit === "anos" && inAge > 120) {
                            //     setWarning(`Anos precisam ser menores que 120`)
                            // } else if(unit === "meses" && inAge < 1) {
                            //     setWarning("O número de meses precisa ser pelo menos 1")
                            // } else if(unit === "meses" && inAge > 11) {
                            //     setWarning("O número máximo de meses é 11, se a pessoa está fazendo 12 meses, por favor, selecione anos e indique 1")
                            // } else {
                                setAge(`${accuracy} : ${inAge}`);
                                setBDayPage(bDayPage + 1)
                            // }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YearsQ
