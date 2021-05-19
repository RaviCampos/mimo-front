import { useState } from "react"

function WhenWasBornQ({tools: { setBabyPage, setWhenWasBorn, whenWasBorn, name, parentType }}) {
    const [ inDate, setInDate ] = useState(whenWasBorn)

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

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">
                       {
                           parentType === "Um casal querido que está esperando um filho" ?
                           `Há quanto tempo nasceu a criança de ${name.nameA} e ${name.nameB}?`
                           :
                           `Há quanto tempo nasceu a criança de ${name}?`
                       }
                    </h2>

                    <div className="go-bit-down center">
                        <input type="date" name="date_date" id="bebe_date" min={getToday()} value={inDate} onChange={e => setInDate(e.target.value)}/>
                    </div>

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setWhenWasBorn(inDate)
                            setBabyPage(3)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setWhenWasBorn(inDate)
                            setBabyPage(4)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhenWasBornQ
