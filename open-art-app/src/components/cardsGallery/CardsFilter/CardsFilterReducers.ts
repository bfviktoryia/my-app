import CardsFilterType, { CardImage, CardsFilterAction, CardsFilterActionTypes } from "../CardsFilter/GalleryFilterType";


export const initialState: CardsFilterType = {
    page: 1,
    limit: 10,
    q: "",
    has_image: CardImage.HAS_IMAGE
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
        case CardsFilterActionTypes.SET_IMAGE_TYPE: {
            return { 
                ...state, 
                has_image: action.payload
                        }   
                }
        

        default: return state;
    }
  
}