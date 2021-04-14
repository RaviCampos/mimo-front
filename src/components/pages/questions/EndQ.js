import emailjs from 'emailjs-com';

function EndQ({tools: {setPage, formInfo}}) {
 
    function sendEmail() {
        emailjs.send(
            "service_a7ydngj", 
            "template_8xqrqek", 
            {message: JSON.stringify(formInfo, null, "\t")}, 
            "user_zPbvgXcdu1HcYNxPkcMOc"
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
    return (
        <div>
            <h2>Obrigado por comprar com o mimolino</h2>            
            <h3>Talvez revise seus dados</h3>
            <p>{JSON.stringify(formInfo)}</p>
            <button onClick={() => {
                setPage(9)
            }}>Anterior</button>
            <button onClick={() => {
               sendEmail();
            }}>Enviar</button>
        </div>
    )
}

export default EndQ
