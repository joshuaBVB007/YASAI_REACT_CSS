import React from "react";
import "./reservation.css"


function Reservation(){
            return(
                <div className="reservation">
                    <h1>Im reservation</h1>
                    <h3>Click on the number to see details</h3>
                    <div className="reservation_area">
                        <img className="reservation_img" src="/indoor.png" alt="hahaha" />
                        {/* Botones de la izquierda */}
                        <button className="btn_reservation_left_uno">1</button>
                        <button className="btn_reservation_left_dos">2</button>
                        <button className="btn_reservation_left_tres">3</button>
                        <button className="btn_reservation_left_cuarto">4</button>
                        <button className="btn_reservation_left_quinto">5</button>
                        {/* Botones de la derecha */}
                        <button className="btn_reservation_right_uno">6</button>
                        <button className="btn_reservation_right_dos">7</button>
                        <button className="btn_reservation_right_tres">8</button>
                        <button className="btn_reservation_right_cuarto">9</button>
                        <button className="btn_reservation_right_quinto">10</button>
                    </div>
                </div>
            )
}
export default Reservation;