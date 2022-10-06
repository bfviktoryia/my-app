import axios from "axios";
import CardType from "../../components/types/CardType";
import actions from "../actions";
import { CardActionType, CardActionTypes } from "./types";

const URL = "https://openaccess-api.clevelandart.org/api/artworks/";

export const fetchCard = (id?: string) => async (dispatch: any) => {
    dispatch(actions.setPostLoading(true));
    dispatch(actions.setPostError(false));
    dispatch(actions.setPost(undefined));

    const url = `${URL}/${id}`;

    try {
        const response = await axios.get(url);
        dispatch(actions.setPost(response.data as CardType));
    } catch {
        dispatch(actions.setPostError(true));
    }

    dispatch(actions.setPostLoading(false));
}


export const setPost = (value?: CardType): CardActionType => ({
    type: CardActionTypes.SET_DATA,
    payload: value,
});

export const setPostLoading = (value: boolean): CardActionType => ({
    type: CardActionTypes.SET_LOADING,
    payload: value,
});

export const setPostError = (value: boolean): CardActionType => ({
    type: CardActionTypes.SET_ERROR,
    payload: value,
});

