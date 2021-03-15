import { useState, useEffect } from "react";

function YearsQ({tools: {setBDayPage, setAge, age}}) {

    const [ inAge, setInAge ] = useState(age ? age : 1);
    const [ showWarning, setShowWarning ] = useState(false);

    const verifyAge = () => {
        const ageNum = parseInt(inAge);
        if(ageNum && ageNum >= 1 && ageNum <= 100) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if(verifyAge()) {
            setShowWarning(false);
        } else {
            setShowWarning(true);
        }
    })

    return (
        <div>
            <h1>Aniversário!</h1>
            <h2>Então já sabemos que está na hora dessa pessoa sortuda apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
            <p>Quantos anos a pessoa a ser presenteada está fazendo?</p>
            <input type="number" name="age" id="yearsq_age" min="1" max="100" value={inAge} placeholder="anos" onChange={e => setInAge(e.target.value)}/>
            <p className="remove">adicionar popup indicando que o número deve ser preenchido e não pode ser superior a 100 ou menor que 1</p>
            { showWarning && <p className="validation-warning">a idade precisa estar entre 1 e 100 anos, se o seu presente for para um bebê ou recém nascido vá para LINK</p> }
            <br/>

            <button onClick={() => {
                if(verifyAge()) {
                    setAge(inAge);
                    setBDayPage(0)
                }
            }}>Anterior</button>
            <button onClick={() => {
                if(verifyAge()) {
                    setAge(inAge);
                    setBDayPage(2)
                }
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
