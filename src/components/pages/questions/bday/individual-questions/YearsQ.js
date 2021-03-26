import { useState, useEffect, useCallback} from "react";

function YearsQ({tools: {setBDayPage, setAge, age, giftedName}}) {

    let protoAge
    if(age) {
        protoAge = age.split(" ")
    } else {
        protoAge = ["", "anos"]
    }

    const [ inAge, setInAge ] = useState(protoAge[0]);
    const [ unit, setUnit ] = useState(protoAge[1]);

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [inAge])

    useEffect(() => {
        setWarning(false);
    }, [unit])

    function changeUnit(input) {
        setUnit(input)
        setInAge("")
    }

    return (
        <div>
            <h1>Aniversário!</h1>
            <h2>Então já sabemos que está na hora dessa pessoa sortuda apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
            <h3>{giftedName} está fazendo:</h3>
            <div>
                <label htmlFor="years_years">Mais de um ano</label>
                <input type="radio" name="years" id="years_years" checked={unit === "anos"} onChange={() => changeUnit("anos")}/>
            </div>
            <div>
                <label htmlFor="years_months">Menos de um ano</label>
                <input type="radio" name="years" id="years_months" checked={unit === "meses"} onChange={() => changeUnit("meses")}/>
            </div>
            <br/>
            {unit === "meses" && <p>É um pequeno ser!</p>}

            <h3>E quantos {unit}?</h3>
            <input type="number" name="age" id="yearsq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inAge} placeholder={unit} onChange={e => setInAge(e.target.value)}/>

            { unit && <p>{inAge ? inAge : "--"} {unit}</p>}
            
            { warning && <p className="validation-warning">{warning}</p> }

            <br/>
            <button onClick={() => {
                setAge(`${inAge} ${unit}`);
                setBDayPage(0)
            }}>Anterior</button>
            <button onClick={() => {
                if(!inAge) {
                    setWarning(`Por favor, preencha quantos ${unit} ${giftedName} está fazendo` )
                } else if(unit === "anos" && inAge < 1) {
                    setWarning("Se a pessoa está fazendo menos de um ano selecione 'meses' e depois indique quantos meses")
                } else if(unit === "anos" && inAge > 120) {
                    setWarning(`Anos precisam ser menores que 120`)
                } else if(unit === "meses" && inAge < 1) {
                    setWarning("O número de meses precisa ser pelo menos 1")
                } else if(unit === "meses" && inAge > 11) {
                    setWarning("O número máximo de meses é 11, se a pessoa está fazendo 12 meses, por favor, selecione anos e indique 1")
                } else {
                    setAge(`${inAge} ${unit}`);
                    setBDayPage(2)
                }
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
