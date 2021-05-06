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
            Ocasião: ${formInfo.occasion.replace("/", "/ ")}
            `
            finalHtmlMessage = makeEndBit(finalMessage)
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
