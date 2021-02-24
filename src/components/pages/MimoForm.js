import { useState } from "react";

// import Questions
import Hello from "../questions/Hello";
import GifterNameQ from "../questions/GifterNameQ";
// import GiftedNameQ from "..questions/GiftedNameQ";

function MimoForm() {

    const [ page, setPage ] = useState(0);

    const [ gifterName, setGifterName ] = useState("");
    
    switch(page) {
        case 0:
            return (
                <Hello setPage={setPage}/>
            );

        case 1:
            return (
                <GifterNameQ setGifterName={setGifterName}/>
            );

        // case 2:
        //     return (
        //         <GiftedNameQ />
        //     );

        default:
            return (
                <h1>Sorry, could not find your page</h1>
            )
    }
}

export default MimoForm;