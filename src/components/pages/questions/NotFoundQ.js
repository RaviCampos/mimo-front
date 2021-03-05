function NotFoundQ({ tools: { setPage, setSection }}) {
    return (
        <div>
            <h1>Sorry, question not found</h1>
            <button onClick={() => {
                setSection("start")
                setPage(0)
            }}>Começar perguntas</button>
        </div>
    )
}

export default NotFoundQ
