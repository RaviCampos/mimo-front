import { useState } from "react"

function WhenWasBornQ({tools: { babyPage, setBabyPage, setWhenWasBorn, whenWasBorn, name, parentType }}) {
    const [ inDate, setInDate ] = useState(whenWasBorn ? whenWasBorn : "")

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

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setWhenWasBorn(inDate)
                            // if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
                            //     setBabyPage(1)
                            // } else {
                            //     setBabyPage(3)
                            // }
                            setBabyPage(babyPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setWhenWasBorn(inDate)
                            // if(parentType === "Na verdade, eu sou pai/mãe da criança e estou em busca de um presente para celebrarmos alegria de termos um filho") {
                            //     setBabyPage(3)
                            // } else {
                            //     setBabyPage(5)
                            // }
                            setBabyPage(babyPage + 1)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhenWasBornQ
