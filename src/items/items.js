import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase ,ref, onValue} from "firebase/database";
import { getMessaging,getToken,onMessage } from "firebase/messaging";
import {useEffect, useState} from 'react';
import "./items.css";
import { Toolbar } from "../toolbar/toolbar";
import { Shopping } from "../shopping_bag/shopping.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
    authDomain: "yasaibackend.firebaseapp.com",
    databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "yasaibackend",
    storageBucket: "yasaibackend.appspot.com",
    messagingSenderId: "838306389759",
    appId: "1:838306389759:web:ea9799c4bc0fabb885b6ca",
    measurementId: "G-EWXR6F76NK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Cloud Messaging
// const messaging = getMessaging(app);
// getToken(messaging,
//      { vapidKey: 'BN8D4tfn5MD7qk2s3piwk2mVaa7WpMJO9n5tfyh0yyBgbYkVFkF4BKicWJfh0dj2tSSQ2TVPdILba3F3xZPnj_c' })
//      .then((currentToken) => {
//             if (currentToken) {
//                 console.log("El token es"+currentToken)
//             } else {
//                 // Show permission request UI
//                 console.log('No registration token available. Request permission to generate one.');
//             }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// });



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
    const [contador, setCounter]= useState(0);
    const [lista_dela_compra, addToList]= useState([]);

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
                    {/* dentro del toolbar hay un carrito con un contador por ello le pasamos un numero */}
                    <Toolbar counter={contador} comprados={lista_dela_compra} />
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
                            <button onClick={()=> {
                                setCounter(contador + 1);
                                lista_dela_compra.push(usuario.Nombre)
                                addToList(lista_dela_compra)
                            }}>click</button>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="flaticon_container">
                    <h2 className="flaticon">Thanks Flaticon for these icons</h2>
                </div>
        </div>      
}
 
