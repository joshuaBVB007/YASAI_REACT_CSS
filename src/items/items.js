import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase ,ref, onValue} from "firebase/database";

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
            <div>
                <h1>Hey</h1>
                <button onClick={this.ponerFrutas}>Frutas</button>
                <button onClick={this.ponerPostres}>Postres</button>
                <button onClick={this.ponerSmoothies}>Smoothies</button>
                { this.state.listaF.length>0  
                ?  <ul>{ this.state.listaF.map((value) => 
                        <li key={value.Nombre}>
                                <h1>{value.Nombre}</h1>
                                <img src={value.url} alt="img"></img>
                        </li>) 
                       }
                   </ul> 
                : "No hay"}
            </div>
        )
    }
}