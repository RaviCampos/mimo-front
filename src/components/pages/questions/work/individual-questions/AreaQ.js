import { useEffect, useState } from "react";

function AreaQ({tools: { setWorkPage, area, setArea, giftedName }}) {

    const [ inArea, setInArea ] = useState(area ? area : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inArea])

    return (
<div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Com o que {giftedName} trabalha? Ou o que {giftedName} estuda?</h2>
                    <input type="text" placeholder="área" value={inArea} onChange={e => setInArea(e.target.value)} autoComplete="off"/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            setArea(inArea);
                            setWorkPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inArea) {
                                setWarning("Por favor, preencha a área")
                            } else {
                                setArea(inArea);
                                setWorkPage(5)
                            }
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AreaQ
