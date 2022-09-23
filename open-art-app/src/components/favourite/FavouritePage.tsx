import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../cardsGallery/card/Card';
import { useActions } from '../hooks/useActions';
import Button from '../ui/Button';
import { ReactComponent as BackToGalleryIcon} from "../../assets/arrow-thin-left-icon.svg";
import { useNavigate } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import "./FavouritePage.scss"

type PropsType = {};

const Favourite: React.FC<PropsType> = () => {

    const { fetchFavourites } = useActions(); 
    const data = useSelector((state: any) => state.cards.data);
    const loading = useSelector((state: any)  => state.cards.loading);
    const error = useSelector((state: any)  => state.cards.error);
    const favourite = useSelector((state: any) => state.cards.favourite);
    const filterdata = data.filter((item: any) => favourite.includes(item.id))

        useEffect(() => {
            fetchFavourites();
        }, [])

    const { t } = useTranslate();

    const navigate = useNavigate();
    const handleClick = () => {
            navigate("/gallery");
    }

    return (
            <React.Fragment>
                <div className="favourite-container">
                            <div className="cards-button-wrap">
                                <Button style="transparent"
                                        onClick={handleClick}
                                >
                                        <BackToGalleryIcon className="back-arrow-icon"/>
                                        {t("back.to.gallery")}
                                </Button>
                            </div>
                            <div className="cards-loading-error">
                                        {loading && <div className="loader"></div>}
                                        {error && 'Error '}
                            </div>
                            <div className="favourite-cards">
                                {filterdata.map((item: any) => (<Card key={item.id} data={item}/>))}
                            </div>
                </div>
            </React.Fragment>
        )
    }

export default Favourite;



