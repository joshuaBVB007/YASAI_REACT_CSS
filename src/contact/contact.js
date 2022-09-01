import React from "react";
import "./contact.css"

export class Contact extends React.Component {
    render(){
        return(
            <div className="container">
                <h1>I'm Contact</h1>
                <div className="form">
                    <div className="form_section">
                        <img className="contact_img" src="/email.png" alt="email"/>
                        <input className="contact_input" type="text" placeholder="Email?"/>
                    </div>
                    <div className="form_section">
                        <img className="contact_img" src="/llamada-telefonica.png" alt="llamada"/>
                        <input className="contact_input" type="" placeholder="Telephone?"/>
                    </div>
                    <div className="form_section">
                        <img className="contact_img" src="/usuario.png" alt="usuario"/>
                        <input className="contact_input" type="" placeholder="Username?"/>
                    </div>
                    <div className="form_section">
                        <textarea placeholder="Type your message"/>  
                    </div>
                    <button className="contact_button">Send</button>
                </div>
                <p> 
                    Located at: Viladecans The Style Outlets <br/>
                    Address: Ctra. de la Vila, 90, 08840 Viladecans, Barcelona <br/>
                    Telephone: 932 80 79 90
                </p>
            </div>
        )
    }
}