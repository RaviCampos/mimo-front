import { useState, useEffect } from "react"

function TimeTogetherQ({tools: { setWeddingPage, setTimeTogether, gifterInCouple, timeTogether, gifterName }}) {

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
        <div>
            <h2>{
                 gifterInCouple ?
                 `Que legal ${gifterName}! Me conta o nome dessa pessoa com quem você está construindo uma história de amor?`
                 :
                 "E quanto tempo juntos eles estão comemorando?"
            }</h2>
            <div>
                <label htmlFor="time_years">Mais de um ano</label>
                <input type="radio" name="time" id="time_years" checked={unit === "anos"} onChange={() => changeUnit("anos")}/>
            </div>
            <div>
                <label htmlFor="time_months">Menos de um ano</label>
                <input type="radio" name="time" id="time_months" checked={unit === "meses"} onChange={() => changeUnit("meses")}/>
            </div>
            <br/>
            {unit === "meses" && <p>Não é porque é menos de um ano que não é especial!</p>}

            <h3>E quantos {unit}?</h3>
            <input type="number" name="age" id="timeq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inTime} placeholder={unit} onChange={e => setInTime(e.target.value)}/>

            { unit && <p>{inTime ? inTime : "--"} {unit}</p>}
            
            { warning && <p className="validation-warning">{warning}</p> }

            <br/>
            <button onClick={() => {
                setTimeTogether(`${inTime} ${unit}`);
                setWeddingPage(1)
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
                    setWeddingPage(3)
                }
            }}>Próxima</button>
        </div>
    
    )
}

export default TimeTogetherQ
