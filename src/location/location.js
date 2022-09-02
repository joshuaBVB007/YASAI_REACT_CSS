import React from "react";
import "./location.css"

export class Location extends React.Component {
    render(){
        return(
            <div>
                <iframe className="mapa"
                     title="mapa"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.048169123567!2d2.024250214794089!3d41.30781570888827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49cff4b924fa1%3A0xb15cdecec126b388!2sGreenVita%20Viladecans!5e0!3m2!1ses!2ses!4v1635259541952!5m2!1ses!2ses" 
                      allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        )
    }
}