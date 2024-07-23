import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer(props: any) {
    return (
        <div className='images-gallery'>
            <div>
                <h1 className="title">React Photo Viewer</h1>
            </div>

            <div>
                <img className="main-img" src={props.mainImgUrl} />
            </div>
        </div>
    );
}