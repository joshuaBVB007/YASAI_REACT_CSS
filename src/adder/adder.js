import React from "react";
import "./adder.css";

export let lista=[];
export function AddProduct(dato){
    console.log("Added: "+dato)
    lista.push(dato)
}

export  class Adder extends React.Component {
        constructor(props) {
            super(props);
            this.state={longitud:0}
            this.updateState=this.updateState.bind(this)
        }

        updateState(){
            this.setState({longitud:lista.length})
        }

        render() {
            return <h3>{ this.state.longitud }</h3>
        }
}