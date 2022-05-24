import { MenuItem, Pagination, SelectChangeEvent } from '@mui/material';
import React from 'react';
import ResponseInfoType from '../types/ResponseInfoType';
import TextField from "../ui/TextField"
import { setLimit, setTitle } from './CardsFilterActionCreators';
import CardsFilterType, { CardsOrder } from './GalleryFilterType';
import Select from "../ui/Select"

import "./CardsFilter.scss"


type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};

const CardsFilter: React.FC<CardType> = ({info, state, dispatch}) => {

  // const handleChangeLimit = (event: [SelectChangeEvent]) => {
  //   dispatch(setLimit(+event.target.value))
  // }
  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(+event.target.value))
  }

  // const handleChangeOrdering = (event: SelectChangeEvent) => {
  //   dispatch(setOrder(event.target.value as CardsOrder))
  // }
  
  // const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
  //   dispatch(SetPage(value))
  // }

  const searchTitle = (value: string) => {
    dispatch(setTitle(value)); 
}  

  return (
    <aside className="cards-filter-wrap">
          <div className="select-limit-wrap">
              <label htmlFor="select-limit">Items per page</label>
              <select 
                  className="select-limit" 
                  id="select-limit"
                  value={state.limit.toString()}
                  onChange={handleChangeLimit}
              >
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
              </select>
          </div>
          <TextField
              label="Title"
              value={state.title}
              setValue={searchTitle}
          />
          {/* <Select
            label="Ordering"
            value={state.ordering}
            onChange={handleChangeOrdering}
          >
            <MenuItem value={CardsOrder.idAsc}>ASC id</MenuItem>
            <MenuItem value={CardsOrder.idDesc}>DSC id</MenuItem>
          </Select> */}

    </aside>
  );
};

export default CardsFilter;
