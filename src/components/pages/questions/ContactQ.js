import { useState } from "react";

function ContactQ({tools: { setPage, setContact, contact }}) {

    const [ inContact, setInContact ] = useState(contact ? contact : "")
    
    return (
        <div>
            <button onClick={() => {
                    setContact(inContact);
                    setPage(8)
            }}>Anterior</button>
            <button onClick={() => {
                    setContact(inContact);
                    setPage(10)
            }}>Próxima</button>
        </div>
    )
}

export default ContactQ
