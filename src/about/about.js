import React from "react";
import "./about.css";
import {imagenesGaleria,imagenesCard} from "../data/data.js";
import ImageGallery from "../gallery/gallery.js";
import CardSection from "./cardSection.js";

function About() {

  return (
    <div className="about">
      <ImageGallery imagenes={imagenesGaleria} />
      <p>Bienvenido a <strong>Yasai</strong>, tu destino en línea para explorar una amplia variedad de frutas frescas y exóticas.
        En Yasai, nos dedicamos a ofrecerte las frutas más deliciosas y nutritivas, directamente desde los productores locales hasta tu mesa.
        Nuestra misión es promover un estilo de vida saludable al proporcionarte frutas de alta calidad y de temporada.</p>
      <CardSection images={imagenesCard}/>
    </div>
  );
}
export default About;
