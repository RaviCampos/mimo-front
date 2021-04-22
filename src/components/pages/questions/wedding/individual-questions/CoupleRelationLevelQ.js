import { useEffect, useState } from "react"

function CoupleRelationLevelQ({ tools: { setWeddingPage, setCoupleRelationLevel, gifterInCouple, coupleRelationLevel, giftedName }}) {

    const [ inLevel, setInLevel ] = useState(coupleRelationLevel ? coupleRelationLevel : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inLevel])

    let inputOptions
    
    if(gifterInCouple) {
        inputOptions = <div>
            <label className="radio-option small-radio">
                Somos namorados
                <input type="radio" id="level_boyfriend" name="level" checked={ inLevel === "Somos namorados"} onChange={() => setInLevel("Somos namorados")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option bit-down only-wide small-radio">
                Somos noivos
                <input type="radio" id="level_fiance" name="level" checked={ inLevel === "Somos noivos" } onChange={() => setInLevel("Somos noivos")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option bit-down only-wide small-radio">
                Somos casados
                <input type="radio" id="level_maried" name="level" checked={ inLevel === "Somos casados"} onChange={() => setInLevel("Somos casados")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option long-option small-radio">
                Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com {giftedName} e propor casamento
                <input type="radio" id="level_proposal" name="level" checked={ inLevel === `Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`} onChange={() => setInLevel(`Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`)}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option long-option small-radio">
                Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos
                <input type="radio" id="level_together" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option long-option small-radio">
                Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos
                <input type="radio" id="level_undefined" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
                <span className="checkmark"></span>
            </label>
        </div>
    } else {
        inputOptions = <div>
            <label className="radio-option small-radio">
                São namorados
                <input type="radio" id="level_boyfriend" name="level" checked={ inLevel === "São namorados"} onChange={() => setInLevel("São namorados")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option small-radio">
                Estão noivos
                <input type="radio" id="level_fiance" name="level" checked={ inLevel === "Estão noivos" } onChange={() => setInLevel("Estão noivos")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option small-radio">
                São casados
                <input type="radio" id="level_maried" name="level" checked={ inLevel === "São casados"} onChange={() => setInLevel("São casados")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option small-radio">
                Acabam de ficar noivos
                <input type="radio" id="level_proposal" name="level" checked={ inLevel === `Acabam de ficar noivos`} onChange={() => setInLevel(`Acabam de ficar noivos`)}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option small-radio">
                Moram juntos
                <input type="radio" id="level_together" name="level" checked={ inLevel === "Moram juntos"} onChange={() => setInLevel("Moram juntos")}/>
                <span className="checkmark"></span>
            </label>
            <label className="radio-option small-radio">
                São um casal moderno que não se define em status
                <input type="radio" id="level_undefined" name="level" checked={ inLevel === "São um casal moderno que não se define em status"} onChange={() => setInLevel("São um casal moderno que não se define em status")}/>
                <span className="checkmark"></span>
            </label>
        </div>
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>{gifterInCouple ? "E qual o status do relacionamento de vocês?" : "E qual o status do relacionamento do casal?"}</h2>

                    {inputOptions}

                    {warning && <p className="validation-warning">{warning}</p>}
                    <div className="prev-for">
                        <button onClick={() => {
                            setCoupleRelationLevel(inLevel)
                            setWeddingPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inLevel) {
                                setWarning(`Por favor, escolha uma das opções` )
                            }  else {
                                setCoupleRelationLevel(inLevel)
                                setWeddingPage(5)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoupleRelationLevelQ
