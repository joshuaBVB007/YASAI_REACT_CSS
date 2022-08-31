import React from "react";
import "./toolbar.css"
import { useNavigate } from "react-router-dom";


export function Toolbar(props){
        let navigate=useNavigate();

        return(
            <div className="toolbar">
                <img title="Descuentos" className="toolbar_img" src="/sale.png" alt="car"/>
                <img title="Bolsa de la compra" 
                    className="toolbar_img"
                    src="/shopping-bag.png"
                    onClick={ ()=> navigate(`/shopping/${props.comprados}`) }
                    alt="car"/>
                <img title="Carrito" className="toolbar_img" src="/shopping-cart.png" alt="car"/>
                <h1 className="counter">{props.counter}</h1>
            </div>
        )
}