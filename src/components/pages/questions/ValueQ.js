import {useState, useEffect} from "react";

function ValueQ({tools: {setPage, setValue, value}}) {

    const min = 30; 
    
    let protoValue
    if(value) {
        protoValue = value.split(" - ").map(x => parseInt(x))
    } else {
        protoValue = [ "", ""]
    }
    const [ from, setFrom ] = useState(protoValue[0]);
    const [ to, setTo ] = useState(protoValue[1]);

    const [ warning, setWarning ] = useState(false);
    const [ alert, setAlert ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [from, to])

    useEffect(() => {
        if(to >= 1000) {
            setAlert("Nós também trabalhamos com presentes luxuosos! Só queremos ter certeza que você gostaria que o seu presente pudesse passar de 1000 reais. Se sim nós do mimolino ficamos muito felizes também!")
        } else if(to >= 500) {
            setAlert("Nós também trabalhamos com presentes luxuosos! Só queremos ter certeza que você gostaria que o seu presente pudesse chegar aos 500 reais. Se sim nós do mimolino ficamos muito felizes também!")
        } else {
            setAlert(false)
        }
    }, [to])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Você gostaria que esse presente estivesse dentro de que faixa de preço?</h2>
                    <p className="subtitle">Se você tem um valor exato em mente, basta responder mínimo e máximo com valores iguais.</p>
                    <p className="subtitle">Sem contar a taxa de entrega por enquanto</p>
                    
                    {alert && <p className="alert_green">{alert}</p>}
                    
                    <div className="valueq-flex">
                        <div className="width-280">
                            <div className="flex-between-middle">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_from">Mínimo</label>
                                <input type="number" name="value" id="value_from" value={from} min={1} onChange={e => setFrom(parseInt(e.target.value))} min="1" max="9999"/>
                            </div>
                            <div className="flex-between-middle small-space-top">
                                <label className="subtitle no-space-top no-space-down" htmlFor="value_to">Máximo</label>
                                <input type="number" name="value" id="value_to" value={to} min={1} onChange={e => setTo(parseInt(e.target.value))} min="1" max="9999"/>
                            </div>
                        </div>

                        <p className="subtitle bit-down no-space-down">De R${from ? from : "--"},00 até R${to ? to : "--"},00</p>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}
                    <br/>

                    <div className="prev-for">
                        <button onClick={() => {
                            setValue(`${from} - ${to}`);
                            setPage(5)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!from || !to) {
                                setWarning("Por favor, preencha os dois campos de valor")
                            } else if(from < min) {
                                setWarning("Nosso valor minimo é de 30 reais")
                            } else if(from > to ) {
                                setWarning("O valor máximo deve ser maior ou igual ao valor mínimo")
                            } else {
                                setValue(`${from} - ${to}`);
                                setPage(7)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValueQ
