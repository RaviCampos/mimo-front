import { useEffect, useState, useReducer } from "react";

function init({coolness: prevCoolness, giftedName}) {
    if(prevCoolness) return prevCoolness
    const initialState = {
        food: {
            value: `Esqueça os pontos turísticos, ${giftedName} está mais interessado nos restaurantes do lugar um(a) expert em turismo gastronômico`,
            checked: false
        },
        fashion: {
            value: `Para ${giftedName} uma viagem é uma oportunidade de desfilar para uma nova audiência, os looks vão prontos na mala e chegando lá são incrementados com itens especiais comprados no local`,
            checked: false
        },
        pictures: {
            value: `Não importa para onde ${giftedName} vá ou qual seja o motivo da viagem, tenho certeza que as fotos serão incríveis`,
            checked: false
        },
        planer: {
            value: `${giftedName} é o tipo de pessoa que planeja para tudo, tenho certeza que ele(a) tem um intinerario completo para a viagem`,
            checked: false
        },
        fun: {
            value: `Não importa onde esteja ou qual seja o motivo de sua viagem, ${giftedName} acha um tempo para se divertir`,
            checked: false
        },
        hidden: {
            value: `${giftedName} tem um talento para descobrir os mais incríveis e escondidos lugares não importa onde esteja`,
            checked: false
        },
        friends: {
            value: `${giftedName} faz amigos com facilidade, em sua viagem com certeza deve conhecer algumas pessoas interessantes`,
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

function CoolnessQ({tools: { travelPage, setTravelPage, coolness, setCoolness, giftedName }}) {
    const [ inCoolness, dispatch ] = useReducer(reducer, {coolness, giftedName}, init)

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inCoolness])

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Uma viagem não importa o seu motivo pode se transformar em uma aventura, marque as  opções abaixo que você acha que mais combinam com o que {giftedName} faz quando viaja:</h2>

                    {checkboxes(inCoolness, dispatch)}
                    
                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for">
                        <button onClick={() => {
                            setCoolness(inCoolness);
                            setTravelPage(travelPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setCoolness(inCoolness)
                            setTravelPage(travelPage + 1)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoolnessQ
