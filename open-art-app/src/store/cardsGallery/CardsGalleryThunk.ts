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
    "posts/fetchGallery",
    async ({ page, limit, title }, thunkApi) => {

        const skip = limit * (page - 1);
        let url = `?limit=${limit}&skip=${skip}`;

        if (title) {
            url += `&title=${title}`;
        }

    
        try {
            const response = await api.get(url);
            return {
                data: response.data.data as CardType[],
                info: response.data.info as ResponseInfoType,
            }
        } catch {
            return thunkApi.rejectWithValue("Server response error");
        }
    }
)