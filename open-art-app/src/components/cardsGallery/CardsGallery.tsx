import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import Card from "./card/Card";
import CardsFilter from './CardsFilter/CardsFilter';
import { CardsFilterReduser, initialState } from './CardsFilter/CardsFilterReducers';
import GalleryPagination from './CardsPagination/GalleryPagination';

import "./CardsGallery.scss";


type PropsType = {};

const CardsGallery: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(CardsFilterReduser, initialState);
    const { fetchCards } = useActions();
  
    const data = useSelector((state: any)  => state.cards.data);
    const total = useSelector((state: any)  => state.cards.info.total);
    const loading = useSelector((state: any)  => state.cards.loading);
    const error = useSelector((state: any)  => state.cards.error);
  
    useEffect(() => {
        fetchCards(state)
    }, [state])


    return (
    <React.Fragment>
        <CardsFilter
                info={total}
                state={state}
                dispatch={dispatch}
            />
        <div className="cards-container">
                    <div className="cards-loading-error">
                                {loading && <div className="loader"></div>}
                                {error && 'Error '}
                    </div>
                {data.map((item: any) => (<Card key={item.id} data={item}/>))}

        </div>
        <GalleryPagination 
                        info={total} 
                        dispatch={dispatch} 
                        state={state}
            />
    </React.Fragment>
    )
    }

export default CardsGallery;



