
import { useState } from "react";

function RelationQ({tools: {relation, setRelation, setBDayPage}}) {

    let inRelation;

    if(relation) {
        inRelation = relation.split(" ");
    } else {
        inRelation = [""];
    }

    const [ mainRelation, setMainRelation ] = useState(inRelation[0]);

    const [ relationComplement, setRelationComplement ] = useState(inRelation[1] ? inRelation[1] : "");

    const familyText = <div>
        <p>O que essa pessoa é sua?</p>
        <p>Ex: Tia, Sobrina, Avó</p>
        <input type="text" value={relationComplement} onChange={e => setRelationComplement(e.value.target)}/>
    </div>;

    const otherText = <div><input type="text" value={relationComplement} onChange={e => setRelationComplement(e.value.target)}/></div>

    return (
        <div>
            <h2>Qual a relação entre você e a pessoa sortuda que vai receber o presente</h2>

            <div>
                <input type="radio" name="relation" id="relation_friends" value="amigos" checked={ mainRelation=== "amigos"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_friends">Somos amigos</label>
            </div>

            <div>
                <input type="radio" name="relation" id="relation_couple" value="casal" checked={ mainRelation=== "casal"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_couple">Somos um casal</label>
            </div>

            <div>
                <input type="radio" name="relation" id="relation_classmate" value="colegas de classe" checked={ mainRelation=== "colegas de classe"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_classmate">Somos colegas de classe</label>
            </div>

            <div>
                <input type="radio" name="relation" id="relation_workmate" value="colegas de trabalho" checked={ mainRelation=== "colegas de trabalho"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_workmate">Somos colegas de trabalho</label>
            </div>

            <div>
                <input type="radio" name="relation" id="relation_family" value="familia" checked={ mainRelation=== "familia"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_family">Somos familiares</label>
            </div>

            {mainRelation=== "familia" && familyText}

            <div>
                <input type="radio" name="relation" id="relation_acquaintance" value="conhecidos" checked={ mainRelation=== "conhecidos"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_acquaintance">Somos apenas conhecidos</label>
            </div>

            <div>
                <input type="radio" name="relation" id="relation_other" value="outra" checked={ mainRelation=== "outra"} onChange={e => setMainRelation(e.target.value)}/>
                <label htmlFor="relation_other">Outra relação não citada acima</label>
            </div>

            {mainRelation=== "outra" && otherText}

            <br/>

            <button onClick={() => {
                // if(verify()) {
                    setRelation(inRelation);
                    setBDayPage(1)
                // }
            }}>Anterior</button>
            <button onClick={() => {
                // if(verifyAge()) {
                    setRelation(inRelation);
                    setBDayPage(3)
                // }
            }}>Próxima</button>
        </div>
    )
}

export default RelationQ

