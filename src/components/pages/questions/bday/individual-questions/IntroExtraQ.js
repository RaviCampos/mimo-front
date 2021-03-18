import { useState } from "react";

function IntroExtraQ({tools: {introExtra, intimacy, setIntroExtra, setBDayPage, giftedName}}) {
    
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra ? introExtra : "Até que vai ter uma festinha no zoom mas eu não tenho mais saco para isso, vou só mandar o presente mesmo")

    let question = <p>Bunda cagada</p>
    if(intimacy <= 5 ) {

        question = <div>
            <h2>Comemorar mais um ano de alguém querido é sempre especial, né? Para {giftedName} esse ano vai rolar alguma festa no zoom, um encontro a céu aberto, alguma comemoração à la pandemia?</h2>
            <div>
                <div>
                    <input type="radio" name="introExtra" id="ie_bday" value="Até que vai ter uma festinha no zoom mas eu não tenho mais saco para isso, vou só mandar o presente mesmo" checked={introExtra === "Até que vai ter uma festinha no zoom mas eu não tenho mais saco para isso, vou só mandar o presente mesmo"} onChange={e=> setInIntroExtra(e.target.value)}/>
                    <label htmlFor="occ_bday">Até que vai ter uma festinha no zoom mas eu não tenho mais saco para isso, vou só mandar o presente mesmo</label>
                </div>
            </div>
        </div>

    } else {

        question = <div>
            <p>Go fuck yourself</p>
        </div>

    }

    
    return (
        <div>
            {question}

            <br/>

            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setBDayPage(3)
            }}>Anterior</button>
            <button onClick={() => {
                setIntroExtra(inIntroExtra);
                setBDayPage(5)
            }}>Próxima</button>
        </div>
    )
}

export default IntroExtraQ
