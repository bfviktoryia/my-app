import { MenuItem, Pagination, Select, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import useGalleryData from '../hooks/useGalleryData';
import Card from "./card/Card";

import "./CardsGallery.scss";
import { CardsOrder } from './GalleryFilterType';

type PropsType = {};

const limit = 10;

const CardsGallery: React.FC<PropsType> = () => {

    const [ page, setPage] = useState(1);
    const {response, loading, error} = useGalleryData(page, limit, ordering);

    const { cardsOrder } = useActions();
    const order = useSelector((state: any) => state.posts.ordering);
    const handleChangeOrdering = () => cardsOrder(order as CardsOrder);


    return (
        <React.Fragment>
            <Pagination 
                    className="pagination"
                    size="small"
                    shape="rounded"
                    showFirstButton 
                    showLastButton
                    page={page}
                    onChange={(_event, value: number) => setPage(value)}
                    count={Math.ceil(response.info.total / limit)
                    } 
            />       
            <Select
                label="Ordering"
                value={order}
                onChange={handleChangeOrdering}
            >
          <MenuItem 
          value={CardsOrder.idAsc}
          >ASC id</MenuItem>
          <MenuItem 
          value={CardsOrder.idDesc}
          >
              DESC id</MenuItem>
        </Select> 
                        {response.data.map((item) => (<Card key={item.id} data={item}/>))}
                        {loading && 'Loading...'}
                        {error && 'Error '}

        </React.Fragment>        

    )
    }

export default CardsGallery;

