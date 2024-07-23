import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer(props: any) {
    return (
        <div>
            <img className="main-img" src={props.src}/>
        </div>
    );
}