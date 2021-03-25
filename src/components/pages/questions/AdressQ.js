import { useState, useEffect } from "react";

function AdressQ({tools: { setPage, setAdress, adress, giftedName }}) {
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
        protoAdress = ["default"]
    }
    const [ inAdress, setInAdress ] = useState(protoAdress[0]);
    const [ cep, setCep ] = useState(protoAdress[1] ? protoAdress[1] : "")
    const [ to, setTo ] = useState(protoAdress[2] ? protoAdress[2] : "")

    const [ warning, setWarning ] = useState(false);
    useEffect(() => {
        if(inAdress !== "default") {
            setWarning(false);
        }
    }, [inAdress])

    useEffect(() => {
        if(cep) {
            setWarning(false)
        }
    }, [cep])

    useEffect(() => {
        if(to) {
            setWarning(false)
        }
    }, [to])

    const input = <div>
        <div>
            <label htmlFor="adress_cep">CEP</label>
            <input type="number" id="adress_cep" value={cep} onChange={e => setCep(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="adress_adress">Endereço</label>
            <input type="text" id="adress_adress" value={inAdress} onChange={e => setInAdress(e.target.value)}/>
        </div>

        <h3>Esse presente será etregue para você ou diretamente para {giftedName}</h3>
        <div>
            <label htmlFor="to_gifter">Para mim, quero eu mesmo entregar para {giftedName} depois</label>
            <input type="radio" id="to_gifter" checked={to === "presenteador"} onChange={() => setTo("presenteador")}/>
        </div>
        <div>
            <label htmlFor="to_gifted">Diretamente para {giftedName}</label>
            <input type="radio" id="to_gifted" checked={to === "presenteado"} onChange={() => setTo("presenteado")}/>
        </div>
    </div>
    
    function changeWithdraw(inAddressValue) {
        setInAdress(inAddressValue);
        setCep("");
        setTo("");
    }

    return (
        <div>
            <h2>Você prefere retirar o presente conosco ou que ele seja entregue?</h2>
            <p className="validation-warning">mudar o tipo de input de cep para number sem setas, cep precisa ser requerido imperativamente ao tentar mudar de página</p>
            <div>
                <label htmlFor="withdraw_no">Prefiro que o presente seja entregue</label>
                <input type="radio" name="withdraw" id="withdraw_no" checked={inAdress !== "retirada" && inAdress !== "default"} onChange={() => changeWithdraw("")}/>
            </div>
            <div>
                <label htmlFor="withdraw_yes">Prefiro buscar o presente</label>
                <input type="radio" name="withdraw" id="withdraw_yes" checked={inAdress === "retirada"} onChange={() => changeWithdraw("retirada")}/>
            </div>
            {inAdress === "retirada" && <p>assim que o pedido for finalizado nós entraremos em contato e informaremos o local de retirada na asa norte</p>}
            {inAdress !== "retirada" && inAdress !== "default" && input}

            {warning && <p className="validation-warning">{warning}</p>}
            
            <button onClick={() => {
                if(inAdress === "retirada") {
                    setAdress(inAdress);
                } else {
                    setAdress(`endereço: ${inAdress} && cep: ${cep} && para: ${to}`)
                }
                setPage(7)
            }}>Anterior</button>
            <button onClick={() => {
                if(inAdress === "default") {
                    setWarning("Por favor, escolha se o seu presente será retirado ou entregue")
                } else {
                    if(inAdress === "retirada") {
                        setAdress(inAdress);
                        setPage(9)
                    } else {
                        if(!cep) {
                            setWarning("Por favor, preencha o seu CEP")
                        } else if(!inAdress) {
                            setWarning("Por favor, preencha seu endereço")
                        } else if(!to) {
                            setWarning(`Por favor, selecione se o presente será entregue para você ou para ${giftedName}`)
                        } else {
                            setAdress(`endereço: ${inAdress} && cep: ${cep} && para: ${to}`)
                            setPage(9)
                        }
                    }
                }
            }}>Próxima</button>

        </div>
    )
}

export default AdressQ
