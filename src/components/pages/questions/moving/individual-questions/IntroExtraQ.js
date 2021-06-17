import { useEffect, useState } from "react";

function radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra) {
    if(intimacy > 5) {
        return (
            <div>
                <h2 className="small-title">Como você acha que serão os primeiros momentos de {giftedName} em seu novo espaço?</h2>

                <div>
                    <label className="radio-option long-option">
                        Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho
                        <input type="radio" name="coolness" id="coolness_cooler" checked={inIntroExtra === `Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho`} onChange={() => setInIntroExtra(`Um open house, uma grande festa com várias pessoas para celebrar essa mudança, antes da última caixa ser desmontada o tapete já terá sua primeira mancha de vinho`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para {giftedName}
                        <input type="radio" name="coolness" id="coolness_pinterest" checked={inIntroExtra === `Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para ${giftedName}`} onChange={() => setInIntroExtra(`Esse primeiro momento com certeza será de organização, deixar tudo no lugar é muito importante para ${giftedName}`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option">
                        {giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá
                        <input type="radio" name="coolness" id="coolness_kitchen" checked={inIntroExtra === `${giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá`} onChange={() => setInIntroExtra(`${giftedName} é mais introspectivo(a), não costuma convidar muitas pessoas para sua casa. Mas esse é um momento tão especial que deve rolar até uma pequena reunião por lá`)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-option long-option long-option">
                        Para {giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa
                        <input type="radio" name="coolness" id="coolness_norest" checked={inIntroExtra === `Para ${giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa`} onChange={() =>setInIntroExtra(`Para ${giftedName} a casa é um espaço sagrado, assim que se mudar com certeza deve fazer uma limpeza mais espiritual na casa`)} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="small-title">De acordo com o que você nos contou até agora, você e {giftedName} não são muito próximos, certos? Mas pensando em como {giftedName} age quando vocês se encontram e em quão extrovertido(a) {giftedName} é, marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
                <p className="subtitle no-space-down">Sendo 1 "Sorria e acene é o lema de {giftedName}" e 10 "Díficil pensar em um assunto no {giftedName} não tenha opinião ou em um momento em que não se escute sua voz"</p>

                <span className="intimacy-num">{inIntroExtra}</span>
                {/* <span>1</span> */}
                <div className="slider-house">
                    <div className="shade"></div>
                    <div className="slider">
                        <div className="slider-bar"></div>
                        <div className="slider-ball"></div>
                    </div>
                </div>
                {/* <span>10</span> */}
                <br/>
                
                <br/>
            </div>
        )
    }
}

function pickInitialValue(intimacy, introExtra) {
    if(intimacy <= 5) {
        if(Number.isInteger(introExtra)) {
            return introExtra
        } else {
            return 5
        }
    } else {
        if(Number.isInteger(introExtra)) {
            return ""
        } else {
            return introExtra
        }
    }
}

function IntroExtraQ({tools: { setSection, futureMoving, setMoving, setPage, setGoToOccasionLastQ, setMovingPage, introExtra, setIntroExtra, giftedName, intimacy }}) {


    const [ inIntroExtra, setInIntroExtra ] = useState(pickInitialValue(intimacy, introExtra))

    useEffect(() => {
        if(intimacy <= 5) {
            if(inIntroExtra === 9) {
                document.querySelector(".slider-bar").style.width = "95%";
            } else {
                const defaultWidthFactor = inIntroExtra === 10 ? 9 : inIntroExtra;
                const defaultWidth = ( defaultWidthFactor - 1 ) * (document.querySelector(".slider-house").getBoundingClientRect().width - 3) / 8;
                document.querySelector(".slider-bar").style.width = defaultWidth + "px"
            }
            
            function handleSlideBar(event) {
                event.preventDefault()
                const domBar = document.querySelector(".slider-bar");
                const slider = document.querySelector(".slider-house");
                const breakWidthMinus3 = slider.getBoundingClientRect().width - 3;
                // -3 px to centralize the little vertical bar in the end of the slider, a "handle"
                const breakBarWidth = (event.pageX ? event.pageX : event.changedTouches[0].pageX)- slider.getBoundingClientRect().x - 3;
                if(event.button === 0 || event.changedTouches) {
                    domBar.style.width = breakBarWidth + "px";
        
                    function move(e) {
                        if(e.buttons === 0) {
                            window.removeEventListener("mousemove", move);
                        } else {
                            // e.preventDefault();
                            let breakBWidth = (e.pageX ? e.pageX : e.changedTouches[0].pageX) - slider.getBoundingClientRect().x - 3;
                            // check if cursor is out of the box and not increase or decrease max min values
                            if(breakBWidth > breakWidthMinus3) {
                                breakBWidth = breakWidthMinus3;
                            }
                            if((e.pageX ? e.pageX : e.changedTouches[0].pageX) < slider.getBoundingClientRect().x - 3) breakBWidth = 0;
    
                            domBar.style.width = breakBWidth + "px";
                            
                            let rating = (breakBWidth * 8 / breakWidthMinus3) + 1
                            if(rating === 9) rating++;
                            rating = Math.ceil(rating);
                            setInIntroExtra(rating);
                        }
                    }
                    let rating = (breakBarWidth * 8 / breakWidthMinus3) + 1
                    if(rating === 9) rating++;
                    rating = Math.ceil(rating);
                    setInIntroExtra(rating)
                    
                    // event.preventDefault();
                    // window.addEventListener("touchmove", move, { passive: false })
                    window.addEventListener((event.pageX ? "mousemove" : "touchmove"), move)
                    if(!event.pageX) {
                        window.addEventListener("touchend", () => window.removeEventListener("touchmove", move))
                    }
                    // window.addEventListener("mouseup", () => window.removeEventListener("mousemove", move))
                }
            }
    
            const sliderBreakHouse = document.querySelector(".slider-house");
            // sliderBreakHouse.addEventListener("mousedown", handleSlideBar);
            // if(window.innerWidth < 550) {
                sliderBreakHouse.addEventListener("touchstart", handleSlideBar);
            // } else {
                sliderBreakHouse.addEventListener("mousedown", handleSlideBar);
            // }
        }
    })

    const [ warning, setWarning ] = useState(false)
    useEffect(() => {
        setWarning(false)
    }, [inIntroExtra])


    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    
                    {radioOptions(intimacy, giftedName, inIntroExtra, setInIntroExtra)}

                    {warning && <p className="validation-warning">{warning}</p>}

                    <div className="prev-for go-bit-down when-mobile">
                        <button onClick={() => {
                            if(intimacy > 5) {
                                setIntroExtra(inIntroExtra);
                                setMovingPage(6)
                            } else {
                                setIntroExtra(inIntroExtra);
                                setMovingPage(5)
                            }
                        }}>Anterior</button>
                        <button onClick={() => {
                            if(!inIntroExtra) {
                                setWarning("Por favor, escolha uma das opções")
                            } else {
                                const moving = {
                                    ...futureMoving,
                                    introExtra: inIntroExtra
                                }
                                if(intimacy <= 5) delete moving.mood
                                setMoving(moving);
                                setGoToOccasionLastQ(true)
                                setSection("common")
                                setPage(4);
                            }
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroExtraQ
