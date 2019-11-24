import React from "react";
import "./style.css"

function Navbar(props) {
    return (
        <div className="navbar">
            <h3>
                <a href="/clickygame">ClickyGame</a>
            </h3>
            <div className="scores">
                <h3>
                    Score : {props.score} | Top Score : {props.topscore}
                </h3>
            </div>
        </div>
    );
}

export default Navbar;