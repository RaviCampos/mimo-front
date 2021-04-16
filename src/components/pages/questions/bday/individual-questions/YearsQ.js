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
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Então já sabemos que está na hora dessa pessoa sortuda apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
                    <h3 className="bigger-subtitle bit-down">{giftedName} está fazendo:</h3>
                    <div>
                        <label className="radio-option small-radio">
                            Mais de um ano
                            <input className="bit-down" type="radio" name="years" id="years_years" checked={unit === "anos"} onChange={() => changeUnit("anos")}/>
                            <span class="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            Menos de um ano
                            <input type="radio" name="years" id="years_months" checked={unit === "meses"} onChange={() => changeUnit("meses")}/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <br/>
                    {unit === "meses" && <p className="p-absolute top-left">É um pequeno ser!</p>}

                    <h3 className="bigger-subtitle">E quantos {unit}?</h3>
                    <input type="number" name="age" id="yearsq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inAge} placeholder={unit} onChange={e => setInAge(e.target.value)} autocomplete="off"/>

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
            </div>
        </div>
    )
}

export default YearsQ
