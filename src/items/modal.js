 import React from "react";
 import PropTypes from 'prop-types';
 import "./modal.css";
 import { imagenesProducts } from "../data/data.js";

 function ModalComponent({Isvisible,index,shutModal}){
    if(Isvisible){
        return (
            <div className="popup">
                <span>{index}</span>
                <button onClick={() => shutModal() }>X</button>
                <h1>{imagenesProducts[index].name}</h1>
                <img src={imagenesProducts[index].src} alt={imagenesProducts[index].name}/>
                <p>
                    {imagenesProducts[index].description}
                </p>
            </div>
        )
    }
 }

 ModalComponent.propTypes = {
    Isvisible: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    shutModal: PropTypes.func.isRequired
};

 export default ModalComponent;