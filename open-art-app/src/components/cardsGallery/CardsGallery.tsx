import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGalleryData from '../hooks/useGalleryData';
import Card from "./card/Card";

import "./CardsGallery.scss";

type PropsType = {};

const CardsGallery: React.FC<PropsType> = () => {
    const [ page, setPage] = useState(1);
    const {response, loading, error} = useGalleryData(page);

    
    return (
        <React.Fragment>
            <Pagination 
            className="pagination"
            showFirstButton 
            showLastButton
            page={page}
            onChange={(event, value: number) => setPage(value)}
            count={Math.ceil(response.info.total / 10)} 
            />
                <div className="cards-container">
                    {response.data.map((item) => (<Card key={item.id} data={item}/>))}
                    {loading && 'Loading...'}
                    {error && 'Error '}
                </div>
        </React.Fragment>
    )
}

export default CardsGallery;
