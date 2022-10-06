import { CardsGalleryReducer } from "./cardsGallery/CardsGallerySlice";
import { cardReducer } from "./cardPage/reducer";



const reducer = {
        cards: CardsGalleryReducer,
        card: cardReducer,
};

export default reducer;