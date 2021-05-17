import { useState, useEffect } from "react"

function GiftedNameQ({tools: {setPage, setBabyPage, setGiftedName, giftedName, setSection, futureBaby, setBaby, setGoToOccasionLastQ}}) {

    const [ inGifted, setInGifted ] = useState(giftedName ? giftedName : "");
    const [ showWarning, setShowWarning ] = useState(false)

    useEffect(() => {
        if(inGifted) {
            setShowWarning(false);
        }
    }, [inGifted])

    // giftedName = {
    //     name: "Astoufo",
    //     quality: "Solo"
    // }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Uma criança é sempre uma alegria, né? Qual o nome do casal que irá recebê-la? </h2>
                    <input className="bit-down" type="text" value={inGifted} onChange={e => setInGifted(e.target.value)} placeholder="nome" autoComplete="off"/>

                    {showWarning && <p className="validation-warning">preencha o nome para seguir em frente</p>}

                    <br/>
                    <div className="prev-for go-down">
                        <button onClick={() => {
                            const baby = {
                                ...futureBaby,
                                giftedName: inGifted
                            }
                            setBaby(baby)
                            setGoToOccasionLastQ(false)
                            setSection("common")
                            setPage(2);
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(inGifted) {
                                setGiftedName(inGifted)
                                setBabyPage(1)
                            } else {
                                setShowWarning(true);
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftedNameQ
