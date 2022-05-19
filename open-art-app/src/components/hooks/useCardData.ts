import CardType from "../types/CardType";
import useDataRequest from "./useDataRequest";

const URL = 'https://openaccess-api.clevelandart.org/api/artworks/';

type CardsType = {
    data: CardType  
}

const useCardData = (id: string | undefined) => useDataRequest<CardsType | undefined>(undefined, `${URL}/${id}`);

export default useCardData;