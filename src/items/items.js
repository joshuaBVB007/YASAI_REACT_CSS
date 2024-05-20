import React,{useState} from "react";
import "./items.css";
import { imagenesProducts } from "../data/data.js";
import Toolbar from "../toolbar/toolbar.js";
import ModalComponent from "./modal.js";
import { useRef } from 'react';


function Items() {  
  let [count,setCount]= useState(0);
  let [details,setDetails]= useState(false);
  const myRef = useRef(0);
  
  function getDetails(id) {
    myRef.current=id;
    setDetails(!details);
  }

  return (
    <>
        <div className="cardProductsContainer">{ imagenesProducts.map((item)=> 
            <div key={item.id} className="cardProducts">
              <h1>{item.name}</h1>
              <img src={item.src} alt={item.name}/>
              <button onClick={ () =>  getDetails(item.id) }>Details</button>
              <button onClick={() => setCount(count + 1 )}>Add</button>
            </div>
        )}</div>
        <ModalComponent Isvisible={details} index={myRef.current} shutModal={setDetails}/>
        <Toolbar counter={count}/>
    </>
  );
}
export default Items;
