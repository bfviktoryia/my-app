import { CardsFilterAction, CardsFilterActionTypes, CardsOrder } from "./GalleryFilterType";

export  const SetPage = (value: number): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_PAGE_TYPE, 
    payload: value 
  })

  export  const setLimit = (value: number): CardsFilterAction => ({
    type: CardsFilterActionTypes.SET_LIMIT_TYPE, 
    payload: value 
  })

  // export  const setOrder = (value: CardsOrder): CardsFilterAction => ({
  //   type: CardsFilterActionTypes.SET_ORDER_TYPE, 
  //   payload: value 
  // })

  export  const setTitle = (value: string): CardsFilterAction => ({
          type: CardsFilterActionTypes.SET_TITLE_TYPE, 
          payload: value,
  })

