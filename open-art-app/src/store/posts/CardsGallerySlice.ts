import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsOrder } from "../../components/cardsGallery/GalleryFilterType";
import CardType from "../../components/types/CardType";
import Storage from "../../helpers/storage";


export type StoreType = {
    data: CardType[],
    favourite: number[],
    ordering: CardsOrder
}

const initialState: StoreType = {
    data: [],
    favourite: Storage.getFromStorage("favourite", []),
    ordering: CardsOrder.idAsc
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

        },
        cardsOrder: (state: {ordering: CardsOrder} , {payload: value}: PayloadAction<CardsOrder>) => {
            // event.target.value as CardsOrder  
            // state.ordering = value as CardsOrder    
            if(state.ordering === CardsOrder.idAsc){
                state.ordering = CardsOrder.idDesc
            }
            else{state.ordering = CardsOrder.idAsc}
        }

      }
    }
);


    export const CardsGalleryReducer = CardsGallerySlice.reducer;

    export const CardsGalleryActions = {
        ...CardsGallerySlice.actions, 
    }
