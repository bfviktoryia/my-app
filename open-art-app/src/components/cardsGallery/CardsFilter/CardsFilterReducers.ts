import CardsFilterType, { CardsFilterAction, CardsFilterActionTypes } from "../CardsFilter/GalleryFilterType";
import { CardsWithImage } from '../../../enums/CardsWithImage';


export const initialState: CardsFilterType = {
    page: 1,
    limit: 10,
    q: "",
    has_image: CardsWithImage.HAS_IMAGE
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
        case CardsFilterActionTypes.SET_SEARCH_TYPE: {
            return { 
                ...state, 
                page: 1, 
                q: action.payload
                        }   
                }
        case CardsFilterActionTypes.SET_IMAGE_TYPE: {
            return { 
                ...state, 
                page: 1, 
                has_image: action.payload
                        }   
                }
        

        default: return state;
    }
  
}