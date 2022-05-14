import React from 'react';
import Image from '../../image/Image';
import CardType from '../../types/CardType';
import './Card.scss';


type CardsType = {
    data: CardType;
};

const Card: React.FC<CardsType> = ({ data }) => {

  console.log();

  return (
    <div className="card-wrap">
      
        <Image src={data.images}/>
{/* как достать картинку объект в объекте*/}

            <h3 
              className="card-elem title"
            >
                {data.title}
            </h3>
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
  );
};

export default Card;


