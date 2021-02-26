import { useState, useEffect } from "react";

function OccasionQ({ tools: { setPage, setOccasion, occasion, section }}) {

    const getSelectedRadio = () => {
        let radios = document.querySelectorAll("input[name='occasion']");
        radios = [...radios];
        radios = radios.filter(radio => radio.checked)
        return JSON.parse(radios[0].value);
    }

    const [ radioValue, setRadioValue ] = useState({occasion, section});

    useEffect(() => {
        console.log(radioValue);
    });

    return (
        <div>
            <h2>Esse presente é para alguma ocasião especial? Se sim, qual?</h2>
            <p>(não que deva existir ocasião especial para dar presente! kkkk)</p>

            <div>
                <div>
                    <input type="radio" name="occasion" id="occ_bday" value='{"occasion":"aniversário do presenteado", "section": "bday"}' checked={radioValue.occasion === "aniversário do presenteado"} onChange={e=> setRadioValue(JSON.parse(e.target.value))}/>
                    <label htmlFor="occ_bday">Sim, é aniversário desta pessoa!</label>
                </div>
                {/* <div>
                    <input type="radio" name="occasion" id="occ_wedding" value='{"occasion":"aniversário de namoro/casamento", "section":"daiting bday"}' checked={radioValue.occasion === "aniversário de namoro/casamento"} onChange={e=> setRadioValue(JSON.parse(e.target.value)) }/>
                    <label htmlFor="occ_wedding">Sim, é aniversário de namoro/casamento</label>
                </div> */}
                <div>
                    <input type="radio" name="occasion" id="occ_offspring" value='{"occasion":"vai ter um filho", "section": "new offspring"}' checked={radioValue.occasion === "vai ter um filho"} onChange={e=> setRadioValue(JSON.parse(e.target.value))}/>
                    <label htmlFor="occ_offspring">Sim, acabamos de descobrir que essa pessoa vai ter um filho</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_promotion" value='{"occasion": "promoção no trabalho", "section": "promotion"}' checked={radioValue.occasion === "promoção no trabalho"} onChange={e=> setRadioValue(JSON.parse(e.target.value))}/>
                    <label htmlFor="occ_promotion">Sim, essa pessoa acabou de ser promovida no trabalho</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_house" value='{"occasion":"mudando para nova casa", "section": "new home"}' checked={radioValue.occasion === "mudando para nova casa"} onChange={e=> setRadioValue(JSON.parse(e.target.value))}/>
                    <label htmlFor="occ_house">Sim, essa pessoa está se mudando para uma casa nova!</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_nop" value='{"occasion": "não preciso de ocasiões", "section": "no occasion"}' checked={radioValue.occasion === "não preciso de ocasiões"} onChange={e=> setRadioValue(JSON.parse(e.target.value))}/>
                    <label htmlFor="occ_nop">Claro que não, não preciso de ocasiões especiais para dar presentes!</label>
                </div>
            </div>

            <button onClick={() => {
                const radioSelected = getSelectedRadio();
                setOccasion(radioSelected.occasion);
                setPage({section: "inicio", index: 1})
            }}>Anterior</button>
            <button onClick={() => {
                const radioSelected = getSelectedRadio();
                setOccasion(radioSelected.occasion);
                setPage({section: radioSelected.section, index: 0})
            }}>Próxima</button>
        </div>
    )
}

export default OccasionQ
