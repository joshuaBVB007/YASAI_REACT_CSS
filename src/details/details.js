import React from "react";
import { useParams } from "react-router-dom";
import { lista_Frutas_Firebase,
    lista_Smoothies_Firebase,
    lista_Postres_Firebase } 
from "./../items/items.js";
import { useEffect } from "react"

export function Details(){
    let params = useParams();
    let value_to_show=undefined;
    console.log(params)
    let img_index=lista_Frutas_Firebase.find((value,index)=>{
        if(params.nombre===value.Nombre){
            localStorage.setItem("url",value.url)
        }
    })

    let uri=localStorage.getItem("url");

    return(
        <div>
            <h1>I'm details</h1>
            { 
             value_to_show=Object.entries(params).length === 0 
             ? "No has seleccionado nada"
             : <img src={uri} alt="fruta seleccionada"/>
            }
        </div>
    )
}