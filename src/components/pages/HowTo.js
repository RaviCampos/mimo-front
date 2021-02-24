function HowTo(props) {
    return (
        <div>
            <h1>Mas como funciona o mimolino??</h1>
            <button onClick={() => props.setPage("landing")}>Voltar para página inicial</button>
            <button onClick={() => props.setPage("mimoForm")}>Começar perguntas!</button>
        </div>
    )
}

export default HowTo;