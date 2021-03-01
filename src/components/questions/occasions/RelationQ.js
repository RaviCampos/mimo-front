
function RelationQ({ tools: { setPage }}) {
    return (
        <div>
            <h2>Qual o grau de intimidade?</h2>      

            <button onClick={() => {
                setPage({section: "bday", index: 0})
                
            }}>Anterior</button>
            <button onClick={() => {
                setPage({section: "bday", index: 2})
            }}>Próxima</button>

        </div>
    )
}

export default RelationQ
