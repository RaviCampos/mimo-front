import { useReducer } from "react"

function init({hobbies: prevHobbies, giftedName}) {
    if(prevHobbies) return prevHobbies
    const initialState = {
        plants: {
            value: "Somos pais de planta, então sabe como é: se não estamos cuidando de suas crianças botânicas estamos vendo vídeos sobre plantas, comprando plantas, pegando plantas na rua ou pregando a palavra da criação de plantas",
            checked: false
        },
        exercises: {
            value: "Nos finais de semana sempre tiramos um tempinho para nos exercitarmos. Uma corridinha, uma volta de bike no eixão, uma aula experimental de pilates, uma vídeo aula de ioga, qualquer uma dessas é possível para um sábado a tarde",
            checked: false
        },
        movies: {
            value: "Em nosso tempo livre assistimos a filmes juntos",
            complement: undefined,
            checked: false
        },
        cook: {
            value: `Sempre que possível cozinhamos juntos ou um para o outro, pode até parecer uma coisa simples o ritual nos aproxima. Pensar no que ${giftedName} irá gostar de provar ou em seu prato favorito, preparar tudo enquanto ele(a) coloca a mesa, ou dividir os passos da receita entre nós dois e ir provando a comida até chegar no ponto certo, uma musiquinha no fundo para cantarmos juntos, talvez uma taça de vinho para acompanhar. Não consigo pensar em nada mais romântico`,
            complement: undefined,
            checked: false
        },
        together: {
            value: `Só estar no mesmo lugar que ${giftedName} já é especial. Cada um trabalhando no eu canto, um dos dois levanta para pegar um café e passa para receber um beijo, os dois assistindo TV ou lendo um livro e os pés se tocando no sofá. Esses são os nossos momentos especiais`,
            checked: false
        },
        series: {
            value: `Sempre assistimos séries juntos, e a maior traição possível é, claro, um assistir um episódio sem o outro`,
            complement: undefined,
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

function textComplement(option, state, dispatch) {
    if(!state[option].checked) return
    let text
    switch (option) {
        case "cook":
            text = "Para vocês, qual a trilha sonora ideal para esses momentos?"
            break;
        case "series":
            text = "Qual o última série que vocês viram ou estão vendo juntos?"
            break;
    }
    return (
        <div className="small-space-down">
            <p>{text}</p>
            <input type="text" value={state[option].complement} onChange={e => dispatch({
                type: "complement", 
                payload: {
                        option, 
                        complement: e.target.value
                    }
            })}/>
        </div>
    )
}

function moviesRadioOption(id, text, state, dispatch) {
    return (
        <label className="radio-option tinny-radio">
            {text}
            <input type="radio" name="hobbies_subradio" id={`hobbies_subradio_${id}`} checked={state.movies.complement === text} onChange={ () => dispatch({
                type: "complement",
                payload: {
                    option: "movies",
                    complement: text 
                }
            })}/>
            <span className="checkmark"></span>
        </label>
    )
}

function moviesRadioComplement(state, dispatch, moviesRadioOption) {
    if(!state.movies.checked) return
    return (
        <div className="subradio-div">
            <h3>Quais tipo de filmes vocês gostam de ver juntos</h3>
            <div>
                {moviesRadioOption("foreign", "Estrangeiros com nomes impronunciais (não que isso importe já ninguém nunca vai falar sobre eles mesmo, de tão desconhecidos que são)", state, dispatch)}
                {moviesRadioOption("disney", "Tudo e qualquer coisa da Disney e/ou Pixar", state, dispatch)}
                {moviesRadioOption("anything", "O que estiver passando ou estiver mais fácil no catalogo na netflix, o que importa é estarmos assistindo juntinhos", state, dispatch)}
                {moviesRadioOption("research", "A escolha do filme é a parte mais difícil, né? Passamos horas vendo vídeos de recomendações no youtube, e procurando indicações no Instagram para escolher alguma coisa", state, dispatch)}
            </div>
        </div>
    )
}

function checkbox(option, state, dispatch) {
    return (
        <label className="checkbox-option small-checkbox long-option">
            {state[option].value}
            <input type="checkbox" name="hobbies" id={`hobbies_${option}`} checked={state[option].checked} onChange={() => dispatch(
                {type: "checkUncheck", payload: {option}}
            )} />
            <span className="checkbox-mark"></span>
        </label>
    )
}

function HobbiesQ({tools: { setWeddingPage, weddingPage, setHobbies, hobbies, giftedName }}) {

    const [ inHobbies, dispatch ] = useReducer(reducer, {hobbies, giftedName}, init)

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title">Como você e {giftedName} aproveitam o seu tempo juntos?</h2>
                    <p className="sub-title">Pode marcar todas as alternativas que combinando com vocês</p>
                    
                    <div className="bit-down checkboxes-mother">
                        {checkbox("plants", inHobbies, dispatch)}
                        {checkbox("exercises", inHobbies, dispatch)}
                        {checkbox("movies", inHobbies, dispatch)}
                        {moviesRadioComplement(inHobbies, dispatch, moviesRadioOption)}
                        {checkbox("cook", inHobbies, dispatch)}
                        {textComplement("cook", inHobbies, dispatch)}
                        {checkbox("together", inHobbies, dispatch)}
                        {checkbox("series", inHobbies, dispatch)}
                        {textComplement("series", inHobbies, dispatch)}
                    </div>

                    <div className="prev-for">
                        <button onClick={() => {
                            setHobbies(inHobbies)
                            setWeddingPage( weddingPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setHobbies(inHobbies)
                            setWeddingPage( weddingPage + 1)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HobbiesQ
