import { useState, useEffect } from "react";
import { sliderbarInteractivity } from "../../utils/utils"

function IntimacyQ({tools: {babyPage, intimacy, setIntimacy, setBabyPage, parentType}}) {

    const [ inIntimacy, setInIntimacy ] = useState(intimacy ? intimacy : 5);
    
    useEffect(() => {
        sliderbarInteractivity(inIntimacy, setInIntimacy)
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
                            setBabyPage(babyPage - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            setIntimacy(inIntimacy);
                            setBabyPage(babyPage + 1)
                        }}>Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntimacyQ