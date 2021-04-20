import { useState } from "react";

function AdditionsQ({tools: {setPage, setSection, setAdditions, additions}}) {

    const [ inAdditions, setInAddtions] = useState(additions ? additions : "");
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Tem alguma coisa que não se encaixa em nenhuma das perguntas que eu fiz?</h2>
                    <p className="subtitle">Alguma coisa que você considera importante que eu saiba para te ajudar a escolher esse presente? Pode ser qualquer coisa, de uma história interessante a como vocês se conheceram passando pela comida preferida desta pessoa. Se não tiver nada, também não tem problema, basta deixar o campo abaixo em branco! Vamos escolher um presente bem legal mesmo assim.</p>
                    <textarea name="addition" id="addition_textarea" cols="100" rows="8" onChange={ e => setInAddtions(e.target.value)} value={inAdditions}></textarea>

                    <br/>

                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setAdditions(inAdditions);
                            setSection("occasion")
                            setPage(3);
                        }}>Anterior</button>
                        <button onClick={() => {
                            setAdditions(inAdditions);
                            setPage(5);
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionsQ
