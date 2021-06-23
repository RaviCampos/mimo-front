import { useState } from "react";

function HobbieQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, hobbies, setHobbies, giftedName }}) {

    const [inHobbies, setInHobbies] = useState(hobbies ? hobbies : "")

    return (
        <div>
            <h2>Hobby</h2>

            <br/>

            <button onClick={() => {
                setHobbies(inHobbies);
                setNonePage(5)
            }}>Anterior</button>
            <button onClick={() => {
                const none = {
                        ...futureNone,
                        hobbies: inHobbies
                    }
                    setNone(none);
                    setGoToOccasionLastQ(true)
                    setSection("common")
                    setPage(4);
            }}>Próxima</button>
        </div>
    )
}

export default HobbieQ
