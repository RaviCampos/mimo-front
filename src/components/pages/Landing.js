function Landing(props) {
    return (
        <div>
            <h1>Mimolino</h1>
            <h2>Presentes pessoais</h2>
            <button onClick={() => props.setPage("mimoForm")}>Começar perguntas!</button>
            <button onClick={() => props.setPage("howTo")}>Como funciona o mimolino?</button>
        </div>
    )
}

export default Landing;