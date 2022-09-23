import { CardsFilterAction, CardsFilterActionTypes } from "../CardsFilter/GalleryFilterType";
import { CardsWithImage } from '../../../enums/CardsWithImage';


  export  const SetPage = (value: number): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_PAGE_TYPE, 
    payload: value 
  })

  export  const setLimit = (value: number): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_LIMIT_TYPE, 
    payload: value 
  })

  // export  const setTitle = (value: string): CardsFilterAction => ({
  //         type: CardsFilterActionTypes.SET_TITLE_TYPE, 
  //         payload: value,
  // })
  export  const setSearchValue = (value: string): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_SEARCH_TYPE, 
    payload: value,
})

  export  const setOrderingByImage = (value: CardsWithImage): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_IMAGE_TYPE, 
    payload: value,
})
