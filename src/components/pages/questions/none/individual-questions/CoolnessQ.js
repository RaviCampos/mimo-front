import { useState, useReducer } from "react";

function init({coolness: prevCoolness, giftedName}) {
    if(prevCoolness) return prevCoolness
    const initialState = {
        home: {
            value: `${giftedName} é uma pessoa caseira que curte a própria companhia`,
            checked: false
        },
        emoji: {
            value: `${giftedName} responde todas as mensagem no grupo de WhatsApp que estamos com as mesma duas figurinhas e nem sempre dá para decifrar o que isso significa`,
            checked: false
        },
        advice: {
            value: `Dar conselhos é praticamente o segundo emprego de ${giftedName}`,
            checked: false
        },
        sports: {
            value: `${giftedName} é a pessoa dos esportes, praticamente um comentárista profissional`,
            checked: false
        },
        series: {
            value: `Quando preciso de uma dica de série, é a ${giftedName} que eu recorro`,
            checked: false
        },
        friendly: {
            value: `${giftedName} faz amigos com facilidade`,
            checked: false
        }
    }
    return initialState;
}

function reducer(state, action) {
    return ({
        ...state,
        [action.type]: {
            ...state[action.type],
            checked: !state[action.type].checked
        }
    })
}

function checkboxes(inCoolness, dispatch) {
    const checkboxesArr = []
    for(const key in inCoolness) {
        checkboxesArr.push(
            <label className="checkbox-option small-checkbox long-option">
                {inCoolness[key].value}
                <input type="checkbox" name="coolness" id={`coolness_${key}`} checked={inCoolness[key].checked} onChange={() => dispatch(
                    {type: key}
                )} />
                <span className="checkbox-mark"></span>
            </label>
        )
    }
    return checkboxesArr
}

function CoolnessQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, coolness, setCoolness, giftedName, intimacy, films, setFilms, musics, setMusics }}) {

    // "Filmes -- Pulp fiction, bistrou deux amis, baribie. Porque: ffllaklkdfaçlkçldçd && Músicas -- Conga, Brahms 4, Fiuk. Porque: dsakdsa,dsakssadc[as"

    const [ inCoolness, dispatch ] = useReducer(reducer, {coolness, giftedName}, init)

    const [ inFilms, setInFilms ] = useState(films ? films : "")
    const [ inMusics, setInMusics ] = useState(musics ? musics : "")

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
                        <h2>Para conhecermos {giftedName} um pouco melhor marque as opções abaixo que mais te lembram ele(a):</h2>

                        {checkboxes(inCoolness, dispatch)}
            
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
