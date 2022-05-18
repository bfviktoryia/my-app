import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardType from "../../components/types/CardType";
import Storage from "../../helpers/storage";


export type StoreType = {
    data: CardType[],
    favourite: number[],
}

const initialState: StoreType = {
    data: [],
    favourite: Storage.getFromStorage("favourite", []),
}

const CardsGallerySlice = createSlice ({
    name: "gallery/cards",
    initialState,
    reducers: {
        favouriteCard: (state: { favourite: number[]; }, { payload: postId }: PayloadAction<number>) => {
            if (state.favourite.includes(postId)){
                state.favourite = state.favourite.filter((id: number) => id !== postId);
            }
            else {
                state.favourite.push(postId);
            }
            Storage.setToStorage("favourite", state.favourite);   

        }
      },
   

    });



    export const CardsGalleryReducer = CardsGallerySlice.reducer;

    export const CardsGalleryActions = {
        ...CardsGallerySlice.actions,   
    }
