import React,{useState} from "react";
import "./items.css";
import { imagenesProducts } from "../data/data.js";
import Toolbar from "../toolbar/toolbar.js";

function Items() {  
  let [count,setCount]= useState(0);

  return (
    <>
        <div className="cardProductsContainer">{ imagenesProducts.map((item)=> 
            <div key={item.id} className="cardProducts">
              <h1>{item.name}</h1>
              <img src={item.src} alt={item.name}/>
              <button>Details</button>
              <button onClick={() => setCount(count + 1 )}>Add</button>
            </div>
        )}</div>
        <Toolbar counter={count}/>
    </>
  );
}
export default Items;
