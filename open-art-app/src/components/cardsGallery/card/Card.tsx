import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/Image';
import CardType from '../../types/CardType';
import './Card.scss';


type CardsType = {
    data: CardType;
};

const Card: React.FC<CardsType> = ({ data }) => {


  return (
    <div className="card-wrap">
      
        <Image src={data.images?.web.url}/>
        <Link to={`/gallery/${data.id}`}>
              <h3 
                className="card-elem title"
              >
                  {data.title}
              </h3>
        </Link>
        <div 
              className="card-elem culture">
                <span className="card-elem-name">Creation date:</span>
                {data.creation_date}
        </div>
        <div 
              className="card-elem culture">
                <span className="card-elem-name">Culture:</span>
                {data.culture}
        </div>
        <div 
              className="card-elem type">
                <span className="card-elem-name">Type:</span>
                {data.type}
        </div>
        <div 
              className="card-elem technique">
                <span className="card-elem-name">Technique:</span>

                {data.technique}
        </div>
        <div 
              className="card-elem id"
          >
                {`id: ${data.id}`}
        </div>
    </div>
)};

export default Card;


