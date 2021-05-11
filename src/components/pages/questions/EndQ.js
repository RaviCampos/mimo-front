import emailjs from 'emailjs-com';

function EndQ({tools: {setPage, formInfo}}) {
 
    function sendEmail(message) {
        emailjs.send(
            "service_a7ydngj", 
            "template_8xqrqek", 
            {message: message}, 
            "user_zPbvgXcdu1HcYNxPkcMOc"
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    function makeEndBit(mess) {
        return <div>{mess.split(";\n").map( x => {
            let pre = x.split(": ")
            return <div className="ending-data-bit">
                <p className="ending-q">{pre[0]}</p>
                <p className="ending-a">{pre[1]}</p>
            </div>
        })}</div>
    }

    let finalMessage
    let finalHtmlMessage

    switch (formInfo.occasion) {
        case "casamento/namoro":
            finalMessage = 
            `Nome de quem dá o presente: ${formInfo.gifterName};
            Nome de quem vai receber o presente: ${formInfo.giftedName.replace("--", "e")};
            Ocasião: ${formInfo.occasion.replace("/", "/ ")};
            Valor: de R$${formInfo.value.split(" - ")[0]},00 até R$${formInfo.value.split(" - ")[1]},00;
            Data de entrega: ${new Date(formInfo.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })};
            `
            
            finalHtmlMessage = makeEndBit(finalMessage)
            
            let internalMessage = 
            `Adições: ${formInfo.additions ? formInfo.additions : "Nenhuma"};
            Restrições alimentares: ${formInfo.foodRestriction};
            Entrega no mesmo dia do aniversário: ${formInfo.deliveryBDay};
            Endereço: ${formInfo.adress};
            Contato por: ${formInfo.contact};
            Presenteado faz parte do casal: ${formInfo.gifterInCouple};
            Tempo juntos: ${formInfo.timeTogether};
            Idade: ${formInfo.age};
            Nível da relação do casal: ${formInfo.coupleRelationLevel};
            Introversão ou extroversão: ${formInfo.introExtra};
            Careta ou maneiro: ${formInfo.coolness};
            Motivo para presentear: ${formInfo.reasonToGift}
            `
            finalMessage += internalMessage;

            break;
    
        default:
            finalMessage = "Algo deu errado, desculpe, você precisará refazer o formulário"
            finalHtmlMessage = "Algo deu errado, desculpe, você precisará refazer o formulário"
            break;
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Obrigado por comprar com o mimolino</h2>            
                    <h3>Talvez revise seus dados</h3>
                    <div>{JSON.stringify(formInfo, null, "\t")}</div>
                    {finalHtmlMessage}

                    <div className="prev-for">
                        <button onClick={() => {
                            setPage(9)
                        }}>Anterior</button>
                        <button onClick={() => {
                        // sendEmail(JSON.stringify(formInfo, null, "\t"));
                        sendEmail(finalMessage);
                        }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndQ
