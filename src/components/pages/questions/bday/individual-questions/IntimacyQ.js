import { useState } from "react";

function IntimacyQ({tools: {intimacy, setIntimacy, setBDayPage}}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : "");
    
    return (
        <div>
            <h2>Quão prómimos vocês são?</h2>
            <br/>

            <button onClick={() => {
                // if(verify()) {
                    setIntimacy(inIntimacy);
                    setBDayPage(2)
                // }
            }}>Anterior</button>
            <button onClick={() => {
                // if(verifyAge()) {
                    setIntimacy(inIntimacy);
                    setBDayPage(4)
                // }
            }}>Próxima</button>
        </div>
    )
}

export default IntimacyQ
