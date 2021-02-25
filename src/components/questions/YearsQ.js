
function YearsQ({tools: {setPage}}) {
    return (
        <div>
            <h2>Quantos anos?</h2>
            <button onClick={() => {
                setPage(2)
            }}>Anterior</button>
            <button onClick={() => {
                setPage(4)
            }}>Próxima</button>
        </div>
    )
}

export default YearsQ
