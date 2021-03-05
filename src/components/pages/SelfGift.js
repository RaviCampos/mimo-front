import { Link } from "react-router-dom"

function SelfGift() {
    return (
        <div>
            <h1>Dar presentes é uma coisa legal, mas porque não deixar o mimolino dar um presente para você mesmo?</h1>
            <Link to="/"><button>Voltar para a página inicial</button></Link>
        </div>
    )
}

export default SelfGift
