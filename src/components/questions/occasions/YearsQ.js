import { useState } from "react";

function YearsQ({tools: {setPage, setAge, age}}) {

    const [ inAge, setInAge ] = useState(age);

    const verifyAge = () => {
        const ageNum = parseInt(inAge);
        if(ageNum && ageNum >= 1 && ageNum <= 100) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <h1>Aniversário!</h1>
            <h2>Então já sabemos que está na hora dessa pessoa sortuda apagar algumas velinhas, mas de quantas velas exatamente estamos falando?</h2>
            <p>Quantos anos a pessoa a ser presenteada está fazendo?</p>
            <input type="number" name="age" id="yearsq_age" min="0" max="100" value={inAge} placeholder="anos" onChange={e => setInAge(e.target.value)}/>
            <p className="remove">adicionar popup indicando que o número deve ser preenchido e não pode ser superior a 100 ou menor que 1</p>
            <br/>

            <button onClick={() => {
                if(verifyAge()) {
                    setAge(inAge);
                    setPage({section: "inicio", index: 2})
                }
            }}>Anterior</button>
            <button onClick={() => {
                if(verifyAge()) {
                    setAge(inAge);
                    setPage({section: "bday", index: 1})
                }
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
