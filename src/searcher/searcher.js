import React from 'react';
import "./searcher.css"

export class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.searching=this.searching.bind(this);
    }

    searching() {
        console.log("funciona");
    }

    render() {
        return(
            <div className="search_container">
                <input className="search_input" 
                onKeyUp={this.searching} type="text" placeholder="nombre del articulo?" />
                <img src="/search.png" alt="searcher img" />
            </div>
        )    
    }
}