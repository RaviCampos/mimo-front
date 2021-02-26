
function YearsQ({tools: {setPage}}) {
    return (
        <div>
            <h2>Quantos anos?</h2>
            <button onClick={() => {
                setPage({section: "inicio", index: 2})
            }}>Anterior</button>
            <button onClick={() => {
                setPage({section: "bday", index: 1})
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
