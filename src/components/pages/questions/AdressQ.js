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
        if(inAdress !== "default" || cep || to) {
            setWarning(false);
        }
    }, [inAdress, cep, to])

    let name = giftedName.split(" -- ")

    if(name.length > 1) {
        name = name.join(" e ")
    } else {
        name = name[0]
    }

    const input = <div className="go-bit-down">
        <div>
            <label htmlFor="adress_cep" className="subtitle d-block no-space-down">CEP</label>
            <input type="number" id="address_cep" value={cep} onChange={e => setCep(e.target.value)} autoComplete="off" min="1" max="100000"/>
        </div>
        <div className="small-space-top">
            <label className="subtitle" htmlFor="adress_adress">Endereço</label>
            <textarea id="adress_adress" value={inAdress} onChange={e => setInAdress(e.target.value)} autoComplete="off"/>
        </div>

        <h3 className="subtitle bit-down small-space-down">Esse presente será etregue para você ou diretamente para {name}?</h3>
        <label className="radio-option">
            Para mim, quero eu mesmo entregar para {name} depois
            <input type="radio" id="to_gifter" checked={to === "presenteador"} onChange={() => setTo("presenteador")}/>
            <span className="checkmark"></span>
        </label>
        <label className="radio-option">
            Diretamente para {name}
            <input type="radio" id="to_gifted" checked={to === "presenteado"} onChange={() => setTo("presenteado")}/>
            <span className="checkmark"></span>
        </label>
    </div>
    
    function changeWithdraw(inAddressValue) {
        setInAdress(inAddressValue);
        setCep("");
        setTo("");
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Você prefere retirar o presente conosco ou que ele seja entregue?</h2>
                    <p className="remove">mudar o tipo de input de cep para number sem setas, cep precisa ser requerido imperativamente ao tentar mudar de página</p>
                    <label className="radio-option">
                        Prefiro que o presente seja entregue
                        <input type="radio" name="withdraw" id="withdraw_no" checked={inAdress !== "retirada" && inAdress !== "default"} onChange={() => changeWithdraw("")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option">
                        Prefiro buscar o presente
                        <input type="radio" name="withdraw" id="withdraw_yes" checked={inAdress === "retirada"} onChange={() => changeWithdraw("retirada")}/>
                        <span className="checkmark"></span>
                    </label>
                    {inAdress === "retirada" && <p>assim que o pedido for finalizado nós entraremos em contato e informaremos o local de retirada na asa norte</p>}
                    {inAdress !== "retirada" && inAdress !== "default" && input}

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
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
                                        setWarning(`Por favor, selecione se o presente será entregue para você ou para ${name}`)
                                    } else {
                                        setAdress(`endereço: ${inAdress} && cep: ${cep} && para: ${to}`)
                                        setPage(9)
                                    }
                                }
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressQ
