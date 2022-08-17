import React from "react";
import "./contact.css"

export class Contact extends React.Component {
    render(){
        return(
            <div class="container">
                <h1>I'm Contact</h1>
                <div class="form">
                    <div class="form_section">
                        <img class="contact_img" src="/email.png" alt="email"/>
                        <input type="text" placeholder="correo?"/>
                    </div>
                    <div class="form_section">
                        <img class="contact_img" src="/llamada-telefonica.png" alt="llamada"/>
                        <input type="" placeholder="teléfono?"/>
                    </div>
                    <div class="form_section">
                        <img class="contact_img" src="/usuario.png" alt="usuario"/>
                        <input type="" placeholder="usuario?"/>
                    </div>
                    <div class="form_section">
                        <textarea placeholder="Escribe tu mensaje"/>  
                    </div>
                    <button class="contact_button">Send</button>
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