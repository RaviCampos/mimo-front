import { useEffect, useState } from "react";

function OccasionQ({ tools: { setPage, setSection, setOccasion, occasion }}) {

    const [ radioValue, setRadioValue ] = useState(occasion);

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false);
    }, [radioValue])

    return (
        <div className="all-margin">
            <h2 className="title">Esse presente é para alguma ocasião especial? Se sim, qual?</h2>
            <p className="subtitle">(não que deva existir ocasião especial para dar presente! kkkk)</p>

            <div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_bday" value="aniversario" checked={radioValue === "aniversario"} onChange={e=> setRadioValue(e.target.value)}/>
                    <div className="inline">
                        <label htmlFor="occ_bday">Sim, é aniversário desta pessoa!</label>
                    </div>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_wedding" value="casamento/namoro" checked={radioValue === "casamento/namoro"} onChange={e => setRadioValue(e.target.value) }/>
                    <label htmlFor="occ_wedding">Sim, é aniversário de namoro/casamento</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_offspring" value="bebe" checked={radioValue === "bebe"} onChange={e=> setRadioValue(e.target.value)}/>
                    <label htmlFor="occ_offspring">Sim, acabamos de descobrir que essa pessoa vai ter um filho</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_promotion" value="trabalho" checked={radioValue === "trabalho"} onChange={e=> setRadioValue(e.target.value)}/>
                    <label htmlFor="occ_promotion">Sim, essa pessoa está atingindo uma conquista profissional/acadêmica</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_house" value="mudança" checked={radioValue === "mudança"} onChange={e=> setRadioValue(e.target.value)}/>
                    <label htmlFor="occ_house">Sim, essa pessoa está se mudando para uma casa nova</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_trip" value="viagem" checked={radioValue === "viagem"} onChange={e=> setRadioValue(e.target.value)}/>
                    <label htmlFor="occ_trip">Sim, vai fazer ou está planejando uma viagem</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="occasion" id="occ_nop" value="nenhuma" checked={radioValue === "nenhuma"} onChange={e=> setRadioValue(e.target.value)}/>
                    <label htmlFor="occ_nop">Claro que não, não preciso de ocasiões especiais para dar presentes!</label>
                </div>
            </div>

            {warning && <p className="validation-warning">{warning}</p>}

            <div className="prev-for">
                <button onClick={() => {
                    setOccasion(radioValue);
                    setPage(1)
                }}>Anterior</button>
                <button onClick={() => {
                    if(radioValue) {
                        setSection("occasion")
                        setOccasion(radioValue);
                        setPage(3)
                    } else {
                        setWarning("Por favor, selecione uma das opções para prosseguir")
                    }
                }}>Próxima</button>
            </div>
            
        </div>
    )
}

export default OccasionQ
