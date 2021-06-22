import { useEffect, useState } from "react"

function WhenWillBeBornQ({tools: { babyPage, setBabyPage, setWhenWillBeBorn, whenWillBeBorn, name, parentType }}) {
    const [ inDate, setInDate ] = useState(whenWillBeBorn ? whenWillBeBorn : "")

    const [ warning, setWarning ] = useState(false)
    useEffect((warning) => {
        setWarning(!warning)
    }, [inDate])

    function getToday() {
        let d = new Date()        

        let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    let question;
    if(parentType === "Um casal querido que está esperando um filho") {
        question = `E para quando ${name.nameA} e ${name.nameB} esperam a criança?`
    } else if(parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
        question = `E para quando ${name} espera a criança?`
    } else {
        question = "E para quando vocês esperam a criança?"
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">{question}</h2>

                    <div className="go-bit-down center">
                        <input type="date" name="date_date" id="bebe_date" min={getToday()} value={inDate} onChange={e => setInDate(e.target.value)}/>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setWhenWillBeBorn(inDate)
                            setBabyPage(babyPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inDate) {
                                setWarning("Por favor, selecione uma data antes de prosseguir")
                            } else {
                                setWhenWillBeBorn(inDate)
                                setBabyPage(babyPage + 1)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhenWillBeBornQ
