import { useState } from "react";

function CoolSquareQ({tools: {setPage, coolness, intimacy, setCoolness, setBDayPage, setSection, futureBDay, setBDay, setGoToOccasionLastQ, bDayPage}}) {

    const [inCoolness, setInCoolness] = useState(coolness ? coolness : "");
    
    if(intimacy <= 5) {
        return (  
            <div className="all-margin">
                <div className="all-center">      
                    <div>
                        <h2>Coolness</h2>
                        <br/>
    
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setBDayPage(bDayPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const bday = {
                                ...futureBDay,
                                coolness: inCoolness
                            }
                            setBDay(bday)
                            setGoToOccasionLastQ(true)
                            setSection("common")
                            setPage(4);
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (  
            <div className="all-margin">
                <div className="all-center">      
                    <div>
                        <h2>Coolness</h2>
                        <br/>
    
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setBDayPage(bDayPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const bday = {
                                ...futureBDay,
                                coolness: inCoolness
                            }
                            setBDay(bday)
                            setGoToOccasionLastQ(true)
                            setSection("common")
                            setPage(4);
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoolSquareQ
