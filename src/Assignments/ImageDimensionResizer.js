import { useState } from "react";


function ImageDimensionResizer(){
    const [width, setWidth] = useState(320);
    const [height, setHeight] = useState(320);

    return(
        <div id="main">
            <label htmlFor="height-slider">Height Slider</label>
            <input type="range" id="height-slider" min="100" max="800" value={height} onChange={(e) => {
                setHeight(e.target.value)
            }}/>
            <br />
            <label htmlFor="width-slider">Width Slider</label>
            <input type="range" id="width-slider" min="100" max="800" value={width} onChange={(e) => {
                setWidth(e.target.value);
            }}/>
            <br />
            <img src="https://shorturl.at/dkBCO" alt="Image" id="resizable-img" style={{width: `${width}px`, height: `${height}px`}} />

            {/*If the image doesn't works then try this url : "https://shorturl.at/dkBCO"*/}
        </div>
    )
}

export default ImageDimensionResizer;