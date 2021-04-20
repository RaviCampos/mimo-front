
import { useEffect, useState } from "react";

function RelationQ({tools: {relation, setRelation, setBDayPage}}) {

    let inRelation;

    if(relation) {
        inRelation = relation.split(": ");
    } else {
        inRelation = ["", ""];
    }

    const [ mainRelation, setMainRelation ] = useState(inRelation[0]);
    const [ relationComplement, setRelationComplement ] = useState(inRelation[1]);

    const [ warning, setWarning ] = useState(false);

    useEffect(() => {
        setWarning(false)
    }, [mainRelation])
    useEffect(() => {
        setWarning(false)
    }, [relationComplement])

    const familyText = <div>
        <p>O que essa pessoa é sua?</p>
        <p>Ex: Tia, Sobrinha, Avó</p>
        <input type="text" value={relationComplement} onChange={e => setRelationComplement(e.target.value)}/>
    </div>;

    const otherText = <div><input type="text" value={relationComplement} onChange={e => setRelationComplement(e.target.value)}/></div>

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="smaller-title">Qual a relação entre você e a pessoa sortuda que vai receber o presente</h2>

                    <div className="radios-left">
                        
                        <label className="radio-option small-radio">
                            Somos amigos
                            <input type="radio" name="relation" id="relation_friends" value="amigos" checked={ mainRelation=== "amigos"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-option small-radio">
                            Somos um casal
                            <input type="radio" name="relation" id="relation_couple" value="casal" checked={ mainRelation=== "casal"} onChange={e => {setMainRelation(e.target.value); setRelationComplement("")}}/>
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
                            Somos familiares
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

                    <div className="prev-for small-space-top">

                        <button onClick={() => {
                            if(relationComplement) {
                                setRelation(`${mainRelation}: ${relationComplement}`);
                            } else {
                                setRelation(mainRelation);
                            }
                            setBDayPage(1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!mainRelation) {
                                setWarning("Por favor, selecione uma das opções")
                            } else if((mainRelation === "familia" || mainRelation === "outra") && !relationComplement) {
                                setWarning("Por favor preencha o complemento")
                            } else {
                                if(relationComplement) {
                                    setRelation(`${mainRelation}: ${relationComplement}`);
                                } else {
                                    setRelation(mainRelation);
                                }
                                setBDayPage(3)
                            }
                        }}>Próxima</button>
                    </div>

                </div> 
            </div> 
        </div>
    )
}

export default RelationQ

