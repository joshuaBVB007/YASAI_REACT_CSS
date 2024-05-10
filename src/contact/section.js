import React from "react";
import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns";
import { useState } from "react";

const client = new SNSClient({
    region: process.env.REACT_APP_REGION,
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID_FOR_ROOT_USER,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_FOR_ROOT_USER
    }
});

const subscribeEmail = async (topicArn = "arn:aws:sns:eu-west-3:196337954383:BorussiaDortmund",emailAddress = "jaksvafa7@gmail.com") => {
    const response = await client.send(
      new SubscribeCommand({
        Protocol: "email",
        TopicArn: topicArn,
        Endpoint: emailAddress,
      }),
    );
};

function Section(){

    const [firstvalue, setFirstValue] = useState("");
    const [secondvalue, setSecondValue] = useState("");
    const [thirdvalue, setThirdValue] = useState("");

    let datos=[
        {id:0, source:"/email.png",fakeholder:"Email?",value:firstvalue},
        {id:1,source:"/llamada-telefonica.png", fakeholder:"Telephone",value:secondvalue},
        {id:2,source:"/usuario.png",fakeholder:"User?",value:thirdvalue},
    ]

    const handleInputChange = (event,additionalArg) => {
        console.log(additionalArg);
        if (additionalArg === 0){
            setFirstValue(event.target.value);
        }else if(additionalArg === 1){
            setSecondValue(event.target.value);
        }else if(additionalArg === 2){
            setThirdValue(event.target.value);
        }
    };

    

    return(
        <>
            <li className="form_section">
                    <img className="contact_img" src={datos[0].source} alt="email"/>
                    <input className="contact_input" 
                        type="text" 
                        value={firstvalue}
                        onChange={ (event) => handleInputChange(event,datos[0].id) } 
                        placeholder={datos[0].fakeholder}/>
            </li>
            <li className="form_section">
                <img className="contact_img" src={datos[1].source} alt="email"/>
                <input className="contact_input" 
                    type="text" 
                    value={secondvalue}
                    onChange={ (event) => handleInputChange(event,datos[1].id) } 
                    placeholder={datos[1].fakeholder}/>
            </li>
            <li className="form_section">
                <img className="contact_img" src={datos[2].source} alt="email"/>
                <input className="contact_input" 
                    type="text" 
                    value={thirdvalue}
                    onChange={ (event) => handleInputChange(event,datos[2].id) } 
                    placeholder={datos[2].fakeholder}/>
            </li>
            <button onClick={ ()=> subscribeEmail(undefined,firstvalue) } className="contact_button">Suscribirse</button>
        </>
    )
}

export default Section;