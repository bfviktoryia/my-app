import React from 'react';
import useGalleryData from '../hooks/useGalleryData';
import Card from "./card/Card";

import "./CardsGallery.scss";
const URL = 'https://openaccess-api.clevelandart.org/api/artworks/?limit=20&offset=0';


type PropsType = {};

const CardsGallery: React.FC<PropsType> = () => {

    const {response, loading, error} = useGalleryData();
    
    return (
        <div className="cards-container">
        {response.data.map((item) => (<Card key={item.id} data={item}/>))}
        {loading && 'Loading...'}
        {error && 'Error '}
    </div>
    )
}

export default CardsGallery;
