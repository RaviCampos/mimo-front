import { useState, useEffect } from "react"

function AgeQ({tools: { setNonePage, age, setAge, giftedName }}) {

    let protoAge

    if(age) {
        protoAge = age.split(" -- ")
    } else {
        protoAge = [ "", "" ]
    }

    const [ accuracy, setAccuracy ] = useState(protoAge[0])
    const [ inAge, setInAge ] = useState(protoAge[1])
    
    const [ warning, setWarning ] = useState(false)

    useEffect(() => {
        setWarning(false)
    }, [accuracy, inAge])

    return (
        <div>
            <h2>E quantos anos {giftedName} tem?</h2>
            <div>
                <input type="radio" name="age" id="work-age_exactly" checked={accuracy === `Sei exatamente quantos anos ${giftedName} tem`} onChange={() => setAccuracy(`Sei exatamente quantos anos ${giftedName} tem`)} />
                <label htmlFor="work-age_exactly">Sei exatamente quantos anos {giftedName} tem</label>
            </div>
            <div>
                <input type="radio" name="age" id="work-age_notexactly" checked={accuracy === `Eita, não sei exatamente quantos anos ${giftedName} tem`} onChange={() => setAccuracy(`Eita, não sei exatamente quantos anos ${giftedName} tem`)} />
                <label htmlFor="work-age_notexactly">Eita, não sei exatamente quantos anos {giftedName} tem <span role="img" aria-label="ivertedsmile">🙃</span></label>
            </div>

            <div>
                <input type="number" min="1" max="120" id="work-age_number" value={inAge} onChange={e => setInAge(e.target.value)}/>
                <label htmlFor="work-age_number">anos</label>
            </div>

            {warning && <p className="validation-warning">{warning}</p>}

            <button onClick={() => {
                setAge(`${accuracy} -- ${inAge}`);
                setNonePage(1)
            }}>Anterior</button>
            <button onClick={() => {
                if(!accuracy) {
                    setWarning("Por favor, selecione se você sabe exatamente a idade ou não")
                } else if(!inAge) {
                    setWarning("Por favor, preecha a idade")
                } else if(inAge < 1) {
                    setWarning("A idade não pode ser menor que um ano")
                } else if(inAge > 120) {
                    setWarning("A idade não pode ser maior que 120 anos")
                } else {
                    setAge(`${accuracy} -- ${inAge}`);
                    setNonePage(3)
                }
            }}>Próxima</button>
        </div>
    )
}

export default AgeQ
