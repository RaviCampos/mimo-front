function FirstSonQ({tools: { setBabyPage, setFirstSon, firstSon, name, parentType }}) {

    // const [ ]

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">
                       {
                           parentType === "Um casal querido que está esperando um filho" ?
                           `É o primeiro filho de ${name.nameA} e ${name.nameB}?`
                           :
                           `É o primeiro filho de ${name}?`
                       }
                    </h2>

                    {/* <input type="number" name="age" id="yearsq_age" min="1" max={unit === "anos" ? "100" : "11"} value={inAge} placeholder={unit} onChange={e => setInAge(e.target.value)} autoComplete="off"/> */}

                    <div className="prev-for">
                        <button onClick={() => {
                            // setFirstSon(inDate)
                            setBabyPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            // setFirstSon(inDate)
                            setBabyPage(4)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSonQ
