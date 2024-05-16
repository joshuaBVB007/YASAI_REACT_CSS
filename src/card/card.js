import React from "react";
import "./card.css"
import PropTypes from "prop-types";

function Card({source,parrafo}){
    return(
        <div className="card">             
            <img src={source} alt={parrafo}/>
            <p>{parrafo}</p>
        </div>
    )
}

Card.propTypes = {
    parrafo: PropTypes.string,
    source: PropTypes.string
};

export default Card;