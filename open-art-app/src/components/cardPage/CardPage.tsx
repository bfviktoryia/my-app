import React from 'react';
import { useParams } from "react-router-dom";
import useCardData from '../hooks/useCardData';
import Image from '../image/Image';


const CardPage: React.FC = () => {

    const { id } = useParams();
    const { response, loading, error } = useCardData(id);

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
    <div className="card">        
        <div className="card-wrap">
                <Image src={response.data.images?.web.url}/>
                <h3 
                    className="card-elem title"
                    >
                        {response.data.title}
                </h3>
                <div 
              className="card-elem creators">
                <span className="card-elem-name">Creator:</span>
                {response.data.creators[0].description}
              </div>
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
        )

}


export default CardPage;