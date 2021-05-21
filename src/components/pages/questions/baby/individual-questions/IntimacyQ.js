import { useState, useEffect } from "react";

function IntimacyQ({tools: {intimacy, setIntimacy, setBabyPage, parentType}}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : 5);
    
    useEffect(() => {
        if(inIntimacy === 9) {
            document.querySelector(".slider-bar").style.width = "95%";
        } else {
            const defaultWidthFactor = inIntimacy === 10 ? 9 : inIntimacy;
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
                        setInIntimacy(rating);
                    }
                }
                let rating = (breakBarWidth * 8 / breakWidthMinus3) + 1
                if(rating === 9) rating++;
                rating = Math.ceil(rating);
                setInIntimacy(rating)
                
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
    }, [])

    return (
        <div className="intimacyQ all-margin">
            <div className="all-center">
                <div>
                    <h2 className="small-title">Agora me conta uma coisa, só entre a gente, quão próximos vocês são</h2>
                    <p className="subtitle no-space-down">Selecione de <span>1</span> a <span>10</span> de acordo com o número que você acredita que corresponde ao quão bem você conhece a pessoa que vai ganhar o presente</p>

                    <span className="intimacy-num">{inIntimacy}</span>

                    <div className="slider-house">
                        <div className="shade"></div>
                        <div className="slider">
                            <div className="slider-bar"></div>
                            <div className="slider-ball"></div>
                        </div>
                    </div>


                    <br/>


                    <div className="prev-for small-space-top">
                        <button onClick={() => {
                            setIntimacy(inIntimacy);
                            setBabyPage(1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setIntimacy(inIntimacy);
                            setBabyPage(3)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntimacyQ