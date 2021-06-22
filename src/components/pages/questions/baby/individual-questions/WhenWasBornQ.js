import { useEffect, useState } from "react"

function WhenWasBornQ({tools: { babyPage, setBabyPage, setWhenWasBorn, whenWasBorn, name, parentType }}) {
    const [ inDate, setInDate ] = useState(whenWasBorn ? whenWasBorn : "")
    
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
        question = `Há quanto tempo nasceu a criança de ${name.nameA} e ${name.nameB}?`
    } else if(parentType === "Na verdade é um(a) futuro(a) Mãe/Pai Solo") {
        question = `Há quanto tempo nasceu a criança de ${name}?`
    } else {
        question = "Há quanto tempo nasceu o filho de vocês?"
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">{question}</h2>

                    <div className="go-bit-down center">
                        <input type="date" name="date_date" id="bebe_date" max={getToday()} value={inDate} onChange={e => setInDate(e.target.value)}/>
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setWhenWasBorn(inDate)
                            setBabyPage(babyPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inDate) {
                                setWarning("Por favor, selecione uma data antes de prosseguir")
                            } else {
                                setWhenWasBorn(inDate)
                                setBabyPage(babyPage + 1)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhenWasBornQ
