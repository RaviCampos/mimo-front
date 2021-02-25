function NotFoundQ({ tools: { setPage }}) {
    return (
        <div>
            <h1>Sorry, question not found</h1>
            <button onClick={() => setPage(0)}>Começar perguntas</button>
        </div>
    )
}

export default NotFoundQ
