import { useState } from "react"

function CoolnessQ({tools: {setBabyPage, setCoolness, coolness, parentType}}) {
    const [inCoolness, setInCoolness] = useState(coolness ? coolness : "");

    if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
        return (        
            <div>
                <h2>Coolness</h2>
                <br/>
    
                <button onClick={() => {
                    setCoolness(inCoolness);
                    setBabyPage(5)
                }}>Anterior</button>
                <button onClick={() => {
                    setCoolness(inCoolness);
                    setBabyPage(7)
                }}>Próxima</button>
            </div>
        )
    } else {
        return (        
            <div>
                <h2>Coolness</h2>
                <br/>
    
                <button onClick={() => {
                    setCoolness(inCoolness);
                    setBabyPage(7)
                }}>Anterior</button>
                <button onClick={() => {
                    setCoolness(inCoolness);
                    setBabyPage(9)
                }}>Próxima</button>
            </div>
        )
    }
    
}

export default CoolnessQ
