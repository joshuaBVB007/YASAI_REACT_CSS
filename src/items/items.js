import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase ,ref, onValue} from "firebase/database";
import {useEffect, useState} from 'react';
import "./items.css";
import { Searcher } from "./../searcher/searcher.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
var lista_Frutas_Firebase=[];
var lista_Postres_Firebase=[];
var lista_Smoothies_Firebase=[];

const starCountRef = ref(db, 'Productos/Frutas');
                onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                let objetoFirebase=Object.values(data);
                objetoFirebase.map((value)=>{
                        lista_Frutas_Firebase.push(value);
                })
                console.log(objetoFirebase);
});

const starCountRef2 = ref(db, 'Productos/Postres');
                onValue(starCountRef2, (snapshot) => {
                const data = snapshot.val();
                let objetoFirebase=Object.values(data);
                objetoFirebase.map((value)=>{
                        lista_Postres_Firebase.push(value);
                })
                console.log(objetoFirebase);
});

const starCountRef3 = ref(db, 'Productos/Smoothies');
                onValue(starCountRef3, (snapshot) => {
                const data = snapshot.val();
                let objetoFirebase=Object.values(data);
                objetoFirebase.map((value)=>{
                        lista_Smoothies_Firebase.push(value);
                })
                console.log(objetoFirebase);
});

export function Items (){

    const [frutas, setFrutas]= useState([]);
    const [tablaFrutas, setTablaFrutas]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const handleChange=e=>{
        console.log("soy:"+e.target.value);
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaFrutas.filter((elemento)=>{
            if(elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setFrutas(resultadosBusqueda);
    }

    const setConfig=(current_list) => {
        if(current_list==="frutas"){
            setFrutas(lista_Frutas_Firebase);
            setTablaFrutas(lista_Frutas_Firebase);
        }else if(current_list==="postres"){
            setFrutas(lista_Postres_Firebase);
            setTablaFrutas(lista_Postres_Firebase);
        }else if(current_list==="smoothies"){
            setFrutas(lista_Smoothies_Firebase);
            setTablaFrutas(lista_Smoothies_Firebase);
        }
    }

    useEffect(()=>{
        setFrutas(lista_Frutas_Firebase);
        setTablaFrutas(lista_Frutas_Firebase);
    },[])

    return   <div className="App">
                <h1>I'm Products</h1>
                <div className="search_container">
                    <input
                    className="search_input"
                    value={busqueda}
                    placeholder="Nombre producto?"
                    onChange={handleChange}
                    />
                </div>
    
                <div>
                    <div className="buttons_container">
                        <button onClick={()=>setConfig("frutas")} >Frutas</button>
                        <button onClick={()=>setConfig("postres")} >Postres</button>
                        <button onClick={()=>setConfig("smoothies")} >Smoothies</button>
                    </div>
                    <ul className="ul_items">
                    {frutas && 
                    frutas.map((usuario)=>(
                        <li className="li_items" key={usuario.Nombre}>
                            <h1>{usuario.Nombre} </h1>
                            <img className="img_container" src={usuario.url} alt="alternativo"></img>
                        </li>
                    ))}
                    </ul>
                </div>
        </div>      
}
 
