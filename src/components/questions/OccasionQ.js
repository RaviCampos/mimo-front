import { useState } from "react";

function OccasionQ({ tools: { setPage, setOccasion, occasion }}) {

    // const getSelectedRadio = () => {
    //     let radios = document.querySelectorAll("input[name='occasion']");
    //     radios = [...radios];
    //     radios = radios.filter(radio => radio.checked)
    //     return radios[0].value;
    // }

    const [ occasionInQ, setOccasionInQ ] = useState(occasion);

    return (
        <div>
            <h1>{occasionInQ}</h1>
            <h2>Esse presente é para alguma ocasião especial? Se sim, qual?</h2>
            <p>(não que deva existir ocasião especial para dar presente! kkkk)</p>

            <div>
                <div>
                    <input type="radio" name="occasion" id="occ_bday" value="aniversário do presenteado" checked={occasionInQ === "aniversário do presenteado"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_bday">Sim, é aniversário desta pessoa!</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_wedding" value="aniversário de namoro/casamento" checked={occasionInQ === "aniversário de namoro/casamento"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_wedding">Sim, é aniversário de namoro/casamento</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_offspring" value="vai ter um filho" checked={occasionInQ === "vai ter um filho"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_offspring">Sim, acabamos de descobrir que essa pessoa vai ter um filho</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_promotion" value="promoção no trabalho" checked={occasionInQ === "promoção no trabalho"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_promotion">Sim, essa pessoa acabou de ser promovida no trabalho</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_house" value="mudando para nova casa" checked={occasionInQ === "mudando para nova casa"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_house">Sim, essa pessoa está se mudando para uma casa nova!</label>
                </div>
                <div>
                    <input type="radio" name="occasion" id="occ_nop" value="não preciso de ocasiões" checked={occasionInQ === "não preciso de ocasiões"} onChange={e=> setOccasionInQ(e.target.value)}/>
                    <label htmlFor="occ_nop">Claro que não, não preciso de ocasiões especiais para dar presentes!</label>
                </div>
            </div>

            <button onClick={() => {
                setOccasion(occasionInQ);
                setPage(1)
            }}>Anterior</button>
            <button onClick={() => {
                setOccasion(occasionInQ);
                setPage(3)
            }}>Próxima</button>
        </div>
    )
}

export default OccasionQ
