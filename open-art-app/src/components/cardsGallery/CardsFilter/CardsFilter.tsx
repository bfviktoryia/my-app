import React, { useState } from 'react';
import ResponseInfoType from '../../types/ResponseInfoType';
import { setLimit, setOrderingByImage, setSearchValue } from './CardsFilterActionCreators';
import CardsFilterType from './GalleryFilterType';
import { CardsWithImage } from '../../../enums/CardsWithImage';
import SearchField from '../../ui/SearchField';
import useTranslate from '../../hooks/useTranslate';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '../../ui/Button';


import "./CardsFilter.scss"

type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};

const CardsFilter: React.FC<CardType> = ({ state, dispatch}) => {

  const { t } = useTranslate();

  const [isFilterResponsive, setIsResponsive] = useState(false);
  const handleClick = () => {
      setIsResponsive(!isFilterResponsive);
  }
  const hideFilterResponsive = () => setIsResponsive(false);

  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(+event.target.value));
    hideFilterResponsive();
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
    hideFilterResponsive();
  }  


  return (
    <div className="cards-filter-wrap">
        <div className="filter-icon-wrap">
                        <Button 
                                style="transparent-lang"
                                onClick={handleClick}
                                >
                            <span className="filter-name">filters</span>
                            <FilterAltIcon className="filter-icon"/>
                        </Button>
        </div>  
             
        <div  className = {isFilterResponsive ? "cards-filter-list expanded_responsive" : "cards-filter-list expanded"}
         >
          <div className="select-limit-wrap">
              <select 
                  className="select-limit" 
                  id="select-limit"
                  value={state.limit.toString()}
                  onChange={handleChangeLimit}
                >
                      <option value={10}>{t("select.per.page.10")}</option>
                      <option value={30}>{t("select.per.page.30")}</option>
                      <option value={60}>{t("select.per.page.60")}</option>
              </select>
          </div>

          <div className="sort-image-wrap">
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
    </div>
  );
};

export default CardsFilter;
