import React from "react";
import "./gallery.css";
import Imagen from "../common/image.js";
import PropTypes from "prop-types";

function ImageGallery({imagenes}){
    return(
        <div className="galery">
            {imagenes.map( (item) => <Imagen key={item.id} source={item.source} altenativeText={item.alterText} /> )}
        </div>
    )
}

ImageGallery.propTypes = {
    imagenes: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ImageGallery;