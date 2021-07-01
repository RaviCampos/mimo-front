export function sliderbarInteractivity(stateVar, setStateVar) {
    if(stateVar === 9) {
        document.querySelector(".slider-bar").style.width = "95%";
    } else {
        const defaultWidthFactor = stateVar === 10 ? 9 : stateVar;
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
                    setStateVar(rating);
                }
            }
            let rating = (breakBarWidth * 8 / breakWidthMinus3) + 1
            if(rating === 9) rating++;
            rating = Math.ceil(rating);
            setStateVar(rating)
            
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

export function init({prevStateFromFatherComponent, baseState}) {
    if(prevStateFromFatherComponent) return prevStateFromFatherComponent
    return baseState;
}

export function reducer(state, action) {
    return ({
        ...state,
        [action.type]: {
            ...state[action.type],
            checked: !state[action.type].checked
        }
    })
}

export function checkboxes(name, state, dispatch) {
    const checkboxesArr = []
    for(const key in state) {
        checkboxesArr.push(
            <label className="checkbox-option small-checkbox long-option">
                {state[key].value}
                <input type="checkbox" name={`${name}`} id={`${name}_${key}`} checked={state[key].checked} onChange={() => dispatch(
                    {type: key}
                )} />
                <span className="checkbox-mark"></span>
            </label>
        )
    }
    return checkboxesArr
}