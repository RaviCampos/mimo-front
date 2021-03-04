
function Test1({tools: {setPage}}) {
    return (
        <div>
            <h2>First</h2>
            <button onClick={() => setPage(1)}>Next</button>            
        </div>
    )
}

export default Test1
