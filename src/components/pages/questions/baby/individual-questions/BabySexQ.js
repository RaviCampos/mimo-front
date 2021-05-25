import { useState, useEffect } from "react"

function BabySexQ({tools: {setBabyPage, setBabySex, babySex, parentType}}) {

    const [ inBabySex, setInBabySex ] = useState(babySex ? (babySex.babySex ? babySex.babySex : "") : "")
    const [ babyName, setBabyName ] = useState(babySex ? (babySex.babyName ? babySex.babyName : "") : "")

    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [inBabySex, babyName])

    function setBoth(str) {
        setInBabySex(str);
        setBabyName("")
    }

    // babySex = {
    //     babySex,
    //     babyName
    // }
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Essa pode parecer uma pergunta brega ou ultrapassada, mas você sabe o sexo do bebê?</h2>

                    <div>
                        <label className="radio-option small-radio">
                            Ainda não, estamos todos aguardando a revelação
                            <input type="radio" name="babySex" id="babySex_waiting" value="Ainda não, estamos todos aguardando a revelação" checked={inBabySex === "Ainda não, estamos todos aguardando a revelação"} onChange={e=> setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            Ainda não, vai ser uma surpresa o que importa é que venha com saúde, não é mesmo?
                            <input type="radio" name="babySex" id="babySex_surprise" value="Ainda não, vai ser uma surpresa o que importa é que venha com saúde, não é mesmo?" checked={inBabySex === "Ainda não, vai ser uma surpresa o que importa é que venha com saúde, não é mesmo?"} onChange={e => setBoth(e.target.value) }/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            Ainda não, está muito cedo
                            <input type="radio" name="babySex" id="babySex_soong" value="Ainda não, está muito cedo" checked={inBabySex === "Ainda não, está muito cedo"} onChange={e=> setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-option small-radio">
                            Sim, será uma menina
                            <input type="radio" name="babySex" id="babySex_girl" value="Sim, será uma menina" checked={inBabySex === "Sim, será uma menina"} onChange={e=> setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        { inBabySex === "Sim, será uma menina" &&
                            <div>
                                <p>Uma menina, que maravilha! E ela já tem nome? Se sim, me conta por favor</p>
                                <input type="text" value={babyName} onChange={e => setBabyName(e.target.value)}/>
                            </div>
                        }
                        <label className="radio-option small-radio">
                            Sim, será um menino
                            <input type="radio" name="babySex" id="babySex_boy" value="Sim, será um menino" checked={inBabySex === "Sim, será um menino"} onChange={e=> setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        { inBabySex === "Sim, será um menino" &&
                            <div>
                                <p>Um rapazinho, que maravilha! E ele já tem nome? Se sim, me conta por favor</p>
                                <input type="text" value={babyName} onChange={e => setBabyName(e.target.value)}/>
                            </div>
                        }
                        <label className="radio-option small-radio">
                            O casal genuinamente não se importa com o sexo do bebê, ele deve ser criado de forma agênero
                            <input type="radio" name="babySex" id="babySex_agender" value="O casal genuinamente não se importa com o sexo do bebê, ele deve ser criado de forma agênero" checked={inBabySex === "O casal genuinamente não se importa com o sexo do bebê, ele deve ser criado de forma agênero"} onChange={e=> setBoth(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                        { inBabySex === "O casal genuinamente não se importa com o sexo do bebê, ele deve ser criado de forma agênero" &&
                            <div>
                                <p>Legal! E a criança já tem nome? Se sim, me conta por favor</p>
                                <input type="text" value={babyName} onChange={e => setBabyName(e.target.value)}/>
                            </div>
                        }

                        {warning && <p className="validation-warning">{warning}</p>}

                    </div>
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setBabySex({
                                babySex: inBabySex,
                                babyName
                            });
                            setBabyPage(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" ? 4 : 6)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inBabySex) {
                                setWarning("Por favor, selecione uma opção")
                            } else if((inBabySex === "Sim, será uma menina" || inBabySex === "Sim, será um menino" || inBabySex === "O casal genuinamente não se importa com o sexo do bebê, ele deve ser criado de forma agênero") && !babyName) {
                                setWarning("Por favor, preencha o nome da criança")
                            } else {
                                setBabySex({
                                    babySex: inBabySex,
                                    babyName
                                });
                                setBabyPage(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" ? 6 : 8)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default BabySexQ
