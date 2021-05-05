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

    let finalMessage

    switch (formInfo.occasion) {
        case "casamento/namoro":
            finalMessage = 
            `Nome de quem dá o presente: ${formInfo.gifterName}`
            break;
    
        default:
            finalMessage = "Algo deu errado, desculpe, você precisará refazer o formulário"
            break;
    }

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Obrigado por comprar com o mimolino</h2>            
                    <h3>Talvez revise seus dados</h3>
                    <p>{finalMessage}</p>

                    <div className="prev-for">
                        <button onClick={() => {
                            setPage(9)
                        }}>Anterior</button>
                        <button onClick={() => {
                        sendEmail(JSON.stringify(formInfo, null, "\t"));
                        }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndQ
