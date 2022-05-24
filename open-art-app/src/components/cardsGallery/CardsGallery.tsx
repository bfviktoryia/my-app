import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import Card from "./card/Card";
import CardsFilter from './CardsFilter';

import "./CardsGallery.scss";
import { CardsFilterReduser, initialState } from './CardsFilterReducers';
import ResponseInfoType from '../types/ResponseInfoType';
import CardsFilterType from './GalleryFilterType';
import { SetPage } from './CardsFilterActionCreators';
import { Pagination } from '@mui/material';
import GalleryPagination from './GalleryPagination';

type PropsType = {};

const CardsGallery: React.FC<PropsType> = () => {

    // const [ page, setPage] = useState(1);
    // const {response, loading, error} = useGalleryData(page, limit);
    // const { cardsOrder } = useActions();
    // const order = useSelector((state: any) => state.cards.ordering);
    // const handleChangeOrdering = () => cardsOrder(order);

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
                        {/* {data.data.map((item) => (<Card key={item.id} data={item}/>))} */}
                        {data.map((item: any) => (<Card key={item.id} data={item}/>))}
                        {loading && 'Loading...'}
                        {error && 'Error '}
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



