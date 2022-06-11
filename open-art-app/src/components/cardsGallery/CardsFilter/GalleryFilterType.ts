export enum CardImage {
    HAS_IMAGE = "1",
    NO_IMAGE = "0"
}

export enum CardsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_ORDER_TYPE = "SET_ORDER_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
    SET_SEARCH_TYPE = "SET_SEARCH_TYPE",
    SET_IMAGE_TYPE = "SET_IMAGE_TYPE",

}
type CardsFilterType = {
    page: number,
    limit: number,
    title?: string,
    q: string,
    has_image: CardImage,
}

type SetPageAction = {
    type: CardsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: CardsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetTitleAction = {
    type: CardsFilterActionTypes.SET_TITLE_TYPE,
    payload: string,
}

type SetSearchAction = {
    type: CardsFilterActionTypes.SET_SEARCH_TYPE,
    payload: string,
}

type SetHasImageAction = {
    type: CardsFilterActionTypes.SET_IMAGE_TYPE,
    payload: CardImage,
}



export type CardsFilterAction = 
    SetPageAction 
    | SetLimitAction 
    | SetTitleAction
    | SetSearchAction
    | SetHasImageAction



export default CardsFilterType;
    