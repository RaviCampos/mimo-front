import { useEffect, useState } from "react"

function ReasonQ({tools: { setMovingPage, reason, setReason, giftedName }}) {

    const [ inReason, setInReason ] = useState(reason ? reason : "")

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inReason])

    return (
        <div>
            <h2>Me conta, em qual é a circunstância vamos entregar o presente para {giftedName}?</h2>
            <div>
                <input type="radio" name="reason" id="reason_first-leaving" checked={inReason === `${giftedName} está saindo de casa pela primeira vez`} onChange={() => setInReason(`${giftedName} está saindo de casa pela primeira vez`)} />
                <label htmlFor="reason_first-leaving">{giftedName} está saindo de casa pela primeira vez</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_living-out" checked={inReason === `${giftedName} vai morar fora`} onChange={() => setInReason(`${giftedName} vai morar fora`)} />
                <label htmlFor="reason_living-out">{giftedName} vai morar fora</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_living-partner" checked={inReason === `${giftedName} vai morar com o(a) namorado(a)`} onChange={() => setInReason(`${giftedName} vai morar com o(a) namorado(a)`)} />
                <label htmlFor="reason_living-partner">{giftedName} vai morar com o(a) namorado(a)</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_change-life" checked={inReason === `${giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso`} onChange={() =>setInReason(`${giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso`)} />
                <label htmlFor="reason_change-life">{giftedName} está passando por uma grande mudança de vida e mudar de casa é uma parte disso</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_breaking" checked={inReason === `${giftedName} está se separando`} onChange={() => setInReason(`${giftedName} está se separando`)} />
                <label htmlFor="reason_breaking">{giftedName} está se separando</label>
            </div>
            <div>
                <input type="radio" name="reason" id="reason_back-parents" checked={inReason === `${giftedName} está voltando a morar com os pais`} onChange={() => setInReason(`${giftedName} está voltando a morar com os pais`)} />
                <label htmlFor="reason_back-parents">{giftedName} está voltando a morar com os pais</label>
            </div>

            <div>
                <input type="radio" name="reason" id="reason_live-me" checked={inReason === `${giftedName} está vindo morar comigo`} onChange={() => setInReason(`${giftedName} está vindo morar comigo`)} />
                <label htmlFor="reason_live-me">{giftedName} está vindo morar comigo</label>
            </div>


            {warning && <p className="validation-warning">{warning}</p>}

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
    )
}

export default ReasonQ
