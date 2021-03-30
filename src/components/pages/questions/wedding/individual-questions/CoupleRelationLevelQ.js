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
            <div>
                <input type="radio" id="level_boyfriend" name="level" checked={ inLevel === "Somos namorados"} onChange={() => setInLevel("Somos namorados")}/>
                <label htmlFor="level_boyfriend">Somos namorados</label>
            </div>
            <div>
                <input type="radio" id="level_fiance" name="level" checked={ inLevel === "Somos noivos" } onChange={() => setInLevel("Somos noivos")}/>
                <label htmlFor="level_fiance">Somos noivos</label>
            </div>
            <div>
                <input type="radio" id="level_maried" name="level" checked={ inLevel === "Somos casados"} onChange={() => setInLevel("Somos casados")}/>
                <label htmlFor="level_maried">Somos casados</label>
            </div>
            <div>
                <input type="radio" id="level_proposal" name="level" checked={ inLevel === `Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`} onChange={() => setInLevel(`Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`)}/>
                <label htmlFor="level_proposal">Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com {giftedName} e propor casamento</label>
            </div>
            <div>
                <input type="radio" id="level_together" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
                <label htmlFor="level_together">Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos</label>
            </div>
            <div>
                <input type="radio" id="level_undefined" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
                <label htmlFor="level_undefined">Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos</label>
            </div>
        </div>
    } else {
        inputOptions = <div>
            <div>
                <input type="radio" id="level_boyfriend" name="level" checked={ inLevel === "São namorados"} onChange={() => setInLevel("São namorados")}/>
                <label htmlFor="level_boyfriend">São namorados</label>
            </div>
            <div>
                <input type="radio" id="level_fiance" name="level" checked={ inLevel === "Estão noivos" } onChange={() => setInLevel("Estão noivos")}/>
                <label htmlFor="level_fiance">Estão noivos</label>
            </div>
            <div>
                <input type="radio" id="level_maried" name="level" checked={ inLevel === "São casados"} onChange={() => setInLevel("São casados")}/>
                <label htmlFor="level_maried">São casados</label>
            </div>
            <div>
                <input type="radio" id="level_proposal" name="level" checked={ inLevel === `Acabam de ficar noivos`} onChange={() => setInLevel(`Acabam de ficar noivos`)}/>
                <label htmlFor="level_proposal">Acabam de ficar noivos</label>
            </div>
            <div>
                <input type="radio" id="level_together" name="level" checked={ inLevel === "Moram juntos"} onChange={() => setInLevel("Moram juntos")}/>
                <label htmlFor="level_together">Moram juntos</label>
            </div>
            <div>
                <input type="radio" id="level_undefined" name="level" checked={ inLevel === "São um casal moderno que não se define em status"} onChange={() => setInLevel("São um casal moderno que não se define em status")}/>
                <label htmlFor="level_undefined">São um casal moderno que não se define em status</label>
            </div>
        </div>
    }

    return (
        <div>
            <h2>{gifterInCouple ? "E qual o status do relacionamento de vocês?" : "E qual o status do relacionamento do casal?"}</h2>

            {inputOptions}

            {warning && <p className="validation-warning">{warning}</p>}

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
    )
}

export default CoupleRelationLevelQ
