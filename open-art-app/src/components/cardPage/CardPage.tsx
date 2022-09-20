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
        fetchCard(id)
    }, [id])

    const { t } = useTranslate();

    const navigate = useNavigate();
    const handleClick = () => {
        // console.log("clicked back");
        navigate(-1);
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Error
            </div>
        )
    }

    if (!response) {
        return null;
    }
    
    
        return (
        <div className='card-page-wrap'>
                           <div className="card-button-wrap">
                                <Button style="transparent"
                                        onClick={handleClick}
                                >
                                        <BackToGalleryIcon className="back-arrow-icon"/>
                                        {t("back.to.previous.page")}
                                </Button>
                            </div>

            <div className="card"> 
                <div className="card-wrap">
                        <Image src={response.data.images?.web.url}/>
                        <h3 
                            className="card-elem title"
                            >
                                {response.data.title}
                        </h3>
                        <div 
                            className="card-elem culture">
                                <span className="card-elem-name">Creation date:</span>
                                {response.data.creation_date}
                        </div>
                        <div 
                            className="card-elem culture">
                                <span className="card-elem-name">Culture:</span>
                                {response.data.culture}
                        </div>
                        <div 
                            className="card-elem type">
                                <span className="card-elem-name">Type:</span>
                                {response.data.type}
                        </div>
                        <div 
                            className="card-elem technique">
                                <span className="card-elem-name">Technique:</span>
                                {response.data.technique}
                        </div>
                        <div 
                            className="card-elem id"
                        >
                                {`id: ${response.data.id}`}
                        </div>
                </div>


                <div className="card-additional-info_wrap">
                        <div 
                            className="card-additional-info fun-fact"
                        >
                                <span className="card-elem-name">Fun fact:</span>
                                {response.data.fun_fact}
                        </div>
                        <div 
                            className="card-additional-info description"
                        >
                                <span className="card-elem-name">Description:</span>
                                {response.data.wall_description}
                        </div>
                </div>
            </div> 
            </div>
        )
}


export default CardPage;