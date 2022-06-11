import React from 'react';
import ResponseInfoType from '../../types/ResponseInfoType';
import { setLimit, setOrderingByImage, setSearchValue, setTitle } from './CardsFilterActionCreators';
import CardsFilterType, { CardImage } from './GalleryFilterType';
import SearchField from '../../ui/SearchField';
import useTranslate from '../../hooks/useTranslate';

import "./CardsFilter.scss"

type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};

const CardsFilter: React.FC<CardType> = ({info, state, dispatch}) => {

  const { t } = useTranslate();

  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(+event.target.value))
  }
  const searchTitle = (value: string) => {
    dispatch(setTitle(value)); 
  }  
  const searchField = (value: string) => {
    dispatch(setSearchValue(value)); 
  }  

  const setCardsWithImage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrderingByImage(event.target.value as CardImage)); 
  }  

  return (
    <aside className="cards-filter-wrap">
          <div className="select-limit-wrap">
              <label htmlFor="select-limit">{t("select.per.page")}</label>
              <select 
                  className="select-limit" 
                  id="select-limit"
                  value={state.limit.toString()}
                  onChange={handleChangeLimit}
              >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
              </select>
          </div>
          <SearchField
              label={t("search.title")}
              value={state.title}
              setValue={searchTitle}
          />
          <SearchField
              label={t("search.any.word")}
              value={state.q}
              setValue={searchField}
          />

          <div className="sort-image-wrap">
              <label htmlFor="sort-image">{t("select.by.image")}</label>
              <select 
                  className="sort-image" 
                  id="select-limit"
                  value={state.has_image.toString()}
                  onChange={setCardsWithImage}
              >
                      <option value={CardImage.HAS_IMAGE}>With image</option>
                      <option value={CardImage.NO_IMAGE}>All</option>
              </select>
          </div>

    </aside>
  );
};

export default CardsFilter;
