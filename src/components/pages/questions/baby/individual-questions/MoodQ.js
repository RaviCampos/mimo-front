import { useState, useEffect } from "react"

function MoodQ({tools: {setBabyPage, setMood, mood, parentType, isBorn, isFirstSon, name, gifterName}}) {

    const [ inMood, setInMood ] = useState(mood)

    const [ warning, setWarning ] = useState(false)
    
    useEffect(() => {
        setWarning(false)
    }, [inMood])

    // 12 question variations
    
    if(parentType === "Um casal querido que está esperando um filho") {
        if(isBorn) {
            if(isFirstSon) {

            } else {

            }
        } else {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name.nameA} e {name.nameB} agora?</h2>
                                <div>
                                    <label className="radio-option">
                                        Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis
                                        <input type="radio" name="mood" id="mood_nervous" value="Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis" checked={inMood === "Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value="Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde" checked={inMood === "Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(7)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(9)
                                        } else {
                                            setWarning("Por favor, selecione as duas idades")
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name.nameA} e {name.nameB} agora?</h2>
                                <div>
                                    <label className="radio-option">
                                        Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos
                                        <input type="radio" name="mood" id="mood_nervous" value="Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos" checked={inMood === "Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value="Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde" checked={inMood === "Ah, eles nasceram para isso, estão super tranquilos levando tudo com muita naturalidade. O importante é que venha com saúde"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(7)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(9)
                                        } else {
                                            setWarning("Por favor, selecione as duas idades")
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        
    } else if(parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {        
        if(isBorn) {
            if(isFirstSon) {

            } else {

            }
        } else {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name} agora?</h2>
                                <div>
                                    <label className="radio-option">
                                        {name} parece ter tudo sob controle, leu muito, assistiu a tudo quanto era documentário de parto e está preparado(a) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, leram muito assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, leram muito assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que {name} será incrível
                                        <input type="radio" name="mood" id="mood_nervous" value={`Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que ${name} será incrível`} checked={inMood === `Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que ${name} será incrível`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar" checked={inMood === "Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Ah, {name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde`} checked={inMood === `Ah, ${name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(7)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(9)
                                        } else {
                                            setWarning("Por favor, selecione as duas idades")
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name} agora?</h2>
                                <div>
                                    <label className="radio-option">
                                        {name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`${name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier`} checked={inMood === `${name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Mesmo já tendo um filho esse é um momento delicado, {name} está super nervosa(o) e apreensiva(o)
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado, ${name} está super nervosa(o) e apreensiva(o)`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado, ${name} está super nervosa(o) e apreensiva(o)`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option">
                                        Ah, {name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde`} checked={inMood === `Ah, ${name} nasceu para isso, está super tranquila(o) levando tudo com muita naturalidade. O importante é que venha com saúde`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(7)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(9)
                                        } else {
                                            setWarning("Por favor, selecione as duas idades")
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    } else {
        
    }
}

export default MoodQ
