
function EndQ({tools: {setPage, formInfo}}) {
    return (
        <div>
            <h2>Obrigado por comprar com o mimolino</h2>            
            <h3>Talvez revise seus dados</h3>
            <p>{JSON.stringify(formInfo)}</p>
            <button onClick={() => {
                    setPage(9)
            }}>Anterior</button>
            <button onClick={() => {
                Email.send({
                    SecureToken : "487ca466-f07a-4a1e-af0f-3cc5857ca7aa",
                    To : 'mimolinobsb@gmail.com',
                    From : "mimolinobsb@gmail.com",
                    Subject : "Nova Mimo Compra",
                    Body : JSON.stringify(formInfo)
                }).then(
                    message => console.log(message)
                );
            }}>Enviar</button>
        </div>
    )
}

export default EndQ
