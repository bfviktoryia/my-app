import CardsFilterType, { CardsFilterAction, CardsFilterActionTypes, CardsOrder } from "../CardsFilter/GalleryFilterType";


export const initialState: CardsFilterType = {
    page: 1,
    limit: 10,
    ordering: CardsOrder.idAsc,
    q: ""
}

export const CardsFilterReduser = (state: CardsFilterType, action: CardsFilterAction): CardsFilterType => {
    switch (action.type) {
        case CardsFilterActionTypes.SET_PAGE_TYPE:
            return { 
                ...state, 
                page: action.payload 
            }
        case CardsFilterActionTypes.SET_LIMIT_TYPE:
            return { 
                ...state, 
                page: 1, 
                limit: action.payload 
            }
        case CardsFilterActionTypes.SET_TITLE_TYPE: {
            return { 
                ...state, 
                title: action.payload
                    }   
            }
        case CardsFilterActionTypes.SET_SEARCH_TYPE: {
            return { 
                ...state, 
                q: action.payload
                        }   
                }

        default: return state;
    }
  
}