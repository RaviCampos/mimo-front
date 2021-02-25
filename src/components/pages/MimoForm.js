import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Questions
import Hello from "../questions/Hello";
import GifterNameQ from "../questions/GifterNameQ";
// import GiftedNameQ from "..questions/GiftedNameQ";

function MimoForm() {

    const [ page, setPage ] = useState(0);

    const [ gifterName, setGifterName ] = useState("");

    const Load = page ? GifterNameQ : Hello; 
    
    // switch(page) {
    //     case 0:
            return (
                // <div>
                <TransitionGroup>
                    <CSSTransition
                        key={page}
                        // in={page == 0}
                        timeout={200}
                        classNames="hello"
                        unmountOnExit
                    >
                        {<Load setPage={setPage}/>}
                    </CSSTransition>
                </TransitionGroup>
                // </div>
            );

        // case 2:
        //     return (
        //         <GiftedNameQ />
        //     );

        // default:
        //     return (
        //         <h1>Sorry, could not find your page</h1>
        //     )
    // }
}

export default MimoForm;