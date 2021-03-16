import { useState } from "react";

function IntimacyQ({tools: {intimacy, setIntimacy, setBDayPage}}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : "");
    
    return (
        <div>
            <h2>Agora me conta uma coisa, só entre a gente, o quão bem você conhece (GIFTED NAME)</h2>

            <div id="slider-break-house" class="second-house">
                <div class="shade"></div>
                <div id="slider-break" class="pointer">
                    <div id="slider-break-bar"></div>
                    <div id="slider-break-ball"></div>
                </div>
            </div>
            
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
