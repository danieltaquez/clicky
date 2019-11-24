import React from "react";
import "./style.css"

function ImageCard(props) {
    return (
        <span className="image" onClick={() => props.countImage(props.id)}>
            <div className="img-container text-center">
                <img src={props.image} alt={props.name} />
            </div>
        </span>
    );
}


export default ImageCard;



