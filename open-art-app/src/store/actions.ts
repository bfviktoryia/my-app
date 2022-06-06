import { CardsGalleryActions } from "./cardsGallery/CardsGallerySlice";
import { CardActions } from "./cardPage/CardSlice";


const actions = {
...CardsGalleryActions,
...CardActions,

}

export default actions;