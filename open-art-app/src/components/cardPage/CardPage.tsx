import React from 'react';
import { useParams } from "react-router-dom";
import useCardData from '../hooks/useCardData';


const URL = "https://openaccess-api.clevelandart.org/api/artworks/";

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
            <div className="card-wrap">
      
                 {/* <Image src={response.data.images}/> */}
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
        )

}

;

export default CardPage;