import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase ,ref, onValue} from "firebase/database";
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

export class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state={listaF:[]}
        this.ponerFrutas=this.ponerFrutas.bind(this);
        this.ponerPostres=this.ponerPostres.bind(this);
        this.ponerSmoothies=this.ponerSmoothies.bind(this);
    }

    ponerFrutas() {
        console.log(lista_Frutas_Firebase.length)
        this.setState({
            listaF: lista_Frutas_Firebase
        })
    }

    ponerPostres() {
        console.log(lista_Postres_Firebase.length)
        this.setState({
            listaF: lista_Postres_Firebase
        })
    }

    ponerSmoothies() {
        console.log(lista_Smoothies_Firebase.length)
        this.setState({
            listaF: lista_Smoothies_Firebase
        })
    }

    render(){
        return (
            <div className="frutas_container">
                <h1>I'm Products</h1>
                <div className="buttons_container">
                    <button onClick={this.ponerFrutas}>Frutas</button>
                    <button onClick={this.ponerPostres}>Postres</button>
                    <button onClick={this.ponerSmoothies}>Smoothies</button>
                </div>
                <Searcher/>
                { this.state.listaF.length>0  
                ?  <ul className="ul_items">{ this.state.listaF.map((value) => 
                        <li className="li_items" key={value.Nombre}>
                                <h1>{value.Nombre}</h1>
                                <img className="img_container" src={value.url} alt="img"></img>
                                <button>add</button>
                                <button>details</button>
                        </li>) 
                       }
                   </ul> 
                : <h1 >you haven't selected any option</h1>}
            </div>
        )
    }
}