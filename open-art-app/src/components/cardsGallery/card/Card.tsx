import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/Image';
import CardType from '../../types/CardType';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';


import './Card.scss';



type CardsType = {
    data: CardType;
};

const Card: React.FC<CardsType> = ({ data }) => {
  // const dispatch = useDispatch();
  // const favouriteCard = dispatch(actions.favouriteCard);

  const {favouriteCard} = useActions();
  const favourites = useSelector((state: any) => state.posts.favourite);
  const isFavourite = favourites.includes(data.id);
  const handleClickFavourite = () => favouriteCard(data.id);

  return (
    <div className="card-wrap">
      
        <Image src={data.images?.web.url}/>
        <div className="bookmarks-wrap">
            <IconButton
                      onClick={handleClickFavourite}
                >
                      <BookmarkIcon
                          className={`icon-favourite ${isFavourite ? "marked" : ""}`}
                    />
              </IconButton>
              <Link className="icon-info"to={`/gallery/${data.id}`}
                >
                      <MenuBookOutlinedIcon
                          className="info"
                    />
              </Link>
        </div>
              <h3 
                className="card-elem title"
              >
                  {data.title}
              </h3>
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


function state(state: any, arg1: (state: any) => any) {
  throw new Error('Function not implemented.');
}

