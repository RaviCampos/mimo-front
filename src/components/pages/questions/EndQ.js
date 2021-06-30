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

    function makeGiftedName() {
        const giftedName = formInfo.giftedName
        if(typeof giftedName === "object") {
            if(giftedName.name) {
                if(typeof giftedName.name === "string") {
                    return giftedName.name
                } else {
                    return `${giftedName.name.nameA} e ${giftedName.name.nameB}`
                }
            } else {
                return `${giftedName.nameA} e ${giftedName.nameA}`
            }
        } else {
            return giftedName.replace("--", "e")
        }
    }

    let finalMessage =
    `Nome de quem dá o presente: ${formInfo.gifterName};
Nome de quem vai receber o presente: ${makeGiftedName()};
Ocasião: ${formInfo.occasion.replace("/", "/ ")};
Valor: de R$${formInfo.value.split(" - ")[0]},00 até R$${formInfo.value.split(" - ")[1]},00;
Contato por: ${formInfo.contact};
Data de entrega: ${new Date(formInfo.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })};

`

    let finalHtmlMessage = makeEndBit(finalMessage);

    let standardEndingQ = 
    `

Adições: ${formInfo.additions ? formInfo.additions : "Nenhuma"};
Restrições alimentares: ${formInfo.foodRestriction};
Endereço: ${formInfo.adress};`

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
Motivo para presentear: ${formInfo.reasonToGift}`
            if(formInfo.hobbies) {
                const hobbies = formInfo.hobbies
                let finalHobbies = "\nHobbies:"
                for(const key in hobbies) {
                    const option = hobbies[key]
                    if(option.checked) {
                        finalHobbies += `\n\t&& ${option.value}`;
                        if(option.complement) finalHobbies += ` => COMPLEMENTO - ${option.complement}`;
                    };
                }
                internalMessage += finalHobbies;
            }
            break;

        case "aniversario":
            internalMessage = 
            `Idade: ${formInfo.age};
            Relação: ${formInfo.relation};
            Intimidade: ${formInfo.intimacy};
            Introversão ou extroversão: ${formInfo.introExtra};
            Hobbies: ${formInfo.hobbies};
            Careta ou maneiro: ${formInfo.coolness};
            Entrega no mesmo dia do aniversário: ${formInfo.deliveryBDay};
            `
            break;

        case "bebe":
            internalMessage = ``
            if(formInfo.age.age) {
                internalMessage += `Idade: ${formInfo.age.age}`
            } else if(formInfo.age.ageA) {
                internalMessage += `Idade: ${formInfo.giftedName.name.nameA} - ${formInfo.age.ageA} e ${formInfo.giftedName.name.nameB} - ${formInfo.age.ageB}`
            } else if(formInfo.age.gifterAge) {
                internalMessage += `Idade: ${formInfo.gifterName} - ${formInfo.age.gifterAge} e ${formInfo.giftedName.name} - ${formInfo.age.giftedAge}`
            }

            if(formInfo.reasonToGift) internalMessage += `\nPorquê está dando o presente: ${formInfo.reasonToGift};`
            if(formInfo.relation) internalMessage += ("\nRelação: " + formInfo.relation + ";");
            if(formInfo.intimacy) internalMessage += ("\nNível de intimidade: " + formInfo.intimacy + ";");
            if(formInfo.isBorn) internalMessage += ("\nO filho já nasceu: " + formInfo.isBorn + ";");
            if(formInfo.wheWasBorn) internalMessage += ("\nQuando nasceu: " + formInfo.wheWasBorn + ";");
            if(formInfo.childName) internalMessage += ("\nNome da criança: " + formInfo.childName + ";");
            if(formInfo.whenWillBeBorn) internalMessage += ("\nQuando vai nascer: " + formInfo.whenWillBeBorn + ";");
            if(formInfo.firstSon.yesOrNo) internalMessage += ("\nÉ o primeiro filho: " + formInfo.firstSon.yesOrNo + ";");
            if(formInfo.firstSon.howMany) internalMessage += ("\nNúmero de filhos: " + formInfo.firstSon.howMany + ";");
            if(formInfo.babySex.babySex) internalMessage += ("\nSabe o sexo do bebê: " + formInfo.babySex.babySex + ";");
            if(formInfo.babySex.babyName) internalMessage += ("\nNome do bebê: " + formInfo.babySex.babyName + ";")
            if(formInfo.coolness) internalMessage += ("\nCareta ou descolado: " )

            
            internalMessage += ("\nÂnimo: " + formInfo.mood + ";");
            internalMessage += ("\nHobbies: " + formInfo.hobbies + ";") 

            break;

        case "trabalho":
            internalMessage = 
`Porquê está dando o presente: ${formInfo.reason};
Nível de intimidade: ${formInfo.intimacy};
Idade: ${formInfo.age};
Área de atuação: ${formInfo.area};`
            if(formInfo.mood) internalMessage += `\nÂnimo: ${formInfo.mood};`
            if(formInfo.introExtra) internalMessage += `\nIntroversão ou extroversão: ${formInfo.introExtra};`
            if(formInfo.coolness) internalMessage += `\nCareta ou descolado: ${formInfo.coolness};`
            if(formInfo.hobbies) internalMessage += `\nHobbies: ${formInfo.hobbies};`
            
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
            Careta ou descolado: ${formInfo.coolness};`
            if(formInfo.coolness) {
                const coolness = formInfo.coolness
                let finalHobbies = "\nCareta ou descolado: "
                for(const key in coolness) {
                    const option = coolness[key]
                    if(option.checked) finalHobbies += `\n\t&& ${option.value}`;
                }
                internalMessage += finalHobbies;
            }

            break;

        case "nenhuma":
            internalMessage = 
            `Idade: ${formInfo.age};
Relação: ${formInfo.relation};   
Nível de intimidade: ${formInfo.intimacy};
Introversão ou extroversão: ${formInfo.introExtra};`
            if(formInfo.coolness) {
                if(typeof formInfo.coolness === "object") {
                    const coolness = formInfo.coolness
                    let finalHobbies = "\nCareta ou descolado: "
                    for(const key in coolness) {
                        const option = coolness[key]
                        if(option.checked) finalHobbies += `\n\t&& ${option.value}`;
                    }
                    internalMessage += finalHobbies;
                } else {
                    internalMessage += `\nCareta ou descolado: ${formInfo.coolness};`
                }
            }
            if(formInfo.films) internalMessage += `\nFilmes e séries: ${formInfo.films};`
            if(formInfo.musics) internalMessage += `\nMúsicas: ${formInfo.musics};`
            if(formInfo.hobbies) {
                const hobbies = formInfo.hobbies
                let finalHobbies = "\nHobbies:"
                for(const key in hobbies) {
                    const option = hobbies[key]
                    if(option.checked) {
                        finalHobbies += `\n\t&& ${option.value}`;
                        if(option.complement) finalHobbies += ` => COMPLEMENTO - ${option.complement}`;
                    };
                }
                internalMessage += finalHobbies;
            }
            break;
        
        default:
            finalMessage = "Algo deu errado com a finalização das perguntas, dê uma olhada primeiro no código de EndingQ.js"
            finalHtmlMessage = "Algo deu errado, desculpe, você precisará refazer o formulário"
            break;
    }

    finalMessage += internalMessage;
    finalMessage += standardEndingQ;

    return (
        <div className="all-margin">
            <div className="all-center">
                <div>
                    <h2>Obrigado por comprar com o mimolino</h2>            
                    <h3>Talvez revise seus dados</h3>
                    <pre>{JSON.stringify(formInfo, null, 2)}</pre>
                    {finalHtmlMessage}
                    <div>
                        {/* {finalMessage} */}
                    </div>
                        <pre>{finalMessage}</pre>


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
