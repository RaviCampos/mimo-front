import { useEffect, useState } from "react";

function DateQ({tools: {setPage, setDate, setDeliveryBDay, date, deliveryBDay, occasion}}) {

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

    function compareDates(currentDate) {
        const plusFive = getDatePlusFive();
        const plusFiveDate = new Date(plusFive);
        const theDate = new Date(currentDate);
        if(theDate < plusFiveDate) {
            return true;
        } 
        return false
    }

    // function compareAndSet(e) {
    //     if(compareDates(e.target.value)) {
    //         setWarning("A data precisa precisa ser pelo menos daqui a 5 dias a partir de hoje");
    //     }
    //     setInDate(e.target.value)
    // }

    useEffect(() => {
        const plusFive = getDatePlusFive();
        const plusFiveDate = new Date(plusFive);
        const theDate = new Date(inDate);
        if(theDate >= plusFiveDate) {
            setWarning(false)
        }
    }, [inDate])

    useEffect(() => {
        if(inDelivery) {
            setWarning(false)
        }
    }, [inDelivery])



    return (
        <div className="all-margin no space-top">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Em qual dia você deseja que o mimolino entregue o presente?</h2>
                    <p className="subtitle">a gente trabalha com um tempo de antecedência de pelo menos 5 dias</p>
                    <input type="date" name="date_date" id="gift_date" min={getDatePlusFive()} value={inDate} onChange={e => setInDate(e.target.value)}/>

                    { (occasion === "aniversario" || occasion === "casamento/namoro") &&
                        <div>
                            {occasion === "casamento/namoro" ? <h2 className="small-title">Mais uma coisa, esse é o dia do aniversário do casal mesmo?</h2> : <h2>Mais uma coisa, esse é o dia do aniversário mesmo?</h2> }
                            <label className="radio-option">
                                É o dia do aniversário mesmo
                                <input type="radio" name="date_yesno" id="date_yes" value="Sim" checked={inDelivery === "Sim"} onChange={e => setInDelivery(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio-option">
                                Não é exatamente o dia, mas é melhor entregar nessa data
                                <input type="radio" name="date_yesno" id="date_no" value="Não" checked={inDelivery === "Não"} onChange={e => setInDelivery(e.target.value)}/>
                                <span className="checkmark"></span>
                            </label>
                        </div> 
                    }

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                                setDate(inDate);
                                setDeliveryBDay(inDelivery)
                                setPage(6)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(compareDates(inDate)) {
                                setWarning("A data de entrega precisa ser para daqui a pelo menos 5 dias")
                            } else if(!inDelivery && (occasion === "aniversario" || occasion === "casamento/namoro") ) {
                                setWarning("Por favor, indique se este é o dia do aniversário ou não")
                            } else {
                                setDate(inDate);
                                setDeliveryBDay(inDelivery)
                                setPage(8)
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateQ
