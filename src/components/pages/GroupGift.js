import { Link } from "react-router-dom";

function GroupGift() {
    return (
        <div>
            <h1>Presentes para um grupo</h1>
            <p>Pode ser um grupo de trabalho, turma da escola ou faculdade, uma lembrança para uma festa</p>
            <Link to="/"><button>Voltar para página inicial</button></Link>
        </div>
    )
}

export default GroupGift;