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

    let finalMessage = `` 

    // `Nome de quem dá o presente: ${formInfo.gifterName};
    // Nome de quem vai receber o presente: ${typeof formInfo.giftedName === "object" ? `${formInfo.giftedName.nameA} e ${formInfo.giftedName.nameA}`: formInfo.giftedName.replace("--", "e")};
    // Ocasião: ${formInfo.occasion.replace("/", "/ ")};
    // Valor: de R$${formInfo.value.split(" - ")[0]},00 até R$${formInfo.value.split(" - ")[1]},00;
    // Contato por: ${formInfo.contact};
    // Data de entrega: ${new Date(formInfo.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })};
    // `

    let finalHtmlMessage = makeEndBit(finalMessage);

    let standardEndingQ = 
    `Entrega no mesmo dia do aniversário: ${formInfo.deliveryBDay};
    Adições: ${formInfo.additions ? formInfo.additions : "Nenhuma"};
    Restrições alimentares: ${formInfo.foodRestriction};
    Endereço: ${formInfo.adress};
    `

    let internalMessage

    switch (formInfo.occasion) {
        case "casamento/namoro": 
            internalMessage = 
            `Presenteado faz parte do casal: ${formInfo.gifterInCouple};
            Tempo juntos: ${formInfo.timeTogether};
            Idade: ${formInfo.age};
            Nível da relação do casal: ${formInfo.coupleRelationLevel};
            Introversão ou extroversão: ${formInfo.introExtra};
            Careta ou maneiro: ${formInfo.coolness};
            Motivo para presentear: ${formInfo.reasonToGift}
            `
            break;

        case "aniversario":
            internalMessage = 
            `Idade: ${formInfo.age};
            Relação: ${formInfo.relation};
            Intimidade: ${formInfo.intimacy};
            Introversão ou extroversão: ${formInfo.introExtra};
            Hobbies: ${formInfo.hobbies};
            Careta ou maneiro: ${formInfo.coolness};
            `
            break;

        case "bebe":
            internalMessage = ``
            break;

        case "trabalho":
            internalMessage = 
            `Porquê está dando o presente: ${formInfo.reason};
            Nível de intimidade: ${formInfo.intimacy};
            Idade: ${formInfo.age};
            Área de atuação: ${formInfo.area};     
            Careta ou descolado: ${formInfo.coolness};
            Introversão ou extroversão: ${formInfo.introExtra};
            `
            if(formInfo.mood) internalMessage += `Ânimo: ${formInfo.mood}`
            
            break;

        case "mudança":
            internalMessage = 
            `Porquê está dando o presente: ${formInfo.reason};
            Idade: ${formInfo.age};
            Relação: ${formInfo.relation};   
            Nível de intimidade: ${formInfo.intimacy};
            Careta ou descolado: ${formInfo.coolness};
            Introversão ou extroversão: ${formInfo.introExtra};
            `
            if(formInfo.mood) internalMessage += `Ânimo: ${formInfo.mood}`

            break;

        case "viagem":
            internalMessage = 
            `Porquê está dando o presente: ${formInfo.reason};
            Destino: ${formInfo.destiny};
            Relação: ${formInfo.relation};   
            Nível de intimidade: ${formInfo.intimacy};
            Introversão ou extroversão: ${formInfo.introExtra};
            Careta ou descolado: ${formInfo.coolness};
            `

            break;

        case "nenhuma":
            internalMessage = 
            `Idade: ${formInfo.age};
            Relação: ${formInfo.relation};   
            Nível de intimidade: ${formInfo.intimacy};
            Introversão ou extroversão: ${formInfo.introExtra};
            Careta ou descolado: ${formInfo.coolness};
            Hobbies: ${formInfo.hobbies};
            `

            break;
        
        default:
            finalMessage = "Algo deu errado com a finalização das perguntas, dê uma olhada primeiro no código de EndingQ.js"
            finalHtmlMessage = "Algo deu errado, desculpe, você precisará refazer o formulário"
            break;
    }

    finalMessage += standardEndingQ;
    finalMessage += internalMessage;

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Obrigado por comprar com o mimolino</h2>            
                    <h3>Talvez revise seus dados</h3>
                    <pre>{JSON.stringify(formInfo, null, 2)}</pre>
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
