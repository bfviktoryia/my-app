import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from '../hooks/useActions';
import useTranslate from '../hooks/useTranslate';
import Image from '../image/Image';
import { ReactComponent as BackToGalleryIcon} from "../../assets/arrow-thin-left-icon.svg";
import Button from '../ui/Button';

import "./CardPage.scss"


const CardPage: React.FC = () => {
    
    const { id } = useParams();
    const { fetchCard } = useActions();
    
    const response = useSelector((state: any)  => state.card.response);
    const loading = useSelector((state: any)  => state.card.loading);
    const error = useSelector((state: any)  => state.card.error);

    useEffect(() => {
        fetchCard(id);
    }, [id])

    const { t } = useTranslate();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    if (loading) {
        return (
            <div className="loader">
            </div>
        )
    } else if (error) {
        return (
            <div className="error">
                Error
            </div>
        )
    }

    if (!response) {
        return null;
    }
    
    
        return (
        <div className='card-page-content'>
                           <div className="card-button-wrap">
                                <Button style="transparent"
                                        onClick={handleClick}
                                >
                                        <BackToGalleryIcon className="back-arrow-icon"/>
                                        {t("back.to.previous.page")}
                                </Button>
                            </div>

                            <div className="cards-loading-error">
                                        {loading && <div className="loader"></div>}
                                        {error && 'Error '}
                            </div>                       

            <div className="card"> 
                <div className="card-main-info-wrap">
                        <Image src={response.data.images?.web.url}/>
                        <h3 
                            className="card-elem title"
                            >
                                {response.data.title}
                        </h3>
                        <div 
                            className="card-elem culture">
                                <span className="card-elem-name">Creation date:</span>
                                <span className="card-elem-text"> {response.data.creation_date}</span>
                        </div>
                        <div 
                            className="card-elem culture">
                                <span className="card-elem-name">Culture:</span>
                                <span className="card-elem-text"> {response.data.culture}</span>
                        </div>
                        <div 
                            className="card-elem type">
                                <span className="card-elem-name">Type:</span>
                                <span className="card-elem-text">{response.data.type}</span>
                        </div>
                        <div 
                            className="card-elem technique">
                                <span className="card-elem-name">Technique:</span>
                                <span className="card-elem-text"> {response.data.technique}</span>
                        </div>
                        <div 
                            className="card-elem id"
                        >
                                <span className="card-elem-text">{`id: ${response.data.id}`}</span>
                        </div>
                </div>


                <div className="card-additional-info_wrap">
                        <div 
                            className="card-additional-info fun-fact"
                        >
                                <span className="card-elem-name">Fun fact:</span>
                                <span className="card-elem-text">{response.data.fun_fact}</span>
                        </div>
                        <div 
                            className="card-additional-info description"
                        >
                                <span className="card-elem-name">Description:</span>
                                <span className="card-elem-text">{response.data.wall_description}</span>
                        </div>
                </div>
            </div> 
            </div>
        )
}


export default CardPage;