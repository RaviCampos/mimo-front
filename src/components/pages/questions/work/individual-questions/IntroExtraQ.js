import { useEffect, useState } from "react";

function IntroExtraQ({tools: { setSection, futureWork, setWork, setPage, setGoToOccasionLastQ, setWorkPage, introExtra, setIntroExtra, giftedName, intimacy }}) {
    const [ inIntroExtra, setInIntroExtra ] = useState(introExtra ? introExtra : 1)

    useEffect(() => {
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
                
                window.addEventListener((event.pageX ? "mousemove" : "touchmove"), move)
                if(!event.pageX) {
                    window.addEventListener("touchend", () => window.removeEventListener("touchmove", move))
                }
            }
        }

        const sliderBreakHouse = document.querySelector(".slider-house");
        sliderBreakHouse.addEventListener("touchstart", handleSlideBar);
        sliderBreakHouse.addEventListener("mousedown", handleSlideBar);
    }, [])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    <h2 className="title small-title">Pensando em como X age normalmente quando está com colegas de trabalho, seja em um Happy Hour, em uma reunião ou em um momento normal no escritório, e em quão extrovertido (a) X é marque um número de 1 a 10 de acordo com a escala abaixo:</h2>
                    <p className="subtitle">Sendo <span>1</span>: "sorria e acene" é o lema de {giftedName}, e <span>10</span>: Díficil pensar em um assunto no {giftedName} não tenha opinião ou em um momento em que não se escute sua voz</p>

                    <span className="intimacy-num">{inIntroExtra}</span>
                    <div className="slider-house">
                        <div className="shade"></div>
                        <div className="slider">
                            <div className="slider-bar"></div>
                            <div className="slider-ball"></div>
                        </div>
                    </div>

                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setIntroExtra(inIntroExtra);
                            setWorkPage(5)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const work = {
                                ...futureWork,
                                introExtra: inIntroExtra
                            }
                            delete work.mood
                            delete work.hobbies
                            setWork(work);
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

export default IntroExtraQ
