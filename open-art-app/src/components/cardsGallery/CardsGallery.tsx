import { Pagination, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import useGalleryData from '../hooks/useGalleryData';
import Card from "./card/Card";

import "./CardsGallery.scss";

type PropsType = {};

const limit = 10;

const CardsGallery: React.FC<PropsType> = () => {

    const [ page, setPage] = useState(1);
    const {response, loading, error} = useGalleryData(page, limit);


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
                        {response.data.map((item) => (<Card key={item.id} data={item}/>))}
                        {loading && 'Loading...'}
                        {error && 'Error '}

        </React.Fragment>        

    )
    }

export default CardsGallery;
