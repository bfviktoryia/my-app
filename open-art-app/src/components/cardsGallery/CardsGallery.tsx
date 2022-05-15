import React from 'react';
import useData from "../hooks/useData";
import Card from "./card/Card";

import "./CardsGallery.scss";


type PropsType = {};

const CardsGallery: React.FC<PropsType> = () => {

    const {cards, loading, error} = useData();
    // console.log(useData());
    
    return (
        <div className="cards-container">
        {cards.map((item) => (<Card key={item.id} data={item}/>))}
        {loading && 'Loading...'}
        {error && 'Error '}
    </div>
    )
}

export default CardsGallery;
