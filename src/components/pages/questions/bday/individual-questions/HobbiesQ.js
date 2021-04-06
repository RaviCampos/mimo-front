import { useState } from "react";

function HobbiesQ({tools: {hobbies, intimacy, setHobbies, setBDayPage, giftedName}}) {

    const [inHobbies, setInHobbies] = useState(hobbies ? hobbies : "")

    return (
        <div>
            <h2>Hobby</h2>

            <br/>

            <button onClick={() => {
                setHobbies(inHobbies);
                setBDayPage(4)
            }}>Anterior</button>
            <button onClick={() => {
                setHobbies(inHobbies);
                setBDayPage(6)
            }}>Próxima</button>
        </div>
    )
}

export default HobbiesQ
