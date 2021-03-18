import { useState } from "react";

function HobbieQ({tools: {hobbie, intimacy, setHobbie, setBDayPage, giftedName}}) {

    const [inHobbie, setInHobbie] = useState(hobbie ? hobbie : "")

    return (
        <div>
            <h2>Hobbie</h2>

            <br/>

            <button onClick={() => {
                setHobbie(inHobbie);
                setBDayPage(4)
            }}>Anterior</button>
            <button onClick={() => {
                setHobbie(inHobbie);
                setBDayPage(6)
            }}>Próxima</button>
        </div>
    )
}

export default HobbieQ
