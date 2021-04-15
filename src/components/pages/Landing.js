import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing all-margin">
            <h1 className="center">Mimolino</h1>
            <h2 className="center">Presentes pessoais</h2>

            <div className="box-wrapper">
                <div className="option-box center">
                    <h3>Mimolino, vamos dar um presente!</h3>
                    <label htmlFor="mimo-form">O seu presente é para outra pessoa e para um aniversário, chá de bebê, uma mudança, aniversário de namoro/casamento ou qualquer outro motivo não citado nas opções abaixo</label>
                    <br/>    
                    <Link to="/mimo-form"><button id="mimo-form">Vamos!</button></Link>
                </div>

                <div className="option-box center">
                    <h3>Presentes para um grupo</h3>
                    <label htmlFor="group-gift">O seu presente são vários presentes para os membros de um grupo de trabalho, turma da escola/faculdade, grupo de amigos</label>
                    <br/>
                    <Link to="/group-gift"><button disabled id="group-gift">Vamos!</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>

                <div className="option-box center">
                    <h3>Presente para uma data comemorativa</h3>
                    <label htmlFor="season-gift">O seu presente é para uma data do ano como Dia das Mães, Dia dos Pais, Natal, Páscoa, Dia dos Namorados</label>
                    <br/>
                    <Link to="/season-gift"><button disabled id="season-gift">Vamos!</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>
                
                <div className="option-box center">
                    <h3>Presente para eu mesmo</h3>
                    <label htmlFor="self-gift">O seu presente é para você mesmo, deixa o mimolino te dar um presente que só quem te conhece poderia te dar</label>
                    <br/>
                    <Link to="/self-gift"><button disabled id="self-gift">Vamos!</button></Link>
                    <p className="remove">Essa seção estará disponível em breve</p>
                </div>
            </div>

        </div>
    )
}

export default Landing;