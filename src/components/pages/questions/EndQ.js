
function EndQ({tools: {setPage, formInfo}}) {
    return (
        <div>
            <h2>Obrigado por comprar com o mimolino</h2>            
            <h3>Talvez revise seus dados</h3>
            <p>{formInfo}</p>
            <button onClick={() => {
                    setPage(9)
            }}>Anterior</button>
            <button onClick={() => {

            }}>Enviar</button>
        </div>
    )
}

export default EndQ
