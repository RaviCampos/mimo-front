import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <h1>Mimolino</h1>
            <h2>Presentes pessoais</h2>

            <div>
                <label htmlFor="mimo-form">O seu presente é para outra pessoa e para um aniversário, chá de bebê, uma mudança, aniversário de namoro/casamento ou qualquer outro motivo não citado nas opções abaixo</label>
                <br/>    
                <Link to="/mimo-form"><button id="mimo-form">Mimolino, vamos dar um presente!</button></Link>
            </div>

            <div>
                <label htmlFor="group-gift">O seu presente são vários presentes para os membros de um grupo de trabalho, turma da escola/faculdade, grupo de amigos</label>
                <br/>
                <Link to="/group-gift"><button  id="group-gift">Presentes para um grupo</button></Link>
            </div>

            <div>
                <label htmlFor="season-gift">O seu presente é para uma data do ano como Dia das Mães, Dia dos Pais, Natal, Páscoa, Dia dos Namorados</label>
                <br/>
                <Link to="/season-gift"><button id="season-gift">Presente para uma data comemorativa</button></Link>
            </div>
            
            <div>
                <label htmlFor="self-gift">O seu presente é para você mesmo, deixa o mimolino te dar um presente que só quem te conhece poderia te dar</label>
                <br/>
                <Link to="/self-gift"><button id="self-gift">Presente para eu mesmo</button></Link>
            </div>

            {/* <button onClick={() => props.setPage("mimoForm")}>Começar perguntas!</button>
            <button onClick={() => props.setPage("howTo")}>Como funciona o mimolino?</button> */}
        </div>
    )
}

export default Landing;