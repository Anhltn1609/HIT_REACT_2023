import React, { useEffect, useState } from 'react';
import './UI.css'

const UI = () => {
    const [photos,setPhotos] = useState([]);
    useEffect(()=> {
        fetch('https://picsum.photos/v2/list?page=2&limit=8')
        .then(res => res.json())
        .then(photos =>{ setPhotos(photos)})
    })
    return (
        <div className='list'>
            {
                photos.map((photo) =>(
                <div key={photo.id} className='item' >
                    <img className='img' src={photo.download_url} alt= "" ></img>
                </div>)
            )
            }
        </div>
    );
};

export default UI;