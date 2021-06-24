import { useState, useEffect, useReducer } from "react";

function init({hobbies: prevHobbies, giftedName}) {
    if(prevHobbies) return prevHobbies
    const initialState = {
        plants: {
            value: `${giftedName} é a própria mãe(pai) de planta, se não está cuidando de suas crianças botânicas está vendo vídeos sobre plantas, comprando plantas, pegando plantas na rua ou pregando a palavra da criação de plantas`,
            checked: false
        },
        exercises: {
            value: `${giftedName} gosta de se exercitar. Uma corridinha, uma volta de bike no eixão, uma aula experimental de pilates, uma vídeo aula de ioga, qualquer uma dessas é possível para um sábado a tarde na vida de ${giftedName}`,
            complement: undefined,
            checked: false
        },
        movies: {
            value: `Em seu tempo livre ${giftedName} assiste a filmes estrangeiros com nomes impronunciais (não que isso importe já ninguém nunca vai falar sobre eles mesmo, de tão desconhecidos que são)`,
            checked: false
        },
        books: {
            value: `Quando preciso de uma dica de leitura sempre recorro a ${giftedName}. Seja em seu fiel escudeiro kindle ou com um livre físico, ${giftedName} sempre lendo lendo alguma coisa`,
            complement: "fdmkdasmk sjadisad sada",
            checked: false
        },
        pagode: {
            value: `${giftedName} e Zeca Pagodinho foram separados na maternidade, o seu lema é "Deixa a vida me levar" e sua paixão é uma cervejinha gelada`,
            checked: false
        }
    }
    return initialState;
}

function reducer(state, action) {
    switch (action.type) {
        case "checkUncheck":
            return ({
                ...state,
                [action.payload.option]: {
                    ...state[action.payload.option],
                    checked: !state[action.payload.option].checked
                }
            })
        case "complement":
            return ({
                ...state,
                [action.payload.option]: {
                    ...state[action.payload.option],
                    complement: action.payload.complement
                }
            })
    }
}

function complementDialogBox(option, inHobbies, dispatch, giftedName) {
    if(!inHobbies[option].checked) return
    let ptOption
    if(option === "books") {
        ptOption = "livro"
    } else if(option === "exercises") {
        ptOption = "exercícios físicos"
    }
    return (
        <div>
            <p>Se você souber, conta para a gente o tipo de {ptOption} preferido de {giftedName}. Se não souber, pode deixar a caixa abaixo em branco mesmo</p>
            <input type="text" value={inHobbies[option].complement} onChange={e => dispatch({
                type: "complement", 
                payload: {
                        option, 
                        complement: e.target.value
                    }
            })}/>
        </div>
    )
}

function checkbox(option, inHobbies, dispatch) {
    return (
        <label className="checkbox-option small-checkbox long-option">
            {inHobbies[option].value}
            <input type="checkbox" name="hobbies" id={`hobbies_${option}`} checked={inHobbies[option].checked} onChange={() => dispatch(
                {type: "checkUncheck", payload: {option}}
            )} />
            <span className="checkbox-mark"></span>
        </label>
    )
}

function HobbieQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, hobbies, setHobbies, giftedName }}) {

    // useReducer takes three arguments, the second here I make so it is an object
    const [ inHobbies, dispatch ] = useReducer(reducer, {hobbies, giftedName}, init)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inHobbies])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Como {giftedName} passa o seu tempo livre? </h2>
                    <p className="sub-title">Pode marcar todas as alternativas que combinando com {giftedName}</p>
                    <div className="bit-down checkboxes-mother">
                        {checkbox("plants", inHobbies, dispatch)}
                        {checkbox("exercises", inHobbies, dispatch)}
                        {complementDialogBox("exercises", inHobbies, dispatch, giftedName)}
                        {checkbox("movies", inHobbies, dispatch)}
                        {checkbox("books", inHobbies, dispatch)}
                        {complementDialogBox("books", inHobbies, dispatch, giftedName)}
                        {checkbox("pagode", inHobbies, dispatch)}
                    </div>

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            setHobbies(inHobbies);
                            setNonePage(5)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const none = {
                                    ...futureNone,
                                    hobbies: inHobbies
                                }
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

export default HobbieQ
