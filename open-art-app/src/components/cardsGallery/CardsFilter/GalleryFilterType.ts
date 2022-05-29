export enum CardsOrder {
    idAsc = "id",
    idDesc = "-id",
}

export enum CardsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_ORDER_TYPE = "SET_ORDER_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
}
type CardsFilterType = {
    page: number,
    limit: number,
    ordering: CardsOrder
    title?: string,
}

type SetPageAction = {
    type: CardsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: CardsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetOrderAction = {
    type: CardsFilterActionTypes.SET_ORDER_TYPE,
    payload: CardsOrder,
}

type SetTitleAction = {
    type: CardsFilterActionTypes.SET_TITLE_TYPE,
    payload: string,
}


export type CardsFilterAction = 
    SetPageAction 
    | SetLimitAction 
    | SetOrderAction 
    | SetTitleAction



export default CardsFilterType;
    