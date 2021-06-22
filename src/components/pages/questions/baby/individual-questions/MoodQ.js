import { useState, useEffect } from "react"

function MoodQ({tools: {babyPage, setBabyPage, setMood, mood, parentType, isBorn, isFirstSon, name, gifterName, childName}}) {

    const [ inMood, setInMood ] = useState(mood)

    const [ warning, setWarning ] = useState(false)
    
    useEffect(() => {
        setWarning(false)
    }, [inMood])

    // 12 question variations
    
    if(parentType === "Um casal querido que está esperando um filho") {
        if(isBorn) {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como estão os corações de {name.nameA} e {name.nameB} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que {childName} está com eles, {name.nameA} e {name.nameB} estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que ${childName} está com eles, ${name.nameA} e ${name.nameB} estão preparados para o que der e vier`} checked={inMood === `Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que ${childName} está com eles, ${name.nameA} e ${name.nameB} estão preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que estão checando a respiração do bebê o tempo todo
                                        <input type="radio" name="mood" id="mood_nervous" value="Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que estão checando a respiração do bebê o tempo todo" checked={inMood === "Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que estão checando a respiração do bebê o tempo todo"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Ah, {name.nameA} e {name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name.nameA} e ${name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável`} checked={inMood === `Ah, ${name.nameA} e ${name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
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
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como estão os corações de {name.nameA} e {name.nameB} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que {childName} está com eles, {name.nameA} e {name.nameB} estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que ${childName} está com eles, ${name.nameA} e ${name.nameB} estão preparados para o que der e vier`} checked={inMood === `Eles parecem ter tudo sob controle. Estavam apreensivos com a espera, mas agora que ${childName} está com eles, ${name.nameA} e ${name.nameB} estão preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que {name.nameA} e {name.nameB} estão checando a respiração do bebê o tempo todo
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que ${name.nameA} e ${name.nameB} estão checando a respiração do bebê o tempo todo`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que ${name.nameA} e ${name.nameB} estão checando a respiração do bebê o tempo todo`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Ah, {name.nameA} e {name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name.nameA} e ${name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável`} checked={inMood === `Ah, ${name.nameA} e ${name.nameB} nasceram para isso, estão super tranquilos levando tudo com muita naturalidade, é admirável`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {   
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name.nameA} e {name.nameB} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, leram muito, assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis
                                        <input type="radio" name="mood" id="mood_nervous" value="Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis" checked={inMood === "Sabe como são pais de primeira viagem, né? Estão super nervosos e apreensivos, mas tenho certeza que serão pais incríveis"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
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
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
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
                                    <label className="radio-option long-option">
                                        Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, não são mais pais de primeira viagem e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos
                                        <input type="radio" name="mood" id="mood_nervous" value="Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos" checked={inMood === "Mesmo já tendo filhos esse é um momento delicado, estão super nervosos e apreensivos"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Estão 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
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
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
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
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        {name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que {childName} está com {name}, ele(a) está preparado(a) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`${name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que ${childName} está com ${name}, ele(a) está preparado(a) para o que der e vier`} checked={inMood === `${name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que ${childName} está com ${name}, ele(a) está preparado(a) para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que {name} está checando a respiração do bebê o tempo todo
                                        <input type="radio" name="mood" id="mood_nervous" value={`Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que ${name} está checando a respiração do bebê o tempo todo`} checked={inMood === `Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, tenho certeza que ${name} está checando a respiração do bebê o tempo todo`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Ah, {name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável`} checked={inMood === `Ah, ${name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {   
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
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
                                    <label className="radio-option long-option">
                                        {name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que {childName} está com {name}, ele(a) está preparado(a) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`${name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que ${childName} está com ${name}, ele(a) está preparado(a) para o que der e vier`} checked={inMood === `${name} parece ter tudo sob controle. Estava apreensivo(a) com a espera, mas agora que ${childName} está com ${name}, ele(a) está preparado(a) para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que {name} está checando a respiração do bebê o tempo todo
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que ${name} está checando a respiração do bebê o tempo todo`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado. Pais ficam sempre super nervosos e apreensivos, tenho certeza que ${name} está checando a respiração do bebê o tempo todo`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Está 100% equipado(a), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Ah, {name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável
                                        <input type="radio" name="mood" id="mood_natural" value={`Ah, ${name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável`} checked={inMood === `Ah, ${name} nasceu para isso, está super tranquilo(a) levando tudo com muita naturalidade, é admirável`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {   
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o coração de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        {name} parece ter tudo sob controle, leu muito, assistiu a tudo quanto era documentário de parto e está preparado(a) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value="Eles parecem ter tudo sob controle, leram muito assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier" checked={inMood === "Eles parecem ter tudo sob controle, leram muito assistiram a tudo quanto era documentário de parto e estão preparados para o que der e vier"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que {name} será incrível
                                        <input type="radio" name="mood" id="mood_nervous" value={`Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que ${name} será incrível`} checked={inMood === `Sabe como são pais de primeira viagem, né? Sempre super nervosos e apreensivos, mas tenho certeza que ${name} será incrível`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar" checked={inMood === "Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
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
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
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
                                    <label className="radio-option long-option">
                                        {name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`${name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier`} checked={inMood === `${name} parece ter tudo sob controle, não é marinheiro de primeira viagem e está preparada(o) para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo um filho esse é um momento delicado, {name} está super nervosa(o) e apreensiva(o)
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado, ${name} está super nervosa(o) e apreensiva(o)`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado, ${name} está super nervosa(o) e apreensiva(o)`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar
                                        <input type="radio" name="mood" id="mood_equiped" value="Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar" checked={inMood === "Está 100% equipada(o), o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
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
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
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
        if(isBorn) {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o seu coração e o de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Temos tudo sob controle. Agora que temos {childName} conosco estamos preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Temos tudo sob controle. Agora que temos ${childName} conosco estamos preparados para o que der e vier`} checked={inMood === `Temos tudo sob controle. Agora que temos ${childName} conosco estamos preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena
                                        <input type="radio" name="mood" id="mood_nervous" value={`Sabe como são pais de primeira viagem, né? Estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena`} checked={inMood === `Sabe como são pais de primeira viagem, né? Estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços
                                        <input type="radio" name="mood" id="mood_equiped" value="Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços" checked={inMood === "Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível
                                        <input type="radio" name="mood" id="mood_natural" value={`Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível`} checked={inMood === `Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {   
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
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
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o seu coração e o de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Temos tudo sob controle. Agora que temos {childName} conosco estamos preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Temos tudo sob controle. Agora que temos ${childName} conosco estamos preparados para o que der e vier`} checked={inMood === `Temos tudo sob controle. Agora que temos ${childName} conosco estamos preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo um filho esse é um momento delicado, estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado, estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado, estamos checando a respiração do bebê o tempo todo. Cada risada, cada aperto no dedão faz tudo valer a pena`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços
                                        <input type="radio" name="mood" id="mood_equiped" value="Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços" checked={inMood === "Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets dos quais nunca tinha ouvido falar, e mesmo assim acho que precisamos de reforços"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível
                                        <input type="radio" name="mood" id="mood_natural" value={`Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível`} checked={inMood === `Modéstia a parte, nascemos para isso. Estamos bem tranquilos, levando tudo com muita naturalidade. O importante agora é conseguirmos estabelecer uma rotina para nos desgastarmos menos e aproveitarmos esse momento o máximo possível`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>   
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(!inMood) {
                                            setWarning("Por favor, selecione uma das opções")
                                        } else {   
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if(isFirstSon) {
                return (
                    <div className="all-margin">
                        <div className="all-center">
                            <div>
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o seu coração e o de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Eu e {name} temos tudo sob controle, lemos muito, assistimos a tudo quanto era documentário de parto e estamos preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Eu e ${name} temos tudo sob controle, lemos muito, assistimos a tudo quanto era documentário de parto e estamos preparados para o que der e vier`} checked={inMood === `Eu e ${name} temos tudo sob controle, lemos muito, assistimos a tudo quanto era documentário de parto e estamos preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Sabe como são pais de primeira viagem, né? Estamos super nervosos e apreensivos, mas tenho certeza que seremos bons pais
                                        <input type="radio" name="mood" id="mood_nervous" value={"Sabe como são pais de primeira viagem, né? Estamos super nervosos e apreensivos, mas tenho certeza que seremos bons pais"} checked={inMood === "Sabe como são pais de primeira viagem, né? Estamos super nervosos e apreensivos, mas tenho certeza que seremos bons pais"} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos
                                        <input type="radio" name="mood" id="mood_equiped" value="Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos" checked={inMood === "Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Modéstia a parte, eu e {name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value={`Modéstia a parte, eu e ${name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde`} checked={inMood === `Modéstia a parte, eu e ${name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
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
                                <h2 className="small-title">A chegada de uma criança é um momento muito especial, como está o seu coração e o de {name} agora?</h2>
                                <div>
                                    <label className="radio-option long-option">
                                        Eu e {name} temos tudo sob controle, não somos mais pais de primeira viagem e estamos preparados para o que der e vier
                                        <input type="radio" name="mood" id="mood_ok" value={`Eu e ${name} temos tudo sob controle, não somos mais pais de primeira viagem e estamos preparados para o que der e vier`} checked={inMood === `Eu e ${name} temos tudo sob controle, não somos mais pais de primeira viagem e estamos preparados para o que der e vier`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Mesmo já tendo um filho esse é um momento delicado, estamos super nervosos e apreensivos
                                        <input type="radio" name="mood" id="mood_nervous" value={`Mesmo já tendo um filho esse é um momento delicado, estamos super nervosos e apreensivos`} checked={inMood === `Mesmo já tendo um filho esse é um momento delicado, estamos super nervosos e apreensivos`} onChange={e => setInMood(e.target.value) }/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos
                                        <input type="radio" name="mood" id="mood_equiped" value="Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos" checked={inMood === "Estamos 100% equipados, o quarto do bebê parece um esconderijo do James Bond, cheio de gadgets do quais nunca ouvi falar até engravidarmos"} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-option long-option">
                                        Modéstia a parte, eu e {name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde
                                        <input type="radio" name="mood" id="mood_natural" value={`Modéstia a parte, eu e ${name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde`} checked={inMood === `Modéstia a parte, eu e ${name} nascemos para isso. Estamos bem mais tranquilos do que esperavamos, levando tudo com muita naturalidade. O importante agora é que venha com saúde`} onChange={e=> setInMood(e.target.value)}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {warning && <p className="validation-warning">{warning}</p>}
                                <br/>
                                <div className="prev-for">
                                    <button onClick={() => {
                                        setMood(inMood)
                                        setBabyPage(babyPage - 1)
                                    }}>Anterior</button>
                                    <button onClick={() => {
                                        if(inMood) {
                                            setMood(inMood)
                                            setBabyPage(babyPage + 1)
                                        } else {
                                            setWarning("Por favor, selecione uma das opções")
                                        }
                                    }}>Próxima</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } 
    }
}

export default MoodQ
