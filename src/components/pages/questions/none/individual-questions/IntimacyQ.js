import { useState, useEffect } from "react";

function IntimacyQ({tools: { setNonePage, intimacy, setIntimacy, giftedName }}) {

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
            const domBar = document.querySelector(".slider-bar");
            const slider = document.querySelector(".slider-house");
            const breakWidthMinus3 = slider.getBoundingClientRect().width - 3;
            // -3 px to centralize the little vertical bar in the end of the slider, a "handle"
            const breakBarWidth = event.pageX - slider.getBoundingClientRect().x - 3;
            if(event.button === 0) {
    
                domBar.style.width = breakBarWidth + "px";
    
                function move(e) {
                    if(e.buttons === 0) {
                        window.removeEventListener("mousemove", move);
                    } else {
                        e.preventDefault();
                        let breakBWidth = e.pageX - slider.getBoundingClientRect().x - 3;
                        // check if cursor is out of the box and not increase or decrease max min values
                        if(breakBWidth > breakWidthMinus3) {
                            breakBWidth = breakWidthMinus3;
                        }
                        if(e.pageX < slider.getBoundingClientRect().x - 3) breakBWidth = 0;

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

                window.addEventListener("mousemove", move)
            }
        }

        const sliderBreakHouse = document.querySelector(".slider-house");
        sliderBreakHouse.addEventListener("mousedown", handleSlideBar);
    }, [])

    return (
        <div className="intimacyQ">
            <h2>Agora me conta uma coisa, só entre a gente, o quão bem você conhece {giftedName}</h2>
            <p>Sendo <span>1</span> não conheço muito bem {giftedName}, e <span>10</span> conheço tudo de {giftedName}! Se bobiar consigo até ler a mente dessa pessoa</p>
            <span>1</span>
            <div className="slider-house">
                <div className="shade"></div>
                <div className="slider">
                    <div className="slider-bar"></div>
                    <div className="slider-ball"></div>
                </div>
            </div>
            <span>10</span>
            <br/>
            <span>{inIntimacy}</span>
            
            <br/>

            <button onClick={() => {
                setIntimacy(inIntimacy);
                setNonePage(2)
            }}>Anterior</button>
            <button onClick={() => {
                setIntimacy(inIntimacy);
                setNonePage(4)
            }}>Próxima</button>
        </div>
    )
}

export default IntimacyQ