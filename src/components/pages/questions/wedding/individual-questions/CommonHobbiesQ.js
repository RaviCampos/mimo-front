function CommonHobbiesQ({tools: { setWeddingPage, setCommonHobbies, gifterInCouple, commonHobbies }}) {

    const [ inHobbies, setInEx ] = useState(commonHobbies ? commonHobbies : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inHobbies])


    if(gifterInCouple) {
        return (
            <div>
                <h2>CommonHobbies</h2>
                
               

                {warning && <p className="validation-warning">{warning}</p>}

                <button onClick={() => {
                    setCommonHobbies(inHobbies)
                    setWeddingPage(5)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inHobbies) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setCommonHobbies(inHobbies)
                        setWeddingPage(7)
                    // }
                }}>Próxima</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>CommonHobbies</h2>
                <button onClick={() => {
                    setCommonHobbies(inHobbies)
                    setWeddingPage(5)
                }}>Anterior</button>
                <button onClick={() => {
                    // if(!inHobbies) {
                    //     setWarning(`Por favor, escolha uma das opções` )
                    // }  else {
                        setCommonHobbies(inHobbies)
                        setWeddingPage(7)
                    // }
                }}>Próxima</button>
            </div>
        )
    }
}

export default CommonHobbiesQ
