import React from 'react';
import ResponseInfoType from '../../types/ResponseInfoType';
import { setLimit, setOrderingByImage, setSearchValue } from './CardsFilterActionCreators';
import CardsFilterType from './GalleryFilterType';
import { CardsWithImage } from '../../../enums/CardsWithImage';
import SearchField from '../../ui/SearchField';
import useTranslate from '../../hooks/useTranslate';

import "./CardsFilter.scss"

type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};

const CardsFilter: React.FC<CardType> = ({ state, dispatch}) => {

  const { t } = useTranslate();

  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(+event.target.value))
  }
  // const searchTitle = (value: string) => {
  //   dispatch(setTitle(value)); 
  // }  
  // const searchField = (value: string) => {
  //   dispatch(setSearchValue(value)); 
  // }  

  const searchField = (value: string) => {
      dispatch(setSearchValue(value));
}  
  const setCardsWithImage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrderingByImage(event.target.value as CardsWithImage)); 
  }  

  return (
    <div className="cards-filter-wrap">
          <div className="select-limit-wrap">
              <label htmlFor="select-limit">{t("select.per.page")}</label>
              <select 
                  className="select-limit" 
                  id="select-limit"
                  value={state.limit.toString()}
                  onChange={handleChangeLimit}
                >
                      <option value={10}>10</option>
                      <option value={30}>30</option>
                      <option value={60}>60</option>
              </select>
          </div>

          <div className="sort-image-wrap">
              <label htmlFor="sort-image">{t("select.by.image")}</label>
              <select 
                  className="sort-image" 
                  id="select-limit"
                  value={state.has_image.toString()}
                  onChange={setCardsWithImage}
                >
                      <option value={CardsWithImage.HAS_IMAGE}>{t("select.items.with.image")}</option>
                      <option value={CardsWithImage.ALL_ITEMS}>{t("select.all.items")}</option>
              </select>
          </div> 

          <SearchField
              label={t("search.any.word")}
              value={state.q}
              setValue={searchField}
              placeholder={t("search.any.word.placeholder")}
          /> 
    </div>
  );
};

export default CardsFilter;
