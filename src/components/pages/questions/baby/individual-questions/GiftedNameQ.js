import { useState, useEffect } from "react"

function GiftedNameQ({tools: {setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ}}) {

    const [ who, setWho ] = useState(giftedName ? giftedName.who : "");
    const [ name, setName ] = useState(giftedName ? giftedName.name : "");

    const [ warning, setShowWarning ] = useState(false)

    useEffect(() => {
        if(who) {
            setShowWarning(false);
        }
    }, [who])

    function nameInput(q) {
        return <div>
            <p>{q}</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Uma criança é sempre uma alegria, né? Quem são os sortudos vão receber um presente seu?</h2>

                    <div>
                        
                        <label className="radio-option">
                            Um casal querido que está esperando um filho, seus nomes são:
                            <input type="radio" name="who" id="who_couple" value="Um casal querido que está esperando um filho" checked={ who === "Um casal querido que está esperando um filho"} onChange={e => {setWho(e.target.value); setName("")}}/>
                            <span className="checkmark"></span>
                        </label>
                        
                        {who === "Um casal querido que está esperando um filho" && nameInput("Seus nomes são?")}

                        <label className="radio-option">
                            Na verdade é um (a) futuro (a) Mãe / Pai Solo e seu nome é: (resposta curta)
                            <input type="radio" name="who" id="who_solo-parent" value="Na verdade é um (a) futuro (a) Mãe / Pai Solo" checked={ who === "Na verdade é um (a) futuro (a) Mãe / Pai Solo"} onChange={e => {setWho(e.target.value); setName("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        {who === "Na verdade é um (a) futuro (a) Mãe / Pai Solo" && nameInput("Sua/seu nome é?")}

                        <label className="radio-option">
                            Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho
                            <input type="radio" name="who" id="who_self-parent" value="Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" checked={ who === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho"} onChange={e => {setWho(e.target.value); setName("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        {who === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" && nameInput("Parabéns! Qual o nome da pessoa que está dividindo essa alegria com você?")}

                    </div>

                    {/* <input className="bit-down" type="text" value={inGifted} onChange={e => setInGifted(e.target.value)} placeholder="nome" autoComplete="off"/> */}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                    <div className="prev-for go-down">
                        <button onClick={() => {
                            const baby = {
                                ...futureBaby,
                                giftedName: {
                                    who,
                                    name
                                }
                            }
                            setBaby(baby)
                            setGoToOccasionLastQ(false)
                            setSection("common")
                            setPage(2);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!who) {
                                setShowWarning("Por favor, escolha uma das opções acima");
                            } else if(!name) {
                                setShowWarning("Por favor preencha o espaço do(s) nome(s)");
                            } else {
                                setGiftedName({
                                    who,
                                    name
                                })
                                setBabyPage(1)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ
