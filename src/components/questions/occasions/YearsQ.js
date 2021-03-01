import { useState } from "react";

function YearsQ({tools: {setPage, setGiftedAge, giftedAge}}) {

    const [ age, setAge ] = useState(giftedAge);

    const verifyAge = () => {
        const ageNum = parseInt(age);
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
            <input type="number" name="age" id="yearsq_age" min="0" max="100" value={age} placeholder="anos" onChange={e => setAge(e.target.value)}/>
            <br/>

            <button onClick={() => {
                if(verifyAge()) {
                    setGiftedAge(age);
                    setPage({section: "inicio", index: 2})
                }
            }}>Anterior</button>
            <button onClick={() => {
                if(verifyAge()) {
                    setGiftedAge(age);
                    setPage({section: "bday", index: 1})
                }
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
