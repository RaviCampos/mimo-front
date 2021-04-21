import { useEffect, useState } from "react";

function ContactQ({tools: { setPage, setContact, contact }}) {
    let protoContact

    if(contact) {
        protoContact = contact.split(": ")
    } else {
        protoContact = [""]
    }
    const [ contactType, setContactType ] = useState(protoContact[0])
    const [ inContact, setInContact ] = useState(protoContact[1] ? protoContact[1] : "")

    const [ showWarning, setShowWarning ] = useState(false);
    useEffect(() => {
        if(inContact || contactType) {
            setShowWarning(false);
        }
    }, [inContact, contactType])

    const [ question, setQuestion ] = useState("");
    useEffect(() => {
        if(contactType === "email") {
            setQuestion("E qual o seu email?")
        } else if(contactType === "whatsapp") {
            setQuestion("E qual o seu número de WhatsApp?")
        } else if(contactType === "instagram") {
            setQuestion("E qual é o seu @ no Instagram?") 
        } else {
            setQuestion("")
        }
    }, [contactType])

    function changeContact(input) {
        setContactType(input);
        setInContact("")
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Ok! Já temos todas as informações que precisamos!</h2>
                    <h3 className="subtitle small-space-top">Agora o mimolino vai pensar beeeem e escolher 3 opções de presentes incríveis e exclusivas para essa pessoa sensacional que você descreveu!</h3>
                    <h3 className="subtitle">Qual é a melhor forma de te enviar essas opções?</h3>

                    <div>
                        <label className="radio-option">
                            Email
                            <input type="radio" name="contact" id="contact_email" checked={contactType === "email"} onChange={() => changeContact("email")}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option bit-down">
                            WhatsApp
                            <input type="radio" name="contact" id="contact_wpp" checked={contactType === "whatsapp"} onChange={() => changeContact("whatsapp")}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option bit-down">
                            DM no instagram
                            <input type="radio" name="contact" id="contact_instagram" checked={contactType === "instagram"} onChange={() => changeContact("instagram")}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {question && <div>
                        <h4 className="subtitle bit-down small-space-down">{question}</h4>
                        <input type="text" value={inContact} onChange={e => setInContact(e.target.value)}/>
                    </div>}
                    
                    <h3>Por favor, confira se o contato está correto mesmo, se ele não estiver correto não poderemos continuar a montar o seu presente</h3>

                    {showWarning && <p className="validation-warning no-space-top">{showWarning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                                setContact(`${contactType}: ${inContact}`);
                                setPage(8)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inContact && contactType) {
                                setContact(`${contactType}: ${inContact}`);
                                setPage(10)
                            } else if(!contactType) {
                                setShowWarning("Por favor, selecione a plataforma para contato");
                            } else {
                                setShowWarning("Por favor, insira o seu contato pessoal")
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactQ
