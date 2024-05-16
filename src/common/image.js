import React from "react";
import "./image.css";
import PropTypes from "prop-types";

function Imagen({source,altenativeText}){
    return(
        <img className="Imagen_img" src={source} alt={altenativeText}/>
    )
}

Imagen.propTypes = {
    source: PropTypes.string.isRequired,
    altenativeText: PropTypes.string.isRequired
}

export default Imagen;