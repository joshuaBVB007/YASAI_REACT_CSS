import React from 'react';
import "./searcher.css"

export class Searcher extends React.Component {
    render() {
        return(
            <div className="search_container">
                <input className="search_input" 
                type="text" placeholder="nombre del articulo?" />
                <img src="/search.png" alt="searcher img" />
            </div>
        )    
    }
}