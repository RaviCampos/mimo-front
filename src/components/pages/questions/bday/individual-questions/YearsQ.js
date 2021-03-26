import { useState, useEffect, useCallback} from "react";

function YearsQ({tools: {setBDayPage, setAge, age}}) {

    let protoAge
    if(protoAge) {
        protoAge = age.split(" ")
    } else {
        protoAge = ["", "anos"]
    }

    const [ inAge, setInAge ] = useState(protoAge[0]);
    const [ unit, setUnit ] = useState(protoAge[1]);

    const [ warning, setWarning ] = useState(false);

    // const verifyAge = useCallback(() => {
    //     const ageNum = parseInt(inAge);
    //     if(ageNum && ageNum >= 1 && ageNum <= 100) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }, [inAge]);

    // useEffect(() => {
    //     if(verifyAge()) {
    //         setShowWarning(false);
    //     } else {
    //         setShowWarning(true);
    //     }
    // }, [inAge, verifyAge])

    function changeUnit(input) {
        setUnit(input)
        setInAge("")
    }

    return (
        <div>
            <h1>Aniversário!</h1>
            <h2>Então já sabemos que está na hora dessa pessoa sortuda apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
            <h3>A pessoa a ser presenteada está fazendo:</h3>
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

            <h3>Quantos {unit}?</h3>
            <input type="number" name="age" id="yearsq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inAge} placeholder={unit} onChange={e => setInAge(e.target.value)}/>

            { unit && <p>{inAge ? inAge : "--"} {unit}</p>}
            
            { warning && <p className="validation-warning">a idade precisa estar entre 1 e 100 anos, se o seu presente for para um bebê ou recém nascido vá para LINK</p> }

            <br/>
            <button onClick={() => {
                // if(verifyAge()) {
                    setAge(inAge);
                    setBDayPage(0)
                // }
            }}>Anterior</button>
            <button onClick={() => {
                // if(verifyAge()) {
                    setAge(inAge);
                    setBDayPage(2)
                // }
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
