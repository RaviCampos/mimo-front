import { useState } from "react"

function CoupleRelationLevelQ({ tools: { setWeddingPage, setCoupleRelationLevel, gifterInCouple, coupleRelationLevel, giftedName }}) {

    const [ inLevel, setInLevel ] = useState(coupleRelationLevel ? coupleRelationLevel : "")

    let inputOptions
    
    if(gifterInCouple) {
        inputOptions = <div>
            <div>
                <label htmlFor="level_boyfriend">Somos namoradps</label>
                <input type="radio" id="level_boyfriend" name="level" checked={ inLevel === "Somos namorados"} onChange={() => setInLevel("Somos namorados")}/>
            </div>
            <div>
                <label htmlFor="level_fiance">Somos noivos</label>
                <input type="radio" id="level_fiance" name="level" checked={ inLevel === "Somos noivos" } onChange={() => setInLevel("Somos noivos")}/>
            </div>
            <div>
                <label htmlFor="level_maried">Somos casados</label>
                <input type="radio" id="level_maried" name="level" checked={ inLevel === "Somos casados"} onChange={() => setInLevel("Somos casados")}/>
            </div>
            <div>
                <label htmlFor="level_proposal">Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com {giftedName} e propor casamento</label>
                <input type="radio" id="level_proposal" name="level" checked={ inLevel === `Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`} onChange={() => setInLevel(`Estamos namorando, mas quero aproveitar esse aniversário para dar mais um passo com ${giftedName} e propor casamento`)}/>
            </div>
            <div>
                <label htmlFor="level_together">Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos</label>
                <input type="radio" id="level_together" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
            </div>
            <div>
                <label htmlFor="level_undefined">Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos</label>
                <input type="radio" id="level_undefined" name="level" checked={ inLevel === "Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos"} onChange={() => setInLevel("Moramos juntos há tanto tempo que para a família somos casados e para a Receita Federal somos união estável, mas para a gente o que importa é estarmos juntos")}/>
            </div>
        </div>
    } else {
        inputOptions = <div>
            Quando fora do casal
        </div>
    }

    return (
        <div>
            <h2>{gifterInCouple ? "E qual o status do relacionamento de vocês?" : "E qual o status do relacionamento do casal?"}</h2>

            {inputOptions}

        </div>
    )
}

export default CoupleRelationLevelQ
