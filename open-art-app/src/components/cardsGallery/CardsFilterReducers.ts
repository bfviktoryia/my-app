import CardsFilterType, { CardsFilterAction, CardsFilterActionTypes, CardsOrder } from "./GalleryFilterType";


export const initialState: CardsFilterType = {
    page: 1,
    limit: 10,
    ordering: CardsOrder.idAsc
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
        // case CardsFilterActionTypes.SET_ORDER_TYPE:
        //     return { 
        //         ...state, 
        //         ordering: action.payload
        //         }
        case CardsFilterActionTypes.SET_TITLE_TYPE: {
            // const numValue = action.payload;

            // if (isNaN(numValue)) {
            //     return state;
            // }
            // const title = numValue.length > 0 ? numValue : undefined;
            return { 
                ...state, 
                title: action.payload
                    }   
            }

        default: return state;
    }
  
}