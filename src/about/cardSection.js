import React from "react";
import "./cardSection.css";
import Card from "../card/card.js";
import PropTypes from "prop-types";

function CardSection({ images }){
    return(
        <div className="cardContainer">
            {
                images.map((item,key) => <Card key={key} source={item.source} parrafo={item.parrafo} ></Card> )
            }
        </div>
    )
}

CardSection.propTypes ={
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardSection;