import React from "react";
import "./not_found.css";

function NotFound() {
        return(
            <div className="not_found">
                <h1 className="heading_not_found" >The path requested doesn&#39;t exist</h1>
                <img className="img_not_found" src="/error-404.gif" alt="404" />
            </div>
        )
}

export default NotFound;