import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing all_margin">
            <h1 className="center">Mimolino</h1>
            <h2 className="center">Presentes pessoais</h2>

            <div className="box-wrapper">
                <div className="option-box center">
                    <label htmlFor="mimo-form">O seu presente é para outra pessoa e para um aniversário, chá de bebê, uma mudança, aniversário de namoro/casamento ou qualquer outro motivo não citado nas opções abaixo</label>
                    <br/>    
                    <Link to="/mimo-form"><button id="mimo-form">Mimolino, vamos dar um presente!</button></Link>
                </div>

                <div className="option-box center">
                    <label htmlFor="group-gift">O seu presente são vários presentes para os membros de um grupo de trabalho, turma da escola/faculdade, grupo de amigos</label>
                    <br/>
                    <Link to="/group-gift"><button disabled id="group-gift">Presentes para um grupo</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>

                <div className="option-box center">
                    <label htmlFor="season-gift">O seu presente é para uma data do ano como Dia das Mães, Dia dos Pais, Natal, Páscoa, Dia dos Namorados</label>
                    <br/>
                    <Link to="/season-gift"><button disabled id="season-gift">Presente para uma data comemorativa</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>
                
                <div className="option-box center">
                    <label htmlFor="self-gift">O seu presente é para você mesmo, deixa o mimolino te dar um presente que só quem te conhece poderia te dar</label>
                    <br/>
                    <Link to="/self-gift"><button disabled id="self-gift">Presente para eu mesmo</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>
            </div>

        </div>
    )
}

export default Landing;