import React from "react";
import "./shopping.css";
import { useParams } from "react-router-dom";

export function Shopping() {
    let params = useParams();
    let con=undefined;
    
    console.log(params)
    return(
        <div className="shopping">
            <h1>I&#39;m shopping bag</h1>
            <h1>Tus productos seleccionados son: </h1>
            { 
             con=Object.entries(params).length === 0 
             ? "No has seleccionado nada"
             : params.lista.split(",").map((value)=>( <li key={value}>{value}</li>)) 
            }
        </div>
    )
}