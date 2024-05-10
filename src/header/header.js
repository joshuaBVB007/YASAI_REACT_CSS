import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

function Header(){
        return (
            <div className="header">
                <img className="logo" src="/manzana_banana.png" alt="place"/>
                <h1 className="header_heading">Yasai</h1>
                <ul className="ul_header">
                    <Link className="link" to="/about"><li>About</li></Link>
                    <Link className="link" to="/products"><li>Products</li></Link>
                    {/* <Link className="link" to="/reservation"><li>Reservation</li></Link> */}
                    <Link className="link" to="/contact"><li>Contact</li></Link>
                    <Link className="link" to="/location"><li>Location</li></Link>
                </ul>
            </div>
        )
}

export default Header;