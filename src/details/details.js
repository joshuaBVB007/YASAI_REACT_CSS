import React from "react";
import { useParams } from "react-router-dom";
import { lista_Frutas_Firebase,
    lista_Smoothies_Firebase,
    lista_Postres_Firebase } 
from "./../items/items.js";
import "./details.css";

export function Details(){
    let params = useParams();
    let value_to_show=undefined;
    console.log(params)

    if(params.categoria==="FRU"){
         lista_Frutas_Firebase.find((value)=>{
            if(params.nombre===value.Nombre){
                localStorage.setItem("url",value.url)
            }
         })   
    }else if(params.categoria==="POS"){
        lista_Postres_Firebase.find((value)=>{
            if(params.nombre===value.Nombre){
                localStorage.setItem("url",value.url)
            }
        })
    }else if(params.categoria==="SMO"){
        lista_Smoothies_Firebase.find((value)=>{
            if(params.nombre===value.Nombre){
                localStorage.setItem("url",value.url)
            }
        })
    }

    let uri=localStorage.getItem("url");

    return(
        <div>
            <h1>I&#39;m details</h1>
            { 
             value_to_show=Object.entries(params).length === 0 
             ? "No has seleccionado nada"
             : <div>
                <h1>{params.nombre}</h1>
                <h2 className="details_prize">{params.precio}€</h2>
                <img className="details_img" src={uri} alt="fruta seleccionada"/>
               </div>
            }
        </div>
    )
}