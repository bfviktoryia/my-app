import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardType from "../../components/types/CardType";
import ResponseInfoType from "../../components/types/ResponseInfoType";
import Storage from "../../helpers/storage";
import { fetchCards, fetchFavourites } from "./CardsGalleryThunk";


export type StoreType = {
    data: CardType[],
    favourite: number[],
    info: ResponseInfoType
    loading: boolean,
    error: string | undefined,
    theme?: string
}

const initialState: StoreType = {
    data: [],
    favourite: Storage.getFromStorage("favourite", []),
    info: {total: 0},
    loading: true,
    error: undefined,
    theme: Storage.getFromStorage("theme", undefined)
}

const CardsGallerySlice = createSlice ({
    name: "gallery/cards",
    initialState,
    reducers: {
        toggleTheme: (state: any) => {
            state.theme = state.theme !== "dark" ? "dark" : "bright";
            document.body.dataset.theme = state.theme;
            Storage.setToStorage("theme", state.theme);
        },
        setPosts: (state: { data: CardType[]; }, { payload }: PayloadAction<CardType[]>) => {
            state.data = payload;
        },
        setPostsLoading: (state: { loading: boolean; }, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setPostsError: (state: { error: string | undefined; }, { payload }: PayloadAction<string | undefined>) => {
            state.error = payload;
        },

        
        favouriteCard: (state: { favourite: number[]; }, { payload: postId }: PayloadAction<number>) => {
            if (state.favourite.includes(postId)){
                state.favourite = state.favourite.filter((id: number) => id !== postId);
            }
            else {
                state.favourite.push(postId);
            }
            Storage.setToStorage("favourite", state.favourite);   

        },
    },

        extraReducers: builder => {
            builder.addCase(fetchCards.pending, (state, { payload }) => {
                state.loading = true;
                state.error = undefined;
                state.data = [];
    
            });
            builder.addCase(fetchCards.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
            builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload.data;
                state.info.total = payload.info.total;
    
            });

            builder.addCase(fetchFavourites.pending, (state, { payload }) => {
                state.loading = true;
                state.error = undefined;
                state.data = [];
    
            });
            builder.addCase(fetchFavourites.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
            builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload.data;
                state.info.total = payload.info.total;
    
            });


    }}
);


    export const CardsGalleryReducer = CardsGallerySlice.reducer;

    export const CardsGalleryActions = {
        ...CardsGallerySlice.actions,
        fetchCards,
        fetchFavourites,
            }
