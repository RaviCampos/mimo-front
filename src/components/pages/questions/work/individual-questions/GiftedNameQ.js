import { useEffect, useState } from "react"

function GiftedNameQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, giftedName, setGiftedName }}) {

    const [ inName, setInName ] = useState(giftedName ? giftedName : "")

    const [ warning, setWarning] = useState(false)    
    useEffect(() => {
        setWarning(false)
    }, [inName])
    
    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Comemorar conquistas é sempre muito importante! Qual é o nome da pessoa que vai receber o presente?</h2>
                    <input type="text" value={inName} onChange={e => setInName(e.target.value)} autoComplete="off"/>

                    <br/>

                    {warning && <p className="validation-warning">{warning}</p>}
                    
                    <div className="prev-for">
                        <button onClick={() => {
                            const work = {
                                ...futureWork,
                                giftedName: inName
                            }
                            // if(inCouple) {
                            //     delete wed.reasonToGift
                            // } else {
                            //     delete wed.commonHobbies
                            // }
                            setWork(work);
                            setGoToOccasionLastQ(false)
                            setSection("common")
                            setPage(2);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inName !== "") {
                                setGiftedName(inName);
                                setWorkPage(1)
                            } else {
                                setWarning("Por favor, preencha o nome da pessoa que vai ganhar o presente")
                            }
                        }}>Próxima</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ
