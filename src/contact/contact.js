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
                        <input type="text" placeholder="correo?"/>
                    </div>
                    <div className="form_section">
                        <img className="contact_img" src="/llamada-telefonica.png" alt="llamada"/>
                        <input type="" placeholder="teléfono?"/>
                    </div>
                    <div className="form_section">
                        <img className="contact_img" src="/usuario.png" alt="usuario"/>
                        <input type="" placeholder="usuario?"/>
                    </div>
                    <div className="form_section">
                        <textarea placeholder="Escribe tu mensaje"/>  
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