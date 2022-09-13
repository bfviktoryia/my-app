import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/Image';
import CardType from '../../types/CardType';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';

import './Card.scss';



type CardsType = {
    data: CardType;
};

const Card: React.FC<CardsType> = ({ data }) => {    
  const { favouriteCard } = useActions();
  const favourites = useSelector((state: any) => state.cards.favourite);
  const isFavourite = favourites.includes(data.id);
  const handleClickFavourite = () => favouriteCard(data.id);

  return (
    <div className="card-wrap">
      <Link className="icon-info"to={`/gallery/${data.id}`}
      >
            <Image src={data.images?.web.url}/>

      </Link>

      <div className="bookmarks-wrap">
            <IconButton className="icon-button"
                      onClick={handleClickFavourite}
                >
                      <BookmarkIcon
                          className={`icon-favourite ${isFavourite ? "marked" : ""}`}
                    />
              </IconButton>
      </div>

      <div className="card-title-wrap">
            <h3 
                  className="card-elem title"
                  >
                        {data.title}
            </h3>
      </div>
      <div className="card-info-wrap">
            <div 
                  className="card-elem culture">
                  <span className="card-elem-name">Creation date:</span>
                        <span className="card-elem-text">{data.creation_date}</span> 
            </div>        
            
            <div 
                  className="card-elem culture">
                  <span className="card-elem-name">Culture:</span>
                        <span className="card-elem-text">{data.culture}</span> 
            </div>
            <div 
                  className="card-elem type">
                  <span className="card-elem-name">Type:</span>
                        <span className="card-elem-text">{data.type}</span>
            </div>
            <div 
                  className="card-elem technique">
                  <span className="card-elem-name">Technique:</span>
                        <span className="card-elem-text">{data.technique}</span>
            </div>
            <div 
                  className="card-elem id"
            >
                        <span className="card-elem-text"> {`id: ${data.id}`}</span>
            </div>
      </div>

    </div>

)};

export default Card;



