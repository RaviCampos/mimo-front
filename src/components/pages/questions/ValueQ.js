import {useState, useEffect, useCallback} from "react";

function ValueQ(setPage, setValue, value, giftedName) {
    const [ inValue, setInValue ] = useState(value ? value : 1);
    // const [ showWarning, setShowWarning ] = useState(false);

    // const verifyValue = useCallback(() => {
    //     const valueNum = parseInt(inValue);
    //     if(valueNum && valueNum >= 1 && valueNum <= 100) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }, [inValue]);

    // useEffect(() => {
    //     if(verifyValue()) {
    //         setShowWarning(false);
    //     } else {
    //         setShowWarning(true);
    //     }
    // }, [inValue, verifyValue])
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
            <h2>Quanto você gostaria de gastar nesse presente?</h2>
            <p>Você pode dizer um valor específico, como X reais, ou uma faixa de preço, entre X e Y reais.</p>
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
