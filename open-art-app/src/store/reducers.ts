import { CardsGalleryReducer } from "./cardsGallery/CardsGallerySlice";
import { CardReducer } from "./cardPage/CardSlice";


const reducer = {
        cards: CardsGalleryReducer,
        card: CardReducer,
};

export default reducer;