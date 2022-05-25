import CardType from "../../components/types/CardType";

export type CardStateType = {
    response?: CardType,
    loading: boolean,
    error: boolean,
    
}

export enum CardActionTypes {
    SET_DATA = "SET_DATA",
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
}

type setDataAction = {
    type: CardActionTypes.SET_DATA,
    payload?: CardType,
}

type setLoadingAction = {
    type: CardActionTypes.SET_LOADING,
    payload: boolean,
}

type setErrorAction = {
    type: CardActionTypes.SET_ERROR,
    payload: boolean,
}

export type CardActionType = 
    setDataAction
    | setLoadingAction
    | setErrorAction