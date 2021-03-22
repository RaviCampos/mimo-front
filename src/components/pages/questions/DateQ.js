import { useEffect, useState } from "react";

function DateQ({tools: {setPage, setDate, setDeliveryBDay, date, deliveryBDay}}) {

    const [ inDate, setInDate ] = useState(date ? date : getDatePlusFive)
    const [ inDelivery, setInDelivery ] = useState(deliveryBDay ? deliveryBDay : "")
    const [ warning, setWarning ] = useState(false);

    function getDatePlusFive() {
        let d = new Date()

        d.setDate(d.getDate() + 5)        

        let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    function compareDates(e) {
        const plusFive = getDatePlusFive();
        const plusFiveDate = new Date(plusFive);
        const theDate = new Date(e.target.value);
        if(theDate < plusFiveDate) {
            // setInDate(plusFive)
            setWarning(true);
        } 
        setInDate(e.target.value)
    }

    useEffect(() => {
        const plusFive = getDatePlusFive();
        const plusFiveDate = new Date(plusFive);
        const theDate = new Date(inDate);
        if(theDate >= plusFiveDate) {
            setWarning(false)
        }
    }, [inDate])

    return (
        <div>
            <h1>{getDatePlusFive()}</h1>
            <h2>Em qual dia você deseja que o mimolino entregue o presente?</h2>
            <p>a gente trabalha com um tempo de antecedência de pelo menos 5 dias</p>
            <input type="date" name="date_date" id="gift_date" min={getDatePlusFive()} value={inDate} onChange={e => compareDates(e)}/>
            {warning && <p className="validation-warning">A data precisa precisa ser pelo menos daqui a 5 dias</p>}
            <h2>Mais uma coisa, esse é o dia do aniversário mesmo?</h2>
            <div>
                <input type="radio" name="date_yesno" id="date_yes" value="Sim" checked={inDelivery === "Sim"} onChange={e => setInDelivery(e.target.value)}/>
                <label htmlFor="date_yes">É o dia do aniversário mesmo</label>
            </div>
            <div>
                <input type="radio" name="date_yesno" id="date_no" value="Não" checked={inDelivery === "Não"} onChange={e => setInDelivery(e.target.value)}/>
                <label htmlFor="date_no">Não é exatamente o dia, mas é melhor entregar nessa data</label>
            </div>

            <button onClick={() => {
                    setDate(inDate);
                    setDeliveryBDay(inDelivery)
                    setPage(6)
            }}>Anterior</button>
            <button onClick={() => {
                    setDate(inDate);
                    setDeliveryBDay(inDelivery)
                    setPage(8)
            }}>Próxima</button>
        </div>
    )
}

export default DateQ
