
import { useEffect, useState } from "react";

function RelationQ({tools: {babyPage, relation, setRelation, setBabyPage, parentType}}) {

    const [ mainRelation, setMainRelation ] = useState(relation ? typeof relation === "object" ? relation.mainRelation : relation : "");
    const [ relationComplement, setRelationComplement ] = useState(relation ? typeof relation === "object" ? relation.relationComplement : "" : "");

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false)
    }, [mainRelation, relationComplement])

    const familyText = <div>
        <p>O que essa pessoa é sua?</p>
        <p>Ex: Mãe/Pai, Tia, Sobrinho, Avó...</p>
        <input type="text" value={relationComplement} onChange={e => setRelationComplement(e.target.value)}/>
    </div>;

    const otherText = <div><input type="text" value={relationComplement} onChange={e => setRelationComplement(e.target.value)}/></div>

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="smaller-title">
                        { parentType === "Um casal querido que está esperando um filho" ?
                            "Qual a relação entre você e o casal sortudo que vai receber o presente?"
                            :
                            "Qual a relação entre você e a mãe ou pai sortudo do bebê que vai receber o presente?  "
                        }
                    </h2>

                    <div>
                        
                        <label className="radio-option small-radio">
                            Somos amigos
                            <input type="radio" name="relation" id="relation_friends" value="amigos" checked={ mainRelation=== "amigos"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option small-radio">
                            Somos colegas de classe
                            <input type="radio" name="relation" id="relation_classmate" value="colegas/classe" checked={ mainRelation=== "colegas/classe"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option small-radio">
                            Somos colegas de trabalho
                            <input type="radio" name="relation" id="relation_workmate" value="colegas/trabalho" checked={ mainRelation=== "colegas/trabalho"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option small-radio">
                            Fazemos parte da mesma família
                            <input type="radio" name="relation" id="relation_family" value="familia" checked={ mainRelation=== "familia"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        {mainRelation=== "familia" && familyText}

                        <label className="radio-option small-radio">
                            Somos apenas conhecidos
                            <input type="radio" name="relation" id="relation_acquaintance" value="conhecidos" checked={ mainRelation=== "conhecidos"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option small-radio">
                            Outra relação não citada acima
                            <input type="radio" name="relation" id="relation_other" value="outra" checked={ mainRelation=== "outra"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    {mainRelation=== "outra" && otherText}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">

                        <button onClick={() => {
                            if(relationComplement) {
                                setRelation({
                                    mainRelation,
                                    relationComplement
                                });
                            } else {
                                setRelation(mainRelation);
                            }
                            setBabyPage(babyPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!mainRelation) {
                                setWarning("Por favor, selecione uma das opções")
                            } else if((mainRelation === "familia" || mainRelation === "outra") && !relationComplement) {
                                setWarning("Por favor preencha o complemento")
                            } else {
                                if(relationComplement) {
                                    setRelation({
                                        mainRelation,
                                        relationComplement
                                    });
                                } else {
                                    setRelation(mainRelation);
                                }
                                setBabyPage(babyPage + 1)
                            }
                        }}>Próxima</button>
                    </div>

                </div> 
            </div> 
        </div>
    )
}

export default RelationQ