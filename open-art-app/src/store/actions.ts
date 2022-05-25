import { CardsGalleryActions } from "./cardsGallery/CardsGallerySlice";
import * as cardActions from "./cardPage/actionCreators";



const actions = {
...CardsGalleryActions,
...cardActions

}

export default actions;