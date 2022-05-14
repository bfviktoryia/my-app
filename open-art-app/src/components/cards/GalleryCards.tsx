import React from 'react';

import "../cards/GalleryCards.scss";
import useData from "../hooks/useData";
import Card from "./card/Card";

type PropsType = {};

const GalleryCards: React.FC<PropsType> = () => {

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

export default GalleryCards;
