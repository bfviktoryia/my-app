import { CardStateType, CardActionType, CardActionTypes } from "./types";

const initialState: CardStateType = {
    response: undefined,
    loading: false,
    error: false,
}

export const cardReducer = (state = initialState, action: CardActionType): CardStateType => {
    switch(action.type) {
        case CardActionTypes.SET_DATA: {
            return {
                ...state,
                response: action.payload,
            }
        }
        case CardActionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case CardActionTypes.SET_LOADING: {
            return {
                ...state,
                error: action.payload,
            }
        }
        
        default: return state;
    }
}
