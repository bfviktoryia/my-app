import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { CardReducer, initialState, CardStateType } from '../../store/cardPage/CardSlice';
import { useActions } from '../hooks/useActions';
import Image from '../image/Image';
import CardType from '../types/CardType';

const CardPage: React.FC = () => {
    
    const [state, dispatch] = useReducer(CardReducer, initialState);
    const { fetchCard } = useActions();
    
    const response = useSelector((state: any)  => state.card.response);
    const loading = useSelector((state: any)  => state.card.loading);
    const error = useSelector((state: any)  => state.card.error);
  
    useEffect(() => {
        fetchCard(state)
    }, [state])

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
            <div
            state={state}
            dispatch={dispatch}
            ></div>


    // <div className="card">        
    //     <div className="card-wrap">
    //             <Image src={response.data.images?.web.url}/>
    //             <h3 
    //                 className="card-elem title"
    //                 >
    //                     {response.data.title}
    //             </h3>
    //             {/* <div 
    //           className="card-elem creators">
    //             <span className="card-elem-name">Creator:</span>
    //             {data.creators[0].description}
    //           </div>  */}
    //             <div 
    //                 className="card-elem culture">
    //                     <span className="card-elem-name">Creation date:</span>
    //                     {response.data.creation_date}
    //             </div>
    //             <div 
    //                 className="card-elem culture">
    //                     <span className="card-elem-name">Culture:</span>
    //                     {response.data.culture}
    //             </div>
    //             <div 
    //                 className="card-elem type">
    //                     <span className="card-elem-name">Type:</span>
    //                     {response.data.type}
    //             </div>
    //             <div 
    //                 className="card-elem technique">
    //                     <span className="card-elem-name">Technique:</span>
    //                     {response.data.technique}
    //             </div>
    //             <div 
    //                 className="card-elem id"
    //             >
    //                     {`id: ${response.data.id}`}
    //             </div>
    //     </div>


    //     <div className="card-additional-info_wrap">
    //             <div 
    //                 className="card-additional-info fun-fact"
    //             >
    //                     <span className="card-elem-name">Fun fact:</span>
    //                     {response.data.fun_fact}
    //             </div>
    //             <div 
    //                 className="card-additional-info description"
    //             >
    //                     <span className="card-elem-name">Description:</span>
    //                     {response.data.wall_description}
    //             </div>
    //     </div>
    // </div> 
        )

}


export default CardPage;