import { useState } from "react";

function AdressQ({tools: { setPage, setAdress, adress}}) {
    let protoAdress
    if(adress) {
        protoAdress = adress.split(" && ")
        if(protoAdress.length > 1) {
            protoAdress = protoAdress.map(x => {
                const descriptionAndValue = x.split(": ")
                const value = descriptionAndValue[1];
                return value
            })
        }
    } else {
        protoAdress = [""]
    }
    const [ inAdress, setInAdress ] = useState(protoAdress[0]);
    const [ cep, setCep ] = useState(protoAdress[1] ? protoAdress[1] : "")

    const input = <div>
        <div>
            <label htmlFor="adress_cep">CEP</label>
            <input type="number" id="adress_cep" value={cep} onChange={e => setCep(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="adress_adress">Endereço</label>
            <input type="text" id="adress_adress" value={inAdress} onChange={e => setInAdress(e.target.value)}/>
        </div>
    </div>
    
    function changeWithdraw(inAddressValue) {
        setInAdress(inAddressValue);
        setCep("");
    }

    return (
        <div>
            <h2>Você prefere retirar o presente na asa norte conosco ou que ele seja entregue?</h2>
            <p className="validation-warning">mudar o tipo de input de cep para number sem setas, cep precisa ser requerido imperativamente ao tentar mudar de página</p>
            <div>
                <label htmlFor="withdraw_no">Prefiro que o presente seja entregue</label>
                <input type="radio" name="withdraw" id="withdraw_no" checked={inAdress === "retirada"} onChange={() => changeWithdraw("retirada")}/>
            </div>
            <div>
                <label htmlFor="withdraw_yes">Prefiro buscar o presente</label>
                <input type="radio" name="withdraw" id="withdraw_yes" checked={inAdress !== "retirada"} onChange={() => changeWithdraw("")}/>
            </div>
            {inAdress === "retirada" && <p>assim que o pedido for finalizado nós entraremos em contato para informar o local de retirada na asa norte</p>}
            {inAdress !== "retirada" && input}
            
            <button onClick={() => {
                if(inAdress === "retirada") {
                    setAdress(inAdress);
                } else {
                    setAdress(`endereço: ${inAdress} && cep: ${cep}`)
                }
                setPage(7)
            }}>Anterior</button>
            <button onClick={() => {
                if(inAdress === "retirada") {
                    setAdress(inAdress);
                } else {
                    setAdress(`endereço: ${inAdress} && cep: ${cep}`)
                }
                setPage(9)
            }}>Próxima</button>

        </div>
    )
}

export default AdressQ
