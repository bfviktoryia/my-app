import CardType from "../types/CardType";
import useDataRequest from "./useDataRequest";

const URL = 'https://openaccess-api.clevelandart.org/api/artworks/';

const useCardData = (id: string | undefined) => useDataRequest<CardType | undefined>(undefined, `${URL}/${id}`);

export default useCardData;