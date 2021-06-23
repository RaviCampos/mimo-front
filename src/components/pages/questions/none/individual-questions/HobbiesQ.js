import { useState } from "react";

function HobbieQ({tools: { setSection, futureNone, setNone, setPage, setGoToOccasionLastQ, setNonePage, hobbies, setHobbies, giftedName }}) {

    const [inHobbies, setInHobbies] = useState(hobbies ? hobbies : "")

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Hobby</h2>

                    <br/>
                    <div className="prev-for">
                        <button onClick={() => {
                            setHobbies(inHobbies);
                            setNonePage(5)
                        }}>Anterior</button>
                        <button onClick={() => {
                            const none = {
                                    ...futureNone,
                                    hobbies: inHobbies
                                }
                                delete none.coolness
                                setNone(none);
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

export default HobbieQ
