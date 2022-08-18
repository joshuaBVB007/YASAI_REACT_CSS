import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img className="logo" src="/manzana_banana.png" alt="place"/>
                <h1 className="header_heading">Yasai</h1>
                <ul className="ul_header">
                    <Link className="Link" to="/about"><li>About</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/location"><li>Location</li></Link>
                </ul>
            </div>
        )
    }
}