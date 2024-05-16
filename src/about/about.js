import React from "react";
import "./about.css";
import {imagenesGaleria,imagenesCard} from "../data/data.js";
import ImageGallery from "../gallery/gallery.js";
import CardSection from "./cardSection.js";

function About() {
  return (
    <div className="about">
      <ImageGallery imagenes={imagenesGaleria} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac odio tincidunt vehicula.
        Integer ac nibh eu sapien tempus malesuada. Ut auctor nisi vel ante tristique,
        a consequat justo feugiat. Quisque a arcu fermentum, facilisis lacus et,
        condimentum nunc. Nullam ut neque vestibulum, vehicula nunc ac,
        ullamcorper libero. Mauris et magna arcu. Nulla facilisi.
        Duis euismod felis et luctus malesuada.
      </p>
      <CardSection images={imagenesCard}/>
    </div>
  );
}
export default About;
