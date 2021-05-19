import { useState, useEffect } from "react"

function GiftedNameQ({tools: {setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ}}) {

    const [ parentType, setParentType ] = useState(giftedName ? giftedName.parentType : "");
    const [ name, setName ] = useState(giftedName ? typeof giftedName.name === "string" ? giftedName.name : undefined : undefined);

    const [ nameA, setNameA ] = useState(giftedName ? typeof giftedName.name === "object" ? giftedName.name.nameA : undefined : undefined)
    const [ nameB, setNameB ] = useState(giftedName ? typeof giftedName.name === "object" ? giftedName.name.nameB : undefined : undefined)

    const [ warning, setShowWarning ] = useState(false)

    useEffect(() => {
        // if(parentType) {
            setShowWarning(false);
        // }
    }, [parentType, name, nameA, nameB])

    function nameInput(q) {
        return <div>
            <p>{q}</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    }

    function allUndefined() {
        setName(undefined)
        setNameA(undefined)
        setNameB(undefined)
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Uma criança é sempre uma alegria, né? Quem são os sortudos vão receber um presente seu?</h2>

                    <div>
                        
                        <label className="radio-option">
                            Um casal querido que está esperando um filho, seus nomes são:
                            <input type="radio" name="parentType" id="parentType_couple" value="Um casal querido que está esperando um filho" checked={ parentType === "Um casal querido que está esperando um filho"} onChange={e => {setParentType(e.target.value); allUndefined();}}/>
                            <span className="checkmark"></span>
                        </label>
                        
                        {parentType === "Um casal querido que está esperando um filho" && 
                            <div>
                                <p>Seus nomes são:</p>
                                <input type="text" value={nameA} onChange={e => setNameA(e.target.value)}/>
                                <p>E</p>
                                <input type="text" value={nameB} onChange={e => setNameB(e.target.value)}/>
                            </div>
                        }

                        <label className="radio-option">
                            Na verdade é um (a) futuro (a) Mãe / Pai Solo e seu nome é: (resposta curta)
                            <input type="radio" name="parentType" id="parentType_solo-parent" value="Na verdade é um (a) futuro (a) Mãe / Pai Solo" checked={ parentType === "Na verdade é um (a) futuro (a) Mãe / Pai Solo"} onChange={e => {setParentType(e.target.value); allUndefined()}}/>
                            <span className="checkmark"></span>
                        </label>

                        {parentType === "Na verdade é um (a) futuro (a) Mãe / Pai Solo" && nameInput("Seu nome é?")}

                        <label className="radio-option long-option">
                            Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho
                            <input type="radio" name="parentType" id="parentType_self-parent" value="Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" checked={ parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho"} onChange={e => {setParentType(e.target.value); allUndefined()}}/>
                            <span className="checkmark"></span>
                        </label>

                        {parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho" && nameInput("Parabéns! Qual o nome da pessoa que está dividindo essa alegria com você?")}

                    </div>

                    {/* <input className="bit-down" type="text" value={inGifted} onChange={e => setInGifted(e.target.value)} placeholder="nome" autoComplete="off"/> */}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            const baby = {
                                ...futureBaby,
                                giftedName: {
                                    parentType,
                                    name: parentType === "Um casal querido que está esperando um filho" ? {nameA, nameB} : name
                                }
                            }
                            setBaby(baby)
                            setGoToOccasionLastQ(false)
                            setSection("common")
                            setPage(2);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!parentType) {
                                setShowWarning("Por favor, escolha uma das opções acima");
                            } else if(parentType === "Um casal querido que está esperando um filho" && (!nameA || !nameB)) {
                                setShowWarning("Por favor preencha os espaços dos nomes");
                            } else if((parentType === "Na verdade é um (a) futuro (a) Mãe / Pai Solo" || parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") && !name) {
                                setShowWarning("Por favor preencha o espaço do nome");
                            } else {
                                setGiftedName({
                                    parentType,
                                    name: parentType === "Um casal querido que está esperando um filho" ? {nameA, nameB} : name
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
