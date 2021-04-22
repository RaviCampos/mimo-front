import { useEffect, useState } from "react"

function ReasonQ({tools: { setMovingPage, reason, setReason, giftedName }}) {

    const [ inReason, setInReason ] = useState(reason ? reason : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inReason])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Me conta, em qual é a circunstância vamos entregar o presente para {giftedName}?</h2>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_first-leaving" checked={inReason === `${giftedName} está saindo de casa pela primeira vez`} onChange={() => setInReason(`${giftedName} está saindo de casa pela primeira vez`)} />
                        {giftedName} está saindo de casa pela primeira vez
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_living-out" checked={inReason === `${giftedName} vai morar fora`} onChange={() => setInReason(`${giftedName} vai morar fora`)} />
                        {giftedName} vai morar fora
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_living-partner" checked={inReason === `${giftedName} vai morar com o(a) namorado(a)`} onChange={() => setInReason(`${giftedName} vai morar com o(a) namorado(a)`)} />
                        {giftedName} vai morar com o(a) namorado(a)
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio long-option">
                        <input type="radio" name="reason" id="reason_change-life" checked={inReason === `${giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso`} onChange={() =>setInReason(`${giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso`)} />
                        {giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_breaking" checked={inReason === `${giftedName} está se separando`} onChange={() => setInReason(`${giftedName} está se separando`)} />
                        {giftedName} está se separando
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_back-parents" checked={inReason === `${giftedName} está voltando a morar com os pais`} onChange={() => setInReason(`${giftedName} está voltando a morar com os pais`)} />
                        {giftedName} está voltando a morar com os pais
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option small-radio">
                        <input type="radio" name="reason" id="reason_live-me" checked={inReason === `${giftedName} está vindo morar comigo`} onChange={() => setInReason(`${giftedName} está vindo morar comigo`)} />
                        {giftedName} está vindo morar comigo
                        <span className="checkmark"></span>
                    </label>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">

                        <button onClick={() => {
                            setReason(inReason);
                            setMovingPage(0)
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inReason) {
                                setWarning("Por favor, escolha uma das opções")
                            } else {
                                setReason(inReason);
                                setMovingPage(2)
                            }
                        }}>Próxima</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReasonQ
