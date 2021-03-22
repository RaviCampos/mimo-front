import {useState, useEffect, useCallback} from "react";

function ValueQ({tools: {setPage, setValue, value}}) {
    const [ inValue, setInValue ] = useState(value ? value : 1);

    let warning = "";
    if(inValue < 30) {
        warning = <p className="validation-warning">Nosso valor minimo é de 30 reais</p>
    } else if(inValue > 1000) {
        warning = <p className="validation-warning">Nós podemos trabalhar com presentes luxuosos, mas só quremos ter certeza que você gostaria de um presente no valor de 1000 reais</p>
    } else if(inValue > 500) {
        warning = <p className="validation-warning">Nós podemos trabalhar com presentes luxuosos, mas só quremos ter certeza que você gostaria de um presente no valor de 500 reais</p>
    }


    return (
        <div>
            <h2>Você gostaria que esse presente estivesse dentro de que faixa de preço?</h2>
            <p>Você pode dizer um valor específico, como X reais, ou uma faixa de preço, entre X e Y reais.</p>
            <p>Sem contar a taxa de entrega por enquanto</p>
            <input type="number" name="value" id="value" value={inValue} placeholder="anos" onChange={e => setInValue(e.target.value)}/>
            {warning}
            <p>R${inValue ? inValue : 0}, 00</p>
            <br/>

            <button onClick={() => {
                // if(verifyValue()) {
                    setValue(inValue);
                    setPage(5)
                // }
            }}>Anterior</button>
            <button onClick={() => {
                // if(verifyValue()) {
                    setValue(inValue);
                    setPage(7)
                // }
            }}>Próxima</button>
        </div>
    )
}

export default ValueQ
