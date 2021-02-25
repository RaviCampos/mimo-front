
function GifterNameQ({setPage}) {
    return (
        <div>
            <h2>Qual é o seu nome?</h2>
            <input type="text"/>
            <h2>E o nome da pessoa sortuda para quem você quer dar um presente?</h2>
            <input type="text"/>
            <button>Próxima</button>
            <button onClick={() => setPage(0)}>Anterior</button>
        </div>
    )
}

export default GifterNameQ;
