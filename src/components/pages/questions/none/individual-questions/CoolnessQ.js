import { useEffect, useState } from "react";

function CoolnessQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, coolness, setCoolness, giftedName, intimacy, films, setFilms, musics, setMusics }}) {

    // "Filmes -- Pulp fiction, bistrou deux amis, baribie. Porque: ffllaklkdfaçlkçldçd && Músicas -- Conga, Brahms 4, Fiuk. Porque: dsakdsa,dsakssadc[as"

    const [ inCoolness, setInCoolness ] = useState(coolness ? coolness : "")

    const [ inFilms, setInFilms ] = useState(films ? films : "")
    const [ inMusics, setInMusics ] = useState(musics ? musics : "")
    

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])

    if(intimacy > 5) {

        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
                        <h2>Tem algum filme ou série que te lembra bastante essa pessoa? Se você quiser, pode me contar o porquê?</h2>
                        <p className="subtitle">Você pode deixar essa resposta em branco se preferir</p>
                        <textarea value={inFilms} onChange={e => setInFilms(e.target.value)}/>

                        <h2>E música? Tem alguma música, cantor ou banda que sempre que toca te lembra dessa pessoa? Se você quiser, pode me contar o porquê?</h2>
                        <p className="subtitle">Você pode deixar essa resposta em branco se preferir</p>
                        <textarea value={inMusics} onChange={e => setInMusics(e.target.value)}/>
            
                        <div className="prev-for">
                            <button onClick={() => {
                                setFilms(inFilms);
                                setMusics(inMusics);
                                setNonePage(4)
                            }}>Anterior</button>
                            <button onClick={() => {
                                setFilms(inFilms);
                                setMusics(inMusics);
                                setNonePage(6)
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {

        return (
            <div className="all-margin">
                <div className="all-center">
                    <div>
            
                        <h2>Careta ou descolado</h2>
            
                        {warning && <p className="validation-warning">{warning}</p>}
            
                        <div className="prev-for">
                            <button onClick={() => {
                                setCoolness(inCoolness);
                                setNonePage(4)
                            }}>Anterior</button>
                            <button onClick={() => {
                                const none = {
                                    ...futureNone,
                                    coolness: inCoolness
                                }
                                delete none.hobbies
                                delete none.films
                                delete none.musics
                                setNone(none);
                                setGoToOccasionLastQ(true)
                                setSection("common")
                                setPage(4);
                            }}>Próxima</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoolnessQ
