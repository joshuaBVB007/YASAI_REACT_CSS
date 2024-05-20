import React from "react";
import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns";
import { useState } from "react";
import "./section.css";

const client = new SNSClient({
    region: process.env.REACT_APP_REGION,
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID_FOR_ROOT_USER,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_FOR_ROOT_USER
    }
});


function Section(){

    const [firstvalue, setFirstValue] = useState("");
    const [secondvalue, setSecondValue] = useState("");
    const [thirdvalue, setThirdValue] = useState("");

    let datos=[
        {id:0, source:"/email.png", fakeholder:"Email?", value:firstvalue, altText:"email"},
        {id:1, source:"/llamada-telefonica.png", fakeholder:"Telephone", value:secondvalue,altText:"Telephone"},
        {id:2, source:"/usuario.png", fakeholder:"User?", value:thirdvalue,altText:"user"},
    ]

    const validate=()=>{
        const validator=firstvalue!="" && secondvalue!="" && thirdvalue!="";
        console.log(validator);
    }
    
    const subscribeEmail = async (topicArn = "arn:aws:sns:eu-west-3:196337954383:BorussiaDortmund",emailAddress = "") => {
        console.log("Subscribed")
        // const response = await client.send(
        //   new SubscribeCommand({
        //     Protocol: "email",
        //     TopicArn: topicArn,
        //     Endpoint: emailAddress,
        //   }),
        // );
    };

    const handleInputChange = (event,additionalArg) => {
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
                    <img className="contact_img" src={datos[0].source} alt={datos[0].altText}/>
                    <input className="contact_input" 
                        type="email" 
                        value={firstvalue}
                        onChange={ (event) => handleInputChange(event,datos[0].id) } 
                        placeholder={datos[0].fakeholder}/>
                    <img className={firstvalue != "" ? "contact_img_warning_invisible" : "contact_img_warning" } title="Debes rellenar este campo" src="/warning.png" alt={datos[1].altText}/> 
            </li>
            <li className="form_section">
                <img className="contact_img" src={datos[1].source} alt={datos[1].altText}/>
                <input className="contact_input" 
                    type="number" 
                    value={secondvalue}
                    onChange={ (event) => handleInputChange(event,datos[1].id) } 
                    placeholder={datos[1].fakeholder}/>
                <img className={secondvalue != "" ? "contact_img_warning_invisible" : "contact_img_warning"   } title="Debes rellenar este campo" src="/warning.png" alt={datos[1].altText}/>    
            </li>
            <li className="form_section">
                <img className="contact_img" src={datos[2].source} alt={datos[2].altText}/>
                <input className="contact_input" 
                    type="text" 
                    value={thirdvalue}
                    onChange={ (event) => handleInputChange(event,datos[2].id) } 
                    placeholder={datos[2].fakeholder}/>
                <img className={thirdvalue != "" ? "contact_img_warning_invisible" : "contact_img_warning"  } title="Debes rellenar este campo" src="/warning.png" alt={datos[1].altText}/> 
            </li>
            <button onClick={ ()=> validate() } className="contact_button">Subscribe</button>
        </>
    )
}

export default Section;