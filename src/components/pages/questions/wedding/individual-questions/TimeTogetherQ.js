import { useState, useEffect } from "react"

function TimeTogetherQ({tools: { setWeddingPage, weddingPage, setTimeTogether, gifterInCouple, timeTogether, gifterName }}) {

    let protoTime
    if(timeTogether) {
        protoTime = timeTogether.split(" ")
    } else {
        protoTime = ["", "anos"]
    }

    const [ inTime, setInTime ] = useState(protoTime[0]);
    const [ unit, setUnit ] = useState(protoTime[1]);

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [inTime])

    useEffect(() => {
        setWarning(false);
    }, [unit])

    function changeUnit(input) {
        setUnit(input)
        setInTime("")
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">{
                        gifterInCouple ?
                        `Que legal ${gifterName}! Me conta o nome dessa pessoa com quem você está construindo uma história de amor?`
                        :
                        "E quanto tempo juntos eles estão comemorando?"
                    }</h2>
                    <div>
                        <label className="radio-option small-radio">
                            Mais de um ano
                            <input type="radio" name="time" id="time_years" checked={unit === "anos"} onChange={() => changeUnit("anos")}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            Menos de um ano
                            <input type="radio" name="time" id="time_months" checked={unit === "meses"} onChange={() => changeUnit("meses")}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <br/>

                    <h3 className="subtitle no-space-top small-space-down">E quantos {unit}?</h3>
                    <div className="valueq-flex timeq">
                        <div>
                            <input type="number" name="age" id="timeq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inTime} placeholder={unit} onChange={e => setInTime(e.target.value)}/>
                        </div>

                        { unit && <p className="subtitle no-space-top no-space-down">{inTime ? inTime : "--"} {unit}</p>}
                    </div>
                    
                    { warning && <p className="validation-warning">{warning}</p> }

                    <br/>

                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setTimeTogether(`${inTime} ${unit}`);
                            setWeddingPage( weddingPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inTime) {
                                setWarning(`Por favor, preencha quantos ${unit}` )
                            } else if(unit === "anos" && inTime < 1) {
                                setWarning("Se a pessoa estão comemorando menos de um ano selecione 'meses' e depois indique quantos meses")
                            } else if(unit === "anos" && inTime > 120) {
                                setWarning(`Anos precisam ser menores que 120`)
                            } else if(unit === "meses" && inTime < 1) {
                                setWarning("O número de meses precisa ser pelo menos 1")
                            } else if(unit === "meses" && inTime > 11) {
                                setWarning("O número máximo de meses é 11, se a pessoa está fazendo 12 meses, por favor, selecione anos e indique 1")
                            } else {
                                setTimeTogether(`${inTime} ${unit}`);
                                setWeddingPage( weddingPage + 1)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default TimeTogetherQ
