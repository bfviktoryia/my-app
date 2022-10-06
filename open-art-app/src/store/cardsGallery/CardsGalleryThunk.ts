import { createAsyncThunk } from '@reduxjs/toolkit';
import CardsFilterType from '../../components/cardsGallery/CardsFilter/GalleryFilterType';
import CardType from '../../components/types/CardType';
import ResponseInfoType from '../../components/types/ResponseInfoType';
import api from '../../helpers/api';


type DataResponseType = {
    info: ResponseInfoType,
    data: CardType[],
}
export const fetchCards = createAsyncThunk<DataResponseType, CardsFilterType, { rejectValue: string }>(
    "cards/fetchGallery",
    async ({ page, limit, title, q, has_image }, thunkApi) => {

        const skip = limit * (page - 1);

        let url = `?q=${q}&has_image=${has_image}&limit=${limit}&skip=${skip}`;

        if (title) {
            url += `&title=${title}`;
        }
       try {
            const response = await api.get(url);
                return {
                    data: response.data.data as CardType[],
                    info: response.data.info as ResponseInfoType,
                }
        } 

        catch {
            return thunkApi.rejectWithValue("Server response error");
        }
    }
)


export const fetchFavourites = createAsyncThunk<DataResponseType, undefined, { rejectValue: string }>(
    "cards/fetchFavourites",
    async (_,  thunkApi) => {
        
        let url = `?limit=${100}`;

        try {
            const response = await api.get(url);
            return {
                data: response.data.data as CardType[],
                info: response.data.info.total as ResponseInfoType,
            }
        } catch {
            return thunkApi.rejectWithValue("Server response error");
        }
    }
)