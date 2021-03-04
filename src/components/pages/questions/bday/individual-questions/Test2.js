function Test2({tools: {setPage}}) {
    return (
        <div>
            <h2>Second</h2>            
            <button onClick={() => setPage(0)}>Previous</button>            
        </div>
    )
}

export default Test2
