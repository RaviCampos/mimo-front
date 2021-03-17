import { useState, useEffect } from "react";

function IntimacyQ({tools: {intimacy, setIntimacy, setBDayPage, giftedName}}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : "");
    
    useEffect(() => {
        function handleSlideBar(event) {
            if(event.button === 0) {
                const slider = document.querySelector(".slider");
                const domBar = document.querySelector(".slider-bar");

                // -3 px to centralize the little vertical bar in the end of the slider, a "handle"
                let breakBarWidth = event.pageX - slider.getBoundingClientRect().x - 3;
    
                // chek if it is not bellow one minut
                const breakWidthMinus3 = slider.getBoundingClientRect().width - 3;
                // const atLeastOne = breakWidthMinus3 / 60;
                // if(event.pageX < slider.getBoundingClientRect().x + atLeastOne) breakBarWidth = atLeastOne;
    
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
                        
                        const rating = Math.round( breakBWidth * 10 / breakWidthMinus3)
                        // console.log(rating ? rating : 1)
                        console.log("lub")
                    }
                }
                
                const rating = Math.round( breakBarWidth * 10 / breakWidthMinus3)
                // console.clear()
                console.log(rating !== 0 ? rating : 1)

                window.addEventListener("mousemove", move)
            }
        }

        const sliderBreakHouse = document.querySelector(".slider-house");
        sliderBreakHouse.addEventListener("mousedown", handleSlideBar);
    })

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

            <button onClick={() => {
                // if(verify()) {
                    setIntimacy(inIntimacy);
                    setBDayPage(2)
                // }
            }}>Anterior</button>
            <button onClick={() => {
                // if(verifyAge()) {
                    setIntimacy(inIntimacy);
                    setBDayPage(4)
                // }
            }}>Próxima</button>
        </div>
    )
}

export default IntimacyQ
