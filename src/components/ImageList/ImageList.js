import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const imgs = props.foundImages.map((img, index) => {
        return <div className="card border-0" key={index}>
            <img className="w-100" src={img.urls.regular} alt={img.links.html} />
        </div>
    })

    return (
        <div className="container-fluid mt-4">
            <div className="card-columns">
                {imgs}
            </div>
        </div>
    )
}

export default ImageList;